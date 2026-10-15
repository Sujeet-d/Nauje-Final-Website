import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const StayConnectedBanner: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#FAF2F0] via-[#FCF6F5] to-[#F7EBE9] py-12 sm:py-16 border-y border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text matching reference */}
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2232] tracking-tight">
              Stay Connected
            </h2>
            <p className="text-xs sm:text-sm text-[#5F4E64] font-sans">
              Subscribe to get bespoke design previews, secret gemstone releases, and private consultation invitations with Sujeet & Nausheen.
            </p>
          </div>

          {/* Right Form matching reference */}
          <div className="w-full md:w-auto min-w-[320px] sm:min-w-[440px]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  required
                  placeholder="Enter your email or WhatsApp"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full sm:flex-grow px-5 py-3.5 bg-white border border-[#E9D2D0] rounded text-xs text-[#2D2232] placeholder-[#9D8B9F] outline-none focus:border-[#4A154B] shadow-xs"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#4A154B] hover:bg-[#370D38] text-white rounded text-xs font-sans font-bold tracking-widest uppercase transition-colors shadow-xs cursor-pointer shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/90 border border-[#DDBBB8] rounded flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#4A154B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C86A6A] shrink-0" />
                  <span>Welcome to NAUJÉ Atelier. We've reserved your bespoke invitation.</span>
                </div>
                <a
                  href={`https://wa.me/917802891435?text=${encodeURIComponent(
                    `Hello Sujeet & Nausheen, I just subscribed via ${inputValue} and would love to connect about bespoke designs!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#4A154B] hover:underline shrink-0"
                >
                  Chat Now →
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
