import React, { useRef, useState, useEffect } from 'react';
import { mediaStore } from '../data/mediaStore';
import { JEWELRY_COLLECTION, CRAFTSMANSHIP_VIDEOS } from '../data/jewelryData';
import { Upload, CheckCircle2, FileVideo, Image, Sparkles, X, FolderUp, RefreshCw } from 'lucide-react';

export const AtelierMediaSync: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [syncedCount, setSyncedCount] = useState(mediaStore.count());
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = mediaStore.subscribe(() => {
      setSyncedCount(mediaStore.count());
    });
    return unsub;
  }, []);

  const handleFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      mediaStore.registerFiles(files);
      setSyncedCount(mediaStore.count());
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // Build target list to show status of user's files
  const requiredFiles = [
    ...CRAFTSMANSHIP_VIDEOS.map(v => ({ name: v.fileName, type: 'video' })),
    ...JEWELRY_COLLECTION.flatMap(p => [
      { name: p.realFileName, type: 'real' },
      { name: p.cadFileName, type: 'cad' }
    ])
  ];

  return (
    <>
      {/* Prominent floating sync badge on bottom left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 hover:bg-white border border-[#4A154B]/40 hover:border-[#4A154B] text-[#4A154B] rounded-full text-xs font-sans font-semibold shadow-xl transition-all cursor-pointer backdrop-blur-md group"
        >
          <Upload className="w-4 h-4 text-[#C86A6A] group-hover:-translate-y-0.5 transition-transform" />
          <span>
            {syncedCount > 0 ? (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{syncedCount} Atelier Photos & Videos Active</span>
              </span>
            ) : (
              <span>Load Your Uploaded Photos & Videos</span>
            )}
          </span>
        </button>
      </div>

      {/* Media Linker Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          <div
            className="relative z-10 w-full max-w-2xl bg-white border border-[#EED7D5] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0DCDB] mb-5">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#4A154B] font-bold block">
                  ATELIER MEDIA LINKER
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#2D2232] mt-0.5">
                  Connect Your Real Jewels & CAD Designs
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#7D6B82] hover:text-[#2D2232] hover:bg-[#FAF2F0] rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Explanation Note */}
            <div className="p-4 bg-[#FAF4F2] border border-[#E9D2D0] rounded-xl text-xs text-[#5F4E64] font-sans leading-relaxed mb-6 space-y-1.5">
              <p>
                <strong>Why this step is needed:</strong> When files are uploaded in the AI Studio chat prompt, the platform keeps them in the chat window but does not automatically copy them into the web server's files.
              </p>
              <p>
                Drag & drop your files or folder below. They are saved directly into your browser's <strong>IndexedDB</strong>, so every Real photo, CAD design, and video appears on the website and stays permanently saved across page refreshes!
              </p>
            </div>

            {/* Hidden File Inputs */}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => handleFiles(e.target.files)}
              className="hidden"
            />
            <input
              ref={folderInputRef}
              type="file"
              // @ts-ignore
              webkitdirectory="true"
              directory="true"
              multiple
              onChange={(e) => handleFiles(e.target.files)}
              className="hidden"
            />

            {/* Drag and Drop Zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? 'border-[#4A154B] bg-[#FAF2F0] scale-[0.99]'
                  : 'border-[#E0C0C8] hover:border-[#4A154B] bg-[#FDF9F8] hover:bg-[#FAF4F2]'
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-14 h-14 rounded-full bg-white border border-[#E9D2D0] flex items-center justify-center mx-auto text-[#4A154B] mb-3 shadow-xs">
                <Upload className="w-6 h-6 text-[#C86A6A]" />
              </div>
              <h4 className="font-serif text-base font-semibold text-[#2D2232]">
                Drag & Drop Your Photos & Videos Folder Here
              </h4>
              <p className="text-xs text-[#7D6B82] mt-1 font-sans">
                or click anywhere in this box to select all files from your device
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4 pt-3 border-t border-[#F0DCDB]/60">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                  className="px-4 py-2 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Select Photos & Videos
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); folderInputRef.current?.click(); }}
                  className="px-4 py-2 bg-white hover:bg-[#FAF2F0] text-[#4A154B] border border-[#D8C4C2] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <FolderUp className="w-3.5 h-3.5" />
                  <span>Select Entire Folder</span>
                </button>
              </div>
            </div>

            {/* Synced Counter Banner */}
            {syncedCount > 0 ? (
              <div className="mt-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>{syncedCount} files synced & saved!</strong> All matched CAD wireframes and finished jewels are actively rendering.</span>
                </div>
              </div>
            ) : (
              <div className="mt-5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Waiting for files. Once selected, cards immediately display your exact photos.</span>
              </div>
            )}

            {/* Target Checklist Preview (Scrollable) */}
            <div className="mt-6 border-t border-[#F0DCDB] pt-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7D6B82] block mb-2">
                Target Filename Status ({requiredFiles.filter(f => mediaStore.hasFile(f.name)).length} of {requiredFiles.length} matched):
              </span>
              <div className="max-h-36 overflow-y-auto space-y-1 text-[11px] font-mono pr-2">
                {requiredFiles.slice(0, 15).map((f) => {
                  const isLoaded = mediaStore.hasFile(f.name);
                  return (
                    <div
                      key={f.name}
                      className={`flex items-center justify-between p-1.5 rounded ${
                        isLoaded ? 'bg-emerald-50 text-emerald-800' : 'bg-slate-50 text-slate-500'
                      }`}
                    >
                      <span className="truncate max-w-[400px]">{f.name}</span>
                      <span className="text-[10px] font-bold">
                        {isLoaded ? '✓ Active' : 'Waiting'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close & View Website
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
