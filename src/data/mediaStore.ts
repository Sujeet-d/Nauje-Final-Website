import { useState, useEffect } from 'react';

const DB_NAME = 'NaujeAtelierMediaDB';
const STORE_NAME = 'media_files';

// IndexedDB Helper for persistent storage of user's uploaded jewelry images and videos
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'name' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveFileToDB(name: string, file: Blob) {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ name, blob: file });
  } catch (err) {
    console.warn('Could not persist to IndexedDB:', err);
  }
}

async function loadAllFromDB(): Promise<Array<{ name: string; blob: Blob }>> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

function normalizeKey(str: string): string {
  return str.toLowerCase().replace(/[\s\-_]+/g, '').trim();
}

class AtelierMediaStore {
  private mediaMap: Map<string, string> = new Map();
  private listeners: Set<() => void> = new Set();
  private initialized = false;

  constructor() {
    this.init();
    this.setupWindowDrop();
  }

  private async init() {
    if (this.initialized) return;
    this.initialized = true;
    const records = await loadAllFromDB();
    records.forEach(({ name, blob }) => {
      const url = URL.createObjectURL(blob);
      this.registerUrl(name, url);
    });
    if (records.length > 0) {
      this.notify();
    }
  }

  // Allow silent drag-and-drop on the page during development without showing any upload buttons to visitors
  private setupWindowDrop() {
    if (typeof window === 'undefined') return;
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        this.registerFiles(e.dataTransfer.files);
      }
    });
  }

  private registerUrl(name: string, url: string) {
    this.mediaMap.set(name, url);
    this.mediaMap.set(name.toLowerCase(), url);
    this.mediaMap.set(encodeURIComponent(name), url);
    this.mediaMap.set(normalizeKey(name), url);

    const nameWithoutExt = name.replace(/\.[^/.]+$/, '');
    this.mediaMap.set(nameWithoutExt, url);
    this.mediaMap.set(nameWithoutExt.toLowerCase(), url);
    this.mediaMap.set(normalizeKey(nameWithoutExt), url);
  }

  public registerFile(file: File) {
    const url = URL.createObjectURL(file);
    const cleanName = file.name;
    this.registerUrl(cleanName, url);
    saveFileToDB(cleanName, file);
    this.notify();
  }

  public registerFiles(files: FileList | File[]) {
    Array.from(files).forEach((file) => {
      this.registerFile(file);
    });
  }

  public getUrl(filename: string): string | null {
    if (!filename) return null;
    return (
      this.mediaMap.get(filename) ||
      this.mediaMap.get(filename.toLowerCase()) ||
      this.mediaMap.get(encodeURIComponent(filename)) ||
      this.mediaMap.get(normalizeKey(filename)) ||
      this.mediaMap.get(filename.replace(/\.[^/.]+$/, '')) ||
      this.mediaMap.get(normalizeKey(filename.replace(/\.[^/.]+$/, ''))) ||
      null
    );
  }

  public hasFile(filename: string): boolean {
    return this.getUrl(filename) !== null;
  }

  public count(): number {
    return Math.floor(this.mediaMap.size / 6);
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((cb) => cb());
  }
}

export const mediaStore = new AtelierMediaStore();

export function useMediaUrl(filename: string): string | null {
  const [url, setUrl] = useState<string | null>(mediaStore.getUrl(filename));

  useEffect(() => {
    setUrl(mediaStore.getUrl(filename));
    const unsubscribe = mediaStore.subscribe(() => {
      setUrl(mediaStore.getUrl(filename));
    });
    return unsubscribe;
  }, [filename]);

  return url;
}
