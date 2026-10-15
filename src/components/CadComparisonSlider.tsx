import React, { useState, useRef, useCallback } from 'react';
import { JewelryPiece, JEWELRY_COLLECTION } from '../data/jewelryData';
import { JewelryVisual } from './JewelryVisual';
import { 
  MoveHorizontal, 
  Compass, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft,
  Camera,
  FileCode,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

interface CadComparisonSliderProps {
  onSelectPieceForInquiry: (piece: JewelryPiece) => void;
  onOpenDetailsModal: (piece: JewelryPiece) => void;
}

export const CadComparisonSlider: React.FC<CadComparisonSliderProps> = ({
  onSelectPieceForInquiry,
  onOpenDetailsModal
}) => {
  // Top 10 archival showpieces for comparison
  const showpieces = JEWELRY_COLLECTION.slice(0, 10);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(0);
  const currentPiece = showpieces[selectedPieceIndex];

  // Slider position: 0 (all CAD) to 100 (all Real)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectorScrollRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const scrollActiveButtonIntoView = (idx: number) => {
    if (!selectorScrollRef.current) return;
    const container = selectorScrollRef.current;
    const buttons = container.querySelectorAll('button');
    if (idx === 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (buttons[idx]) {
      const btn = buttons[idx] as HTMLElement;
      const left = btn.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  };

  const handleSelectPiece = (idx: number) => {
    setSelectedPieceIndex(idx);
    setSliderPos(50);
    scrollActiveButtonIntoView(idx);
  };

  const nextPiece = () => {
    const nextIdx = (selectedPieceIndex + 1) % showpieces.length;
    setSelectedPieceIndex(nextIdx);
    setSliderPos(50);
    scrollActiveButtonIntoView(nextIdx);
  };

  const prevPiece = () => {
    const prevIdx = (selectedPieceIndex - 1 + showpieces.length) % showpieces.length;
    setSelectedPieceIndex(prevIdx);
    setSliderPos(50);
    scrollActiveButtonIntoView(prevIdx);
  };

  return (
    <section id="cad-comparison" className="relative py-20 bg-gradient-to-b from-white via-[#FAF4F2] to-white text-[#2D2232] overflow-hidden border-b border-[#F0DCDB]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F8D2D0]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF2F0] border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold mb-3 rounded-full">
            <Compass className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>Interactive Bespoke Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#2D2232] mb-3">
            From 3D CAD Blueprint to Sovereign Reality
          </h2>

          <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed">
            Drag the comparison scrubber below to experience how Sujeet & Nausheen transform sub-millimeter 3D CAD architecture into radiant hallmarked fine jewellery.
          </p>
        </div>

        {/* Showpiece Selector Carousel - Fully visible with start padding & scroll controls */}
        <div className="relative mb-8 max-w-5xl mx-auto flex items-center gap-2">
          <button
            onClick={() => {
              if (selectorScrollRef.current) {
                selectorScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll left"
            className="hidden sm:flex w-8 h-8 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] items-center justify-center text-[#554659] transition-colors shrink-0 bg-white shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div 
            ref={selectorScrollRef}
            className="flex items-center gap-2.5 overflow-x-auto px-4 py-2 scrollbar-none w-full scroll-smooth justify-start"
          >
            {showpieces.map((piece, idx) => (
              <button
                key={piece.id}
                onClick={() => handleSelectPiece(idx)}
                className={`px-4 py-2 text-xs font-sans tracking-wide uppercase whitespace-nowrap transition-all rounded-full cursor-pointer shrink-0 ${
                  selectedPieceIndex === idx
                    ? 'bg-[#4A154B] text-white font-semibold shadow-md ring-2 ring-[#4A154B]/20'
                    : 'bg-white text-[#5F4E64] hover:bg-[#FAF2F0] border border-[#E9D2D0]'
                }`}
              >
                <span className="font-medium">{piece.categoryLabel}:</span>{' '}
                <span className="font-normal">{piece.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              if (selectorScrollRef.current) {
                selectorScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll right"
            className="hidden sm:flex w-8 h-8 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] items-center justify-center text-[#554659] transition-colors shrink-0 bg-white shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Comparison Theater Card */}
        <div className="bg-white border border-[#EED7D5] rounded-2xl shadow-xl p-4 sm:p-8">
          
          {/* Top Bar inside Theater */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#F0DCDB] gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#4A154B] uppercase block">
                {currentPiece.categoryLabel} · Masterpiece 0{selectedPieceIndex + 1} of {showpieces.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2D2232] mt-0.5">
                {currentPiece.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold font-sans text-[#4A154B] px-3.5 py-1.5 bg-[#FAF2F0] rounded-full border border-[#E9D2D0]">
                Bespoke Atelier Commission
              </span>

              {/* Prev / Next Showpiece */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevPiece}
                  aria-label="Previous showpiece"
                  className="w-9 h-9 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] flex items-center justify-center text-[#554659] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPiece}
                  aria-label="Next showpiece"
                  className="w-9 h-9 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] flex items-center justify-center text-[#554659] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Split Draggable Theater Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/3] sm:aspect-[16/10] w-full max-h-[560px] rounded-xl overflow-hidden border border-[#EED7D5] select-none cursor-ew-resize bg-[#FAF4F2] shadow-inner"
          >
            {/* Layer 1: Left Background = CAD Model Wireframe */}
            <div className="absolute inset-0 bg-[#0B1524]">
              <JewelryVisual
                piece={currentPiece}
                mode="cad"
                variant="theater"
                className="w-full h-full"
              />
              
              {/* CAD Label */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#0B1524]/90 backdrop-blur-sm border border-cyan-500/40 rounded-full text-cyan-300 text-xs font-mono flex items-center gap-1.5 pointer-events-none">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>Parametric CAD 3D Blueprint</span>
              </div>
            </div>

            {/* Layer 2: Right Foreground = Finished Real Jewellery with exact clipping */}
            <div
              className="absolute inset-0 bg-[#FAF4F2]"
              style={{
                clipPath: `polygon(${sliderPos}% 0%, 100% 0%, 100% 100%, ${sliderPos}% 100%)`
              }}
            >
              <JewelryVisual
                piece={currentPiece}
                mode="real"
                variant="theater"
                className="w-full h-full"
              />

              {/* Real Photo Label */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-[#E9D2D0] rounded-full text-[#4A154B] text-xs font-sans font-semibold flex items-center gap-1.5 shadow-xs pointer-events-none">
                <Camera className="w-3.5 h-3.5 text-[#C86A6A]" />
                <span>Finished Masterpiece Photograph</span>
              </div>
            </div>

            {/* Draggable Divider Scrubber Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#4A154B] pointer-events-none shadow-2xl z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#4A154B] text-white border-2 border-white shadow-xl flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Smooth Range Slider Controller for touch/mobile accessibility */}
          <div className="mt-6 px-2 sm:px-6 flex items-center gap-4 text-xs font-sans text-[#7D6B82]">
            <span className="font-mono text-cyan-800 font-semibold shrink-0">100% CAD</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="CAD to Real comparison slider position"
              className="w-full accent-[#4A154B] cursor-pointer h-2 bg-[#EEDAD8] rounded-lg"
            />
            <span className="font-sans text-[#4A154B] font-semibold shrink-0">100% REAL</span>
          </div>

          {/* Bottom Piece Specifications & Inquiries */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#F0DCDB] text-xs text-[#5F4E64]">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#7D6B82] block">Metal & Alloy</span>
              <p className="font-semibold text-[#2D2232]">{currentPiece.metal}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#7D6B82] block">Primary Gemstone</span>
              <p className="font-semibold text-[#4A154B]">{currentPiece.primaryGem}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#7D6B82] block">Atelier Technique</span>
              <p className="font-semibold text-[#2D2232]">{currentPiece.artisanTechnique}</p>
            </div>
            <div className="flex items-center gap-2 pt-2 md:pt-0">
              <button
                onClick={() => onSelectPieceForInquiry(currentPiece)}
                className="w-full py-2.5 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire Piece</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
