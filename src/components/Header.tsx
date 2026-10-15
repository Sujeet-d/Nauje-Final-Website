import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Gift
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenConsultation,
  onNavigateSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [jewelleryDropdownOpen, setJewelleryDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLinkClick = (hash: string) => {
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
    setJewelleryDropdownOpen(false);
    if (onNavigateSection) {
      onNavigateSection(hash.replace('#', ''));
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F0DCDB] shadow-xs">
      {/* 1. Deep Plum Announcement Top Bar */}
      <div className="bg-[#4A154B] text-white text-[11px] font-sans tracking-wide py-2 px-4 sm:px-8 border-b border-[#3B0E3C]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Announcement */}
          <div className="flex items-center gap-2">
            <Gift className="w-3.5 h-3.5 text-[#F8D2D0]" />
            <span className="text-[#F8D2D0]">
              Complimentary Insured Delivery &nbsp;|&nbsp; Certified Hallmarked Bespoke Jewellery
            </span>
          </div>

          {/* Right Direct Atelier Link */}
          <div className="hidden sm:flex items-center gap-4 text-[#F8D2D0]">
            <a 
              href="#consultation" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#consultation'); }}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Book Private Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main White Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo & Emblem */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            {/* Refined Fine Jewellery Solitaire Diamond & Imperial N Emblem */}
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center p-1 bg-gradient-to-tr from-[#3A0E3C] to-[#5E1B5F] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="1.5 2" />
                <circle cx="20" cy="20" r="15.5" stroke="#FCE7B8" strokeWidth="0.6" />
                {/* Brilliant Diamond Silhouette */}
                <polygon points="12,14 28,14 32,19 20,31 8,19" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <polygon points="15,14 25,14 23,19 17,19" fill="#FCE7B8" opacity="0.6" />
                <polygon points="17,19 20,31 23,19" fill="#D4AF37" opacity="0.85" />
                <polygon points="8,19 20,31 17,19" fill="#D4AF37" opacity="0.4" />
                <polygon points="32,19 20,31 23,19" fill="#D4AF37" opacity="0.4" />
                {/* Solitaire Spark */}
                <circle cx="20" cy="11.5" r="1" fill="#FFF2D6" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal text-[#2D2232] uppercase leading-none group-hover:text-[#4A154B] transition-colors">
                NAUJÉ
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#7D6B82] font-sans font-medium mt-1 leading-none">
                DESIGN & JEWELS
              </span>
            </div>
          </a>

          {/* Center Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-sans font-semibold tracking-wider text-[#3D2C40]">
            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCollectionsDropdownOpen(true)}
              onMouseLeave={() => setCollectionsDropdownOpen(false)}
            >
              <button 
                onClick={() => handleLinkClick('#bestsellers')}
                className="flex items-center gap-1 hover:text-[#4A154B] py-2 transition-colors cursor-pointer"
              >
                <span>COLLECTIONS</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#7D6B82]" />
              </button>

              {collectionsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#F0DCDB] shadow-lg py-2 z-50 text-[11px] animate-in fade-in duration-150">
                  <a 
                    href="#bestsellers" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#bestsellers'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Curated Bestsellers
                  </a>
                  <a 
                    href="#creations" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#creations'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Bespoke Jewellery Archive
                  </a>
                  <a 
                    href="#cad-comparison" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#cad-comparison'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    CAD Blueprint to Reality
                  </a>
                </div>
              )}
            </div>

            {/* Jewellery Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setJewelleryDropdownOpen(true)}
              onMouseLeave={() => setJewelleryDropdownOpen(false)}
            >
              <button 
                onClick={() => handleLinkClick('#categories')}
                className="flex items-center gap-1 hover:text-[#4A154B] py-2 transition-colors cursor-pointer"
              >
                <span>JEWELLERY</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#7D6B82]" />
              </button>

              {jewelleryDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-[#F0DCDB] shadow-lg py-2 z-50 text-[11px] animate-in fade-in duration-150">
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Necklaces & Chokers
                  </a>
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Earrings & Chandbalis
                  </a>
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Bespoke Rings & Bands
                  </a>
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Bracelets & Bangles
                  </a>
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
                    className="block px-4 py-2 hover:bg-[#FAF2F0] hover:text-[#4A154B] transition-colors"
                  >
                    Pendants & Brooches
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#cad-comparison" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#cad-comparison'); }}
              className="hover:text-[#4A154B] flex items-center gap-1.5 transition-colors"
            >
              <span>CAD TO REALITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86A6A]" />
            </a>

            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}
              className="hover:text-[#4A154B] transition-colors"
            >
              ABOUT US
            </a>

            <a 
              href="#craftsmanship-videos" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#craftsmanship-videos'); }}
              className="hover:text-[#4A154B] transition-colors"
            >
              CRAFTSMANSHIP
            </a>

            <a 
              href="#consultation" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#consultation'); }}
              className="hover:text-[#4A154B] transition-colors"
            >
              CONTACT US
            </a>
          </nav>

          {/* Right Actions: Clean luxury search & WhatsApp concierge */}
          <div className="flex items-center gap-4 text-[#443649]">
            {/* Search Toggle */}
            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search masterworks"
                className="p-1.5 hover:text-[#4A154B] transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-10 w-72 bg-white border border-[#F0DCDB] shadow-xl p-3 z-50 rounded-lg">
                  <div className="flex items-center gap-2 border-b border-[#F0DCDB] pb-2">
                    <Search className="w-4 h-4 text-[#7D6B82]" />
                    <input
                      type="text"
                      placeholder="Search diamond, ruby, choker..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs outline-none bg-transparent"
                      autoFocus
                    />
                    <button onClick={() => setSearchOpen(false)}>
                      <X className="w-4 h-4 text-[#7D6B82] hover:text-[#2D2232]" />
                    </button>
                  </div>
                  {searchQuery && (
                    <div className="pt-2 text-xs">
                      <a 
                        href="#creations"
                        onClick={(e) => { e.preventDefault(); handleLinkClick('#creations'); setSearchOpen(false); }}
                        className="block py-1 text-[#4A154B] hover:underline"
                      >
                        Search collection for "{searchQuery}" →
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* WhatsApp Direct Chat Button */}
            <a
              href="https://wa.me/917802891435?text=Hello%20Sujeet%20%26%20Nausheen%2C%20I%20am%20browsing%20the%20NAUJ%C3%89%20website%20and%20would%20love%20to%20discuss%20a%20bespoke%20jewellery%20piece."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4A154B] hover:bg-[#370D38] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">WhatsApp Concierge</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="lg:hidden p-1.5 text-[#2D2232] hover:text-[#4A154B]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F0DCDB] px-6 py-6 space-y-4 text-sm font-sans font-medium text-[#2D2232]">
          <a 
            href="#bestsellers" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#bestsellers'); }}
            className="block py-2 hover:text-[#4A154B] border-b border-[#FAF2F0]"
          >
            Collections
          </a>
          <a 
            href="#categories" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#categories'); }}
            className="block py-2 hover:text-[#4A154B] border-b border-[#FAF2F0]"
          >
            Jewellery Categories
          </a>
          <a 
            href="#cad-comparison" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#cad-comparison'); }}
            className="block py-2 hover:text-[#4A154B] border-b border-[#FAF2F0]"
          >
            CAD to Reality
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}
            className="block py-2 hover:text-[#4A154B] border-b border-[#FAF2F0]"
          >
            About Founders
          </a>
          <a 
            href="#craftsmanship-videos" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#craftsmanship-videos'); }}
            className="block py-2 hover:text-[#4A154B] border-b border-[#FAF2F0]"
          >
            Craftsmanship Videos
          </a>
          <a 
            href="#consultation" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#consultation'); }}
            className="block py-2 hover:text-[#4A154B]"
          >
            Contact & Consultation
          </a>
        </div>
      )}
    </header>
  );
};
