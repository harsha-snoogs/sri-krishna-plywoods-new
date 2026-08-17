export interface ProductItem {
  id: string;
  name: string;
  category:
    | "plywood"
    | "laminates"
    | "hardware"
    | "adhesives"
    | "interior-materials";
  shortDesc: string;
  description: string;
  features: string[];
  brandsAvailable: string[];
  applications: string[];
  specifications: Record<string, string>;
  image: string;
}

export interface BrandItem {
  name: string;
  category: string;
  description: string;
  tagline: string;
}

export const BUSINESS_DATA = {
  name: "Sri Krishna Plywoods & Hardwares",
  shortName: "Sri Krishna Plywoods & Hardwares",
  tagline: "Premium Materials for Better Interiors",
  phone: "9944057507",
  formattedPhone: "+91 99440 57507",
  telLink: "tel:+919944057507",
  address: {
    street: "10/1, Near Pallavi Super Market, Indira Nagar, Avalapalli Hudco",
    city: "Hosur",
    state: "Tamil Nadu",
    pincode: "635109",
    country: "India",
    full: "10/1, Near Pallavi Super Market, Indira Nagar, Avalapalli Hudco, Hosur, Tamil Nadu 635109, India",
    locality: "Avalapalli Hudco",
    landmark: "Near Pallavi Super Market",
  },
  geo: {
    latitude: "12.7230",
    longitude: "77.8310",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Plywoods+%26+Hardwares+10%2F1+Near+Pallavi+Super+Market+Indira+Nagar+Avalapalli+Hudco+Hosur+Tamil+Nadu+635109",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { days: "Sunday", time: "Holiday" },
  ],
  serviceArea: [
    "Hosur",
    "Avalapalli Hudco",
    "Indira Nagar",
    "Inner Ring Road Area",
    "SIPCOT Hosur",
    "Mathigiri",
    "Zuzuvadi",
    "Chandapura Boundary",
  ],
  meta: {
    defaultTitle:
      "Sri Krishna Plywoods & Hardwares | Plywood & Hardware Shop in Hosur",
    defaultDescription:
      "Sri Krishna Plywoods & Hardwares in Hosur offers premium plywood, laminates, hardware, adhesives and interior materials from trusted brands. Visit us at Indira Nagar or call 9944057507.",
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://srikrishnaplywoods.yukhtara.in",
  },
};

export const TRUSTED_BRANDS: BrandItem[] = [
  {
    name: "Greenply",
    category: "Plywood & Blockboards",
    description:
      "Industry leader in zero-emission, moisture-resistant structural plywoods and architectural blockboards.",
    tagline: "Structural Strength & E0 Safety",
  },
  {
    name: "Fevicol",
    category: "Wood & Construction Adhesives",
    description:
      "India's standard for wood bonding, offering marine-grade adhesives, heat-proof formulations, and fast-curing resins.",
    tagline: "Unmatched Bond Strength",
  },
  {
    name: "Greenlam",
    category: "Decorative Laminates",
    description:
      "World-class surface laminates featuring anti-bacterial protection, anti-fingerprint matte finishes, and authentic wood grains.",
    tagline: "Architectural Surface Elegance",
  },
  {
    name: "Century",
    category: "Plywood & Decorative Veneers",
    description:
      "High-density firewall plywoods and premium decorative veneers for lasting commercial and residential interiors.",
    tagline: "Fire-Retardant & Borer-Proof Quality",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    slug: "plywood",
    title: "Plywood",
    subtitle:
      "Reliable foundations for furniture, interiors and architectural applications.",
    description:
      "Engineered for dimensional stability, high load-bearing capacity, and termite resistance. Ideal for custom kitchen cabinetry, wardrobes, beds, and structural interior framing across Hosur.",
    image: "/images/plywood.jpg",
    highlights: [
      "BWP Waterproof Plywood",
      "Commercial Grade MR Plywood",
      "Calibrated Hardwood Plywood",
      "Borer & Termite Proof Warranty",
    ],
  },
  {
    slug: "laminates",
    title: "Laminates",
    subtitle:
      "Exquisite surface finishes that elevate wardrobes, kitchen fronts, and wall paneling.",
    description:
      "Explore a diverse selection of high-pressure laminates including super-matte anti-fingerprint textures, synchronized natural wood grains, and high-gloss acrylic finishes.",
    image: "/images/laminates.jpg",
    highlights: [
      "High-Pressure Decorative Laminates",
      "Anti-Fingerprint Matte Swatches",
      "Synchronized Woodgrain Textures",
      "Scratch & Heat Resistant Surfaces",
    ],
  },
  {
    slug: "hardware",
    title: "Hardware",
    subtitle:
      "Precision door fittings, cabinet hinges, and architectural drawer systems.",
    description:
      "High-durability functional hardware designed for smooth operation and modern aesthetics. Complete range of soft-close hinges, mortise locks, drawer slides, and handles.",
    image: "/images/hardware.jpg",
    highlights: [
      "Soft-Close Hydraulic Hinges",
      "Brushed Brass & Matt Black Handles",
      "Telescopic & Undermount Drawer Channels",
      "Heavy Duty Mortise Locks & Cylinders",
    ],
  },
  {
    slug: "adhesives",
    title: "Adhesives",
    subtitle:
      "Industrial-grade bonding solutions for wood, laminates, and interior joinery.",
    description:
      "Formulated for maximum bond strength, quick setting time, and high moisture resistance. Featuring genuine Fevicol adhesives for precision carpentry work.",
    image: "/images/adhesives.jpg",
    highlights: [
      "Fevicol Marine & SH Synthetic Resins",
      "Heatproof & Waterproof D3 Adhesives",
      "Fast-Setting Spray & Contact Adhesives",
      "Edge Banding Hot Melt Solutions",
    ],
  },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "bwp-marine-plywood",
    name: "BWP Waterproof Marine Plywood",
    category: "plywood",
    shortDesc:
      "Boiling Water Proof (BWP) 710 grade plywood ideal for wet areas, kitchens, and bathrooms.",
    description:
      "Manufactured with 100% hardwood timber and bonded with fortified phenol formaldehyde synthetic resin. Guaranteed protection against water exposure, wood borers, and termites.",
    features: [
      "IS:710 Marine Grade Certification",
      "Boiling Water Proof for 72+ Hours",
      "100% Hardwood Core Vaneer",
      "Triple Heat & Pressure Calibrated",
    ],
    brandsAvailable: ["Greenply", "Century", "Premium Select"],
    applications: [
      "Modular Kitchen Cabinets",
      "Bathroom Vanity Units",
      "Outdoor & Balcony Furniture",
      "Under-Sink Storage Units",
    ],
    specifications: {
      "Thickness Options": "6mm, 9mm, 12mm, 16mm, 19mm, 25mm",
      "Standard Size": "8ft x 4ft (2440mm x 1220mm)",
      "Resin Type": "Unextended Phenol Formaldehyde (PF)",
      "Preservative Treatment": "ACC / CCB Vacuum Pressure Treated",
    },
    image: "/images/plywood.jpg",
  },
  {
    id: "commercial-mr-plywood",
    name: "Commercial Moisture Resistant (MR) Plywood",
    category: "plywood",
    shortDesc:
      "IS:303 grade commercial plywood engineered for interior wardrobes, panelling, and furniture.",
    description:
      "A versatile, dimensionally flat structural plywood suitable for dry interior applications. Treated with anti-termite and anti-borer chemicals for long service life.",
    features: [
      "IS:303 Moisture Resistant Compliant",
      "High Screw Holding Capacity",
      "Smooth Calibrated Surface for Laminates",
      "Borer-Free Protection Guarantee",
    ],
    brandsAvailable: ["Greenply", "Century", "Standard Commercial"],
    applications: [
      "Bedroom Wardrobes",
      "TV Unit Cabinetry",
      "Wall Panelling Structures",
      "Study Desks & Office Tables",
    ],
    specifications: {
      "Thickness Options": "6mm, 9mm, 12mm, 16mm, 19mm",
      "Standard Size": "8ft x 4ft (2440mm x 1220mm)",
      "Moisture Content": "8% - 12%",
      "Face Veneer": "Gurjan / Okoume Treated Face",
    },
    image: "/images/plywood.jpg",
  },
  {
    id: "decorative-laminates-1mm",
    name: "1mm Architectural Decorative Laminates",
    category: "laminates",
    shortDesc:
      "Premium 1.0mm thickness decorative laminates with high scratch and impact resistance.",
    description:
      "Transform surface aesthetics with our wide catalog of 1mm laminates. Available in ultra-matte, high-gloss, suede, metallic, and deep woodgrain textures.",
    features: [
      "1.0mm Uniform Thickness",
      "Anti-Bacterial Surface Coating",
      "Color Fastness to UV Light",
      "Resistant to Household Scratches & Stains",
    ],
    brandsAvailable: ["Greenlam", "CenturyLaminates", "Custom Collections"],
    applications: [
      "Wardrobe Shutters",
      "Kitchen Panel Covers",
      "Commercial Reception Desks",
      "Door Skins & Wall Accents",
    ],
    specifications: {
      "Sheet Dimensions": "8ft x 4ft (2440mm x 1220mm)",
      "Finish Options": "Matt, Gloss, Woodgrain, Stone, Metallic, Velvet",
      Thickness: "1.0mm ± 0.05mm",
      Maintenance: "Wipe clean with soft damp cloth",
    },
    image: "/images/laminates.jpg",
  },
  {
    id: "soft-close-hydraulic-hinges",
    name: "3D Soft-Close Hydraulic Cabinet Hinges",
    category: "hardware",
    shortDesc:
      "Silent-closing clip-on hydraulic hinges crafted from stainless steel for longevity.",
    description:
      "Ensure smooth, silent cabinet door operation with 3D adjustable soft-close hinges. Tested for over 100,000 opening cycles without sagging or noise.",
    features: [
      "Integrated Hydraulic Damper",
      "3-Way Precision Cam Adjustment",
      "Quick Release Clip-On Base Plate",
      "Anti-Rust Plating Technology",
    ],
    brandsAvailable: ["Architectural Grade", "Standard Hardware"],
    applications: [
      "Kitchen Overhead Cabinets",
      "Wardrobe Hinged Doors",
      "Office Storage Credenzas",
      "Bathroom Vanity Doors",
    ],
    specifications: {
      "Crank Type":
        "Full Overlay (0 Crank), Half Overlay (8 Crank), Inset (15 Crank)",
      "Opening Angle": "105° – 110°",
      "Cup Diameter": "35mm",
      Material: "Cold-Rolled Nickel Plated Steel / SS304",
    },
    image: "/images/hardware.jpg",
  },
  {
    id: "fevicol-sh-wood-adhesive",
    name: "Fevicol SH & Synthetic Resin Adhesives",
    category: "adhesives",
    shortDesc:
      "Benchmark synthetic resin adhesive providing unbeatable bonding strength for woodwork.",
    description:
      "Fevicol SH is trusted across India for joinery, laminating, and wood bonding. Dries clear, non-staining, and delivers structural bond integrity.",
    features: [
      "High Tensile & Shear Bond Strength",
      "Dries Clear for Invisible Joints",
      "Solvent-Free & Low Odor",
      "Resistant to Water & Temperature Changes",
    ],
    brandsAvailable: ["Fevicol"],
    applications: [
      "Laminate to Plywood Pressing",
      "Wood Joinery & Tenon Joints",
      "Veneer Pasting Work",
      "General Furniture Assembly",
    ],
    specifications: {
      "Available Pack Sizes": "1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
      "Open Time": "10 - 15 minutes",
      "Full Handling Strength": "4 - 6 hours",
      Appearance: "Milky white viscous paste",
    },
    image: "/images/adhesives.jpg",
  },
];
