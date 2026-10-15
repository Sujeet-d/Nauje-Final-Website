import React from 'react';
import { Award, RotateCcw, ShieldCheck, Headphones, MessageCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#4A154B] text-white py-10 sm:py-12 border-y border-[#380E39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Item 1: Certified Jewellery */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
              <Award className="w-6 h-6 text-[#F8D2D0]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                CERTIFIED JEWELLERY
              </h3>
              <p className="text-[11px] text-[#F3D6D4] font-sans mt-0.5 leading-snug">
                BIS Hallmarked<br />Authentic & Trusted
              </p>
            </div>
          </div>

          {/* Item 2: Bespoke Craft */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
              <RotateCcw className="w-6 h-6 text-[#F8D2D0]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                BESPOKE CRAFT
              </h3>
              <p className="text-[11px] text-[#F3D6D4] font-sans mt-0.5 leading-snug">
                Handcrafted Precision<br />Sujeet & Nausheen
              </p>
            </div>
          </div>

          {/* Item 3: Lifetime Exchange */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
              <ShieldCheck className="w-6 h-6 text-[#F8D2D0]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                LIFETIME EXCHANGE
              </h3>
              <p className="text-[11px] text-[#F3D6D4] font-sans mt-0.5 leading-snug">
                Exchange or Upgrade<br />Anytime with Hallmark
              </p>
            </div>
          </div>

          {/* Item 4: Customer Support */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
              <Headphones className="w-6 h-6 text-[#F8D2D0]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                CUSTOMER SUPPORT
              </h3>
              <a
                href="https://wa.me/917802891435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#F3D6D4] hover:text-white font-sans mt-0.5 leading-snug block hover:underline"
              >
                We're here to help<br />
                <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                  <MessageCircle className="w-3 h-3 fill-current text-[#25D366]" />
                  +91 7802891435
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
