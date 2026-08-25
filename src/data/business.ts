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
  isAuthorized?: boolean;
  verificationUrl?: string;
}

export const ESTABLISHED_YEAR = 2006;

export function getYearsInBusiness(
  targetYear = new Date().getFullYear(),
): number {
  return Math.max(1, targetYear - ESTABLISHED_YEAR);
}

const currentYears = getYearsInBusiness();

export const BUSINESS_DATA = {
  name: "Sri Krishna Plywoods & Hardwares",
  shortName: "Sri Krishna Plywoods & Hardwares",
  tagline: "Premium Materials for Better Interiors",
  phone: "9944057507",
  formattedPhone: "+91 99440 57507",
  telLink: "tel:+919944057507",
  establishedYear: ESTABLISHED_YEAR,
  yearsInBusiness: currentYears,
  historyText: `Sri Krishna Plywoods & Hardwares has been a trusted name in the plywood and hardware industry for over ${currentYears} years. We offer premium-quality plywood, laminates, hardware fittings, modular kitchen accessories, wardrobe fittings, adhesives, and interior materials for homes and commercial projects. We are authorized dealers of Greenply, and dealers for Greenlam, Century Laminates, Fevicol (Pidilite), Godrej, Ebco, and Faber Chimneys. Whether you're building a new home or renovating, we provide genuine products, expert guidance, competitive pricing, and GST billing—your one-stop destination for all plywood, laminate, and hardware needs.`,
  authorizedBrandsText:
    "Authorized Dealer for Greenply (verifiable on greenply.com) and leading dealer for Greenlam, Century Laminates, Fevicol (Pidilite), Godrej, Ebco, and Faber Chimneys.",
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
    defaultDescription: `Sri Krishna Plywoods & Hardwares in Hosur has been a trusted supplier for over ${currentYears} years (Est. 2006). Authorized Greenply dealer & dealer for Greenlam, Century, Fevicol, Godrej, Ebco & Faber. Call 9944057507.`,
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL || "https://srikrishnaplywoods.in",
  },
};

export const TRUSTED_BRANDS: BrandItem[] = [
  {
    name: "Greenply",
    category: "Plywood & Blockboards",
    description:
      "Authorized dealer for zero-emission, moisture-resistant structural plywoods and architectural blockboards in Hosur.",
    tagline: "Authorized Dealer • Verified on Greenply Directory",
    isAuthorized: true,
    verificationUrl: "https://www.greenply.com/dealers/tamil-nadu/hosur",
  },
  {
    name: "Fevicol (Pidilite)",
    category: "Wood & Construction Adhesives",
    description:
      "Dealer for India's benchmark wood adhesives, marine-grade bonding resins, and heatproof adhesives.",
    tagline: "Trusted Dealer • Unmatched Bond Strength",
    isAuthorized: false,
  },
  {
    name: "Greenlam",
    category: "Decorative Laminates",
    description:
      "Dealer for high-pressure surface laminates featuring anti-bacterial protection and ultra-matte textures.",
    tagline: "Trusted Dealer • Architectural Surface Elegance",
    isAuthorized: false,
  },
  {
    name: "Century Laminates",
    category: "Plywood & Laminates",
    description:
      "Dealer for high-density firewall plywoods, decorative laminates, and premium surface veneers.",
    tagline: "Trusted Dealer • Fire-Retardant & Borer-Proof Quality",
    isAuthorized: false,
  },
  {
    name: "Godrej",
    category: "Locks & Interior Fittings",
    description:
      "Dealer for high-security mortise locks, digital locks, night latches, and modern wardrobe hardware.",
    tagline: "Trusted Dealer • Security & Precision Hardware",
    isAuthorized: false,
  },
  {
    name: "Ebco",
    category: "Modular Kitchen & Interior Fittings",
    description:
      "Dealer for modular kitchen accessories, soft-close drawer channels, pull-outs, and functional fittings.",
    tagline: "Trusted Dealer • Smart Furniture Hardware",
    isAuthorized: false,
  },
  {
    name: "Faber Chimneys",
    category: "Kitchen Chimneys & Appliances",
    description:
      "Dealer for high-suction kitchen chimneys, built-in hobs, and modern kitchen appliances.",
    tagline: "Trusted Dealer • Premium Kitchen Appliances",
    isAuthorized: false,
  },
  {
    name: "Greenlam Veneers",
    category: "Natural Wood Veneers",
    description:
      "Exquisite natural timber wood veneers that bring luxury grain textures to custom interior panelling and doors.",
    tagline: "Luxury Natural Timber Veneers",
    isAuthorized: false,
  },
  {
    name: "Merino Laminates",
    category: "Decorative & High-Pressure Laminates",
    description:
      "High-durability decorative laminates, super-matte anti-fingerprint surfaces, and designer textures.",
    tagline: "High-Pressure Surface Innovation",
    isAuthorized: false,
  },
  {
    name: "Häfele",
    category: "Architectural & Furniture Fittings",
    description:
      "World-renowned German architectural door hardware, sliding systems, soft-close hinges, and kitchen fittings.",
    tagline: "German Precision Architectural Hardware",
    isAuthorized: false,
  },
  {
    name: "Europa Locks",
    category: "High-Security Locks",
    description:
      "Advanced security rim locks, padlocks, mortise locks, and door safety systems built for long life.",
    tagline: "High-Security Door Lock Systems",
    isAuthorized: false,
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
    title: "Laminates & Veneers",
    subtitle:
      "Exquisite surface finishes that elevate wardrobes, kitchen fronts, and wall paneling.",
    description:
      "Explore a diverse selection of high-pressure laminates and natural wood veneers from Greenlam, Century, and Merino including super-matte anti-fingerprint textures and synchronized wood grains.",
    image: "/images/laminates.jpg",
    highlights: [
      "High-Pressure 1mm Laminates",
      "Greenlam Natural Veneers",
      "Anti-Fingerprint Matte Swatches",
      "Scratch & Heat Resistant Surfaces",
    ],
  },
  {
    slug: "hardware",
    title: "Hardware & Fittings",
    subtitle:
      "Precision door fittings, cabinet hinges, locks, and modular kitchen accessories.",
    description:
      "High-durability functional hardware from Godrej, Ebco, Häfele, and Europa. Complete range of soft-close hinges, mortise locks, drawer slides, and handles.",
    image: "/images/hardware.jpg",
    highlights: [
      "Godrej & Europa Mortise Locks",
      "Ebco & Häfele Modular Kitchen Fittings",
      "Soft-Close Hydraulic Hinges",
      "Telescopic & Undermount Drawer Channels",
    ],
  },
  {
    slug: "adhesives",
    title: "Adhesives & Appliances",
    subtitle:
      "Industrial-grade bonding solutions and premium Faber kitchen chimneys.",
    description:
      "Formulated for maximum bond strength, quick setting time, and high moisture resistance featuring genuine Fevicol (Pidilite) products along with Faber kitchen appliances.",
    image: "/images/adhesives.jpg",
    highlights: [
      "Fevicol Marine & SH Resins",
      "Faber High-Suction Kitchen Chimneys",
      "Heatproof & Waterproof Adhesives",
      "Hot Melt Edge Banding Glue",
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
      "100% Hardwood Core Veneer",
      "Triple Heat & Pressure Calibrated",
    ],
    brandsAvailable: ["Greenply (Authorized)", "Century", "Premium Select"],
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
    brandsAvailable: [
      "Greenply (Authorized)",
      "Century",
      "Standard Commercial",
    ],
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
    name: "1mm Architectural Decorative Laminates & Veneers",
    category: "laminates",
    shortDesc:
      "Premium 1.0mm thickness decorative laminates and Greenlam natural wood veneers.",
    description:
      "Transform surface aesthetics with our wide catalog of 1mm laminates and natural veneers. Available in ultra-matte, high-gloss, suede, metallic, and deep woodgrain textures from Greenlam, Century, and Merino.",
    features: [
      "1.0mm Uniform Thickness",
      "Anti-Bacterial Surface Coating",
      "Greenlam Natural Timber Veneer Options",
      "Resistant to Household Scratches & Stains",
    ],
    brandsAvailable: [
      "Greenlam",
      "Century Laminates",
      "Merino",
      "Greenlam Veneers",
    ],
    applications: [
      "Wardrobe Shutters",
      "Kitchen Panel Covers",
      "Commercial Reception Desks",
      "Door Skins & Wall Accents",
    ],
    specifications: {
      "Sheet Dimensions": "8ft x 4ft (2440mm x 1220mm)",
      "Finish Options":
        "Matt, Gloss, Woodgrain, Natural Veneer, Stone, Metallic",
      Thickness: "1.0mm ± 0.05mm",
      Maintenance: "Wipe clean with soft damp cloth",
    },
    image: "/images/laminates.jpg",
  },
  {
    id: "godrej-ebco-hardware-locks",
    name: "Modular Kitchen Fittings & Godrej Security Locks",
    category: "hardware",
    shortDesc:
      "Godrej mortise locks, Ebco kitchen pull-outs, Häfele hinges, and Europa door locks.",
    description:
      "Ensure smooth, silent cabinet door operation and high security. Dealer for Godrej locks, Ebco modular kitchen fittings, Europa locks, and Häfele hardware systems.",
    features: [
      "Godrej & Europa Mortise & Rim Locks",
      "Ebco Soft-Close Drawer Channels & Pull-Outs",
      "3D Adjustable Soft-Close Hydraulic Hinges",
      "GST Billed Genuine Hardware Guarantee",
    ],
    brandsAvailable: ["Godrej", "Ebco", "Häfele", "Europa"],
    applications: [
      "Modular Kitchen Cabinets",
      "Main Entrance Doors",
      "Bedroom Wardrobes",
      "Office Storage Systems",
    ],
    specifications: {
      "Lock Types": "Mortise Handles, Rim Locks, Digital Locks, Padlocks",
      "Drawer Systems": "Soft-Close Telescopic & Undermount Channels",
      "Hinge Cup Diameter": "35mm Hydraulic Soft-Close",
      Material: "SS304 Stainless Steel & Solid Brass",
    },
    image: "/images/hardware.jpg",
  },
  {
    id: "fevicol-faber-adhesives-appliances",
    name: "Fevicol Wood Adhesives & Faber Kitchen Chimneys",
    category: "adhesives",
    shortDesc:
      "Genuine Fevicol (Pidilite) synthetic resins and high-suction Faber kitchen chimneys.",
    description:
      "Trusted across Hosur for joinery, laminating, and wood bonding. Stocking Fevicol SH, Marine, and Heatproof adhesives alongside Faber kitchen chimneys and hobs.",
    features: [
      "High Tensile & Shear Bond Strength",
      "Dries Clear for Invisible Joinery",
      "Faber Kitchen Chimneys & Hobs",
      "Solvent-Free & Low Odor Formulations",
    ],
    brandsAvailable: ["Fevicol (Pidilite)", "Faber"],
    applications: [
      "Laminate to Plywood Pressing",
      "Wood Joinery & Tenon Joints",
      "Kitchen Ventilation Chimneys",
      "General Furniture Assembly",
    ],
    specifications: {
      "Fevicol Pack Sizes": "1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
      "Faber Chimneys": "Auto-Clean Filterless & Baffle Filter Models",
      "Bond Handling Strength": "4 - 6 hours",
      "GST Invoice": "100% Tax Paid GST Invoice Provided",
    },
    image: "/images/adhesives.jpg",
  },
];
