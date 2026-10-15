import React, { useState } from 'react';
import { JewelryPiece } from '../data/jewelryData';
import { useMediaUrl } from '../data/mediaStore';
import { Sparkles, Compass } from 'lucide-react';

interface JewelryVisualProps {
  piece: JewelryPiece;
  mode: 'cad' | 'real';
  className?: string;
  showOverlayDetails?: boolean;
  variant?: 'card' | 'theater' | 'modal' | 'circle';
}

export const JewelryVisual: React.FC<JewelryVisualProps> = ({
  piece,
  mode,
  className = '',
  variant = 'card'
}) => {
  const [directFailed, setDirectFailed] = useState(false);
  const [assetFailed, setAssetFailed] = useState(false);

  const targetFile = mode === 'cad' ? piece.cadFileName : piece.realFileName;

  // 1. Check in-memory persistent store from IndexedDB
  const customUrl = useMediaUrl(targetFile);

  // 2. Direct server URL candidates (from Vercel /public directory)
  const directServerUrl = `/${encodeURIComponent(targetFile)}`;
  const directServerUrlPlain = `/${targetFile}`;

  const activeSrc = customUrl 
    ? customUrl 
    : !directFailed 
    ? directServerUrl 
    : !assetFailed 
    ? directServerUrlPlain 
    : null;

  // Visual sizing & padding based on variant
  const imgPaddingClass = 
    variant === 'circle' 
      ? 'p-2 sm:p-2.5 object-contain max-h-full max-w-full' 
      : variant === 'theater'
      ? 'p-4 sm:p-8 object-contain'
      : 'p-3 sm:p-4 object-contain';

  return (
    <div className={`relative overflow-hidden w-full h-full select-none flex items-center justify-center ${className}`}>
      {activeSrc ? (
        <div className={`relative w-full h-full flex items-center justify-center ${
          mode === 'cad' ? 'bg-[#0B1524]' : 'bg-[#FAF4F2]'
        }`}>
          <img
            src={activeSrc}
            alt={`${piece.name}`}
            referrerPolicy="no-referrer"
            onError={() => {
              if (customUrl) {
                // Keep trying direct
              } else if (!directFailed) {
                setDirectFailed(true);
              } else {
                setAssetFailed(true);
              }
            }}
            className={`w-full h-full transition-transform duration-500 ${imgPaddingClass}`}
          />

          {/* Minimal non-technical CAD Badge */}
          {mode === 'cad' && variant !== 'circle' && (
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#0B1524]/90 border border-cyan-500/40 rounded text-[9px] font-mono text-cyan-300 pointer-events-none">
              CAD 3D
            </div>
          )}
        </div>
      ) : (
        /* High-luxury vector artwork fallback - No upload buttons, no technical filenames */
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-4 transition-colors ${
            mode === 'cad'
              ? 'bg-[#0B1524] text-cyan-300 border border-cyan-800/40'
              : 'bg-gradient-to-b from-[#FAF4F2] via-[#FDF9F8] to-[#F5ECE9] text-[#2D2232] border border-[#EED7D5]'
          }`}
        >
          {/* Subtle geometric jewel motif */}
          <div className="relative flex items-center justify-center">
            <div className={`rounded-full flex items-center justify-center ${
              variant === 'circle' ? 'w-16 h-16' : 'w-20 h-20'
            } ${
              mode === 'cad' 
                ? 'bg-cyan-950/60 border border-cyan-500/30 text-cyan-400' 
                : 'bg-white/80 border border-[#ECCECB] text-[#4A154B] shadow-xs'
            }`}>
              {mode === 'cad' ? (
                <Compass className="w-8 h-8 stroke-[1.5]" />
              ) : (
                <Sparkles className="w-8 h-8 text-[#C86A6A] stroke-[1.5]" />
              )}
            </div>
          </div>

          {variant !== 'circle' && (
            <div className="text-center mt-3 max-w-[85%]">
              <span className={`text-[9px] uppercase tracking-widest font-mono font-semibold block ${
                mode === 'cad' ? 'text-cyan-400/80' : 'text-[#7D6B82]'
              }`}>
                {mode === 'cad' ? 'Parametric CAD Model' : piece.categoryLabel}
              </span>
              <p className={`font-serif text-xs sm:text-sm font-semibold truncate mt-0.5 ${
                mode === 'cad' ? 'text-cyan-200' : 'text-[#2D2232]'
              }`}>
                {piece.name}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
