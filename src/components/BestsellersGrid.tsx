import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Maximize2
} from 'lucide-react';
import { JewelryPiece, JEWELRY_COLLECTION } from '../data/jewelryData';
import { JewelryVisual } from './JewelryVisual';

interface BestsellersGridProps {
  onSelectPieceForInquiry: (piece: JewelryPiece) => void;
  onOpenDetailsModal: (piece: JewelryPiece) => void;
  onViewAllProducts: () => void;
}

export const BestsellersGrid: React.FC<BestsellersGridProps> = ({
  onSelectPieceForInquiry,
  onOpenDetailsModal,
  onViewAllProducts
}) => {
  // 4 curated bestsellers
  const bestsellers = [
    {
      ...JEWELRY_COLLECTION.find(p => p.id === 'peacock-meenakari-choker') || JEWELRY_COLLECTION[1],
      displayTitle: 'Royal Heritage Peacock Choker'
    },
    {
      ...JEWELRY_COLLECTION.find(p => p.id === 'royal-crescent-chandbali') || JEWELRY_COLLECTION[2],
      displayTitle: 'The Royal Crescent Chandbali Earrings'
    },
    {
      ...JEWELRY_COLLECTION.find(p => p.id === 'sovereign-baroque-aquamarine-ring') || JEWELRY_COLLECTION[0],
      displayTitle: 'The Sovereign Baroque Aquamarine Ring'
    },
    {
      ...JEWELRY_COLLECTION.find(p => p.id === 'art-deco-hexagonal-bracelet') || JEWELRY_COLLECTION[3],
      displayTitle: 'The Art Deco Hexagonal Link Bracelet'
    }
  ];

  return (
    <section id="bestsellers" className="py-16 sm:py-20 bg-white border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#4A154B] uppercase font-bold block mb-1">
              OUR BESTSELLERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D2232] tracking-tight">
              Handpicked For You
            </h2>
          </div>

          <button
            onClick={onViewAllProducts}
            className="flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest uppercase text-[#2D2232] hover:text-[#4A154B] transition-colors cursor-pointer group"
          >
            <span>VIEW ALL MASTERPIECES</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Bestseller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestsellers.map((piece) => {
            return (
              <div
                key={piece.id}
                onClick={() => onOpenDetailsModal(piece)}
                className="group bg-white border border-[#F2E4E2] rounded-lg overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container - Clean without heart icon */}
                <div className="relative aspect-square w-full bg-[#FAF4F2] overflow-hidden flex items-center justify-center border-b border-[#F5EAE8]">
                  
                  {/* Clean Jewellery Visual Container with consistent dimensions */}
                  <div className="w-full h-full p-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <JewelryVisual
                      piece={piece}
                      mode="real"
                      variant="card"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-x-0 bottom-0 py-2.5 bg-[#4A154B]/95 text-white text-[11px] font-sans font-semibold uppercase tracking-wider text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 pointer-events-none">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect CAD vs Reality</span>
                  </div>
                </div>

                {/* Card Details: Clean Title, Gemstone/Metal, Badge, No Stars, No Filenames, No Prices */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Item Title in Serif */}
                    <h3 className="font-serif text-base text-[#2D2232] font-semibold leading-snug line-clamp-1 group-hover:text-[#4A154B] transition-colors">
                      {piece.displayTitle || piece.name}
                    </h3>

                    {/* Secondary Subtitle / Gemstone */}
                    <p className="text-[11px] text-[#7D6B82] font-sans mt-1 line-clamp-1">
                      {piece.metal.split('&')[0]} · {piece.primaryGem}
                    </p>
                  </div>

                  {/* Atelier Badge */}
                  <div className="pt-3 mt-3 border-t border-[#F8EFEF] flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#4A154B] bg-[#FAF2F0] px-2.5 py-1 rounded">
                      Bespoke Masterpiece
                    </span>
                    <span className="text-[10px] font-mono text-[#7D6B82]">
                      BIS 916
                    </span>
                  </div>

                  {/* Direct Inquiry Action */}
                  <div className="pt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPieceForInquiry(piece);
                      }}
                      className="w-full py-2 bg-[#FAF2F0] hover:bg-[#4A154B] text-[#4A154B] hover:text-white rounded border border-[#EAD4D2] text-[11px] font-sans font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Piece</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
