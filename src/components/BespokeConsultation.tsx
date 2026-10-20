import React, { useState } from 'react';
import { JewelryPiece } from '../data/jewelryData';
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail, 
  Send, 
  Sparkles, 
  Check, 
  ExternalLink,
  PhoneCall,
  Clock,
  ShieldCheck,
  Copy
} from 'lucide-react';

interface BespokeConsultationProps {
  initialPiece?: JewelryPiece | null;
  onClearInitialPiece?: () => void;
}

export const BespokeConsultation: React.FC<BespokeConsultationProps> = ({
  initialPiece,
  onClearInitialPiece
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialPiece ? initialPiece.categoryLabel : 'Custom Engagement Ring / Solitaire'
  );
  const [selectedMetal, setSelectedMetal] = useState<string>('22K Fine Yellow Gold');
  const [selectedGem, setSelectedGem] = useState<string>('Sapphire / Diamond Accent');
  const [customNotes, setCustomNotes] = useState<string>(
    initialPiece ? `Referencing archive piece: "${initialPiece.name}" (${initialPiece.dimensions})` : ''
  );
  const [copiedEmailNotice, setCopiedEmailNotice] = useState<boolean>(false);

  const categoryOptions = [
    'Custom Engagement Ring / Solitaire',
    'Royal Bridal Necklace / Choker',
    'Chandbali / Statement Earrings',
    'Art Deco / Tennis Bracelet',
    'Peacock Brooch / Gala Suite',
    'Resetting Sentimental Heirloom Gems'
  ];

  const metalOptions = [
    '22K Fine Sovereign Yellow Gold',
    '18K Warm Rose Gold',
    '18K White Gold / Platinum',
    'Dual-Tone Yellow & White Gold'
  ];

  const gemOptions = [
    'Natural Aquamarine & Diamonds',
    'Royal Blue Sapphire & Basra Pearls',
    'Columbian Emerald & Polki Diamonds',
    'Pigeon Blood Ruby & Diamond Baguettes',
    'Vitreous Enamel (Meenakari) with Gems',
    'Supplying My Own Heirloom Stones'
  ];

  // Pre-filled WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `Hello Sujeet & Nausheen, I am contacting NAUJÉ Design & Jewels to discuss a bespoke jewellery commission.\n\n`;
    msg += `• Category: ${selectedCategory}\n`;
    msg += `• Metal Preference: ${selectedMetal}\n`;
    msg += `• Gemstone Vision: ${selectedGem}\n`;
    if (customNotes.trim()) {
      msg += `• Details & Inspiration: ${customNotes.trim()}\n`;
    }
    msg += `\nI would love to learn about CAD drafting timelines, budget feasibility, and start a private dialogue with you.`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/917802891435?text=${generateWhatsAppMessage()}`;
  const directWelcomeWhatsAppUrl = `https://wa.me/917802891435?text=${encodeURIComponent(
    "Hello Sujeet & Nausheen! I am reaching out to NAUJÉ Design & Jewels. I would love to discuss a bespoke jewellery commission and explore ideas/quotations for a custom piece."
  )}`;

  const handleEmailAction = () => {
    const subject = encodeURIComponent(`Bespoke Jewellery Inquiry — NAUJÉ Design & Jewels [${selectedCategory}]`);
    const body = encodeURIComponent(
      `Dear Sujeet & Nausheen,\n\nI am interested in commissioning a bespoke jewellery piece with NAUJÉ Design & Jewels.\n\nCategory: ${selectedCategory}\nMetal: ${selectedMetal}\nGemstones: ${selectedGem}\nNotes: ${customNotes}\n\nPlease let me know when we can arrange a private consultation.\n\nWarm regards,\n`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section id="consultation" className="py-20 sm:py-24 bg-[#FAF4F2] text-[#2D2232] relative overflow-hidden border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold rounded-full mb-3 shadow-xs">
            <MessageCircle className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>Direct Founder Dialogue</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D2232] tracking-tight mb-3">
            Commission Your One-of-a-Kind Piece
          </h2>

          <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed">
            <strong>NAUJÉ Design & Jewels</strong> is an intentional bespoke atelier, not a retail store. Discuss your concepts, request technical quotations, and review CAD drafts directly with founders Sujeet & Nausheen over WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Commission Brief Builder (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#EED7D5] rounded-xl p-6 sm:p-8 shadow-lux">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0DCDB] mb-6">
              <div>
                <h3 className="text-xl font-serif text-[#2D2232] font-semibold">Bespoke Inquiry Brief</h3>
                <p className="text-xs text-[#7D6B82] mt-0.5">
                  Select your preferences below to format an instant, pre-filled WhatsApp message.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#4A154B] px-2.5 py-1 bg-[#FAF2F0] rounded-full border border-[#E9D2D0] font-bold">
                DIRECT CONCIERGE
              </span>
            </div>

            {initialPiece && (
              <div className="mb-6 p-3.5 bg-[#FAF2F0] border border-[#E9D2D0] rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#4A154B]">
                  <Sparkles className="w-4 h-4 text-[#C86A6A]" />
                  <span>Referencing: <strong>{initialPiece.name}</strong></span>
                </div>
                {onClearInitialPiece && (
                  <button
                    onClick={onClearInitialPiece}
                    className="text-[#7D6B82] hover:text-[#2D2232] underline text-[11px] cursor-pointer"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            )}

            {/* 1. Category Selector */}
            <div className="mb-6">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#2D2232] mb-2.5">
                1. Select Jewellery Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedCategory(opt)}
                    className={`text-left p-3 rounded text-xs transition-all cursor-pointer ${
                      selectedCategory === opt
                        ? 'bg-[#4A154B] text-white font-medium shadow-xs'
                        : 'bg-[#FAF4F2] text-[#5F4E64] hover:bg-[#F3E6E4] border border-[#EED7D5]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Metal Preference */}
            <div className="mb-6">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#2D2232] mb-2.5">
                2. Gold Karat & Alloy Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {metalOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedMetal(opt)}
                    className={`text-left p-2.5 rounded text-xs transition-all cursor-pointer ${
                      selectedMetal === opt
                        ? 'bg-[#4A154B] text-white font-medium shadow-xs'
                        : 'bg-[#FAF4F2] text-[#5F4E64] hover:bg-[#F3E6E4] border border-[#EED7D5]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Gemstone Preference */}
            <div className="mb-6">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#2D2232] mb-2.5">
                3. Gemstone & Artistry Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gemOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedGem(opt)}
                    className={`text-left p-2.5 rounded text-xs transition-all cursor-pointer ${
                      selectedGem === opt
                        ? 'bg-[#4A154B] text-white font-medium shadow-xs'
                        : 'bg-[#FAF4F2] text-[#5F4E64] hover:bg-[#F3E6E4] border border-[#EED7D5]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Custom Notes */}
            <div className="mb-6">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#2D2232] mb-2">
                4. Your Vision, Ring Size, or Budget Ideas (Optional)
              </label>
              <textarea
                rows={3}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="E.g., I love the peacock blue enameling and would like a lightweight version in 18k rose gold with my grandmother's emeralds..."
                className="w-full p-3 bg-[#FAF4F2] border border-[#EED7D5] rounded text-xs text-[#2D2232] placeholder-[#9D8B9F] outline-none focus:border-[#4A154B]"
              />
            </div>

            {/* Primary Action Button: Open Pre-filled WhatsApp */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-lg text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Send Brief to Sujeet & Nausheen on WhatsApp</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleEmailAction}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white hover:bg-[#FAF2F0] text-[#4A154B] border border-[#D8C4C2] rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Prepare Email Inquiry</span>
                </button>

                <a
                  href={directWelcomeWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#4A154B] hover:bg-[#370D38] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer text-center"
                >
                  <span>Quick WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Founder Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-white border border-[#EED7D5] rounded-xl p-6 shadow-lux">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#2D2232]">WhatsApp Direct Hotline</h4>
                  <p className="text-xs text-[#7D6B82]">Instant response from Sujeet & Nausheen</p>
                </div>
              </div>

              <a
                href={directWelcomeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 bg-[#FAF4F2] hover:bg-[#FAF2F0] border border-[#E9D2D0] rounded-lg text-sm font-semibold text-[#4A154B] transition-colors"
              >
                +91 7802891435
                <span className="block text-[11px] font-normal text-[#7D6B82] mt-0.5">
                  Click to open direct WhatsApp conversation
                </span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="bg-white border border-[#EED7D5] rounded-xl p-6 shadow-lux">
              <h4 className="font-serif text-lg font-semibold text-[#2D2232] mb-4">
                Official Atelier Channels
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/naujejewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF4F2] hover:bg-[#FAF2F0] border border-[#E9D2D0] rounded-lg text-xs transition-colors group"
                >
                  <div className="flex items-center gap-2.5 text-[#2D2232]">
                    <Instagram className="w-4 h-4 text-[#C86A6A]" />
                    <span className="font-medium">Instagram: @naujejewelry</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7D6B82] group-hover:text-[#4A154B]" />
                </a>

                <a
                  href="https://www.facebook.com/naujedesignsandjewels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF4F2] hover:bg-[#FAF2F0] border border-[#E9D2D0] rounded-lg text-xs transition-colors group"
                >
                  <div className="flex items-center gap-2.5 text-[#2D2232]">
                    <Facebook className="w-4 h-4 text-[#4A154B]" />
                    <span className="font-medium">Facebook: /naujedesignsandjewels</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7D6B82] group-hover:text-[#4A154B]" />
                </a>
              </div>
            </div>

            {/* Atelier Assurance Box */}
            <div className="p-5 bg-gradient-to-br from-[#FAF2F0] to-[#F5E6E4] border border-[#E9D2D0] rounded-xl space-y-3 text-xs text-[#5F4E64]">
              <div className="flex items-center gap-2 font-semibold text-[#4A154B]">
                <ShieldCheck className="w-4 h-4 text-[#C86A6A]" />
                <span>100% Client Privacy Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Your custom CAD drafts, personal diamond preferences, and design inspirations remain strictly private and will never be shared or reproduced for another client without your explicit blessing.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
