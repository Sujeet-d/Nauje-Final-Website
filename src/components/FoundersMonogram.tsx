import React from 'react';

interface FoundersMonogramProps {
  className?: string;
  size?: number;
}

export const FoundersMonogram: React.FC<FoundersMonogramProps> = ({ 
  className = "w-32 h-32 sm:w-36 sm:h-36",
  size = 180
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NAUJÉ Design & Jewels Official Founders Seal"
        role="img"
      >
        <defs>
          {/* Imperial Deep Plum Radial Background */}
          <radialGradient id="monogramPlumBg" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#551457" />
            <stop offset="60%" stopColor="#350B36" />
            <stop offset="100%" stopColor="#1E0520" />
          </radialGradient>

          {/* Warm Polished Champagne 22K Gold Gradient */}
          <linearGradient id="monogramGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF5D6" />
            <stop offset="20%" stopColor="#F5D36E" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#B38428" />
            <stop offset="100%" stopColor="#8C6016" />
          </linearGradient>

          {/* Gold Rim Gradient */}
          <linearGradient id="monogramGoldRim" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B88A24" />
            <stop offset="50%" stopColor="#FCE7B8" />
            <stop offset="100%" stopColor="#8C6615" />
          </linearGradient>

          {/* Soft Luxurious Drop Shadow */}
          <filter id="monogramGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* Outer Circular Base */}
        <circle cx="100" cy="100" r="96" fill="url(#monogramPlumBg)" />

        {/* Outer Beaded Granulation Ring */}
        <circle 
          cx="100" 
          cy="100" 
          r="92" 
          stroke="url(#monogramGoldRim)" 
          strokeWidth="1.4" 
          strokeDasharray="2.5 3.5" 
        />

        {/* Double Concentric Gold Rims */}
        <circle 
          cx="100" 
          cy="100" 
          r="86" 
          stroke="url(#monogramGoldRim)" 
          strokeWidth="1.6" 
        />
        <circle 
          cx="100" 
          cy="100" 
          r="82" 
          stroke="url(#monogramGoldRim)" 
          strokeWidth="0.8" 
          strokeOpacity="0.7"
        />

        {/* Center: The EXACT Official NAUJÉ Embossed Gold Diamond Symbol */}
        <image 
          href="/assets/branding/nauje_official_gold_diamond.png" 
          x="46" 
          y="58" 
          width="108" 
          height="83.5" 
          preserveAspectRatio="xMidYMid meet" 
          filter="url(#monogramGlow)" 
        />

        {/* Scaled Crisp Vector Reinforcement */}
        <g 
          transform="translate(48.8, 60) scale(0.32)" 
          stroke="url(#monogramGoldGrad)" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="6"
          opacity="0.65"
        >
          {/* 1. Outer Diamond Contour */}
          <polygon points="56,12 264,12 312,76 160,240 8,76" />
          
          {/* 2. Top Table Horizontal Line */}
          <line x1="56" y1="12" x2="264" y2="12" strokeWidth="8" />

          {/* 3. Main Girdle Horizontal Baseline (Continuous edge-to-edge, prominent) */}
          <line x1="8" y1="76" x2="312" y2="76" strokeWidth="9" />
          
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

        {/* Top Arc Typography: NAUJÉ · DESIGN & JEWELS */}
        <path
          id="sealCurveTop"
          d="M 32,100 A 68,68 0 0,1 168,100"
          fill="none"
        />
        <text fill="url(#monogramGoldGrad)" fontSize="7" fontFamily="'Cinzel', 'Playfair Display', serif" letterSpacing="0.28em" fontWeight="600">
          <textPath href="#sealCurveTop" startOffset="50%" textAnchor="middle">
            NAUJÉ · DESIGN &amp; JEWELS
          </textPath>
        </text>

        {/* Bottom Arc Typography: Upright, unmirrored, naturally readable left-to-right */}
        <path
          id="sealCurveBottom"
          d="M 28,100 A 72,72 0 0,0 172,100"
          fill="none"
        />
        <text fill="url(#monogramGoldGrad)" fontSize="5.8" fontFamily="'Cinzel', 'Playfair Display', serif" letterSpacing="0.22em" fontWeight="600" opacity="0.95">
          <textPath href="#sealCurveBottom" startOffset="50%" textAnchor="middle">
            SUJEET &amp; NAUSHEEN · ATELIER
          </textPath>
        </text>
      </svg>
    </div>
  );
};
