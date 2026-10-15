import React from 'react';

interface FoundersMonogramProps {
  className?: string;
  size?: number;
}

export const FoundersMonogram: React.FC<FoundersMonogramProps> = ({ 
  className = "w-28 h-28 sm:w-32 sm:h-32",
  size = 160
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Imperial Plum Radial Gradient */}
          <radialGradient id="plumBg" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#5E1B5F" />
            <stop offset="65%" stopColor="#3A0E3C" />
            <stop offset="100%" stopColor="#1E0520" />
          </radialGradient>

          {/* Warm Polished Champagne Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="25%" stopColor="#E5C158" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#B38B22" />
            <stop offset="100%" stopColor="#F5E4B2" />
          </linearGradient>

          {/* Gold Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B88A24" />
            <stop offset="50%" stopColor="#FCE7B8" />
            <stop offset="100%" stopColor="#8C6615" />
          </linearGradient>

          {/* Soft Shadow Filter for Diamond & Letterforms */}
          <filter id="insigniaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Outer Circular Base */}
        <circle cx="100" cy="100" r="96" fill="url(#plumBg)" />

        {/* Outer Beaded Granulation Ring */}
        <circle 
          cx="100" 
          cy="100" 
          r="92" 
          stroke="url(#goldRim)" 
          strokeWidth="1.6" 
          strokeDasharray="2 3.5" 
        />

        {/* Solid Double Gold Concentric Frame */}
        <circle 
          cx="100" 
          cy="100" 
          r="86" 
          stroke="url(#goldRim)" 
          strokeWidth="1.4" 
        />
        <circle 
          cx="100" 
          cy="100" 
          r="82" 
          stroke="url(#goldRim)" 
          strokeWidth="0.6" 
          strokeOpacity="0.6"
        />

        {/* Top Scintillating Solitaire Diamond Star */}
        <path
          d="M100 24 L102.5 31.5 L110 34 L102.5 36.5 L100 44 L97.5 36.5 L90 34 L97.5 31.5 Z"
          fill="url(#goldGradient)"
          filter="url(#insigniaGlow)"
        />

        {/* Bottom Petite Diamond Accent */}
        <path
          d="M100 168 L103.5 172.5 L100 177 L96.5 172.5 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />

        {/* Curved Path Guides for Typography */}
        <path
          id="textCurveTop"
          d="M 40,100 A 60,60 0 0,1 160,100"
          fill="none"
        />
        <path
          id="textCurveBottom"
          d="M 162,100 A 62,62 0 0,1 38,100"
          fill="none"
        />

        {/* Top Arch Label: NAUJÉ ATELIER */}
        <text fill="url(#goldGradient)" fontSize="7.5" fontFamily="'Cinzel', 'Playfair Display', serif" letterSpacing="0.32em" fontWeight="600" opacity="0.95">
          <textPath href="#textCurveTop" startOffset="50%" textAnchor="middle">
            NAUJÉ · ATELIER
          </textPath>
        </text>

        {/* Bottom Arch Label: HAUTE JOAILLERIE */}
        <text fill="url(#goldGradient)" fontSize="6" fontFamily="'Montserrat', sans-serif" letterSpacing="0.28em" fontWeight="500" opacity="0.8">
          <textPath href="#textCurveBottom" startOffset="50%" textAnchor="middle">
            HAUTE JOAILLERIE
          </textPath>
        </text>

        {/* Center: High-Jewellery Solitaire Brilliant Diamond with Majestic Facets & N monogram */}
        <g filter="url(#insigniaGlow)" transform="translate(100, 102)">
          {/* Brilliant Diamond Silhouette & Crown Facets */}
          {/* Table */}
          <polygon points="-28,-24 28,-24 16,-12 -16,-12" fill="url(#goldGradient)" opacity="0.95" />
          {/* Star facets left/right */}
          <polygon points="-28,-24 -16,-12 -38,-12" fill="url(#goldGradient)" opacity="0.75" />
          <polygon points="28,-24 38,-12 16,-12" fill="url(#goldGradient)" opacity="0.75" />
          {/* Upper girdle facets */}
          <polygon points="-38,-12 -16,-12 -22,-4 -40,-6" fill="url(#goldGradient)" opacity="0.85" />
          <polygon points="-16,-12 16,-12 0,-4" fill="url(#goldGradient)" opacity="0.9" />
          <polygon points="16,-12 38,-12 40,-6 22,-4" fill="url(#goldGradient)" opacity="0.85" />
          {/* Girdle bar */}
          <line x1="-40" y1="-5" x2="40" y2="-5" stroke="url(#goldGradient)" strokeWidth="1.2" />

          {/* Pavilion (Lower facet cone tapering to culet) */}
          <polygon points="-40,-5 0,38 40,-5" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
          {/* Pavilion main facets */}
          <polygon points="-40,-5 0,38 -15,0" fill="url(#goldGradient)" opacity="0.6" />
          <polygon points="40,-5 0,38 15,0" fill="url(#goldGradient)" opacity="0.6" />
          <polygon points="-15,0 0,38 15,0" fill="url(#goldGradient)" opacity="0.8" />
          <polygon points="-15,0 0,-4 15,0 0,38" fill="url(#goldGradient)" opacity="0.35" />

          {/* Sparkling Diamond Culet Star */}
          <circle cx="0" cy="38" r="2" fill="#FFF2D6" />

          {/* Pure Imperial 'N' Monogram Crest nestled elegantly inside the radiant diamond heart */}
          <g transform="translate(0, 0)">
            {/* Left Serif Column */}
            <path d="M-14,-18 L-8,-18 L-8,-16 L-10,-16 L-10,14 L-8,14 L-8,16 L-16,16 L-16,14 L-14,14 Z" fill="url(#goldGradient)" />
            {/* Diagonal Slash */}
            <path d="M-10,-16 L10,14 L12,14 L-8,-16 Z" fill="url(#goldGradient)" opacity="0.95" />
            {/* Right Serif Column */}
            <path d="M8,-18 L16,-18 L16,-16 L14,-16 L14,14 L16,14 L16,16 L10,16 L10,14 L12,14 L12,-16 L10,-16 L10,-18 Z" fill="url(#goldGradient)" />
          </g>
        </g>
      </svg>
    </div>
  );
};
