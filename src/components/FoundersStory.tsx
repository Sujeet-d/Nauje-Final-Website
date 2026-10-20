import React from 'react';
import { MessageCircle, Heart, Compass, Sparkles, Feather, ShieldCheck, Award } from 'lucide-react';
import { FoundersMonogram } from './FoundersMonogram';
import { NaujeDiamondSymbol } from './NaujeDiamondSymbol';

interface FoundersStoryProps {
  onOpenConsultation: () => void;
}

export const FoundersStory: React.FC<FoundersStoryProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white text-[#2D2232] relative overflow-hidden border-b border-[#F0DCDB]">
      {/* Background radial blush glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FAF2F0] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Atelier Presentation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FAF3F2] border border-[#ECCECB] p-6 rounded-2xl shadow-lux">
              
              {/* Paper Texture & Plum Border Inner Frame */}
              <div className="relative aspect-[4/5] bg-gradient-to-b from-white via-[#FCF7F6] to-[#F8EFEB] border border-[#D9B8B6] rounded-xl p-8 flex flex-col justify-between overflow-hidden shadow-inner">
                
                {/* Subtle Floral Watermark Background */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #4A154B 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Top Seal */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <NaujeDiamondSymbol className="w-8 h-6.5" variant="standalone" glow={true} />
                    <span className="font-serif tracking-[0.22em] text-[#4A154B] text-sm uppercase font-medium">NAUJÉ</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7D6B82]">
                    ATELIER FOUNDERS
                  </span>
                </div>

                {/* Center Founders Monogram & Crest - S&N Haute Joaillerie Insignia */}
                <div className="relative z-10 text-center my-auto py-6 flex flex-col items-center">
                  <div className="mb-4">
                    <FoundersMonogram className="w-28 h-28 sm:w-32 sm:h-32" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#2D2232] tracking-wide font-medium">
                    Sujeet & Nausheen
                  </h3>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#C86A6A] font-sans font-bold mt-1">
                    Founders & Creative Directors
                  </div>
                  <div className="text-xs text-[#7D6B82] font-sans mt-2">
                    Bespoke Jewellery Masters & Curators
                  </div>
                </div>

                {/* Bottom Signature Badge */}
                <div className="relative z-10 pt-4 border-t border-[#EED7D5] flex items-center justify-between text-[11px] text-[#7D6B82]">
                  <div className="flex items-center gap-1.5 text-[#4A154B] font-medium">
                    <Feather className="w-3.5 h-3.5 text-[#C86A6A]" />
                    <span>Every Commission Hand-Curated</span>
                  </div>
                  <span className="font-mono text-[#4A154B]">BIS 916 CERTIFIED</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF2F0] border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold rounded-full">
              <NaujeDiamondSymbol className="w-3.5 h-3 shrink-0" glow={true} />
              <span>The Atelier Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D2232] tracking-tight leading-[1.15]">
              Jewellery is not retail inventory.<br />
              <span className="italic text-[#C86A6A] font-light">It is your sovereign identity in solid gold.</span>
            </h2>

            <div className="space-y-4 text-sm text-[#5F4E64] font-sans leading-relaxed">
              <p>
                Founded by <strong>Sujeet & Nausheen</strong>, <strong>NAUJÉ Design & Jewels</strong> was born out of a rebellion against cookie-cutter luxury showrooms. In an era of mass casting and hollowed compromises, we created a private atelier dedicated solely to bespoke commissions.
              </p>
              <p>
                Whether you walk into our dialogue with a napkin sketch, family heirloom gemstones passed down through generations, or a vision for a royal wedding choker, we walk with you through every stage: sub-millimeter 3D Rhino CAD drafting, authentic lost-wax gold casting, and microscope-guided diamond setting.
              </p>
              <p>
                No two creations from <strong>NAUJÉ Design & Jewels</strong> are ever identical. Every curve is balanced to your anatomy, and every gemstone is personally sourced and hallmarked under BIS standards.
              </p>
            </div>

            {/* Founders' Personal Pledge List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0DCDB] text-xs">
              <div className="flex items-start gap-3 p-3.5 bg-[#FAF2F0] rounded-lg border border-[#EEDAD8]">
                <ShieldCheck className="w-4 h-4 text-[#4A154B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#2D2232]">Zero Mass Production</h4>
                  <p className="text-[11px] text-[#7D6B82] mt-0.5">We craft strictly limited bespoke pieces per year with total devotion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF2F0] rounded-lg border border-[#EEDAD8]">
                <Award className="w-4 h-4 text-[#4A154B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#2D2232]">Direct Founder Dialogue</h4>
                  <p className="text-[11px] text-[#7D6B82] mt-0.5">You communicate directly with Sujeet & Nausheen — no middlemen or sales reps.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/917802891435?text=Hello%20Sujeet%20%26%20Nausheen%2C%20I%20would%20love%20to%20consult%20on%20a%20bespoke%20jewellery%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Discuss Ideas on WhatsApp</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#FAF2F0] text-[#2D2232] border border-[#D8C4C2] rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>Request Bespoke Quotation</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
