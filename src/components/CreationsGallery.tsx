import React, { useState, useEffect } from 'react';
import { JewelryPiece, JEWELRY_COLLECTION } from '../data/jewelryData';
import { JewelryVisual } from './JewelryVisual';
import { 
  MessageCircle, 
  Search, 
  Maximize2,
  ChevronDown
} from 'lucide-react';

interface CreationsGalleryProps {
  onSelectPieceForInquiry: (piece: JewelryPiece) => void;
  onOpenDetailsModal: (piece: JewelryPiece) => void;
}

const INITIAL_ITEMS = 8;

export const CreationsGallery: React.FC<CreationsGalleryProps> = ({
  onSelectPieceForInquiry,
  onOpenDetailsModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_ITEMS);

  useEffect(() => {
    setVisibleCount(INITIAL_ITEMS);
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Masterpieces', count: JEWELRY_COLLECTION.length },
    { id: 'necklaces', label: 'Necklaces & Chokers', count: JEWELRY_COLLECTION.filter(p => p.category === 'necklaces').length },
    { id: 'earrings', label: 'Earrings & Chandbalis', count: JEWELRY_COLLECTION.filter(p => p.category === 'earrings').length },
    { id: 'rings', label: 'Rings & Solitaires', count: JEWELRY_COLLECTION.filter(p => p.category === 'rings').length },
    { id: 'bracelets', label: 'Bracelets & Brooches', count: JEWELRY_COLLECTION.filter(p => p.category === 'bracelets' || p.category === 'brooches').length }
  ];

  const filteredPieces = JEWELRY_COLLECTION.filter((piece) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'bracelets'
        ? piece.category === 'bracelets' || piece.category === 'brooches'
        : piece.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : piece.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          piece.primaryGem.toLowerCase().includes(searchQuery.toLowerCase()) ||
          piece.metal.toLowerCase().includes(searchQuery.toLowerCase()) ||
          piece.artisanTechnique.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="creations" className="py-20 bg-[#FCF8F7] text-[#2D2232] border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#4A154B] uppercase font-bold block mb-1">
              ARCHIVAL COLLECTION ({JEWELRY_COLLECTION.length} MASTERPIECES)
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D2232] tracking-tight">
              Bespoke Jewellery Archive
            </h2>
            <p className="text-xs sm:text-sm text-[#5F4E64] font-sans mt-1 max-w-xl">
              Every design is sculpted in parametric 3D CAD before casting. Click the <strong>CAD / Real</strong> toggle on any creation to inspect both the raw engineering wireframe and finished piece.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[#7D6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by gemstone, metal, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8D2CF] rounded-full text-xs text-[#2D2232] placeholder-[#9D8B9F] outline-none focus:border-[#4A154B] shadow-xs"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#4A154B] text-white font-semibold shadow-xs'
                    : 'bg-white text-[#5F4E64] hover:bg-[#FAF2F0] border border-[#E8D2CF]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAF2F0] text-[#7D6B82]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Archival Pieces matching 4-card format with progressive loading */}
        {filteredPieces.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredPieces.slice(0, visibleCount).map((piece) => {
                return (
                  <div
                    key={piece.id}
                    onClick={() => onOpenDetailsModal(piece)}
                    className="group bg-white border border-[#F2E4E2] rounded-lg overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Top Image Container with CAD Toggle - No Heart Icon */}
                    <div className="relative aspect-square w-full bg-[#FAF4F2] overflow-hidden flex items-center justify-center border-b border-[#F5EAE8]">
                      
                      {/* Clean Visual Container with Consistent Dimensions */}
                      <div className="w-full h-full p-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <JewelryVisual
                          piece={piece}
                          mode="real"
                          variant="card"
                          className="w-full h-full"
                        />
                      </div>

                      {/* Quick View Hover Strip */}
                      <div className="absolute inset-x-0 bottom-0 py-2.5 bg-[#4A154B]/95 text-white text-[11px] font-sans font-semibold uppercase tracking-wider text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1.5 pointer-events-none">
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect Piece</span>
                      </div>
                    </div>

                    {/* Card Details: Clean Title, Gemstones, Technique, No Filenames, No Stars, No Prices */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-[#7D6B82] font-mono uppercase tracking-wider mb-1">
                          <span>{piece.categoryLabel}</span>
                          <span>{piece.dimensions.split(' ')[0]}</span>
                        </div>

                        <h3 className="font-serif text-base text-[#2D2232] font-semibold leading-snug line-clamp-1 group-hover:text-[#4A154B] transition-colors">
                          {piece.name}
                        </h3>

                        <p className="text-[11px] text-[#5F4E64] font-sans mt-1 line-clamp-1">
                          {piece.metal.split('&')[0]} · {piece.primaryGem}
                        </p>
                      </div>

                      {/* Atelier Badge */}
                      <div className="pt-3 mt-3 border-t border-[#F8EFEF] flex items-center justify-between">
                        <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#4A154B] bg-[#FAF2F0] px-2.5 py-1 rounded">
                          Bespoke Creation
                        </span>
                        <span className="text-[10px] font-mono text-[#7D6B82]">
                          BIS 916
                        </span>
                      </div>

                      {/* Action Button */}
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

            {/* Incremental Load Controls */}
            {visibleCount < filteredPieces.length && (
              <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 8, filteredPieces.length))}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span>Load More Masterpieces ({Math.min(visibleCount, filteredPieces.length)} of {filteredPieces.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVisibleCount(filteredPieces.length)}
                  className="px-6 py-3.5 bg-white hover:bg-[#FAF2F0] text-[#4A154B] border border-[#E0C0C8] rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs"
                >
                  View All ({filteredPieces.length})
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#F0DCDB]">
            <p className="text-[#5F4E64] text-sm">No masterworks found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-[#4A154B] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
