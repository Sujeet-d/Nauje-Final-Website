import React from 'react';
import { PenTool, Compass, Flame, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

interface BespokeProcessProps {
  onOpenConsultation: () => void;
}

export const BespokeProcess: React.FC<BespokeProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Personal Dialogue',
      subtitle: 'With Founders Sujeet & Nausheen',
      icon: PenTool,
      description: 'Your commission begins with an unhurried conversation. We examine your design references, sentimental heirloom gems, stylistic silhouettes, and comfort preferences to conceptualize initial proportions.',
      highlight: 'Complimentary initial design consultation'
    },
    {
      num: '02',
      title: 'Parametric 3D CAD Engineering',
      subtitle: 'Sub-Millimeter Digital Sculpture',
      icon: Compass,
      description: 'We translate raw sketches into precision CAD 3D models. We engineer exact seat depths for each gemstone, hollowed interior chambers for balance, and calibrated wall thicknesses before a single gram of gold is melted.',
      highlight: 'Full 360° virtual preview & millimeter approval'
    },
    {
      num: '03',
      title: 'Lost-Wax Casting & Hand Goldsmithing',
      subtitle: 'Solid 22K/18K Hallmarked Alloys',
      icon: Flame,
      description: 'High-resolution wax matrices are cast in solid 22K or 18K gold. Senior goldsmiths hand-file, chase filigree wirework, and fire vitreous meenakari enamels at 800°C in traditional kilns.',
      highlight: 'Solid hallmarked 22K/18K gold alloys only'
    },
    {
      num: '04',
      title: 'Microscope Gem Setting & Delivery',
      subtitle: 'Mirror Polish & Heirloom Presentation',
      icon: ShieldCheck,
      description: 'Every diamond and colored stone is seated under 20x magnification to prevent snagging. The finished creation is ultrasonically purified, hallmarked, accompanied by authenticity certificates, and securely delivered in bespoke presentation vaults.',
      highlight: 'Certified conflict-free gems & BIS Hallmark'
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-white text-[#2D2232] relative overflow-hidden border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF2F0] border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold rounded-full mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>The Bespoke Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D2232] tracking-tight mb-3">
            How We Turn Your Idea Into Solid Gold
          </h2>

          <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed">
            From your very first message on WhatsApp to the moment the velvet presentation box opens, experience transparent, artisan-guided jewellery making.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative bg-[#FAF4F2] border border-[#EED7D5] rounded-xl p-6 sm:p-7 hover:border-[#4A154B] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lux-hover"
              >
                <div>
                  {/* Step Header with Number and Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#EEDAD8] mb-5">
                    <span className="font-serif text-3xl font-bold text-[#4A154B]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E0C0C8] flex items-center justify-center text-[#4A154B] group-hover:bg-[#4A154B] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-lg font-semibold text-[#2D2232] group-hover:text-[#4A154B] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-sans text-[#C86A6A] font-semibold mt-1">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5F4E64] font-sans leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Tag at Bottom */}
                <div className="pt-4 mt-6 border-t border-[#EEDAD8] text-[11px] font-medium text-[#4A154B] flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C86A6A]" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar below steps */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF2F0] border border-[#E9D2D0] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#2D2232]">Have an idea, sketch, or heirloom to reset?</h4>
            <p className="text-xs text-[#5F4E64] mt-0.5">Sujeet & Nausheen will personally assess feasibility and send initial CAD ideas on WhatsApp.</p>
          </div>

          <a
            href="https://wa.me/917802891435?text=Hello%20Sujeet%20%26%20Nausheen%2C%20I%20have%20an%20idea%20for%20a%20bespoke%20jewellery%20piece%20and%20would%20love%20to%20discuss%20it."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Start WhatsApp Dialogue</span>
          </a>
        </div>

      </div>
    </section>
  );
};
