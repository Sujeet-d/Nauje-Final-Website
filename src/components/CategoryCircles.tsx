import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { JewelryVisual } from './JewelryVisual';
import { JEWELRY_COLLECTION } from '../data/jewelryData';

interface CategoryCirclesProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export const CategoryCircles: React.FC<CategoryCirclesProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  // Curated category representatives from user's collection
  const categories = [
    {
      id: 'necklaces',
      title: 'NECKLACES',
      subtitle: 'Explore Now',
      piece: JEWELRY_COLLECTION.find(p => p.id === 'peacock-meenakari-choker') || JEWELRY_COLLECTION[1]
    },
    {
      id: 'earrings',
      title: 'EARRINGS',
      subtitle: 'Explore Now',
      piece: JEWELRY_COLLECTION.find(p => p.id === 'royal-crescent-chandbali') || JEWELRY_COLLECTION[2]
    },
    {
      id: 'rings',
      title: 'RINGS',
      subtitle: 'Explore Now',
      piece: JEWELRY_COLLECTION.find(p => p.id === 'sovereign-baroque-aquamarine-ring') || JEWELRY_COLLECTION[0]
    },
    {
      id: 'bracelets',
      title: 'BRACELETS',
      subtitle: 'Explore Now',
      piece: JEWELRY_COLLECTION.find(p => p.id === 'art-deco-hexagonal-bracelet') || JEWELRY_COLLECTION[3]
    },
    {
      id: 'brooches',
      title: 'PENDANTS',
      subtitle: 'Explore Now',
      piece: JEWELRY_COLLECTION.find(p => p.id === 'royal-mayura-peacock-brooch') || JEWELRY_COLLECTION[8]
    }
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-white border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#4A154B] uppercase font-bold block mb-1">
              SHOP BY CATEGORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D2232] tracking-tight">
              Find Your Perfect Piece
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Category"
              className="w-9 h-9 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] flex items-center justify-center text-[#554659] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Category"
              className="w-9 h-9 rounded-full border border-[#D8C4C2] hover:border-[#4A154B] hover:text-[#4A154B] flex items-center justify-center text-[#554659] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 5 Circular Category Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Circular Frame with soft pink ring border */}
                <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-2 border-[#4A154B] shadow-md scale-105'
                    : 'border-2 border-[#ECCECB] hover:border-[#4A154B]'
                }`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF2F0] relative flex items-center justify-center shadow-inner">
                    {/* Visual: Centered neatly inside circular frame without distortion */}
                    <JewelryVisual
                      piece={cat.piece}
                      mode="real"
                      variant="circle"
                      className="w-full h-full group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-[#4A154B]/0 group-hover:bg-[#4A154B]/10 rounded-full transition-colors pointer-events-none" />
                  </div>
                </div>

                {/* Title & Explore Now text */}
                <h3 className={`mt-4 font-serif text-sm sm:text-base tracking-widest font-semibold uppercase transition-colors ${
                  isSelected ? 'text-[#4A154B]' : 'text-[#2D2232] group-hover:text-[#4A154B]'
                }`}>
                  {cat.title}
                </h3>

                <span className="text-[11px] text-[#7D6B82] group-hover:text-[#4A154B] mt-0.5 transition-colors font-sans flex items-center gap-1">
                  <span>{cat.subtitle}</span>
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
