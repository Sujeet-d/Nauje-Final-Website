import React, { useState } from 'react';
import { JewelryPiece } from '../data/jewelryData';
import { JewelryVisual } from './JewelryVisual';
import { 
  X, 
  Sparkles, 
  Compass, 
  Layers, 
  MessageCircle, 
  ShieldCheck, 
  FileCode, 
  Camera
} from 'lucide-react';

interface PieceDetailModalProps {
  piece: JewelryPiece | null;
  onClose: () => void;
  onInquire: (piece: JewelryPiece) => void;
}

export const PieceDetailModal: React.FC<PieceDetailModalProps> = ({
  piece,
  onClose,
  onInquire
}) => {
  const [activeTab, setActiveTab] = useState<'real' | 'cad'>('real');

  if (!piece) return null;

  const whatsappInquiryUrl = `https://wa.me/917802891435?text=${encodeURIComponent(
    `Hello Sujeet & Nausheen, I am interested in commissioning a bespoke variation of "${piece.name}".\n\nSpecifications:\n• Metal: ${piece.metal}\n• Gemstones: ${piece.primaryGem}\n• Dimensions: ${piece.dimensions}\n• Category: ${piece.categoryLabel}\n\nCould you please share quotation range and creation timeframe?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-4xl bg-white border border-[#EED7D5] rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0DCDB] bg-[#FAF4F2]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#4A154B] uppercase px-3 py-1 bg-white rounded-full border border-[#E9D2D0]">
              {piece.categoryLabel}
            </span>
            <span className="text-xs text-[#7D6B82]">· Masterpiece Atelier Archive</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#5F4E64] hover:text-[#2D2232] hover:bg-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Visual Showcase (7 cols) */}
          <div className="md:col-span-7 bg-[#FAF3F2] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#F0DCDB]">
            <div>
              {/* Tab Selector: Finished Jewel vs CAD Model */}
              <div className="inline-flex p-1 bg-white border border-[#EEDAD8] rounded-full mb-5 shadow-xs">
                <button
                  onClick={() => setActiveTab('real')}
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === 'real'
                      ? 'bg-[#4A154B] text-white shadow-xs'
                      : 'text-[#5F4E64] hover:text-[#2D2232]'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5 text-[#C86A6A]" />
                  <span>Finished Masterpiece</span>
                </button>
                <button
                  onClick={() => setActiveTab('cad')}
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === 'cad'
                      ? 'bg-[#0B1524] text-cyan-300 shadow-xs'
                      : 'text-[#5F4E64] hover:text-[#2D2232]'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>CAD 3D Blueprint</span>
                </button>
              </div>

              {/* Jewelry Visual Box - Clean, no technical filename badge */}
              <div className="relative aspect-square w-full rounded-xl border border-[#EEDAD8] overflow-hidden shadow-xs bg-white">
                <JewelryVisual
                  piece={piece}
                  mode={activeTab}
                  variant="card"
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-[11px] text-[#7D6B82] text-center mt-4">
              Switch between the parametric CAD model and the finished real-world creation.
            </p>
          </div>

          {/* Details & Inquiries (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#4A154B] bg-[#FAF2F0] px-3 py-1 rounded-full border border-[#E9D2D0]">
                  Bespoke Commission
                </span>
                <span className="text-xs font-mono text-[#7D6B82]">
                  BIS 916 HALLMARKED
                </span>
              </div>

              <h3 className="text-2xl font-serif text-[#2D2232] tracking-tight font-medium mt-3 mb-2">
                {piece.name}
              </h3>

              <p className="text-xs text-[#5F4E64] leading-relaxed font-sans mb-6">
                {piece.description}
              </p>

              {/* Specifications Matrix */}
              <div className="space-y-3 text-xs border-y border-[#F0DCDB] py-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#7D6B82]">Metal & Alloy:</span>
                  <span className="text-[#2D2232] font-semibold text-right">{piece.metal}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#7D6B82]">Primary Gemstones:</span>
                  <span className="text-[#4A154B] font-semibold text-right">{piece.primaryGem}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#7D6B82]">Atelier Technique:</span>
                  <span className="text-[#2D2232] font-semibold text-right">{piece.artisanTechnique}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#7D6B82]">Target Proportions:</span>
                  <span className="text-[#2D2232] font-mono text-right">{piece.dimensions}</span>
                </div>
              </div>

              {/* Craftsmanship Guarantee */}
              <div className="flex items-start gap-2.5 p-3 bg-[#FAF2F0] border border-[#E9D2D0] rounded-lg text-xs mb-6 text-[#5F4E64]">
                <ShieldCheck className="w-4 h-4 text-[#4A154B] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Individually cast and handset by Sujeet & Nausheen. Never mass-manufactured.
                </p>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Discuss on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onInquire(piece);
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#4A154B] hover:bg-[#370D38] text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F8D2D0]" />
                <span>Configure in Bespoke Inquiry</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
