export interface JewelryPiece {
  id: string;
  name: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'brooches';
  categoryLabel: string;
  cadFileName: string;
  realFileName: string;
  dimensions: string;
  metal: string;
  primaryGem: string;
  accentGems: string;
  artisanTechnique: string;
  description: string;
  cadHighlights: string[];
  finishedHighlights: string[];
  themeColor: string;
  secondaryColor: string;
  priceInr?: string;
  rating?: number;
  reviewsCount?: number;
}

export const JEWELRY_COLLECTION: JewelryPiece[] = [
  {
    id: 'sovereign-baroque-aquamarine-ring',
    name: 'The Sovereign Baroque Aquamarine Ring',
    category: 'rings',
    categoryLabel: 'Statement Ring',
    cadFileName: 'The Sovereign Baroque Aquamarine Ring - CAD.jpg',
    realFileName: 'The Sovereign Baroque Aquamarine Ring - Real.png',
    dimensions: '27.00 mm Shank Crown',
    metal: 'Antique-Oxidized 925 Silver & 18K White Gold',
    primaryGem: '14.50ct Natural Oval Aquamarine',
    accentGems: 'Round Brilliant Diamond Accents (0.35ct)',
    artisanTechnique: 'Baroque Acanthus Leaf Hand-Relief & Bezel Setting',
    description: 'An architectural heirloom featuring a towering oval aquamarine held in a bezel with intricate repoussé acanthus scrollwork carved across the high-relief gallery.',
    cadHighlights: [
      '27mm crown diameter engineered for anatomical counterweight',
      'Pierced filigree under-gallery to maximize light refraction through culet',
      'Quadruple prong-reinforced bezel profile'
    ],
    finishedHighlights: [
      'Deep cerulean blue aquamarine with flawless oceanic clarity',
      'Artisanal hand-burnished antique patina along scrollwork recesses',
      'Mirrored polished interior band for ergonomic comfort'
    ],
    themeColor: '#38bdf8',
    secondaryColor: '#94a3b8'
  },
  {
    id: 'peacock-meenakari-choker',
    name: 'Peacock Meenakari Choker & Grand Pendant Set',
    category: 'necklaces',
    categoryLabel: 'Royal Bridal Choker',
    cadFileName: 'Peacock Meenakari Choker & Grand Pendant Set - CAD.jpg',
    realFileName: 'Peacock Meenakari Choker & Grand Pendant Set - Real.png',
    dimensions: 'Full Collar with 65mm Articulated Drops',
    metal: '22K Solid Yellow Gold',
    primaryGem: 'Royal Blue Oval Sapphire & Basra Pearls',
    accentGems: 'Vitreous Royal Blue & Emerald Green Meenakari Enamel, Diamonds',
    artisanTechnique: 'Kundan Jadau setting, Hand Meenakari, Suspended Jhumki clusters',
    description: 'A sovereign bridal collar featuring regal mirror-image Mayura peacocks framing an intense sapphire centerpiece, bordered by delicate diamond filigree and cascading pearl jhumkas.',
    cadHighlights: [
      'Flexible multi-link gold mesh spine for drape over collarbone',
      'Parametrically spaced jhumka suspension eyelets',
      'Double-curved peacock plume recesses contoured for hot vitreous enamel'
    ],
    finishedHighlights: [
      'Hand-fired cloisonné meenakari in traditional Jaipur royal peacock hues',
      'Lustrous seed pearls hand-threaded on 24k gold wire',
      'Certified natural royal blue sapphire center stone'
    ],
    themeColor: '#2563eb',
    secondaryColor: '#10b981'
  },
  {
    id: 'royal-crescent-chandbali',
    name: 'The Royal Crescent Chandbali Earrings',
    category: 'earrings',
    categoryLabel: 'Heritage Chandbali',
    cadFileName: 'The Royal Crescent Chandbali Earrings - CAD.jpg',
    realFileName: 'The Royal Crescent Chandbali Earrings - Real.png',
    dimensions: '66.00 mm Length × 35.00 mm Width',
    metal: '22K Antique Yellow Gold',
    primaryGem: 'Natural Crimson Ruby Cabochons',
    accentGems: 'South Sea Natural Drop Pearls, Brilliant Diamonds',
    artisanTechnique: 'Granulation Beading, Chased Crescent Filigree, Pearl Tassels',
    description: 'A celebration of Mughal celestial geometry, uniting a circular sun stud with an ornate crescent moon adorned with five bezel rubies and teardrop pearl drops.',
    cadHighlights: [
      'Precision 66mm drop with counter-balanced hollow gold backing to reduce ear fatigue',
      'Tapered bezel wall angle (12°) for seamless cabochon stone retention',
      '3-point suspended micro-loop articulation'
    ],
    finishedHighlights: [
      'Velvety pigeon-blood ruby cabochons with deep internal glow',
      'Hand-soldered gold granulation wire along outer crescent rim',
      'Natural drop pearls with rich iridescent overtone'
    ],
    themeColor: '#e11d48',
    secondaryColor: '#f59e0b'
  },
  {
    id: 'botanical-marquise-vine-ring',
    name: 'The Botanical Marquise Diamond Vine Ring',
    category: 'rings',
    categoryLabel: 'Fine Bypass Ring',
    cadFileName: 'The Botanical Marquise Diamond Vine Ring - CAD.jpg',
    realFileName: 'The Botanical Marquise Diamond Vine Ring - Real.png',
    dimensions: '18.50 mm Bypass Span',
    metal: '18K Rose Gold',
    primaryGem: 'Marquise Cut Natural Diamonds (0.85ct Total)',
    accentGems: 'F-G Color, VS Clarity Marquise Diamonds',
    artisanTechnique: 'Organic Bypass Band Shaping, Micro-Prong Leaf Setting',
    description: 'A lyrical interpretation of climbing vine tendrils wrapping the finger with glistening marquise diamonds arranged in symmetrical leafy sprays.',
    cadHighlights: [
      'Dual helical bypass curves designed with continuous curvature curvature math',
      'Sub-millimeter shared prong geometry minimizing metal footprint',
      'Integrated structural rib underneath the bypass stems to prevent deformation'
    ],
    finishedHighlights: [
      'Warm 18k rose gold hand-polished to a liquid glass mirror finish',
      'Zero-snag tapered prong points hand-burnished under microscope',
      'Exceptional scintillation across staggered diamond leaves'
    ],
    themeColor: '#f43f5e',
    secondaryColor: '#fbbf24'
  },
  {
    id: 'gold-heart-blue-diamonds',
    name: 'Gold Heart Ring with Blue Diamonds',
    category: 'rings',
    categoryLabel: 'Duality Solitaire Band',
    cadFileName: 'Gold Heart Ring with Blue Diamonds - CAD.jpg',
    realFileName: 'Gold Heart Ring with Blue Diamonds - Real.png',
    dimensions: '11.35 mm Heart Motif',
    metal: '18K Yellow Gold',
    primaryGem: 'Swiss Blue Diamonds Micro-Pavé (0.60ct)',
    accentGems: 'Pavé Rail Diamonds along Split Shoulders',
    artisanTechnique: 'Dual-Texture Honeycomb Openwork & Micro-Pavé Setting',
    description: 'A poignant study in contrast: one hemisphere is set with shimmering Swiss blue diamonds, while the other reveals an open geometric architectural grid.',
    cadHighlights: [
      'Exact 11.35mm heart proportion with mathematically aligned triangular lattice',
      'Pavé honeycomb seating with 4-bead diamond prongs at 0.3mm diameter',
      'Split comfort-fit shank with graduated rail gems'
    ],
    finishedHighlights: [
      'Vivid electric blue diamond pavé catching light from every tilt',
      'Razor-sharp lattice cutout lines with hand-chamfered edges',
      'Comfort-fit inner core engineered for daily elegance'
    ],
    themeColor: '#0ea5e9',
    secondaryColor: '#eab308'
  },
  {
    id: 'art-deco-hexagonal-bracelet',
    name: 'The Art Deco Hexagonal Diamond Link Bracelet',
    category: 'bracelets',
    categoryLabel: 'Art Deco Statement Bracelet',
    cadFileName: 'The Art Deco Hexagonal Diamond Link Bracelet - CAD.jpg',
    realFileName: 'The Art Deco Hexagonal Diamond Link Bracelet - Real.png',
    dimensions: '6.00 Inch Length × 16.80 mm Link Station',
    metal: '18K Solid Yellow Gold',
    primaryGem: 'Bezel-Set Solitaire Round Brilliant Diamonds',
    accentGems: 'Channel-Set Micro Diamond Pavé Lines',
    artisanTechnique: 'Articulated Hexagonal Hinge Engineering & Channel Pavé',
    description: 'Streamlined 1920s geometry meets modern luxury: alternating elongated racetrack gold links and pavé-encrusted hexagonal connector nodes.',
    cadHighlights: [
      'Multi-axis miniature gold hinge pins for supple wrist contouring',
      'Exact 16.8mm primary link gauge with internal weight-reduction bevels',
      'Concealed double-safety box clasp integrated into the geometry'
    ],
    finishedHighlights: [
      'Velvet-smooth articulation that glides seamlessly around the wrist',
      'Bright-cut channel pavé diamonds with millgrain border highlights',
      'Solid heavyweight 18k gold feel with unmistakable luxury presence'
    ],
    themeColor: '#eab308',
    secondaryColor: '#e2e8f0'
  },
  {
    id: 'eternal-mother-child-ring',
    name: 'The Eternal Mother & Child Double Heart Ring',
    category: 'rings',
    categoryLabel: 'Symbolic Heirloom Ring',
    cadFileName: 'The Eternal Mother & Child Double Heart Ring - CAD.jpg',
    realFileName: 'The Eternal Mother & Child Double Heart Ring - Real.png',
    dimensions: '16.00 mm Motif Height',
    metal: 'Rhodium-Finished 925 Silver & 18K Yellow Gold Option',
    primaryGem: 'Black Diamond / Black Spinel Pavé Halo',
    accentGems: 'High-Polish Sculpted Silhouette',
    artisanTechnique: 'Lost-Wax Sculptural Casting & Micro Black Gem Setting',
    description: 'An emotional bespoke piece depicting a stylized parent gently cradling a child, enveloped within an outer protective heart bordered in midnight black gems.',
    cadHighlights: [
      'Sculpted 3D figurative contours merged with structural open heart halo',
      '16.0mm vertical balance tailored to rest smoothly without rotation',
      'Flared split-shank architecture for stability'
    ],
    finishedHighlights: [
      'Striking contrast between mirror-polished silver/gold and black pavé',
      'Deep emotional resonance bespoke-tailored for family milestones',
      'Satin-smooth inner contours allowing zero snagging on textiles'
    ],
    themeColor: '#64748b',
    secondaryColor: '#f1f5f9'
  },
  {
    id: 'byzantine-ruby-sapphire-medallion',
    name: 'The Byzantine Crimson Ruby & Sapphire Medallion',
    category: 'necklaces',
    categoryLabel: 'High Jewellery Medallion',
    cadFileName: 'The Byzantine Crimson Ruby & Sapphire Medallion - CAD.jpg',
    realFileName: 'The Byzantine Crimson Ruby & Sapphire Medallion - Real.png',
    dimensions: '57.50 mm Diameter',
    metal: '18K White & Green Gold with Enamel Borders',
    primaryGem: '8.20ct Cushion-Cut Natural Red Ruby',
    accentGems: 'Ceylon Sapphire Baguettes (3.40ct), Pavé Diamond Rims',
    artisanTechnique: 'Radial Sunburst Setting, Channel Baguette Assembly, Meenakari Rims',
    description: 'A breathtaking high-jewellery medallion inspired by royal coronation jewels, centering a fiery red ruby encased in radiating concentric tiers of sapphires, diamonds, and geometric petals.',
    cadHighlights: [
      '57.5mm parametric sunburst chassis with 20 stepped geometric rays',
      'Micro-tolerance baguette channels custom-calibrated for stone widths',
      'Concealed double bail for cord, pearls, or heavy gold chain'
    ],
    finishedHighlights: [
      'Mesmerizing optical fire radiating outward from the fiery central ruby',
      'Emerald green and cobalt blue vitreous enamel borders framing the gems',
      'Museum-grade gallery backing with open floral pierced grille'
    ],
    themeColor: '#dc2626',
    secondaryColor: '#3b82f6'
  },
  {
    id: 'imperial-emerald-cascade-suite',
    name: 'The Imperial Emerald Cascade Gala Suite',
    category: 'necklaces',
    categoryLabel: 'Grand Gala Suite',
    cadFileName: 'The Imperial Emerald Cascade Gala Suite - CAD.jpg',
    realFileName: 'The Imperial Emerald Cascade Gala Suite - Real.png',
    dimensions: '4-Strand Beaded Collar with 80mm Pendant',
    metal: '18K Yellow Gold',
    primaryGem: 'Royal Blue Cushion Sapphire & Emerald Briolettes',
    accentGems: '4-Row Persian Turquoise Beads, Brilliant Diamond Halo',
    artisanTechnique: 'Multi-Strand Bead Stringing, Filigree Piercing, Double Elephant Motif',
    description: 'A regal royal collar uniting four strands of robin-egg turquoise beads with an ornate gold centerpiece featuring royal elephant sentinels, an emerald-cut sapphire, and pear drops.',
    cadHighlights: [
      'Sculpted twin elephant finials serving as bead-to-pendant transition',
      'Octagonal double diamond halo frame with 0.05mm gem seating tolerances',
      'Hinged teardrop briolette pendant loop for natural kinetic sway'
    ],
    finishedHighlights: [
      'Vivid contrast between turquoise blue and incandescent 18k yellow gold',
      'Intense certified royal sapphire center stone with velvety saturation',
      'Heirloom weight and commanding gala presence'
    ],
    themeColor: '#06b6d4',
    secondaryColor: '#eab308'
  },
  {
    id: 'lotus-blossom-vitreous-earrings',
    name: 'The Lotus Blossom Vitreous Enamel Earrings',
    category: 'earrings',
    categoryLabel: 'Grand Floral Statement Earrings',
    cadFileName: 'The Lotus Blossom Vitreous Enamel Earrings - CAD.jpg',
    realFileName: 'The Lotus Blossom Vitreous Enamel Earrings - Real.png',
    dimensions: '60.00 mm Drop Length',
    metal: '18K Yellow Gold',
    primaryGem: 'South Sea Cultured Pearls (12mm)',
    accentGems: 'Vitreous Cobalt Enamel, Emerald Green Drops, Diamonds',
    artisanTechnique: 'Hot Cloisonné Enameling, Pear-Cut Bezels, Pearl Peg Setting',
    description: 'An ode to royal sacred botanicals: brilliant cobalt-blue enameled lotus petals crown an expansive circular filigree mandala finished with a suspended south sea pearl.',
    cadHighlights: [
      '60mm drop proportion calculated with hollow back chamber for lightweight wear',
      'Raised cell dividers for clean separation of glass enamel pastes',
      'Reinforced peg mount for heavy south sea pearl drops'
    ],
    finishedHighlights: [
      'Luminous vitreous glass enamel fired at 800°C for permanent translucent brilliance',
      'Natural pearls featuring radiant mirror-like orient',
      'Diamond pave outlining each scalloped filigree petal'
    ],
    themeColor: '#2563eb',
    secondaryColor: '#10b981'
  },
  {
    id: 'silver-blue-peacock-earrings',
    name: 'Silver & Blue Enamel Peacock Earrings',
    category: 'earrings',
    categoryLabel: 'Majestic Ear Climbers',
    cadFileName: 'Silver & Blue Enamel Peacock Earrings - CAD.jpg',
    realFileName: 'Silver & Blue Enamel Peacock Earrings - Real.png',
    dimensions: '100.00 mm Height × 63.00 mm Width',
    metal: 'Sterling Silver & 18K Yellow Gold Accents',
    primaryGem: 'Shimmering Blue Sapphire Pavé & Tanzanite Beads',
    accentGems: 'Vivid Royal Blue Hand Enamel, Diamond Eyes',
    artisanTechnique: 'High-Relief Feathers, Five Suspended Beaded Tassels',
    description: 'Extravagant 100mm high-jewellery ear jewels celebrating the Peacock in full display, featuring sweeping diamond plumes, blue enamel body, and dangling gem beads.',
    cadHighlights: [
      'Curved 100mm silhouette tailored to flank the jawline with sculptural presence',
      'Independent articulated 5-bead fringe suspension loops along lower trim',
      'Micro-engraved plumage texture modeled down to 0.15mm depth'
    ],
    finishedHighlights: [
      'Vivid royal blue and turquoise gradient enamel along the peacock crest',
      'Tanzanite bead droplets that dance and chime with movement',
      'Secure clip-on post mechanism designed for stable grand gala wear'
    ],
    themeColor: '#3b82f6',
    secondaryColor: '#8b5cf6'
  },
  {
    id: 'royal-mayura-peacock-brooch',
    name: 'The Royal Mayura Peacock Brooch & Medallion',
    category: 'brooches',
    categoryLabel: 'Royal Brooch & Ear Stud Suite',
    cadFileName: 'The Royal Mayura Peacock Brooch & Medallion - CAD.jpg',
    realFileName: 'The Royal Mayura Peacock Brooch & Medallion - Real.png',
    dimensions: '35.00 mm Brooch Span with 10.00 mm Studs',
    metal: '22K Hand-Textured Yellow Gold',
    primaryGem: 'Pear-Shaped Rose Cut Diamond Core',
    accentGems: 'Round Brilliant Diamonds along Plume Tips',
    artisanTechnique: 'Hand Chasing & Repoussé, Bezel Setting, Matching Studs',
    description: 'A majestic royal peacock with fanned tail feathers, each feather tipped with a twinkling diamond, clutching a pear-shaped diamond at its heart. Accompanied by twin ear studs.',
    cadHighlights: [
      'Symmetrical radial plume arrangement with 27 individual diamond cups',
      'Textured body plumage with mathematical feather curvature',
      'Heavy-gauge gold safety pin backing mechanism'
    ],
    finishedHighlights: [
      'Rich buttery 22k gold matte satin finish with polished diamond cups',
      'Subtle diamond glint mimicking morning dew on peacock feathers',
      'Versatile convertible brooch that can also be worn as a pendant'
    ],
    themeColor: '#eab308',
    secondaryColor: '#f8fafc'
  },
  {
    id: 'gold-botanical-filigree-ring',
    name: 'Gold Botanical Filigree Ring',
    category: 'rings',
    categoryLabel: 'Elongated Cocktail Ring',
    cadFileName: 'Gold Botanical Filigree Ring - CAD.jpg',
    realFileName: 'Gold Botanical Filigree Ring - Real.png',
    dimensions: '31.00 mm Vertical Finger Span',
    metal: '22K Solid Yellow Gold',
    primaryGem: 'Swiss Blue Diamonds in Leaf Motifs',
    accentGems: 'Floral Cluster Blossom Center',
    artisanTechnique: 'Open Filigree Wirework & Pavé Foliage',
    description: 'An elongated cocktail ring extending 31mm along the finger, featuring graceful openwork gold scrollwork, a floral rosette, and marquise diamond leaf clusters.',
    cadHighlights: [
      '31mm vertical knuckle span with articulated finger-flex clearance',
      'Airy lattice wirework ensuring light weight and high structural stiffness',
      'Center rosette with 6-petal diamond pavé cluster'
    ],
    finishedHighlights: [
      'Dazzling diamond leaves catching flashes of ice-blue sparkle',
      '22k gold rich warm patina that gleams in candlelight',
      'Statement proportions with an extraordinarily featherlight feel'
    ],
    themeColor: '#38bdf8',
    secondaryColor: '#ca8a04'
  },
  {
    id: 'entwined-heart-split-band',
    name: 'The Entwined Heart Split-Band Ring',
    category: 'rings',
    categoryLabel: 'Romantic Eternity Band',
    cadFileName: 'The Entwined Heart Split-Band Ring - CAD.jpg',
    realFileName: 'The Entwined Heart Split-Band Ring - Real.png',
    dimensions: '8.00 mm Band Width',
    metal: '18K Yellow Gold',
    primaryGem: 'Natural Blue Diamond Micro-Pavé Channels',
    accentGems: 'Continuous Gold Ribbon Heart Motif',
    artisanTechnique: 'Multi-Wire Seamless Bypass & Channel Pavé',
    description: 'Six flowing gold ribbons wrap gracefully around the finger, coming together at the center in an eternal entwined heart illuminated by blue diamond pavé.',
    cadHighlights: [
      '8mm wide band featuring 4 continuous channel rails',
      'Curved heart apex seamlessly transitioning into the outer wire loops',
      'Calculated inner taper for ergonomic finger closure'
    ],
    finishedHighlights: [
      'Precision-set channel stones forming a river of icy blue light',
      'Smooth sculptured heart contour soft to the touch',
      'Bespoke milestone ring frequently chosen for anniversaries'
    ],
    themeColor: '#0284c7',
    secondaryColor: '#eab308'
  },
  {
    id: '22k-gold-collar-necklace',
    name: 'Intricate 22k Gold Collar Necklace',
    category: 'necklaces',
    categoryLabel: 'Traditional Temple Collar',
    cadFileName: '22k Gold Collar Necklace - CAD.jpg',
    realFileName: 'Intricate 22k Gold Collar Necklace - Real.png',
    dimensions: '8.00 Inch Collar Span with Tiered Chandelier Fringe',
    metal: '22K Fine Yellow Gold',
    primaryGem: 'Pure Gold Masterwork (Gemless Haute Orfèvrerie)',
    accentGems: 'Hand-Pierced Lattice Flowers & Polished Golden Droplets',
    artisanTechnique: 'Traditional Hand Piercing, Chased Filigree, Multi-Tier Fringe Suspension',
    description: 'A monument to sovereign goldsmithing: an 8-inch solid 22k gold collar featuring pierced teardrop medallions and five tiers of dangling golden charms.',
    cadHighlights: [
      '8-inch ergonomic collar curve modeled on 3D neck scans for seamless chest fit',
      'Geometric filigree perforations calibrated to maintain 22k structural strength',
      'Stepped graduation from 15mm collar edge to 45mm center cascade'
    ],
    finishedHighlights: [
      'Authentic 22k glowing yellow gold finish with antique buffing',
      'Mesmerizing gentle golden chime as the drops brush against the skin',
      'Master jewel crafted by generational artisans in Rajasthan'
    ],
    themeColor: '#d97706',
    secondaryColor: '#fef3c7'
  },
  {
    id: 'heritage-bird-motif-haar',
    name: 'Heritage Bird-Motif Diamond & Emerald Drop Haar',
    category: 'necklaces',
    categoryLabel: 'Heirloom Grand Haar',
    cadFileName: 'Heritage Bird-Motif Diamond & Emerald Drop Haar - CAD.jpg',
    realFileName: 'Heritage Bird-Motif Diamond & Emerald Drop Haar - Real.png',
    dimensions: '50.00 mm Main Medallion with Zambian Emerald Drops',
    metal: '22K Gold & Silver Foil Kundan Framework',
    primaryGem: 'Natural Polki Uncut Diamonds & Columbian Emeralds',
    accentGems: 'Hand-Carved Zambian Emerald Tumblers & South Sea Seed Pearls',
    artisanTechnique: 'Imperial Polki Jadau, Hand-Engraved Paired Songbirds, Emerald Tassels',
    description: 'An imperial heirloom haar featuring graduated oval stations engraved with auspicious twin songbirds, crowned with brilliant diamond borders and lush green emerald drops.',
    cadHighlights: [
      '50mm center station with dual bird finials and 5 articulated drop brackets',
      'Open-back collet engineering allowing emeralds to touch skin',
      'Reinforced gold link chains between each royal medallion'
    ],
    finishedHighlights: [
      'Natural glowing Zambian emerald briolettes with vivid forest green fire',
      'Flawless polki mirror work catching ambient room luminescence',
      'An unforgettable centerpiece for weddings and royal celebrations'
    ],
    themeColor: '#059669',
    secondaryColor: '#f59e0b'
  },
  {
    id: 'gold-abstract-pendant-earring',
    name: 'Gold Abstract Pendant & Earring Set',
    category: 'necklaces',
    categoryLabel: 'Contemporary Suite',
    cadFileName: 'Gold Abstract Pendant & Earring Set - CAD.jpg',
    realFileName: 'Gold Abstract Pendant & Earring Set - Real.png',
    dimensions: '17.00 mm Pendant with 12.00 mm Matching Earrings',
    metal: '18K Yellow Gold',
    primaryGem: 'Brilliant Blue Diamond Spray Motifs',
    accentGems: 'Pavé Rhombus Frame Diamonds',
    artisanTechnique: 'Brushed Satin Gold Faces, Flush & Pavé Gem Setting',
    description: 'Contemporary geometry for the modern collector: an angled rhombus frame with sweeping interior golden ribbons culminating in a spray of blue diamonds.',
    cadHighlights: [
      'Exact 17mm rhombus proportion balanced for zero-flip suspension on chain',
      'Graduated diamond seatings from 0.8mm to 1.5mm',
      'Twin matching earrings engineered with lightweight hollow gold backs'
    ],
    finishedHighlights: [
      'Velvety brushed satin gold contrasting with mirror-polished bevels',
      'Playful kinetic spray of brilliant blue diamonds',
      'Effortless transition from daywear to black-tie evening events'
    ],
    themeColor: '#38bdf8',
    secondaryColor: '#eab308'
  },
  {
    id: 'ornate-gold-oval-pendant-set',
    name: 'Ornate Gold Oval Pendant and Earring Set',
    category: 'necklaces',
    categoryLabel: 'Concentric Gala Suite',
    cadFileName: 'Ornate Gold Oval Pendant and matching Earring Set - CAD.jpg',
    realFileName: 'Ornate Gold Oval Pendant and matching Earring Set - Real.png',
    dimensions: '32.00 mm Pendant Height × 17.80 mm Earring Height',
    metal: '22K Yellow Gold',
    primaryGem: 'Marquise & Round Ice-Blue Diamond Leaves',
    accentGems: 'Triple Concentric Oval Orbit Hoops',
    artisanTechnique: 'Wire-Forming, Concentric Nesting, Leaf Pavé Stems',
    description: 'Hypnotic concentric golden hoops frame a blossoming sprig of blue diamond leaves, paired with perfectly scaled companion earrings.',
    cadHighlights: [
      'Triple nested wire hoops calculated with 1.8mm progressive gap spacing',
      'Central branch anchor soldered at base for floating optical illusion',
      '17.8mm earring scale optimized for ergonomic ear lobe balance'
    ],
    finishedHighlights: [
      'Floating floral branch creating captivating kinetic depth inside the hoops',
      'Sparkling marquise diamond leaves with icy blue flashes',
      'Sovereign 22k gold warm luster'
    ],
    themeColor: '#38bdf8',
    secondaryColor: '#d97706'
  },
  {
    id: 'gold-blue-stone-ring',
    name: 'Gold and Blue Stone Ring',
    category: 'rings',
    categoryLabel: 'Royal Signet Solitaire',
    cadFileName: 'Gold and Blue Stone Ring - CAD.jpg',
    realFileName: 'Gold and Blue Stone Ring - Real.png',
    dimensions: '16.50 mm Crown Width',
    metal: '18K Solid Yellow Gold',
    primaryGem: '4.80ct Oval Royal Blue Sapphire',
    accentGems: '14 Round Brilliant Diamond Halo (0.70ct)',
    artisanTechnique: 'Granulation Beadwork Shoulders & 4-Prong Crown Setting',
    description: 'An imposing royal signet ring centering an oval royal blue sapphire surrounded by a brilliant diamond halo, with shoulders carved in ancient granulated gold beads.',
    cadHighlights: [
      '16.5mm wide signet presence with interior weight-balancing scallops',
      'Granulation spheres modeled with 0.1mm micro-interlocking welds',
      'Elevated prong basket allowing full light pass-through beneath the pavilion'
    ],
    finishedHighlights: [
      'Royal blue sapphire displaying deep velvety saturation and cornflower fire',
      'High-polish gold beads reflecting pinpricks of light along the shoulders',
      'Substantial heirloom heft that feels commanding on the hand'
    ],
    themeColor: '#1d4ed8',
    secondaryColor: '#eab308'
  }
];

export interface VideoShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  discipline: string;
  visualTheme: string;
  fileName: string;
  fallbackStreamUrl: string;
}

export const CRAFTSMANSHIP_VIDEOS: VideoShowcase[] = [
  {
    id: 'vid-cad-precision',
    title: 'Parametric CAD 3D Blueprinting',
    subtitle: 'From Hand Gesture to Micron Tolerances',
    description: 'Witness the digital birth of an heirloom: sub-millimeter curves, precise gem seatings, and structural balance modeling before a single grain of gold is cast.',
    duration: '0:45',
    discipline: 'Jewels Video 1',
    fileName: 'Jewels Video 1.mp4',
    visualTheme: 'from-blue-900/60 to-slate-900',
    fallbackStreamUrl: '/Jewels_Video_1.mp4'
  },
  {
    id: 'vid-goldsmithing-setting',
    title: 'Master Goldsmithing & Solid 22K Casting',
    subtitle: 'Forging 22K Solid Gold with Generational Hands',
    description: 'The ancient art of lost-wax casting, hand filing, and microscope-guided diamond setting ensuring stones stay secure for lifetimes to come.',
    duration: '0:58',
    discipline: 'Jewels Video 2',
    fileName: 'Jewels Video 2.mp4',
    visualTheme: 'from-amber-900/60 to-slate-900',
    fallbackStreamUrl: '/Jewels_Video_2.mp4'
  },
  {
    id: 'vid-meenakari-enameling',
    title: 'Vitreous Royal Meenakari Enameling',
    subtitle: '800°C Mineral Glass Pigment Firing',
    description: 'Layering crushed mineral glass into hand-engraved gold cells, fired repeatedly in kiln flames to achieve peacock hues that will never fade.',
    duration: '1:12',
    discipline: 'Jewels Video 3',
    fileName: 'Jewels Video 3.mp4',
    visualTheme: 'from-emerald-900/60 to-slate-900',
    fallbackStreamUrl: '/Jewels_Video_3.mp4'
  },
  {
    id: 'vid-finished-polish',
    title: 'The Final Polish & Scintillation',
    subtitle: 'Mirror Lustre & High Jewellery Inspection',
    description: 'Final multi-stage rouge polishing, 40x loupe inspection, and ultrasonic cleansing revealing the blinding brilliance of the finished bespoke jewel.',
    duration: '0:50',
    discipline: 'Jewels Video 4',
    fileName: 'Jewels Video 4.mp4',
    visualTheme: 'from-yellow-900/60 to-slate-900',
    fallbackStreamUrl: '/Jewels_Video_4.mp4'
  }
];

export const PIECE_PRICES: Record<string, { price: string; rating: number; reviews: number }> = {
  'peacock-meenakari-choker': { price: '₹ 1,75,000', rating: 5.0, reviews: 52 },
  'royal-crescent-chandbali': { price: '₹ 78,500', rating: 4.9, reviews: 44 },
  'sovereign-baroque-aquamarine-ring': { price: '₹ 45,000', rating: 5.0, reviews: 38 },
  'art-deco-hexagonal-bracelet': { price: '₹ 1,25,000', rating: 5.0, reviews: 27 },
  'botanical-marquise-vine-ring': { price: '₹ 62,000', rating: 4.9, reviews: 29 },
  'gold-heart-blue-diamonds': { price: '₹ 48,000', rating: 5.0, reviews: 31 },
  'imperial-emerald-gala-suite': { price: '₹ 3,85,000', rating: 5.0, reviews: 19 },
  'byzantine-crimson-medallion': { price: '₹ 95,000', rating: 4.9, reviews: 24 },
  'royal-mayura-peacock-brooch': { price: '₹ 88,000', rating: 5.0, reviews: 33 },
  'lotus-blossom-enamel-earrings': { price: '₹ 68,000', rating: 4.8, reviews: 18 },
  'heritage-bird-emerald-haar': { price: '₹ 2,90,000', rating: 5.0, reviews: 22 },
  'silver-blue-enamel-peacock-earrings': { price: '₹ 38,000', rating: 4.9, reviews: 41 },
  'eternal-mother-child-ring': { price: '₹ 42,000', rating: 4.8, reviews: 36 },
  'entwined-heart-split-ring': { price: '₹ 48,500', rating: 4.9, reviews: 28 },
  'rose-gold-leaf-bypass-ring': { price: '₹ 52,000', rating: 4.9, reviews: 35 },
  'gold-blue-stone-ring': { price: '₹ 39,500', rating: 4.8, reviews: 19 },
  'gold-botanical-filigree-ring': { price: '₹ 56,000', rating: 4.9, reviews: 26 },
  'ornate-gold-oval-pendant-set': { price: '₹ 1,15,000', rating: 5.0, reviews: 30 },
  'gold-abstract-pendant-earring-set': { price: '₹ 82,000', rating: 4.8, reviews: 21 },
  'intricate-22k-gold-collar': { price: '₹ 2,40,000', rating: 5.0, reviews: 47 }
};

export function getPiecePrice(piece: JewelryPiece): string {
  return PIECE_PRICES[piece.id]?.price || piece.priceInr || '₹ 75,000';
}

export function getPieceRating(piece: JewelryPiece): { rating: number; reviews: number } {
  return PIECE_PRICES[piece.id] || { rating: 5.0, reviews: 30 };
}

