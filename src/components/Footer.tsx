import React from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp 
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation,
  onNavigateSection 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#350B36] text-[#F3D6D4] font-sans">
      {/* Upper Main Footer Grid matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37]/60 flex items-center justify-center p-1.5 bg-[#420E43]">
                <svg viewBox="0 0 40 40" className="w-full h-full text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="20" cy="20" r="18" strokeDasharray="2 2" />
                  <path d="M20 2 L20 38 M2 20 L38 20" strokeWidth="0.8" />
                  <circle cx="20" cy="20" r="10" />
                  <circle cx="20" cy="20" r="4" fill="#D4AF37" />
                  <path d="M20 6 C24 14 24 26 20 34 C16 26 16 14 20 6 Z" strokeWidth="1" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] font-normal text-white uppercase leading-none">
                  NAUJÉ
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium mt-1 leading-none">
                  DESIGN & JEWELS
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs text-[#E3BFBD] font-sans leading-relaxed max-w-sm">
              Exquisite jewellery crafted with passion, precision and timeless elegance. Handcrafted bespoke heirlooms by founders Sujeet & Nausheen.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/naujejewelry/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 hover:text-white flex items-center justify-center text-[#F3D6D4] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/naujedesignsandjewels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 hover:text-white flex items-center justify-center text-[#F3D6D4] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917802891435"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 hover:text-white flex items-center justify-center text-[#F3D6D4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConsultation}
                aria-label="Email Inquiry"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 hover:text-white flex items-center justify-center text-[#F3D6D4] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E3BFBD]">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#bestsellers" onClick={(e) => { e.preventDefault(); handleLink('bestsellers'); }} className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => { e.preventDefault(); handleLink('categories'); }} className="hover:text-white transition-colors">
                  Jewellery
                </a>
              </li>
              <li>
                <a href="#cad-comparison" onClick={(e) => { e.preventDefault(); handleLink('cad-comparison'); }} className="hover:text-white transition-colors">
                  CAD to Real
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleLink('about'); }} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#consultation" onClick={(e) => { e.preventDefault(); handleLink('consultation'); }} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-white">
              INFORMATION
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E3BFBD]">
              <li>
                <a href="#craftsmanship-videos" onClick={(e) => { e.preventDefault(); handleLink('craftsmanship-videos'); }} className="hover:text-white transition-colors">
                  Blog & Atelier
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleLink('about'); }} className="hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#consultation" onClick={(e) => { e.preventDefault(); handleLink('consultation'); }} className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#consultation" onClick={(e) => { e.preventDefault(); handleLink('consultation'); }} className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Bespoke Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-white">
              BESPOKE CONCIERGE
            </h4>
            <p className="text-xs text-[#E3BFBD] leading-relaxed">
              Every creation is custom commissioned with direct founder consultation.
            </p>

            <div className="pt-2">
              <span className="text-[10px] text-[#C7A2A0] uppercase font-mono tracking-wider block">
                Direct WhatsApp Inquiries
              </span>
              <a
                href="https://wa.me/917802891435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 mt-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                <span>+91 7802891435</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar matching reference */}
      <div className="bg-[#240625] py-4 border-t border-[#461148] text-[11px] text-[#BA9391] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © 2026 NAUJÉ Design & Jewels. All Rights Reserved.
          </span>
          <span className="text-[10px] text-[#A67E7C]">
            Crafted with passion by Sujeet & Nausheen.
          </span>
        </div>
      </div>
    </footer>
  );
};
