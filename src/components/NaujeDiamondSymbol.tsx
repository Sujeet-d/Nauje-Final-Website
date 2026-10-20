import React, { useId } from 'react';

interface NaujeDiamondSymbolProps {
  className?: string;
  variant?: 'standalone' | 'badge' | 'gold-ring';
  alt?: string;
  glow?: boolean;
}

/**
 * Official NAUJÉ Diamond Symbol
 * Derived with mathematical precision from the official NAUJÉ Design & Jewels branding asset.
 */
export const NaujeDiamondSymbol: React.FC<NaujeDiamondSymbolProps> = ({
  className = "h-8 w-auto",
  variant = 'standalone',
  alt = "NAUJÉ Official Diamond Emblem",
  glow = false
}) => {
  const uniqueId = useId().replace(/:/g, '_');
  const gradientId = `naujeGoldGrad_${uniqueId}`;
  const filterId = `naujeGlow_${uniqueId}`;

  const renderSvgDiamond = (strokeWidth = 6.8) => (
    <svg
      viewBox="0 0 320 250"
      className="w-full h-full select-none overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="20%" stopColor="#F5D36E" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#B38428" />
          <stop offset="100%" stopColor="#8C6016" />
        </linearGradient>
        {glow && (
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.45" />
          </filter>
        )}
      </defs>

      <g 
        stroke={`url(#${gradientId})`} 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={strokeWidth}
        filter={glow ? `url(#${filterId})` : undefined}
      >
        {/* 1. Outer Diamond Contour */}
        <polygon points="56,12 264,12 312,76 160,240 8,76" />
        
        {/* 2. Top Table Horizontal Line */}
        <line x1="56" y1="12" x2="264" y2="12" strokeWidth={strokeWidth * 1.1} />

        {/* 3. Main Girdle Horizontal Baseline (Continuous edge-to-edge, prominent) */}
        <line x1="8" y1="76" x2="312" y2="76" strokeWidth={strokeWidth * 1.25} />
        
        {/* 4. Crown Central Rhombus */}
        <polygon points="160,12 124,44 160,76 196,44" />
        
        {/* 5. Crown Left Facets */}
        <line x1="96" y1="12" x2="124" y2="44" />
        <line x1="124" y1="44" x2="96" y2="76" />
        <line x1="96" y1="12" x2="48" y2="76" />
        <line x1="56" y1="12" x2="48" y2="76" />
        
        {/* 6. Crown Right Facets */}
        <line x1="224" y1="12" x2="196" y2="44" />
        <line x1="196" y1="44" x2="224" y2="76" />
        <line x1="224" y1="12" x2="272" y2="76" />
        <line x1="264" y1="12" x2="272" y2="76" />
        
        {/* 7. Pavilion Center Needle Kite (Open kite matching official reference) */}
        <polygon points="160,76 144,185 160,240 176,185" />
        
        {/* 8. Pavilion Main Rays */}
        <line x1="96" y1="76" x2="144" y2="185" />
        <line x1="224" y1="76" x2="176" y2="185" />
        <line x1="48" y1="76" x2="144" y2="185" />
        <line x1="272" y1="76" x2="176" y2="185" />
        
        {/* 9. Pavilion Outer Diagonal Ribs */}
        <line x1="48" y1="76" x2="128" y2="172" />
        <line x1="128" y1="172" x2="148" y2="218" />
        <line x1="272" y1="76" x2="192" y2="172" />
        <line x1="192" y1="172" x2="172" y2="218" />
      </g>
    </svg>
  );

  // High-fidelity rendering: The exact embossed 22K gold diamond from user's official master branding
  const renderEmbossedDiamond = () => (
    <img 
      src="/assets/branding/nauje_official_gold_diamond.png" 
      alt={alt}
      className={`w-full h-full object-contain select-none pointer-events-none transition-all duration-300 ${
        glow ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.45)]' : 'drop-shadow-xs'
      }`}
      loading="eager"
      decoding="async"
    />
  );

  if (variant === 'badge') {
    return (
      <div className={`relative rounded-full border border-[#D4AF37]/80 flex items-center justify-center p-2 bg-gradient-to-tr from-[#3A0E3C] via-[#48134A] to-[#5E1B5F] shadow-md shrink-0 aspect-square ${className}`}>
        <div className="w-[85%] h-[85%] flex items-center justify-center">
          {renderEmbossedDiamond()}
        </div>
      </div>
    );
  }

  if (variant === 'gold-ring') {
    return (
      <div className={`relative rounded-full border border-[#D4AF37] flex items-center justify-center p-2 bg-white/95 shadow-xs shrink-0 aspect-square ${className}`}>
        <div className="w-[82%] h-[82%] flex items-center justify-center">
          {renderEmbossedDiamond()}
        </div>
      </div>
    );
  }

  // Standalone: Pure, exact official gold embossed emblem matching the user's master asset
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {renderEmbossedDiamond()}
    </div>
  );
};
