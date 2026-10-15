import React, { useState } from 'react';
import { JewelryPiece } from './data/jewelryData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCircles } from './components/CategoryCircles';
import { BestsellersGrid } from './components/BestsellersGrid';
import { TrustStrip } from './components/TrustStrip';
import { CadComparisonSlider } from './components/CadComparisonSlider';
import { CreationsGallery } from './components/CreationsGallery';
import { BespokeProcess } from './components/BespokeProcess';
import { CraftsmanshipVideos } from './components/CraftsmanshipVideos';
import { FoundersStory } from './components/FoundersStory';
import { StayConnectedBanner } from './components/StayConnectedBanner';
import { BespokeConsultation } from './components/BespokeConsultation';
import { Footer } from './components/Footer';
import { PieceDetailModal } from './components/PieceDetailModal';
import { AtelierMediaSync } from './components/AtelierMediaSync';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedPieceForInquiry, setSelectedPieceForInquiry] = useState<JewelryPiece | null>(null);
  const [selectedPieceForModal, setSelectedPieceForModal] = useState<JewelryPiece | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [wishlistCount, setWishlistCount] = useState<number>(3);

  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCreations = () => {
    const el = document.getElementById('creations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCad = () => {
    const el = document.getElementById('cad-comparison');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    scrollToCreations();
  };

  const handleSelectPieceForInquiry = (piece: JewelryPiece) => {
    setSelectedPieceForInquiry(piece);
    scrollToConsultation();
  };

  const handleClearInquiryPiece = () => {
    setSelectedPieceForInquiry(null);
  };

  const floatingWhatsAppUrl = `https://wa.me/917802891435?text=${encodeURIComponent(
    "Hello Sujeet & Nausheen, I am browsing the NAUJÉ website and would love to consult on a custom bespoke piece."
  )}`;

  return (
    <div className="min-h-screen bg-white text-[#2D2232] font-sans selection:bg-[#4A154B] selection:text-white">
      {/* 1. Top Bar & Main Header matching reference design */}
      <Header 
        onOpenConsultation={scrollToConsultation} 
        wishlistCount={wishlistCount}
      />

      {/* Main Experience Flow matching reference design structure */}
      <main>
        {/* 2. Hero Section: "Timeless Elegance. Forever You." with Bridal Model */}
        <Hero 
          onOpenConsultation={scrollToConsultation}
          onExploreCollections={scrollToCreations}
          onExploreCad={scrollToCad}
        />

        {/* 3. "SHOP BY CATEGORY / Find Your Perfect Piece" with 5 Circular Cards */}
        <CategoryCircles 
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />

        {/* 4. "OUR BESTSELLERS / Handpicked For You" 4-Card Luxury Grid */}
        <BestsellersGrid 
          onSelectPieceForInquiry={handleSelectPieceForInquiry}
          onOpenDetailsModal={(piece) => setSelectedPieceForModal(piece)}
          onViewAllProducts={scrollToCreations}
        />

        {/* 5. Four-Column Trust Strip in Deep Plum */}
        <TrustStrip />

        {/* 6. Interactive CAD-to-Finished Reality Slider */}
        <CadComparisonSlider 
          onSelectPieceForInquiry={handleSelectPieceForInquiry}
          onOpenDetailsModal={(piece) => setSelectedPieceForModal(piece)}
        />

        {/* 7. Complete Archival Creations (19 Pairs with Instant CAD/Real Toggles) */}
        <CreationsGallery 
          onSelectPieceForInquiry={handleSelectPieceForInquiry}
          onOpenDetailsModal={(piece) => setSelectedPieceForModal(piece)}
        />

        {/* 8. The 4-Stage Bespoke Commissioning Flow */}
        <BespokeProcess onOpenConsultation={scrollToConsultation} />

        {/* 9. Atelier Cinematography (4 Craftsmanship Disciplines) */}
        <CraftsmanshipVideos />

        {/* 10. Founders & Atelier Philosophy: Sujeet & Nausheen */}
        <FoundersStory onOpenConsultation={scrollToConsultation} />

        {/* 11. "Stay Connected" Newsletter / Inquiry Banner */}
        <StayConnectedBanner />

        {/* 12. Bespoke Direct Dialogue Brief Generator (WhatsApp / Email) */}
        <BespokeConsultation 
          initialPiece={selectedPieceForInquiry}
          onClearInitialPiece={handleClearInquiryPiece}
        />
      </main>

      {/* 13. Grand Luxury Footer in Deep Plum with Payment Badges */}
      <Footer onOpenConsultation={scrollToConsultation} />

      {/* Modal for Deep CAD and Real Inspection */}
      <PieceDetailModal 
        piece={selectedPieceForModal}
        onClose={() => setSelectedPieceForModal(null)}
        onInquire={handleSelectPieceForInquiry}
      />

      {/* Floating Concierge Action */}
      <aside aria-label="Direct Concierge" className="fixed bottom-6 right-6 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 bg-white/95 hover:bg-white border border-[#E8D2CF] hover:border-[#4A154B] shadow-2xl backdrop-blur-md rounded-full transition-all duration-300 cursor-pointer"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black">
              <MessageCircle className="w-4 h-4 fill-black" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#7D6B82]">Bespoke Concierge</div>
            <div className="text-xs font-serif text-[#2D2232] font-semibold group-hover:text-[#4A154B] transition-colors">
              Chat with Sujeet & Nausheen
            </div>
          </div>
        </a>
      </aside>

      {/* Atelier Media File Linker for local CAD, Real, and Video sync */}
      <AtelierMediaSync />
    </div>
  );
}
