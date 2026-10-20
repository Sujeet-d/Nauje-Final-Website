import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Compass, 
  Truck
} from 'lucide-react';
import { JEWELRY_COLLECTION } from '../data/jewelryData';
import { JewelryVisual } from './JewelryVisual';
import { NaujeDiamondSymbol } from './NaujeDiamondSymbol';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCollections: () => void;
  onExploreCad: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation,
  onExploreCollections,
  onExploreCad
}) => {
  // Flagship royal masterpiece from user's uploaded assets: Peacock Meenakari Choker
  const flagshipPiece = JEWELRY_COLLECTION.find(p => p.id === 'peacock-meenakari-choker') || JEWELRY_COLLECTION[1];

  return (
    <section className="relative bg-gradient-to-r from-[#FAF2F0] via-[#FDF9F8] to-[#F8EBE9] overflow-hidden border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px] lg:min-h-[640px] py-12 lg:py-0">
          
          {/* Left Column: Editorial Headline & Actions (6 cols) */}
          <div className="lg:col-span-6 lg:pr-6 space-y-6 sm:space-y-8 z-10">
            {/* Kicker Tag with Official Diamond Emblem */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-xs border border-[#E9D2D0] rounded-full shadow-2xs">
              <NaujeDiamondSymbol className="w-4 h-3.5" glow={true} />
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-[#4A154B] uppercase font-bold">
                NAUJÉ DESIGN & JEWELS · CRAFTED TO CELEBRATE YOU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-serif font-light text-[#2D2232] tracking-tight leading-[1.08]">
              Timeless Elegance.{' '}
              <span className="block text-[#C86A6A] font-serif italic mt-1.5 font-light">
                Forever You.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed max-w-lg">
              Welcome to <strong>NAUJÉ Design & Jewels</strong>. Discover exquisite bespoke jewellery that blends royal heritage craftsmanship with modern 3D CAD precision, handcrafted by Sujeet & Nausheen.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>EXPLORE COLLECTIONS</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>

              <button
                onClick={onExploreCad}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF2F0] text-[#4A154B] border border-[#E0C0C8] rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#C86A6A]" />
                <span>EXPLORE CAD VS REAL</span>
              </button>
            </div>

            {/* 3 Horizontal Trust Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8 border-t border-[#F0DCDB]/80 text-[#3B2C3E]">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF2F0] border border-[#E9D2D0] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#4A154B]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#2D2232] leading-tight">Certified</div>
                  <div className="text-[10px] text-[#7D6B82] leading-tight">BIS Hallmarked</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF2F0] border border-[#E9D2D0] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#4A154B]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#2D2232] leading-tight">100% Bespoke</div>
                  <div className="text-[10px] text-[#7D6B82] leading-tight">Handcrafted Art</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF2F0] border border-[#E9D2D0] flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-[#4A154B]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#2D2232] leading-tight">Complimentary</div>
                  <div className="text-[10px] text-[#7D6B82] leading-tight">Insured Courier</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Jewel (6 cols) matching uploaded assets */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px]">
            {/* Subtle Rose Light Backdrop Glow */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-gradient-to-tr from-[#F4DCD9]/80 to-[#FAF0EE]/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white">
              {/* Actual matching uploaded piece visual */}
              <div className="w-full h-full p-4 sm:p-6 flex items-center justify-center">
                <JewelryVisual
                  piece={flagshipPiece}
                  mode="real"
                  variant="theater"
                  priority={true}
                  className="w-full h-full"
                />
              </div>

              {/* Floating Signature Suite Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#F0DCDB] shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#7D6B82]">
                    Signature Haute Suite
                  </div>
                  <div className="font-serif text-sm font-semibold text-[#2D2232]">
                    {flagshipPiece.name}
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 bg-[#4A154B] text-white text-[11px] font-sans font-medium rounded-full hover:bg-[#370D38] transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
