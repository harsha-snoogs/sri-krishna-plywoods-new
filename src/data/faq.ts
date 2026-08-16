export interface FaqItem {
  id: string;
  category: 'plywood' | 'laminates' | 'hardware' | 'hosur-buying';
  categoryLabel: string;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    href: string;
  };
}

export const FAQ_DATA: FaqItem[] = [
  // --- PLYWOOD FAQs ---
  {
    id: 'best-plywood-kitchen-cabinets',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'Which plywood is best for kitchen cabinets?',
    answer: 'For kitchen cabinets—especially under-sink units, base cabinets, and areas near water outlets—Boiling Water Proof (BWP) grade IS:710 plywood is recommended. BWP plywood is bonded with unextended phenol formaldehyde synthetic resin, making it resistant to prolonged water exposure, steam, and high humidity. For upper wall cabinets where direct water contact is minimal, Moisture Resistant (MR) IS:303 commercial plywood can also be used, though BWP provides superior long-term durability.',
    relatedLink: {
      label: 'Read Full Kitchen Plywood Guide',
      href: '/guides/best-plywood-for-kitchen',
    },
  },
  {
    id: 'commercial-vs-waterproof-plywood',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'What is the difference between commercial plywood and waterproof plywood?',
    answer: 'The primary difference lies in the resin adhesive used and moisture tolerance. Commercial plywood (IS:303 MR grade) uses urea formaldehyde resin suitable for dry interior applications like bedroom wardrobes, TV units, and panelling. Waterproof plywood (IS:710 BWP grade) uses phenol formaldehyde resin, which can withstand boiling water for up to 72 hours without delaminating. Waterproof plywood is essential for kitchens and bathrooms, whereas commercial plywood is cost-effective for dry rooms.',
    relatedLink: {
      label: 'Compare Commercial vs Waterproof Plywood',
      href: '/guides/commercial-vs-waterproof-plywood',
    },
  },
  {
    id: 'bwp-plywood-meaning-uses',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'What is BWP plywood and where is it used?',
    answer: 'BWP stands for Boiling Water Proof. It is the highest structural grade of plywood specified under Indian Standard IS:710. BWP plywood is treated with anti-termite and anti-borer chemicals and manufactured with 100% hardwood veneers. Common applications include modular kitchen cabinets, bathroom vanity boxes, outdoor furniture frames, and under-counter sink storage.',
    relatedLink: {
      label: 'View BWP Plywood Specifications',
      href: '/products/plywood',
    },
  },
  {
    id: 'plywood-thickness-wardrobes-cabinets',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'What plywood thickness is commonly used for wardrobes and cabinets?',
    answer: 'Standard interior furniture uses a combination of thicknesses: 18mm or 19mm plywood is used for structural carcasses, vertical gables, shelves, and cabinet doors to prevent sagging under load; 12mm plywood is used for internal drawer boxes and lighter shelving; 6mm or 9mm plywood is used for wardrobe back panels and drawer bottoms. Using calibrated 18mm/19mm sheets ensures a flat substrate for 1mm laminate application.',
    relatedLink: {
      label: 'Read Full Plywood Thickness Guide',
      href: '/guides/plywood-thickness-guide',
    },
  },
  {
    id: 'marine-plywood-vs-bwp-plywood',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'What is the difference between marine plywood and BWP plywood?',
    answer: 'In the Indian timber market, BWP (Boiling Water Proof) plywood and Marine Plywood are often used interchangeably under IS:710 standards. True marine plywood is specifically engineered for marine vessel construction using dense hardwood veneers and strict void-free core construction. For residential interior joinery and kitchens in Hosur, IS:710 BWP grade plywood offers identical boiling-water resistance and structural stability required for home carpentry.',
  },
  {
    id: 'how-to-choose-right-plywood-furniture',
    category: 'plywood',
    categoryLabel: 'Plywood',
    question: 'How do I choose the right plywood for furniture?',
    answer: 'To choose the right plywood, evaluate three main factors: 1) Exposure to moisture (choose IS:710 BWP for kitchens/baths and IS:303 MR for dry rooms); 2) Structural load requirements (use 18mm/19mm for load-bearing shelves and frames); 3) Surface flatness (opt for calibrated plywood to avoid uneven laminate finishes). Always check for ISI certification stamps and anti-borer guarantees.',
    relatedLink: {
      label: 'Explore All Plywood Products',
      href: '/products/plywood',
    },
  },

  // --- LAMINATES FAQs ---
  {
    id: 'choose-right-laminate-kitchen',
    category: 'laminates',
    categoryLabel: 'Laminates',
    question: 'How do I choose the right laminate for a kitchen?',
    answer: 'For kitchen shutters and cabinets, look for 1.0mm thickness high-pressure laminates with anti-bacterial and scratch-resistant properties. High-gloss or acrylic laminates create a spacious modern look and wipe clean easily, while anti-fingerprint suede or ultra-matte finishes reduce visible oil marks and smudges. Avoid very light untextured matte laminates in heavy cooking areas near stoves.',
    relatedLink: {
      label: 'Read Kitchen Laminates Selection Guide',
      href: '/guides/how-to-choose-laminates',
    },
  },
  {
    id: 'laminate-finishes-difference',
    category: 'laminates',
    categoryLabel: 'Laminates',
    question: 'What is the difference between different laminate finishes?',
    answer: 'Laminate finishes change surface texture and light reflectivity: Gloss finish offers high shine and vivid depth; Matt finish provides a subtle non-reflective surface; Anti-Fingerprint Matt uses thermal technology to resist oil marks; Woodgrain / Synchronized finish replicates natural timber grain texture to the touch; Textured / Suede finish provides tactile depth resistant to micro-scratches.',
  },
  {
    id: 'suitable-laminates-wardrobes-cabinets',
    category: 'laminates',
    categoryLabel: 'Laminates',
    question: 'Which laminate is suitable for wardrobes and cabinets?',
    answer: 'For exterior wardrobe doors, 1.0mm decorative laminates in textured woodgrain, soft linen, or anti-fingerprint matte are ideal. For wardrobe interiors (liner laminates), 0.7mm or 0.8mm off-white or fabric-print liner laminates are economical, hygienic, and easy to keep clean.',
    relatedLink: {
      label: 'Browse Laminate Catalog',
      href: '/products/laminates',
    },
  },

  // --- HARDWARE FAQs ---
  {
    id: 'hardware-needed-modular-kitchen',
    category: 'hardware',
    categoryLabel: 'Hardware',
    question: 'What hardware is needed for a modular kitchen?',
    answer: 'A standard modular kitchen requires soft-close 3D hydraulic hinges (full overlay and half overlay), telescopic or undermount soft-close drawer channel systems, gas pumps or lift-up mechanisms for overhead cabinets, corner storage accessories (magic corners or carousel units), tall unit pull-outs, and ergonomic handles or profile handle channels.',
    relatedLink: {
      label: 'Read Complete Kitchen Hardware Guide',
      href: '/guides/kitchen-hardware-guide',
    },
  },
  {
    id: 'choose-hinges-drawer-channels',
    category: 'hardware',
    categoryLabel: 'Hardware',
    question: 'How do I choose hinges and drawer channels for furniture?',
    answer: 'Select cabinet hinges based on door overlay (0 crank for full overlay, 8 crank for half overlay, 15 crank for inset) and insist on integrated hydraulic soft-close dampers to prevent door slam. For drawer channels, choose ball-bearing telescopic slides rated for 35kg–45kg load capacity or undermount concealed soft-close runners for high-end cabinetry.',
  },
  {
    id: 'wardrobe-hardware-considerations',
    category: 'hardware',
    categoryLabel: 'Hardware',
    question: 'What hardware should I consider when building a wardrobe?',
    answer: 'Key wardrobe hardware includes soft-close concealed hinges or heavy-duty sliding door track systems, oval clothing hanging rods with zinc support brackets, mortise door locks or multi-drawer locks, pull-out shoe racks, tie/belt organizers, and long vertical profile handles.',
    relatedLink: {
      label: 'Explore Hardware Catalog',
      href: '/products/hardware',
    },
  },

  // --- BUYING IN HOSUR FAQs ---
  {
    id: 'where-to-buy-plywood-laminates-hosur',
    category: 'hosur-buying',
    categoryLabel: 'Buying in Hosur',
    question: 'Where can I buy plywood and laminates in Hosur?',
    answer: 'Sri Krishna Plywoods & Hardwares is located at 10/1, Near Pallavi Super Market, Indira Nagar, Avalapalli Hudco, Hosur, Tamil Nadu 635109. We stock structural plywoods, decorative laminates, cabinet hardware, and wood adhesives for home builders, interior designers, carpenters, and contractors across Hosur.',
    relatedLink: {
      label: 'Get Directions to Store',
      href: '/contact',
    },
  },
  {
    id: 'brands-available-hosur-store',
    category: 'hosur-buying',
    categoryLabel: 'Buying in Hosur',
    question: 'Which plywood and laminate brands are available in Hosur?',
    answer: 'At Sri Krishna Plywoods & Hardwares in Hosur, we carry materials from trusted brands including Greenply (BWP & commercial plywood), Century (firewall & BWP plywood), Greenlam (1mm decorative laminates), and Fevicol (SH, Marine & synthetic wood adhesives).',
    relatedLink: {
      label: 'View Stocked Brands',
      href: '/brands',
    },
  },
  {
    id: 'choose-right-materials-interior-project',
    category: 'hosur-buying',
    categoryLabel: 'Buying in Hosur',
    question: 'How can I choose the right materials for an interior project?',
    answer: 'Start by listing room requirements: specify BWP plywood for wet areas (kitchens and bathrooms) and MR commercial plywood for bedroom wardrobes; select scratch-resistant 1mm laminates for visible fronts and 0.8mm liner laminates for cabinet interiors; pair with soft-close hydraulic hardware. You can visit Sri Krishna Plywoods & Hardwares at Indira Nagar, Hosur or call 9944057507 for practical material guidance.',
    relatedLink: {
      label: 'Read Homeowner Shopping Guide for Hosur',
      href: '/guides/plywood-shopping-hosur',
    },
  },
  {
    id: 'one-stop-shop-plywood-laminates-hardware-hosur',
    category: 'hosur-buying',
    categoryLabel: 'Buying in Hosur',
    question: 'Can I get plywood, laminates and hardware from the same store in Hosur?',
    answer: 'Yes. Sri Krishna Plywoods & Hardwares provides a single material destination in Hosur for plywood sheets, decorative laminates, door handles, hydraulic hinges, drawer channels, and Fevicol adhesives. Sourcing everything from one store saves time and ensures full material compatibility for your interior project.',
    relatedLink: {
      label: 'Contact Sri Krishna Plywoods & Hardwares',
      href: '/contact',
    },
  },
];
