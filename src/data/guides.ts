export interface GuideSection {
  heading: string;
  content: string;
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface MaterialGuide {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metaDescription: string;
  category: 'Plywood' | 'Laminates' | 'Hardware' | 'Hosur Buying';
  publishDate: string;
  readTime: string;
  heroImage: string;
  summary: string;
  sections: GuideSection[];
  commonMistakes: string[];
  practicalTakeaways: string[];
  relatedCategory: string;
  relatedCategoryLink: string;
  ctaText: string;
}

export const MATERIAL_GUIDES: MaterialGuide[] = [
  {
    slug: 'best-plywood-for-kitchen',
    title: 'Which Plywood Is Best for Kitchen Cabinets?',
    shortTitle: 'Best Plywood for Kitchens',
    subtitle: 'A practical guide to choosing moisture-resistant and BWP marine plywood for modular kitchen cabinets in Hosur.',
    metaDescription: 'Learn how to choose plywood for kitchen cabinets based on moisture exposure, strength, and budget. Practical guidance from Sri Krishna Plywoods & Hardwares in Hosur.',
    category: 'Plywood',
    publishDate: '2026-08-15',
    readTime: '6 min read',
    heroImage: '/images/hero.jpg',
    summary: 'Kitchen cabinets operate under constant moisture exposure, cooking heat, and heavy utensil loads. Choosing Boiling Water Proof (BWP) IS:710 plywood ensures your kitchen carcass won’t swell, delaminate, or warp over time.',
    sections: [
      {
        heading: 'Why Kitchen Cabinet Material Matters',
        content: 'Kitchens are humid environments where water splashes from sinks, steam escapes from cooking vessels, and wet utensils rest inside drawers. Standard commercial board absorbs moisture over time, causing edges to expand and screw hinges to loosen. Selecting moisture-tolerant BWP grade plywood prevents structural sagging.',
      },
      {
        heading: 'Understanding Plywood Grades for Kitchen Use',
        content: 'Indian Standard grades define how plywood handles water exposure:',
        bullets: [
          'BWP Grade (IS:710): Bonded with 100% unextended phenol formaldehyde synthetic resin. Withstands boiling water for up to 72 hours. Recommended for under-sink units, base cabinets, and drawer boxes.',
          'BWR Grade (IS:303): Boiling Water Resistant grade using phenolic adhesives. Suitable for wall cabinets away from direct water contact.',
          'MR Commercial Grade (IS:303): Moisture Resistant for dry areas. Not recommended for kitchen base cabinets.',
        ],
      },
      {
        heading: 'Plywood Thickness Recommendations for Kitchens',
        content: 'Correct thickness selection ensures structural rigidity under heavy cookware:',
        table: {
          headers: ['Cabinet Component', 'Recommended Thickness', 'Material Grade'],
          rows: [
            ['Base Cabinet Carcass', '18mm / 19mm', 'IS:710 BWP Hardwood'],
            ['Under-Sink Vanity Box', '18mm / 19mm', 'IS:710 BWP Marine Grade'],
            ['Wall Overhead Cabinets', '18mm / 19mm', 'IS:710 BWP or IS:303 BWR'],
            ['Drawer Box Insides', '12mm', 'IS:710 BWP Calibrated'],
            ['Back Panelling & Bottoms', '6mm / 9mm', 'IS:710 BWP Grade'],
          ],
        },
      },
      {
        heading: 'What to Ask Before Buying Kitchen Plywood',
        content: 'When purchasing plywood from a local supplier in Hosur, verify:',
        bullets: [
          'Is the sheet ISI stamped with IS:710 BWP certification?',
          'Is the core made of 100% hardwood timber rather than mixed softwoods?',
          'Is the plywood calibrated to ensure uniform thickness for laminate pressing?',
          'Does the manufacturer supply a borer and termite warranty?',
        ],
      },
    ],
    commonMistakes: [
      'Using commercial MR grade plywood under the kitchen sink to save cost.',
      'Failing to seal unlaminated plywood edges near plumbing lines.',
      'Selecting non-calibrated plywood, causing visible ripples under high-gloss laminates.',
    ],
    practicalTakeaways: [
      'Use 18mm/19mm BWP IS:710 plywood for all kitchen base boxes.',
      'Ensure 1mm high-pressure decorative laminate is applied on the outside and 0.8mm liner laminate on the inside.',
      'Pair quality plywood with soft-close SS304 hydraulic hinges.',
    ],
    relatedCategory: 'Plywood Products',
    relatedCategoryLink: '/products/plywood',
    ctaText: 'Need BWP plywood quotes for your kitchen project in Hosur? Call Sri Krishna Plywoods & Hardwares at 9944057507 or visit our store at Indira Nagar.',
  },

  {
    slug: 'commercial-vs-waterproof-plywood',
    title: 'Commercial Plywood vs Waterproof Plywood: What’s the Difference?',
    shortTitle: 'Commercial vs Waterproof Plywood',
    subtitle: 'Compare IS:303 Commercial MR Plywood and IS:710 BWP Waterproof Plywood for furniture and interior joinery.',
    metaDescription: 'Understand the key differences between commercial MR plywood and BWP waterproof plywood. A practical material comparison guide from Sri Krishna Plywoods & Hardwares Hosur.',
    category: 'Plywood',
    publishDate: '2026-08-12',
    readTime: '5 min read',
    heroImage: '/images/plywood.jpg',
    summary: 'Choosing between commercial MR plywood and waterproof BWP plywood comes down to location, moisture exposure, and budget. While waterproof plywood excels in wet areas, commercial plywood remains an economical choice for dry bedrooms.',
    sections: [
      {
        heading: 'The Core Difference: Adhesive Resin',
        content: 'The essential distinction between commercial and waterproof plywood is the chemical resin used to bond timber veneers. Commercial MR (Moisture Resistant) plywood uses Urea Formaldehyde (UF) resin, which resists normal room humidity but breaks down under prolonged water exposure. Waterproof BWP (Boiling Water Proof) plywood uses Phenol Formaldehyde (PF) resin, which forms a permanent chemical bond immune to water degradation.',
      },
      {
        heading: 'Application Comparison',
        content: 'Matching the right plywood grade to room usage prevents overspending while ensuring long-term performance:',
        table: {
          headers: ['Feature', 'Commercial Plywood (IS:303 MR)', 'Waterproof Plywood (IS:710 BWP)'],
          rows: [
            ['Resin Adhesive', 'Urea Formaldehyde (UF)', 'Phenol Formaldehyde (PF)'],
            ['Boiling Water Resistance', 'Not recommended for water exposure', 'Resists boiling water for 72+ hours'],
            ['Primary Applications', 'Bedroom Wardrobes, TV Units, Study Desks', 'Kitchen Cabinets, Bathroom Vanities, Balcony Units'],
            ['Termite / Borer Protection', 'Chemical treated for indoor dry use', 'Heavy vacuum pressure preservative treated'],
            ['Price Point', 'Economical / Cost-effective', 'Premium structural investment'],
          ],
        },
      },
      {
        heading: 'Where Commercial Plywood Makes Sense',
        content: 'Commercial plywood is suitable for dry indoor applications where water exposure is virtually zero: bedroom wardrobe carcasses, living room wall panelling, study tables, ceiling framework, and shoe cabinets placed away from entrance rain.',
      },
    ],
    commonMistakes: [
      'Assuming "Moisture Resistant" (MR) commercial plywood is waterproof.',
      'Using premium BWP marine plywood for temporary internal partitions where MR plywood is sufficient.',
    ],
    practicalTakeaways: [
      'Reserve BWP IS:710 plywood for kitchens, bathrooms, and wet areas.',
      'Use IS:303 MR commercial plywood for bedroom wardrobes to optimize your project budget.',
    ],
    relatedCategory: 'Plywood Range',
    relatedCategoryLink: '/products/plywood',
    ctaText: 'Have questions about choosing between commercial and waterproof plywood for your Hosur home? Speak with our team at Sri Krishna Plywoods & Hardwares on 9944057507.',
  },

  {
    slug: 'how-to-choose-laminates',
    title: 'How to Choose the Right Laminate for Your Interior',
    shortTitle: 'Choosing Decorative Laminates',
    subtitle: 'A guide to surface textures, sheet thickness, anti-fingerprint matte, and high-gloss finishes for wardrobes and kitchens.',
    metaDescription: 'Learn how to select 1.0mm decorative laminates, matte swatches, and woodgrain textures for kitchens and wardrobes. Practical guide from Sri Krishna Plywoods & Hardwares Hosur.',
    category: 'Laminates',
    publishDate: '2026-08-10',
    readTime: '5 min read',
    heroImage: '/images/laminates.jpg',
    summary: 'Decorative laminates define the visual texture of modern home interiors. From anti-fingerprint super-matte sheets to synchronized natural wood grains, selecting the right finish balances aesthetics with maintenance.',
    sections: [
      {
        heading: 'Laminate Sheet Thickness: 1.0mm vs 0.8mm',
        content: 'Laminates come in standard thickness variations:',
        bullets: [
          '1.0mm Decorative Laminates: Recommended for all visible exterior surfaces, wardrobe door shutters, kitchen cabinet fronts, and wall panel highlights. 1mm sheets provide superior impact resistance and suppress substrate undulations.',
          '0.8mm / 0.7mm Liner Laminates: Used for internal cabinet boxes, drawer insides, and non-visible surfaces. Liner laminates protect plywood from humidity and wipe clean easily.',
        ],
      },
      {
        heading: 'Selecting Surface Finishes by Room',
        content: 'Different surface textures suit specific interior zones:',
        bullets: [
          'Kitchen Shutters: Anti-fingerprint matte, acrylic high-gloss, or suede finishes wipe clean easily and minimize oil smudges.',
          'Bedroom Wardrobes: Synchronized natural woodgrain or soft-touch velvet laminates add warmth and tactile elegance.',
          'Commercial Desks: High-pressure 1.0mm textured laminates resist daily scratch marks and pen impressions.',
        ],
      },
    ],
    commonMistakes: [
      'Applying thin 0.8mm decorative laminates on main wardrobe doors, leading to telegraphing (subtraction of ply grain underneath).',
      'Using dark untextured matte laminates in heavy grease kitchen zones.',
    ],
    practicalTakeaways: [
      'Use 1.0mm decorative laminates for exterior shutters and 0.8mm off-white liners for cabinet insides.',
      'Pair high-gloss laminates with calibrated flat plywood sheets for a mirror-like finish.',
    ],
    relatedCategory: 'Laminate Collections',
    relatedCategoryLink: '/products/laminates',
    ctaText: 'Explore Greenlam and high-pressure decorative laminate swatches at Sri Krishna Plywoods & Hardwares in Hosur. Call 9944057507 for swatch catalogs.',
  },

  {
    slug: 'plywood-thickness-guide',
    title: 'What Plywood Thickness Should You Use for Furniture?',
    shortTitle: 'Plywood Thickness Guide',
    subtitle: 'Understand appropriate thickness standards (6mm, 9mm, 12mm, 18mm/19mm) for structural shelves, wardrobe doors, and drawer boxes.',
    metaDescription: 'Find out which plywood thickness to use for wardrobes, kitchen cabinets, drawers, and back panels. Practical guide from Sri Krishna Plywoods & Hardwares in Hosur.',
    category: 'Plywood',
    publishDate: '2026-08-08',
    readTime: '4 min read',
    heroImage: '/images/plywood.jpg',
    summary: 'Selecting the proper plywood thickness prevents structural bowing under heavy loads while avoiding unnecessary weight and expense. Here is how carpenters and designers specify thickness for home interiors.',
    sections: [
      {
        heading: 'Standard Plywood Thickness Applications',
        content: 'Indian plywood sheets are available in standard millimeter thicknesses:',
        table: {
          headers: ['Thickness', 'Primary Furniture Usage', 'Why This Thickness Matters'],
          rows: [
            ['18mm / 19mm', 'Wardrobe shutters, cabinet carcasses, bed frames, main shelves', 'Provides structural load-bearing capacity and screw retention without bending.'],
            ['12mm', 'Drawer box side walls, light shelving, cabinet dividers', 'Offers a balance between lightness and structural rigidity for movable drawers.'],
            ['6mm / 9mm', 'Wardrobe back panels, drawer bottoms, wall panelling backing', 'Reduces overall furniture weight while sealing the back box against dust.'],
            ['25mm', 'Heavy-duty commercial tabletops, thick counter supports', 'Used for wide spans requiring maximum bending resistance.'],
          ],
        },
      },
      {
        heading: 'Why Calibrated Plywood Matters for 18mm Sheets',
        content: 'Calibrated plywood undergoes precision sanding during manufacturing to maintain uniform 18.0mm thickness across the entire 8ft x 4ft sheet. Uncalibrated plywood with thickness variations (ranging from 17mm to 19mm on the same sheet) leads to visible seam gaps when joining cabinets.',
      },
    ],
    commonMistakes: [
      'Using 12mm plywood for wide wardrobe doors, resulting in door warping over time.',
      'Using thin 4mm backboards that bulge when drawers are filled.',
    ],
    practicalTakeaways: [
      'Insist on 18mm/19mm calibrated plywood for main wardrobe doors and kitchen cabinet frames.',
      'Use 12mm for drawer frames and 6mm/9mm for back panels.',
    ],
    relatedCategory: 'Plywood Catalog',
    relatedCategoryLink: '/products/plywood',
    ctaText: 'Visit Sri Krishna Plywoods & Hardwares at Avalapalli Hudco, Hosur to inspect 6mm to 19mm calibrated plywood sheets. Call 9944057507.',
  },

  {
    slug: 'kitchen-hardware-guide',
    title: 'Complete Guide to Kitchen Hardware: Hinges, Channels & Fittings',
    shortTitle: 'Kitchen Hardware Guide',
    subtitle: 'An overview of soft-close hydraulic hinges, telescopic drawer channels, lift-up systems, and cabinet handles.',
    metaDescription: 'Learn how to select soft-close hydraulic hinges, drawer channels, and handles for modular kitchens. Practical guide from Sri Krishna Plywoods & Hardwares Hosur.',
    category: 'Hardware',
    publishDate: '2026-08-05',
    readTime: '6 min read',
    heroImage: '/images/hardware.jpg',
    summary: 'Hardware fittings are the functional engine of any modular kitchen. High-grade soft-close hinges and heavy-duty drawer slides ensure silent cabinet operation for tens of thousands of cycles.',
    sections: [
      {
        heading: 'Understanding Cabinet Hinges: Overlay Types',
        content: 'Concealed cabinet hinges are categorized by door overlap:',
        bullets: [
          'Full Overlay (0 Crank): Used when the cabinet door completely covers the side gable wall.',
          'Half Overlay (8 Crank): Used when two adjacent cabinet doors share a single divider wall.',
          'Inset (15 Crank): Used when the cabinet door sits flush inside the gable frame.',
        ],
      },
      {
        heading: 'Drawer Slide Systems: Telescopic vs Undermount',
        content: 'Choose drawer slides based on weight capacity and aesthetics:',
        bullets: [
          'Ball-Bearing Telescopic Channels: Mounted on the sides of drawer boxes. Rated for 35kg to 45kg loads, providing full extension access.',
          'Concealed Undermount Soft-Close Slides: Mounted beneath the drawer box for clean concealed aesthetics and whisper-quiet closure.',
        ],
      },
    ],
    commonMistakes: [
      'Installing ordinary non-hydraulic hinges on kitchen doors, leading to door slamming.',
      'Selecting lightweight drawer channels for heavy pot and pan drawers.',
    ],
    practicalTakeaways: [
      'Choose SS304 soft-close hydraulic hinges for long-lasting corrosion resistance in kitchens.',
      'Opt for 45kg load-rated telescopic channels for utensil storage drawers.',
    ],
    relatedCategory: 'Hardware Range',
    relatedCategoryLink: '/products/hardware',
    ctaText: 'Inspect modern soft-close hinges, handles, and drawer channels at Sri Krishna Plywoods & Hardwares in Hosur. Call 9944057507.',
  },

  {
    slug: 'plywood-shopping-hosur',
    title: 'Plywood & Interior Material Shopping Guide for Homeowners in Hosur',
    shortTitle: 'Hosur Material Shopping Guide',
    subtitle: 'How to plan, budget, and source plywood, laminates, and hardware for new homes and interior renovations in Hosur.',
    metaDescription: 'A practical material purchasing guide for home builders and interior clients in Hosur. Learn where to buy and how to verify plywood grades at Sri Krishna Plywoods & Hardwares.',
    category: 'Hosur Buying',
    publishDate: '2026-08-01',
    readTime: '7 min read',
    heroImage: '/images/showroom.jpg',
    summary: 'Building or renovating a home in Hosur requires sourcing reliable materials across multiple categories—structural plywood, decorative surface laminates, hardware fittings, and wood adhesives. Sourcing from a trusted local store ensures genuine brand warranties and consistent delivery.',
    sections: [
      {
        heading: 'Planning Interior Materials for Hosur Homes',
        content: 'Hosur’s residential growth across Avalapalli Hudco, Indira Nagar, Mathigiri, and SIPCOT corridors has increased demand for modern modular interiors. Organizing your material purchase step-by-step prevents project delays:',
        bullets: [
          'Step 1: Calculate structural plywood sheet counts (8ft x 4ft) based on carpenter cutting lists.',
          'Step 2: Match BWP waterproof grade for kitchens and MR grade for bedroom wardrobes.',
          'Step 3: Select matching 1.0mm decorative laminates for exterior fronts and 0.8mm liners for internal boxes.',
          'Step 4: Source soft-close hydraulic hardware and genuine Fevicol adhesives together.',
        ],
      },
      {
        heading: 'Sourcing Everything Under One Roof in Hosur',
        content: 'Sri Krishna Plywoods & Hardwares at 10/1, Near Pallavi Super Market, Indira Nagar, Avalapalli Hudco, Hosur, Tamil Nadu 635109 provides complete material supply for home projects. Consolidating your purchase ensures full compatibility between plywood sheet calibration, laminate press adhesion, and hinge mounting.',
      },
    ],
    commonMistakes: [
      'Buying plywood from one store and hardware from another without verifying thickness compatibility.',
      'Purchasing unbranded plywood without ISI certification stamps.',
    ],
    practicalTakeaways: [
      'Visit Sri Krishna Plywoods & Hardwares at Indira Nagar, Avalapalli Hudco, Hosur to view physical material samples.',
      'Call 9944057507 for material quotes and project delivery guidance across Hosur.',
    ],
    relatedCategory: 'Store Contact & Location',
    relatedCategoryLink: '/contact',
    ctaText: 'Visit Sri Krishna Plywoods & Hardwares at 10/1 Indira Nagar, Avalapalli Hudco, Hosur, Tamil Nadu 635109 or call 9944057507.',
  },
];
