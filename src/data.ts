import { Category, Brand, Product, Order } from './types';
import { enhanceProducts, enhanceBrands } from './utils/bilingual';

// Import exact generated product images
import millatBorewellImg from './assets/images/millat_borewell_pump_1782327259214.jpg';
import millatJetMaxImg from './assets/images/millat_jet_max_pump_1782327274032.jpg';
import shaktiSolarPumpImg from './assets/images/shakti_solar_pump_set_1782327287037.jpg';
import bravatSmartToiletImg from './assets/images/bravat_smart_toilet_1782327297517.jpg';
import pedrolloCpm200Img from './assets/images/pedrollo_cpm_200_1782327310951.jpg';
import bravatRainshowerImg from './assets/images/bravat_rainshower_1782327323712.jpg';
import kohlerVeilToiletImg from './assets/images/kohler_veil_toilet_1782327337410.jpg';
import apexPprPipeImg from './assets/images/apex_ppr_pipe_1782327350674.jpg';
import shaktiBoosterImg from './assets/images/shakti_booster_system_1782327368982.jpg';
import pvcSolventGlueImg from './assets/images/pvc_solvent_glue_1782327381820.jpg';


export const CATEGORIES: Category[] = [
  {
    id: 'water-pump',
    name: 'Water Pump',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance agricultural, domestic, and industrial water pumping systems designed for efficiency and long-term durability.'
  },
  {
    id: 'pipe-fittings',
    name: 'Pipe & Fittings',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    description: 'Premium PVC, CPVC, and PPR pipes, valves, and robust fittings for modern water supply, irrigation, and industrial networks.'
  },
  {
    id: 'sanitary',
    name: 'Sanitary Ware',
    image: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious ceramic toilets, basins, and smart sanitaryware bringing a blend of structural strength and visual beauty to your bathrooms.'
  },
  {
    id: 'bathroom-accessories',
    name: 'Bathroom Accessories',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
    description: 'Elite faucets, basin mixers, shower sets, and custom floor drains finished in exquisite chrome, gold, and matte black coatings.'
  },
  {
    id: 'motor',
    name: 'Heavy Motors & Machinery',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80',
    description: 'Industrial-grade single and three-phase induction electric motors for running high-capacity pumps and severe factory machinery.'
  }
];

const RAW_BRANDS: Brand[] = [
  // --- WATER PUMP BRANDS ---
  {
    id: 'millat-pumps',
    name: 'Millat Pumps Limited',
    logo: 'MPL',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Bangladesh',
    description: 'A household name in agricultural irrigation, recognized across Bangladesh for domestic and high-efficiency industrial pump supplies.'
  },
  {
    id: 'shakti-pumps',
    name: 'Shakti Pumps (Bangladesh) Limited',
    logo: 'SPL',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'India / Bangladesh',
    description: 'Pioneers in high-efficiency solar-powered water pumping systems, smart hybrid controllers, and eco-friendly borehole irrigation pumps.'
  },
  {
    id: 'pedrollo-nk',
    name: 'Pedrollo nk. Limited',
    logo: 'PNK',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Italy',
    description: 'Authorized importer and distributor of premium Italian Pedrollo water pumps, offering unparalleled hydraulic efficiency and 100% copper windings.'
  },
  {
    id: 'pedrollo-showroom',
    name: 'Pedrollo Pump Showroom',
    logo: 'PPS',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Italy / Bangladesh',
    description: 'Premium flagship display gallery showing agricultural monoblock pumps, residential jet boosters, and industrial multistage vertical pumps.'
  },
  {
    id: 'pump-sales-service',
    name: 'Pump Sales & Service | Reliable Water Pump Solutions',
    logo: 'PSS',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Bangladesh',
    description: 'Dedicated nationwide repair, diagnostic service, and authorized original spares seller for complex pump mechanisms.'
  },
  {
    id: 'green-genesis',
    name: 'Green Genesis Engineering Limited, Factory',
    logo: 'GGE',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Bangladesh',
    description: 'Custom industrial water treatment plants, heavy-duty dewatering pumps, and central booster pump engineering plants.'
  },
  {
    id: 'hatim-pump',
    name: 'HATIM Group (Pump Division)',
    logo: 'HGP',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Bangladesh',
    description: 'Fabricating state-of-the-art domestic centrifugal self-priming water pumps and automated building pressure systems.'
  },

  // --- PIPE & FITTINGS BRANDS ---
  {
    id: 'navana-pipe',
    name: 'Navana Pipe & Plastic Factory',
    logo: 'NPP',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'uPVC, CPVC, & PPR',
    popularCategories: ['Agricultural PVC', 'Sewerage Pipes', 'High-Pressure CPVC'],
    description: 'Pioneers in high-grade piping networks with certified food-safe materials for public water supply grids.'
  },
  {
    id: 'hatim-pipe',
    name: 'Hatim Group Of Industries',
    logo: 'HPI',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'PVC, CPVC, PPR, GI, HDPE',
    popularCategories: ['Threaded Pipes', 'Industrial Fittings', 'Ball Valves'],
    description: 'Comprehensive heavy piping solutions for large-scale municipal infrastructure, industrial liquid transport, and construction.'
  },
  {
    id: 'gbtl',
    name: 'GBTL - Gram Bangla Tubes LTD',
    logo: 'GBT',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'uPVC & Steel Tubes',
    popularCategories: ['Tubewell Casing', 'GI Heavy Galvanized Pipes', 'Agricultural Suction'],
    description: 'Premium tube manufacturing standardizing heavy galvanized iron and high-impact PVC casing pipes across rural and urban projects.'
  },
  {
    id: 'sanami-cpvc',
    name: 'Sanami | Cpvc Pipes Fittings Seller',
    logo: 'SCS',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'Pure ASTM CPVC',
    popularCategories: ['SDR-11 Hot Water CPVC', 'Heavy Duty Brass Fittings'],
    description: 'Premium specialist importer and seller of temperature-resistant CPVC pipelines and high-end brass threaded connections.'
  },
  {
    id: 'asgar-trading',
    name: 'M/S Asgar Trading',
    logo: 'MAT',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'uPVC & fittings',
    popularCategories: ['Commercial Drainage', 'Flexible Hose', 'Teflon Sealing Tape'],
    description: 'Renowned wholesale trading entity supplying public works departments and real estate builders with multi-brand pipe stocks.'
  },
  {
    id: 'rfl-pipe',
    name: 'RFL Pipe & Fittings',
    logo: 'RFL',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'PVC, Drainage, Agri, Plumbing',
    popularCategories: ['Flexible Conduits', 'Drainage Pipes', 'Deep Tube Well Casing'],
    description: 'The market leader in Bangladesh, fabricating millions of running meters of agricultural and household pipes daily.'
  },
  {
    id: 'bango-polymer',
    name: 'BANGO Polymer',
    logo: 'BGP',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'uPVC Pipe & Fittings',
    popularCategories: ['Medium-density Sewerage', 'Corrugated Conduits'],
    description: 'Reliable supplier for national telecom projects and electric conduit pipelines.'
  },
  {
    id: 'sajan-group',
    name: 'Sajan Group BD',
    logo: 'SGB',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'CPVC, UPVC & Water Management',
    popularCategories: ['Roof Rainwater Gutters', 'PPR Water Lines', 'Valves & Flanges'],
    description: 'Comprehensive water management architect, distributing heavy-duty solvent-weld pipes and leakage-proof fittings.'
  },
  {
    id: 'aqua-dynamics',
    name: 'Aqua Dynamics BD',
    logo: 'ADB',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    materialType: 'Industrial Pump, Valve, Pipe, Fittings',
    popularCategories: ['Industrial Gate Valves', 'Teflon Tapes', 'Union Joints'],
    description: 'Heavy duty pressure valve manufacturer focused on industrial steam and wastewater control.'
  },

  // --- SANITARY BRANDS ---
  {
    id: 'bravat',
    name: 'BRAVAT Bangladesh',
    logo: 'BVB',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Germany / Bangladesh',
    collection: 'Elite German Living Series',
    description: 'High-end German sanitaryware bringing sophisticated architectural layouts and premium smart water controls.'
  },
  {
    id: 'kohler',
    name: 'KOHLER Flagship Showroom Banani',
    logo: 'KFB',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'USA',
    collection: 'Artistic Luxury Collection',
    description: 'Unmatched global standard in luxury bathroom fixtures, artistically crafted sinks, and computerized shower engines.'
  },
  {
    id: 'dhaka-sanitary',
    name: 'The Dhaka Sanitary',
    logo: 'TDS',
    image: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Bangladesh',
    collection: 'Premium Vitrified Suite',
    description: 'Vast wholesale merchant of architectural sanitaryware, luxury commodes, and multi-brand bathroom accessories.'
  },
  {
    id: 'badhon-sanitary',
    name: 'Badhon Tiles & Sanitary',
    logo: 'BTS',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Bangladesh',
    collection: 'Elegant Tiles & Ceramics',
    description: 'High-quality glazed floor/wall tiles, durable vanity cabinets, and elegant water closets tailored for residential designs.'
  },
  {
    id: 'bisf-factory',
    name: 'Bangladesh Insulator & Sanitaryware Factory',
    logo: 'BISF',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Bangladesh',
    collection: 'National Heritage Ceramics',
    description: 'State-owned premium manufacturing pioneer supplying rugged, durable commercial ceramic fixtures and porcelain insulators.'
  },
  {
    id: 'charu-ceramic',
    name: 'Charu Ceramic Industries Ltd.',
    logo: 'CCI',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Bangladesh',
    collection: 'Contemporary Vitreous Line',
    description: 'Premium local manufacturer operating Italian-engineered automated clay kilns to yield pure white antibacterial sanitary wares.'
  },
  {
    id: 'modern-sanitary',
    name: 'Modern Sanitary',
    logo: 'MDS',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
    type: 'sanitary',
    country: 'Bangladesh',
    collection: 'Comfort & Utility Series',
    description: 'Providing water-saving dual-flush systems and ergonomic design elements for commercial high-traffic properties.'
  },
  {
    id: 'texmo-industries',
    name: 'Texmo Industries (Taro Pumps & Motors)',
    logo: 'TEXMO',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'India',
    description: 'Renowned world-class manufacturer of single-phase and three-phase electric induction motors, heavy duty agricultural monoblock pumps, and submersible borehole pumps.'
  },
  {
    id: 'apex-holding',
    name: 'Apex Polymer & Pipes (Apex Husain Group)',
    logo: 'APEX',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    type: 'pipe',
    country: 'Bangladesh',
    description: 'A market leader in premium piping systems, multi-layer PPR heat-fusion tubes, and high-impact plumbing accessories.'
  },
  {
    id: 'energypac-power',
    name: 'Energypac Power Generation PLC (Motors & Pumps)',
    logo: 'ENERGY',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80',
    type: 'pump',
    country: 'Bangladesh',
    description: 'The industrial powerhouse of Bangladesh, manufacturing energy-efficient induction motors, dewatering pumps, and smart diesel generator systems.'
  }
];

export const BRANDS: Brand[] = enhanceBrands(RAW_BRANDS);

const RAW_PRODUCTS: Product[] = [
  // ==========================================
  // --- NEWLY ADDED PREMIUM BATCH PRODUCTS (52 PRODUCTS ACROSS ALL 26 BRANDS) ---
  // ==========================================

  // --- Brand: Millat Pumps Limited (millat-pumps) ---
  {
    id: 'prod-millat-borewell-6',
    title: 'Millat Deep Borewell 6" Submersible Pump (10 HP)',
    banglaTitle: 'मিল্লাত ডিপ বোরওয়েল ৬" সাবমার্সিবল পাম্প (১০ হর্সপাওয়ার)',
    category: 'water-pump',
    brandId: 'millat-pumps',
    brandName: 'Millat Pumps Limited',
    price: 85000,
    wholesalePrice: 78000,
    minWholesaleQty: 2,
    images: [
      millatBorewellImg
    ],
    shortDescription: 'Heavy-duty agricultural and industrial deep tube-well water extraction pump set with highly durable bronze impellers.',
    banglaDescription: 'উন্নত প্রযুক্তির ভারী কৃষি এবং শিল্পকারখানায় গভীর নলকূপ থেকে পানি উত্তোলনের জন্য অত্যন্ত টেকসই ব্রোঞ্জ ইম্পেলারযুক্ত সাবমার্সিবল পাম্প সেট।',
    specification: {
      'Horsepower': '10.0 HP',
      'Phase': 'Three Phase (380V/415V)',
      'Speed': '2900 RPM',
      'Max Head': '120 Meters',
      'Discharge Outlet': '3.0 Inches',
      'Body Construction': 'Cast Iron & AISI 304 Stainless Steel'
    },
    warranty: '2 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 12,
    deliveryInfo: 'Crate packing. Safe dispatch from Millat central warehouse.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-millat-jet-max',
    title: 'Millat Jet-Max Dual Impeller Booster Pump',
    banglaTitle: 'মিল্লাত জেট-ম্যাক্স ডুয়াল ইম্পেলার বুস্টার পাম্প (২ HP)',
    category: 'water-pump',
    brandId: 'millat-pumps',
    brandName: 'Millat Pumps Limited',
    price: 18500,
    wholesalePrice: 16500,
    minWholesaleQty: 4,
    images: [
      millatJetMaxImg
    ],
    shortDescription: 'High pressure dual impeller domestic and light commercial building water pressure booster jet pump.',
    banglaDescription: 'বাসাবাড়ি এবং ছোট বাণিজ্যিক ভবনে পানির উচ্চ চাপ বা প্রেসার বজায় রাখার জন্য শক্তিশালী ডুয়াল ইম্পেলার বিশিষ্ট জেট বুস্টার পাম্প।',
    specification: {
      'Horsepower': '2.0 HP',
      'Phase': 'Single Phase (220V/230V)',
      'Suction Lift': '30 Feet',
      'Max Delivery Head': '45 Meters',
      'Winding Wire': '100% Dual Enameled Copper',
      'Suction/Delivery Size': '1.25" x 1.0"'
    },
    warranty: '2 Years Full Product Warranty',
    availability: 'In Stock',
    stock: 28,
    deliveryInfo: 'Next-day delivery inside Dhaka. Sealed original carton.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Shakti Pumps (Bangladesh) Limited (shakti-pumps) ---
  {
    id: 'prod-shakti-sub-7',
    title: 'Shakti High-Performance Solar Submersible Pump Set',
    banglaTitle: 'শক্তি হাই-পারফরম্যান্স সোলার সাবমার্সিবল পাম্প সেট',
    category: 'water-pump',
    brandId: 'shakti-pumps',
    brandName: 'Shakti Pumps (Bangladesh) Limited',
    price: 115000,
    wholesalePrice: 105000,
    minWholesaleQty: 1,
    images: [
      shaktiSolarPumpImg
    ],
    shortDescription: 'Eco-friendly high flow solar borehole pump set with built-in brushless DC (BLDC) high-efficiency motor and smart MPPT driver.',
    banglaDescription: 'পরিবেশবান্ধব এবং বিদ্যুৎ সাশ্রয়ী সোলার বোরহোল পাম্প সেট। এতে রয়েছে বিল্ট-ইন ব্রাশলেস ডিসি (BLDC) মোটর এবং স্মার্ট MPPT সোলার কন্ট্রোলার।',
    specification: {
      'Horsepower': '5.5 HP (DC)',
      'Solar Panel Requirement': '6000 Watts DC Grid',
      'Borewell Size Compatibility': '6 Inches minimum',
      'Max Head Height': '95 Meters',
      'Maximum Water Flow': '180 Liters/Minute',
      'Motor Body Material': 'AISI 316 Premium Marine Grade Stainless Steel'
    },
    warranty: '5 Years Smart Controller Warranty, 3 Years on Pump',
    availability: 'Contact for Availability',
    stock: 4,
    deliveryInfo: 'Specialized cargo pallet delivery. Expert assembly team available.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-shakti-booster-hybrid',
    title: 'Shakti Hydro-Pneumatic Smart Hybrid Booster System',
    banglaTitle: 'শক্তি হাইড্রো-নিউমেটিক স্মার্ট হাইব্রিড বুস্টার সিস্টেম',
    category: 'water-pump',
    brandId: 'shakti-pumps',
    brandName: 'Shakti Pumps (Bangladesh) Limited',
    price: 74000,
    wholesalePrice: 68000,
    minWholesaleQty: 2,
    images: [
      shaktiBoosterImg
    ],
    shortDescription: 'Twin pump hydro-pneumatic system with dual smart VFD controllers to maintain constant water pressure inside premium multistory apartments.',
    banglaDescription: 'অত্যাধুনিক ডাবল পাম্প বুস্টার সিস্টেম যা বহুতল ভবনে পানির চাপ সবসময় সমান রাখে এবং অতিরিক্ত বিদ্যুৎ সাশ্রয় করে।',
    specification: {
      'Pump Assembly': 'Two Horizontal Multistage Pumps',
      'VFD Controller': 'Dual Variable Frequency Drive with LCD Panel',
      'Pressure Vessel Tank': '24 Liters Italian Diaphragm Tank',
      'Total Horsepower': '3.0 HP (1.5 HP x 2)',
      'Manifold Headers': 'High Grade AISI 304 Stainless Steel Pipe'
    },
    warranty: '2 Years Comprehensive Electronics & Mechanical Warranty',
    availability: 'In Stock',
    stock: 6,
    deliveryInfo: 'Direct factory technician dispatch for on-site commissioning guidance.',
    rating: 5.0,
    reviews: []
  },

  // --- Brand: Pedrollo nk. Limited (pedrollo-nk) ---
  {
    id: 'prod-pedrollo-cpm-200',
    title: 'Genuine Pedrollo CPm-200 High-Capacity Centrifugal Pump',
    banglaTitle: 'অরিজিনাল পেড্রোলো সিপিম-২০০ হাই-ক্যাপাসিটি সেন্ট্রিফিউগাল পাম্প',
    category: 'water-pump',
    brandId: 'pedrollo-nk',
    brandName: 'Pedrollo nk. Limited',
    price: 24500,
    wholesalePrice: 22000,
    minWholesaleQty: 3,
    images: [
      pedrolloCpm200Img
    ],
    shortDescription: '100% original Italian high flow centrifugal water pump engineered for civil, agricultural, and industrial overhead tank transfers.',
    banglaDescription: '১০০% ইতালি থেকে আমদানিকৃত অরিজিনাল পেড্রোলো সেন্ট্রিফিউগাল পাম্প। এটি বাসাবাড়ি, কৃষি কাজ এবং বহুতল ভবনের ছাদে ওয়াটার ট্যাংক স্থানান্তরের জন্য অত্যন্ত নির্ভরযোগ্য।',
    specification: {
      'Horsepower': '2.0 HP',
      'Phase': 'Single Phase (220V/230V AC)',
      'Suction Port': '1.25 Inches',
      'Discharge Port': '1.0 Inch',
      'Max Flow Rate': '160 Liters/Minute',
      'Max Delivery Head': '41 Meters'
    },
    warranty: '2 Years Original Pedrollo Italy Warranty',
    availability: 'In Stock',
    stock: 18,
    deliveryInfo: 'Packed in double-corrugated Pedrollo box with barcode scanner validation.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-pedrollo-vxm',
    title: 'Pedrollo VXm Heavy Duty Sewage Submersible Pump',
    banglaTitle: 'পেড্রোলো ভিএক্সএম হেভি-ডিউটি সুয়েজ সাবমার্সিবল পাম্প',
    category: 'water-pump',
    brandId: 'pedrollo-nk',
    brandName: 'Pedrollo nk. Limited',
    price: 36000,
    wholesalePrice: 32500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Vortex-impeller sewage water pump with heavy-duty cast iron pump body and stainless steel motor housing for draining septic tanks.',
    banglaDescription: 'বাথরুম, সেপটিক ট্যাংক এবং ভারী সুয়েজ বা ময়লা পানি নিরাপদে নিষ্কাশনের জন্য শক্তিশালী কাস্ট আয়রন বডি বিশিষ্ট সাবমার্সিবল পাম্প।',
    specification: {
      'Horsepower': '1.5 HP',
      'Phase': 'Single Phase (220V/230V)',
      'Solid Passage size': 'Up to 50 mm suspended solids',
      'Max Flow Capacity': '350 Liters/Minute',
      'Max Delivery Head': '14 Meters',
      'Float Switch': 'Automatic magnetic float switch'
    },
    warranty: '2 Years Pedrollo Official Warranty',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Heavy-duty carton box with secure foam framing.',
    rating: 4.9,
    reviews: []
  },

  // --- Brand: Pedrollo Pump Showroom (pedrollo-showroom) ---
  {
    id: 'prod-pedrollo-showroom-vertical',
    title: 'Pedrollo Showroom Vertical Multistage Booster Pump',
    category: 'water-pump',
    brandId: 'pedrollo-showroom',
    brandName: 'Pedrollo Pump Showroom',
    price: 58000,
    wholesalePrice: 53000,
    minWholesaleQty: 1,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High vertical configuration multistage pressure pump from Pedrollo flagship gallery, ideal for clean industrial fluid distribution.',
    specification: {
      'Horsepower': '4.0 HP',
      'Phase': 'Three Phase (380V/415V AC)',
      'Impeller Stack': '8 Noryl Multistage Impellers',
      'Max Pressure Head': '82 Meters',
      'Fluid temperature': 'Up to 90°C',
      'Inlet Connections': 'DN 32 heavy duty steel pipe ports'
    },
    warranty: '2 Years Showroom Authenticated Warranty',
    availability: 'In Stock',
    stock: 7,
    deliveryInfo: 'Includes official test run certificate from the showroom bench.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-pedrollo-showroom-domestic',
    title: 'Pedrollo Showroom Comfort-Flow Domestic Jet Pump',
    category: 'water-pump',
    brandId: 'pedrollo-showroom',
    brandName: 'Pedrollo Pump Showroom',
    price: 13500,
    wholesalePrice: 12200,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Ultra-quiet self-priming domestic jet pump designed for smooth tap booster supply and water purification line feeding.',
    specification: {
      'Horsepower': '1.0 HP',
      'Phase': 'Single Phase 220V',
      'Casing': 'Cast iron with cathodic electrocoat treatment',
      'Impeller Material': 'Stainless Steel AISI 304',
      'Suction Lift Height': '9 Meters max'
    },
    warranty: '2 Years Certified Warranty',
    availability: 'In Stock',
    stock: 22,
    deliveryInfo: 'Next-day shipping from showroom floor with premium warranty card.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Pump Sales & Service (pump-sales-service) ---
  {
    id: 'prod-pss-control-panel',
    title: 'PSS Premium Automatic Pump Control Panel & Water Level Indicator',
    category: 'water-pump',
    brandId: 'pump-sales-service',
    brandName: 'Pump Sales & Service | Reliable Water Pump Solutions',
    price: 6500,
    wholesalePrice: 5500,
    minWholesaleQty: 10,
    images: ['https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Automated micro-controller electric panel to trigger pumps based on water levels inside overhead and underground reserve tanks.',
    specification: {
      'Load Capacity': 'Up to 5.0 HP Motors',
      'Input Voltage': '220V AC Single Phase',
      'Sensor System': '6 Stainless steel liquid-level probes included',
      'Protective Cutoff': 'Over-voltage, under-voltage, and dry run auto stop',
      'Indicators': 'LED status lights for reservoir and rooftop levels'
    },
    warranty: '1 Year Full Support & Replacements',
    availability: 'In Stock',
    stock: 120,
    deliveryInfo: 'Includes wall bracket set, wiring terminal strips, and diagnostic guide.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-pss-pressure-tank',
    title: 'PSS Heavy Duty 50L Diaphragm Pressure Vessel Tank',
    category: 'water-pump',
    brandId: 'pump-sales-service',
    brandName: 'Pump Sales & Service | Reliable Water Pump Solutions',
    price: 9500,
    wholesalePrice: 8200,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High quality pre-pressurized steel expansion tank with butyl rubber diaphragm for domestic booster pump pressure management.',
    specification: {
      'Tank Volume Capacity': '50 Liters (11 Gallons)',
      'Working Pressure Max': '10 Bar (145 PSI)',
      'Pre-charge Pressure': '1.8 Bar (26 PSI)',
      'Inner Membrane': 'Butyl Synthetic Non-Toxic Rubber',
      'Connection Port': '1.0 Inch BSP Male Thread (Stainless Steel)'
    },
    warranty: '2 Years Leakage Guarantee',
    availability: 'In Stock',
    stock: 45,
    deliveryInfo: 'Safe box packing. Includes pressure gauge connection adapter.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: Green Genesis Engineering Limited (green-genesis) ---
  {
    id: 'prod-gge-ro-membrane',
    title: 'Green Genesis Commercial RO Membrane Housing',
    category: 'water-pump',
    brandId: 'green-genesis',
    brandName: 'Green Genesis Engineering Limited, Factory',
    price: 16500,
    wholesalePrice: 14500,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Seamless cold-drawn stainless steel high pressure reverse osmosis membrane pressure vessel housing for water treatment plants.',
    specification: {
      'Membrane Compatibility': 'Model 4040 (Standard 4" x 40" Membrane)',
      'Material Block': 'AISI 304 Heavy Polished Stainless Steel',
      'Max Working Pressure': '300 PSI (High Pressure)',
      'Port Configuration': 'End Entry Feed / Concentrate ports',
      'End Caps Material': 'Reinforced ABS Engineering Plastic'
    },
    warranty: '3 Years Industrial Structurability Warranty',
    availability: 'In Stock',
    stock: 32,
    deliveryInfo: 'Includes heavy duty rubber mount straps and stainless steel clamps.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-gge-sand-filter',
    title: 'Green Genesis Fully Automatic FRP Sand Filter Assembly',
    category: 'water-pump',
    brandId: 'green-genesis',
    brandName: 'Green Genesis Engineering Limited, Factory',
    price: 45000,
    wholesalePrice: 41000,
    minWholesaleQty: 2,
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Fiber Reinforced Plastic (FRP) vessel package pre-fitted with digital automatic multi-port control valve for residential iron and sand filtration.',
    specification: {
      'Vessel Dimensions': 'Model 1054 (10" Diameter x 54" Height)',
      'Multi-port Valve': 'Digital LCD Auto Backwash Timer Valve',
      'Service Flow Rate': '1500 Liters/Hour',
      'Max Working Pressure': '100 PSI',
      'Standard In/Out Ports': '1.0 Inch Threaded Socket'
    },
    warranty: '2 Years Auto Valve Warranty, 5 Years on FRP Vessel',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Bulk cargo shipping. Pre-loaded with central under-bed distributor pipe.',
    rating: 4.9,
    reviews: []
  },

  // --- Brand: HATIM Group (Pump Division) (hatim-pump) ---
  {
    id: 'prod-hatim-self-prime',
    title: 'Hatim Self-Priming Centrifugal Domestic Pump (1.5 HP)',
    category: 'water-pump',
    brandId: 'hatim-pump',
    brandName: 'HATIM Group (Pump Division)',
    price: 11500,
    wholesalePrice: 10200,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High head centrifugal household water pump with self-priming check valve to easily draw water from shallow lines.',
    specification: {
      'Horsepower': '1.5 HP',
      'Phase': 'Single Phase 220V',
      'Body Frame': 'Vibration-Absorbing Cast Iron',
      'Impeller Type': 'Solid Machined Centrifugal Brass',
      'Max Suction Lift': '25 Feet'
    },
    warranty: '1 Year Full Product Warranty',
    availability: 'In Stock',
    stock: 65,
    deliveryInfo: 'Shipped in original Hatim cardboard package with handle strap.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-hatim-booster-mini',
    title: 'Hatim Compact Smart Mini Booster Pump (370W)',
    category: 'water-pump',
    brandId: 'hatim-pump',
    brandName: 'HATIM Group (Pump Division)',
    price: 6800,
    wholesalePrice: 5900,
    minWholesaleQty: 8,
    images: ['https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Automatic digital mini booster pump with integrated pressure sensor switch, built for instantaneous shower pressure.',
    specification: {
      'Power Wattage': '370 Watts (0.5 HP)',
      'Automation Controller': 'Digital Micro-Pressure Switch with flow sensor',
      'Inlet / Outlet Size': '1.0 Inch Male BSP Thread',
      'Max Flow Output': '40 Liters/Minute',
      'Anti-Seize technology': 'Automatic 10-second run every 48 hours of idle time'
    },
    warranty: '1 Year Smart Electronic Warranty',
    availability: 'In Stock',
    stock: 110,
    deliveryInfo: 'Includes brass unions and teflon tape rolls.',
    rating: 4.6,
    reviews: []
  },

  // --- Brand: Navana Pipe & Plastic Factory (navana-pipe) ---
  {
    id: 'prod-navana-sewer-200',
    title: 'Navana High-Density Sewerage & Drainage Pipe',
    category: 'pipe-fittings',
    brandId: 'navana-pipe',
    brandName: 'Navana Pipe & Plastic Factory',
    price: 2450,
    wholesalePrice: 2150,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Extra-thick 8 inch high impact uPVC sewer pipe featuring ring-grooved socket endpoints for absolute leak-proof sealing under soil.',
    specification: {
      'Nominal Diameter': '8 Inches (200 mm)',
      'Standard Length': '10 Feet',
      'Pressure Class': 'SDR-41 (Non-pressure Gravity Sewerage)',
      'Joinery Type': 'Rubber Ring Joint socket (EPR Soft rubber ring pre-fitted)',
      'Chemical Resistance': 'Complete resistant to standard household chemical waste'
    },
    warranty: '15 Years Material Durability Guarantee',
    availability: 'In Stock',
    stock: 150,
    deliveryInfo: 'Bulk factory flatbed transport. Delivered on site in bundles.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-navana-threaded-pvc',
    title: 'Navana Heavy Threaded PVC Tubewell Casing Pipe',
    category: 'pipe-fittings',
    brandId: 'navana-pipe',
    brandName: 'Navana Pipe & Plastic Factory',
    price: 1650,
    wholesalePrice: 1420,
    minWholesaleQty: 60,
    images: ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade male/female threaded uPVC tubewell casing and strainer screen pipe, engineered for deep groundwater aquifers.',
    specification: {
      'Pipe Diameter': '4.0 Inches',
      'Standard Length': '10 Feet',
      'Thread Type': 'Trapezoidal Buttress Threaded Joints',
      'Strainer Slots': '0.2 mm fine sand filtration slots',
      'Collapse Pressure': '14 kg/cm² deep soil pressure proof'
    },
    warranty: '20 Years Aquifer Soil Resistance',
    availability: 'In Stock',
    stock: 450,
    deliveryInfo: 'Factory direct shipment. Handled by freight loader.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Hatim Group Of Industries (hatim-pipe) ---
  {
    id: 'prod-hatim-gi-heavy',
    title: 'Hatim Heavy Duty Galvanized Iron Water Pipe (Class C)',
    category: 'pipe-fittings',
    brandId: 'hatim-pipe',
    brandName: 'Hatim Group Of Industries',
    price: 3400,
    wholesalePrice: 2950,
    minWholesaleQty: 20,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Premium heavy galvanized zinc-coated seamless iron water pipe, manufactured for high-temperature and high-pressure steam utility feeds.',
    specification: {
      'Nominal Bore': '2.0 Inches BSP Threaded Male/Female',
      'Standard Length': '20 Feet (6.09 Meters)',
      'Zinc Coating Mass': '400 grams/m² hot-dip zinc layer',
      'Hydrostatic Test Pressure': '50 Bar maximum pressure load',
      'Class Code': 'Class C (Heavy Wall Thickness)'
    },
    warranty: '25 Years Anti-Corrosion Warranty',
    availability: 'In Stock',
    stock: 220,
    deliveryInfo: 'Shipped in heavy steel bound bundles. Delivery nationwide.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-hatim-hdpe-gas',
    title: 'Hatim High-Density Polyethylene Gas Pipe (SDR-11)',
    category: 'pipe-fittings',
    brandId: 'hatim-pipe',
    brandName: 'Hatim Group Of Industries',
    price: 1850,
    wholesalePrice: 1550,
    minWholesaleQty: 100,
    images: ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Flexible PE-100 HDPE black piping rolls with yellow trace lines, optimized for LPG and industrial gas delivery.',
    specification: {
      'Standard Roll Length': '100 Meters Roll',
      'Outer Diameter': '50 mm',
      'SDR Ratio': 'SDR 11 (High Wall Thickness)',
      'Material Rating': 'PE 100 Polyethylene Premium',
      'Standard Certification': 'ISO 4437 Gas Piping Standard'
    },
    warranty: '50 Years Lifetime Durability',
    availability: 'Contact for Availability',
    stock: 35,
    deliveryInfo: 'Delivered in tightly bound rolls. Requires spooling equipment on delivery.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: GBTL - Gram Bangla Tubes LTD (gbtl) ---
  {
    id: 'prod-gbtl-casing-tubewell',
    title: 'GBTL Heavy Duty Tubewell Casing Pipe',
    category: 'pipe-fittings',
    brandId: 'gbtl',
    brandName: 'GBTL - Gram Bangla Tubes LTD',
    price: 1450,
    wholesalePrice: 1250,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High quality uPVC casing pipe designed specifically for deep tubewell boring across rural Bangladesh.',
    specification: {
      'Wall Thickness': '4.5 mm (Class D Heavy)',
      'Standard Length': '10 Feet',
      'Outer Diameter': '3.0 Inches',
      'Joint configuration': 'Flush socket solvent jointing',
      'Corrosion Index': '100% chemically inert'
    },
    warranty: '15 Years Soil Decomposition Warranty',
    availability: 'In Stock',
    stock: 800,
    deliveryInfo: 'Factory dispatch in customized open flatbed trucks.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-gbtl-gi-thread',
    title: 'GBTL Galvanized Iron Threaded Plumbing Tube',
    category: 'pipe-fittings',
    brandId: 'gbtl',
    brandName: 'GBTL - Gram Bangla Tubes LTD',
    price: 4200,
    wholesalePrice: 3800,
    minWholesaleQty: 15,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Durable GI threaded structural tube for severe fire hydrant loops and overhead reservoir water distribution line networks.',
    specification: {
      'Thread Port size': '2.5 Inches BSP Threaded Ends',
      'Standard Length': '20 Feet (6 Meters)',
      'Class standard': 'Class B Medium Wall thickness',
      'Galvanic thickness': '360g/m² premium coating weight',
      'Elongation rate': '20% high ductility metal core'
    },
    warranty: '20 Years Rust-Free Lifespan',
    availability: 'In Stock',
    stock: 140,
    deliveryInfo: 'Packed in protective plastic socket end-caps. Metal strap-bound bundles.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: Sanami | Cpvc Pipes Fittings Seller (sanami-cpvc) ---
  {
    id: 'prod-sanami-sdr11',
    title: 'Sanami SDR-11 Hot-Water CPVC Pipe',
    category: 'pipe-fittings',
    brandId: 'sanami-cpvc',
    brandName: 'Sanami | Cpvc Pipes Fittings Seller',
    price: 680,
    wholesalePrice: 560,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High quality authentic ASTM CPVC pipeline for domestic solar heater connections and centralized hot-water layouts.',
    specification: {
      'Diameter Class': '1.25 Inches SDR-11',
      'Standard Length': '10 Feet',
      'Working temperature limit': 'Up to 93°C (200°F)',
      'Pressure limit': '400 PSI at 23°C',
      'Connection Method': 'ASTM F493 heavy duty CPVC solvent cement'
    },
    warranty: '25 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 650,
    deliveryInfo: 'Dust-free cardboard tube packing for immediate high-density parcel dispatch.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-sanami-brass-tee',
    title: 'Sanami Premium Brass-Threaded Female Tee Joint',
    category: 'pipe-fittings',
    brandId: 'sanami-cpvc',
    brandName: 'Sanami | Cpvc Pipes Fittings Seller',
    price: 410,
    wholesalePrice: 320,
    minWholesaleQty: 100,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'CPVC equal pipe tee with centered heavy forged brass female socket, built to mount kitchen sink faucets securely.',
    specification: {
      'Socket Connections': '1" CPVC socket slip x 1" CPVC socket slip',
      'Female Thread Center': '0.75 Inch BSP Machined Threaded Brass',
      'Brass Material': 'Grade CW617N Premium Solid Forged Brass',
      'Pressure standard': 'PN 25 rating'
    },
    warranty: '10 Years Leak-Proof Guarantee',
    availability: 'In Stock',
    stock: 1200,
    deliveryInfo: 'Packed in small plastic boxes of 25 units.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: M/S Asgar Trading (asgar-trading) ---
  {
    id: 'prod-asgar-solvent-cement',
    title: 'Asgar Trading Heavy-Bond PVC Solvent Cement',
    banglaTitle: 'আসগর হেভি-ডিউটি পিভিসি সলভেন্ট সিমেন্ট (গাম)',
    category: 'pipe-fittings',
    brandId: 'asgar-trading',
    brandName: 'M/S Asgar Trading',
    price: 480,
    wholesalePrice: 390,
    minWholesaleQty: 48,
    images: [
      pvcSolventGlueImg
    ],
    shortDescription: 'Industrial strength, fast-curing heavy bodied blue solvent cement adhesive to fuse thick-walled PVC pressure pipelines.',
    banglaDescription: 'উচ্চ চাপের পিভিসি এবং ইউপিভিসি পাইপ ও ফিটিংসের জোড়া লাগানোর জন্য অত্যন্ত শক্তিশালী এবং লিক-প্রুফ গাম বা সলভেন্ট সিমেন্ট।',
    specification: {
      'Container Size': '500 ml Steel Can',
      'Adhesive Formula': 'Fast-curing Medium THF Polymer Resin Base',
      'Applicator brush': 'Included sponge globe applicator under screw cap',
      'Curing Time': 'Dry-to-touch in 2 minutes, Full hydraulic cure in 2 hours',
      'Max Pipe Diameter compat': 'Up to 6 Inch pressure pipes'
    },
    warranty: '2 Years Shelf Life (Unopened)',
    availability: 'In Stock',
    stock: 800,
    deliveryInfo: 'Fitted inside secure anti-spill cardboard partitions during transit.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-asgar-teflon-tape',
    title: 'Asgar Trading Industrial Grade Teflon Sealing Tape (Pack of 10)',
    category: 'pipe-fittings',
    brandId: 'asgar-trading',
    brandName: 'M/S Asgar Trading',
    price: 350,
    wholesalePrice: 280,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High density pure PTFE thread seal tapes to prevent liquid leakages on threaded metal and plastic joint connections.',
    specification: {
      'Tape Material': '100% Pure PTFE (Polytetrafluoroethylene)',
      'Single Roll Length': '12 Meters',
      'Tape Width': '19 mm (0.75 Inches)',
      'Thickness gauge': '0.1 mm Industrial Grade Density',
      'Pack Configuration': '10 Rolls inside a secure plastic package'
    },
    warranty: '10 Years Performance Life',
    availability: 'In Stock',
    stock: 5000,
    deliveryInfo: 'Usually ordered alongside pipes and metal gate valves.',
    rating: 4.6,
    reviews: []
  },

  // --- Brand: RFL Pipe & Fittings (rfl-pipe) ---
  {
    id: 'prod-rfl-conduit-flex',
    title: 'RFL Flexible Corrugated Electrical Conduit Pipe',
    category: 'pipe-fittings',
    brandId: 'rfl-pipe',
    brandName: 'RFL Pipe & Fittings',
    price: 350,
    wholesalePrice: 280,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Highly flexible non-kinking fire retardant PVC corrugated conduit hose rolls, built for concrete wall lighting grids.',
    specification: {
      'Roll Standard Length': '50 Meters Coil',
      'Outer Diameter Size': '20 mm Standard',
      'Material Base': 'Flame Retardant Non-corrosive PVC Polymer',
      'Crush Resistance': 'Grade 3 Structural Resistance',
      'Color Shade': 'Classic Pure White'
    },
    warranty: '5 Years Heat Damage Warranty',
    availability: 'In Stock',
    stock: 1200,
    deliveryInfo: 'Supplied in wrapped shrink-wrap film bundles of 2 rolls.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-rfl-upvc-tee',
    title: 'RFL Premium uPVC Equal Tee Connector',
    category: 'pipe-fittings',
    brandId: 'rfl-pipe',
    brandName: 'RFL Pipe & Fittings',
    price: 180,
    wholesalePrice: 140,
    minWholesaleQty: 100,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High strength, lead-free uPVC equal tee fitting designed for branching residential clean water piping loops.',
    specification: {
      'Fitting Type': 'Equal Tee Joiner',
      'Socket Size': '1.5 Inches Slip x Slip x Slip',
      'Standard Specification': 'ASTM D2466 Sch-40 standard',
      'Working Pressure': 'PN-16 (16 Bar)',
      'Body Color': 'Sky Blue Glossy'
    },
    warranty: '10 Years Leak-Proof Guarantee',
    availability: 'In Stock',
    stock: 4500,
    deliveryInfo: 'Packaged in original boxes of 40 pieces.',
    rating: 4.6,
    reviews: []
  },

  // --- Brand: BANGO Polymer (bango-polymer) ---
  {
    id: 'prod-bango-sewer-pipe',
    title: 'BANGO Heavy Duty Sewerage Conduit Pipe',
    category: 'pipe-fittings',
    brandId: 'bango-polymer',
    brandName: 'BANGO Polymer',
    price: 1750,
    wholesalePrice: 1480,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Standard grade PVC drainage and rainwater drop pipe with push-fit smooth flared socket endpoints.',
    specification: {
      'Outer Diameter': '6 Inches (160 mm)',
      'Standard Length': '10 Feet',
      'Wall Thickness Class': 'Class A Light Sewerage',
      'Joint structure': 'Push-fit solvent connection socket',
      'Impact test pass': 'Drop weight impact tested'
    },
    warranty: '10 Years Product Durability',
    availability: 'In Stock',
    stock: 350,
    deliveryInfo: 'Factory direct dispatch inside commercial trucks.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-bango-pvc-elbow',
    title: 'BANGO High-Impact 90-Degree uPVC Solvent-Weld Elbow',
    category: 'pipe-fittings',
    brandId: 'bango-polymer',
    brandName: 'BANGO Polymer',
    price: 110,
    wholesalePrice: 85,
    minWholesaleQty: 120,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Heavy-duty 90-degree bend for domestic water utility and electrical cable distribution arrays.',
    specification: {
      'Fitting Type': '90-Degree Elbow',
      'Connection size': '1.0 Inch Slip on both ends',
      'Raw Material formulation': 'uPVC Premium High-Impact Polymer',
      'Pressure capacity': '12 Bar rating',
      'Color Shade': 'Off-White'
    },
    warranty: '5 Years Leakage Guarantee',
    availability: 'In Stock',
    stock: 6000,
    deliveryInfo: 'Dispatched inside secure mesh bags of 100 units.',
    rating: 4.4,
    reviews: []
  },

  // --- Brand: Sajan Group BD (sajan-group) ---
  {
    id: 'prod-sajan-rain-gutter',
    title: 'Sajan Group Leak-Proof PVC Roof Rainwater Gutter Channel',
    category: 'pipe-fittings',
    brandId: 'sajan-group',
    brandName: 'Sajan Group BD',
    price: 780,
    wholesalePrice: 650,
    minWholesaleQty: 40,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade semi-circular PVC rainwater roof drainage channel, engineered to stand up to heavy monsoon storms without bending.',
    specification: {
      'Width of Channel': '6 Inches (150 mm) Open Top Gutter',
      'Standard Length': '10 Feet',
      'Material Composition': 'Weatherproof High UV Protection Polycarbonate PVC Blend',
      'Temperature limits': '-20°C to 70°C (No Sun Softening)',
      'Color Shade': 'Slate Grey Matte'
    },
    warranty: '10 Years Sun Block and Structural Integrity Warranty',
    availability: 'In Stock',
    stock: 250,
    deliveryInfo: 'Includes interlocking side clips and outlet brackets.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-sajan-brass-union',
    title: 'Sajan Group Solid Brass Compression Union Coupling',
    category: 'pipe-fittings',
    brandId: 'sajan-group',
    brandName: 'Sajan Group BD',
    price: 950,
    wholesalePrice: 820,
    minWholesaleQty: 20,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Solid machined brass compression union coupling to join copper or high-pressure PPR water pipelines with zero soldering required.',
    specification: {
      'Inlet / Outlet sizes': '1.0 Inch Compression Fitting on both ends',
      'Raw Alloy Block': 'Forged Lead-Free Brass (UNS C37700)',
      'Seal rings': 'Dual Viton High Temperature O-rings pre-fitted',
      'Max Hydrostatic rating': '40 Bar (600 PSI)',
      'Thread Pattern': 'Machined NPT standard threads'
    },
    warranty: '10 Years Metal Integrity Warranty',
    availability: 'In Stock',
    stock: 400,
    deliveryInfo: 'Packaged in protective grease-coated individual bags.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Aqua Dynamics BD (aqua-dynamics) ---
  {
    id: 'prod-aqua-gate-valve-heavy',
    title: 'Aqua Dynamics Forged Industrial Flanged Gate Valve',
    category: 'pipe-fittings',
    brandId: 'aqua-dynamics',
    brandName: 'Aqua Dynamics BD',
    price: 12500,
    wholesalePrice: 11000,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Cast steel industrial wedge flanged gate valve featuring handwheel control, designed for municipal and factory wastewater block loops.',
    specification: {
      'Port Diameter': '4.0 Inches (DN 100 mm)',
      'Flange standard': 'ANSI Class 150 Standard Flange Drill holes',
      'Body Material': 'High Tensile Cast Steel WCB block',
      'Stem Type': 'OS&Y Rising Stem Design',
      'Wedge core': 'Solid Flexible Cast Wedge with Stellited Seat rings'
    },
    warranty: '5 Years Severe Service Mechanical Warranty',
    availability: 'In Stock',
    stock: 25,
    deliveryInfo: 'Shipped on small wooden pallet. Protected with grease-seal wrapping.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-aqua-y-strainer',
    title: 'Aqua Dynamics Heavy Cast Iron Y-Strainer',
    category: 'pipe-fittings',
    brandId: 'aqua-dynamics',
    brandName: 'Aqua Dynamics BD',
    price: 6800,
    wholesalePrice: 5900,
    minWholesaleQty: 6,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Durable Y-strainer designed to capture mud, gravel, and pipe scale upstream of sensitive water meters and pumps.',
    specification: {
      'Inlet/Outlet Port': '2.0 Inches BSP Threaded Female',
      'Body Casting': 'ASTM A126 Class B Gray Cast Iron',
      'Strainer Mesh': 'AISI 304 Stainless Steel Perforated Screen',
      'Mesh hole sizing': '1.2 mm fine debris filtration',
      'Drainage plug': 'Includes threaded blow-off plug for easy wash cleaning'
    },
    warranty: '3 Years Industrial Filtration Warranty',
    availability: 'In Stock',
    stock: 55,
    deliveryInfo: 'Includes heavy gasket seal ring and blow-off cleaning hex screw.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: BRAVAT Bangladesh (bravat) ---
  {
    id: 'prod-bravat-smart-toilet',
    title: 'BRAVAT Intelligent Electronic Bidet Commode',
    banglaTitle: 'ব্রাভাট ইন্টেলিজেন্ট লাক্সারি স্মার্ট টয়লেট (কমোড)',
    category: 'sanitary',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 135000,
    wholesalePrice: 122000,
    minWholesaleQty: 2,
    images: [
      bravatSmartToiletImg
    ],
    shortDescription: 'State-of-the-art German-designed automatic luxury smart commode with heated seat, self-cleaning bidet wand, and hot air drier.',
    banglaDescription: 'অটোমেটিক ফ্ল্যাশ, সিট হিটিং, রিমোট কন্ট্রোল এবং এলইডি ডিসপ্লে সমৃদ্ধ জার্মান প্রযুক্তির অত্যন্ত বিলাসবহুল স্মার্ট কমোড।',
    specification: {
      'Bowl Configuration': 'One Piece Tankless Wall-Flush Siphon Jet',
      'Roughing-In Distance': '305 mm Standard floor mount S-Trap',
      'Smart Controller': 'Infrared wireless hand-held remote with wall mount bracket',
      'Bidet nozzle': 'Warm Water spray, feminine gentle cycle, dynamic pulse wash',
      'Sensor system': 'Seat presence microwave sensor, auto open-close lid',
      'Heating block': 'Instant heater for water (34°C - 40°C), heated seat (4 levels)'
    },
    warranty: '5 Years Electronic & 10 Years Ceramic Body Warranty',
    availability: 'In Stock',
    stock: 8,
    deliveryInfo: 'Shipped in wooden heavy cargo container with custom padding.',
    rating: 5.0,
    reviews: []
  },
  {
    id: 'prod-bravat-rainshower-thermo',
    title: 'BRAVAT Concealed Thermostatic Luxury Rainfall Shower Set',
    banglaTitle: 'ব্রাভাট থার্মোস্ট্যাটিক লাক্সারি রেইনফল শাওয়ার সেট',
    category: 'bathroom-accessories',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 48000,
    wholesalePrice: 42000,
    minWholesaleQty: 3,
    images: [
      bravatRainshowerImg
    ],
    shortDescription: 'Thermostatic anti-scald flush wall mixer system paired with a giant 12-inch luxury rainfall shower plate and multi-mode brass hand shower.',
    banglaDescription: '১২-ইঞ্চি জায়ান্ট রেইনফল প্লেট এবং জার্মানি প্রযুক্তির অ্যান্টি-স্কেলড থার্মোস্ট্যাটিক শাওয়ার সেট যা পানির তাপমাত্রা স্বয়ংক্রিয়ভাবে নিয়ন্ত্রণ করে।',
    specification: {
      'Shower Plate Size': '12-Inch (300 mm) Square Plate',
      'Valve Technology': 'Thermostatic wax-capsule temperature control (Stable at 38°C)',
      'Material Block': 'Solid Forged CW617N Low Lead Brass core',
      'Finish Coating': 'German Standard mirror Chrome plate (Nickel 8um, Chrome 0.25um)',
      'Mount Type': 'Complete Concealed in-wall box system'
    },
    warranty: '5 Years Leakage & Thermostat Cartridge Warranty',
    availability: 'In Stock',
    stock: 14,
    deliveryInfo: 'Packed in high-density padded box. Includes heavy duty brass wall concealment box.',
    rating: 4.9,
    reviews: []
  },

  // --- Brand: KOHLER Flagship Showroom Banani (kohler) ---
  {
    id: 'prod-kohler-intelligent-veil',
    title: 'Kohler Veil Intelligent One-Piece Smart Toilet',
    banglaTitle: 'কোহলার ভেইল ইন্টেলিজেন্ট ওয়ান-পিস স্মার্ট কমোড',
    category: 'sanitary',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 245000,
    wholesalePrice: 220000,
    minWholesaleQty: 1,
    images: [
      kohlerVeilToiletImg
    ],
    shortDescription: 'The pinnacle of luxury sanitary engineering from Kohler. Veil offers elegant flowing lines and intelligent smart-hygiene bidet functions.',
    banglaDescription: 'বিশ্বখ্যাত কোহলার ব্র্যান্ডের সবচেয়ে বিলাসবহুল স্মার্ট কমোড। এতে রয়েছে অটো ফ্লাশ, ইউভি লাইট স্যানিটাইজার এবং টাচস্ক্রিন রিমোট কন্ট্রোল।',
    specification: {
      'Bowl Styling': 'One-Piece Elongated Siphon Jet Tankless',
      'Water Conservation': 'Dual-flush system (3.0L / 4.8L per flush)',
      'Smart Sanitization': 'Self-cleaning UV light wand sterilization, automatic deodorizer',
      'Seat luxury': 'Ergonomic French Curve Heated Seat, slow quiet close',
      'Digital Control': 'Backlit LCD touchscreen handheld remote'
    },
    warranty: '10 Years Ceramic, 2 Years Electronic Components Warranty',
    availability: 'Contact for Availability',
    stock: 3,
    deliveryInfo: 'Includes white-glove transport and free installation assessment in Dhaka.',
    rating: 5.0,
    reviews: []
  },
  {
    id: 'prod-kohler-purist-mixer',
    title: 'Kohler Purist Single-Handle Tall Basin Mixer Tap',
    banglaTitle: 'কোহলার পিউরিস্ট সিঙ্গেল-হ্যান্ডেল টল বেসিন মিক্সার ট্যাপ',
    category: 'bathroom-accessories',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 32500,
    wholesalePrice: 28500,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1585144860131-245d551c77f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Tall design single lever hot/cold washbasin mixer, engineered specifically to coordinate with elegant vessel countertop basins.',
    banglaDescription: 'নিখুঁত ব্রাশড গোল্ড ফিনিশ এবং সলিড ব্রাস মেটাল দ্বারা তৈরি অত্যন্ত দৃষ্টিনন্দন মডার্ন হট/কোল্ড বেসিন মিক্সার ট্যাপ।',
    specification: {
      'Faucet Height': '300 mm (Tall Vessel Height)',
      'Water Flow Regulation': 'Ultra-smooth Joystick Ceramic Disc Cartridge',
      'Finish Coating': 'Kohler Vibrant Brushed Gold / Gold Brass PVD Finish',
      'Material Base': 'Marine Grade Solid Brass Construction',
      'Connections': 'G 1/2" Stainless Steel braided flexible connections'
    },
    warranty: '5 Years Leakage & Gold Finish Wear Warranty',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Shipped in premium microfiber storage velvet bag inside Kohler box.',
    rating: 4.9,
    reviews: []
  },

  // --- Brand: The Dhaka Sanitary (dhaka-sanitary) ---
  {
    id: 'prod-tds-commode-premium',
    title: 'TDS Luxury One-Piece Siphon Jet Commode',
    category: 'sanitary',
    brandId: 'dhaka-sanitary',
    brandName: 'The Dhaka Sanitary',
    price: 18500,
    wholesalePrice: 16200,
    minWholesaleQty: 6,
    images: ['https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Modern one-piece floor-mount toilet with skirted trapway design for sleek, easy-to-clean bathroom hygiene.',
    specification: {
      'Mount Class': 'Floor Mounted skirted S-Trap',
      'Roughing-In': '300 mm standard',
      'Flush System': 'Heavy dual vortex siphon jet flush (3L/6L)',
      'Seat Cover Plate': 'Soft close high density PP cover plate',
      'Ceramic Formula': 'Vitrified china clay fired at 1280°C'
    },
    warranty: '5 Years Full Mechanical Parts Warranty',
    availability: 'In Stock',
    stock: 45,
    deliveryInfo: 'Securely cartoned with thermocol side buffers. Safe transit.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-tds-pedestal-basin',
    title: 'TDS Modern Square Pedestal Wash Basin Set',
    category: 'sanitary',
    brandId: 'dhaka-sanitary',
    brandName: 'The Dhaka Sanitary',
    price: 5800,
    wholesalePrice: 4900,
    minWholesaleQty: 10,
    images: ['https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Contemporary square format floor-standing pedestal wash basin set, structured for premium office and hotel lobbies.',
    specification: {
      'Basin Type': 'Wash basin with full floor pedestal stand',
      'Dimensions': '560mm width x 440mm depth x 820mm total height',
      'Faucet Hole': 'Single centered faucet mount pre-cut',
      'Material': 'Porcelain glazed clay formulation',
      'Overflow Port': 'Fitted with shiny chrome overflow ring'
    },
    warranty: '5 Years Ceramic Surface Glazing Warranty',
    availability: 'In Stock',
    stock: 30,
    deliveryInfo: 'Shipped in separate robust cartons (Basin and Pedestal separately).',
    rating: 4.5,
    reviews: []
  },

  // --- Brand: Badhon Tiles & Sanitary (badhon-sanitary) ---
  {
    id: 'prod-badhon-vanity-cabinet',
    title: 'Badhon Premium Waterproof Wall-Hung Basin Vanity Cabinet',
    category: 'sanitary',
    brandId: 'badhon-sanitary',
    brandName: 'Badhon Tiles & Sanitary',
    price: 26500,
    wholesalePrice: 23500,
    minWholesaleQty: 3,
    images: ['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Elegantly styled waterproof PVC vanity cabinet set with integrated composite white washbasin and overhead mirror cabinet.',
    specification: {
      'Cabinet Material': '100% Waterproof Heavy Density Foam PVC board',
      'Mirror Unit': 'Matching PVC wall-cabinet with mirror door front',
      'Washbasin': 'Premium artificial quartz composite gloss-white basin',
      'Drawers': 'Soft-close pneumatic drawer runners and stainless steel hinges',
      'Dimensions': '600mm cabinet width x 480mm height'
    },
    warranty: '5 Years Waterproof Board & Ceramic Basin Warranty',
    availability: 'In Stock',
    stock: 18,
    deliveryInfo: 'Fully assembled vanity. Wrapped in wooden frame padding for risk-free logistics.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-badhon-glossy-tiles',
    title: 'Badhon Super Glossy Glazed Porcelain Floor Tiles',
    category: 'sanitary',
    brandId: 'badhon-sanitary',
    brandName: 'Badhon Tiles & Sanitary',
    price: 140,
    wholesalePrice: 120,
    minWholesaleQty: 1000,
    images: ['https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Vitreous ultra-shiny glazed white marble patterned porcelain floor tiles, offering high load bearing and zero water absorption.',
    specification: {
      'Tile Size Dimensions': '600 mm x 600 mm (24 x 24 Inches)',
      'Box Packing': '4 Tiles per box (Covers 1.44 Sqm / 15.5 Sqft)',
      'Glazing Polish': 'Nano Liquid Gloss Polish (95% reflective index)',
      'Body Type': 'Full Body Premium White Vitrified Porcelain',
      'Water Absorption rate': 'Below 0.05% (Stain-proof)'
    },
    warranty: '10 Years Color Retention & Surface Durability',
    availability: 'In Stock',
    stock: 15000,
    deliveryInfo: 'Heavy pallet packaging. Local truck transport recommended.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Bangladesh Insulator & Sanitaryware Factory (bisf-factory) ---
  {
    id: 'prod-bisf-industrial-insulator',
    title: 'BISF Heavy Porcelain Pin Insulator (33KV Grid)',
    category: 'motor',
    brandId: 'bisf-factory',
    brandName: 'Bangladesh Insulator & Sanitaryware Factory',
    price: 4500,
    wholesalePrice: 3800,
    minWholesaleQty: 100,
    images: ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade vitrified porcelain high-voltage pin insulator designed for 33KV electrical grid substations and national distribution poles.',
    specification: {
      'Voltage Rating limit': '33 KV High-voltage Grid Standard',
      'Material Core': 'Extremely dense wet-process vitrified alumina porcelain',
      'Glaze coating': 'Brown weather-resistant glossy glaze',
      'Creepage distance': '680 mm minimum',
      'Mechanical strength': '12 KN cantilever strength'
    },
    warranty: '10 Years National Grid Standard Certification',
    availability: 'In Stock',
    stock: 1200,
    deliveryInfo: 'Supplied inside thick wood crates of 12 units.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-bisf-classic-commode',
    title: 'BISF Heritage Series Porcelain Squatting Pan with S-Trap',
    category: 'sanitary',
    brandId: 'bisf-factory',
    brandName: 'Bangladesh Insulator & Sanitaryware Factory',
    price: 2100,
    wholesalePrice: 1750,
    minWholesaleQty: 30,
    images: ['https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Rugged state-factory porcelain squatting toilet pan with matching S-Trap. Famed across Bangladesh for supreme crack-resistance.',
    specification: {
      'Type': 'Floor squatting pan with raised footsteps',
      'Pan Length Size': '20 Inches (500 mm)',
      'Trap Assembly': 'Fitted with standard high-capacity porcelain S-Trap',
      'Glazing coating': 'Thick chemical-resistant vitreous glaze coating',
      'Impact test standard': 'Grade A government building spec'
    },
    warranty: '5 Years Structural Crack Warranty',
    availability: 'In Stock',
    stock: 500,
    deliveryInfo: 'Heavy-duty open carton packing. Pallet freight delivery for wholesale bulk orders.',
    rating: 4.4,
    reviews: []
  },

  // --- Brand: Charu Ceramic Industries Ltd. (charu-ceramic) ---
  {
    id: 'prod-charu-wall-hung',
    title: 'Charu Luxury Wall-Hung Ceramic Commode (Soft-Close)',
    category: 'sanitary',
    brandId: 'charu-ceramic',
    brandName: 'Charu Ceramic Industries Ltd.',
    price: 28500,
    wholesalePrice: 25000,
    minWholesaleQty: 4,
    images: ['https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Space-saving Italian designer wall-hung toilet suite featuring quiet dual rimless flush system and soft-close slim UF seat cover.',
    specification: {
      'Mount Type': 'Wall Mounted Concealed Bracket Type',
      'Outlet Port Direction': 'P-Trap horizontal outlet (180 mm roughing-in)',
      'Flushing Engine': 'Rimless Whirlwind Flush for supreme cleanliness',
      'Seat Cover material': 'Urea-Formaldehyde (UF) scratchproof slim seat',
      'Water Consumption': 'Eco friendly (3.0 Liters / 4.5 Liters)'
    },
    warranty: '10 Years Porcelain Glaze Warranty, 2 Years Seat Cover Warranty',
    availability: 'In Stock',
    stock: 24,
    deliveryInfo: 'Includes heavy metal wall brackets, sound-damping pad, and inlet connections.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-charu-vessel-basin',
    title: 'Charu Art Series Hand-Painted Round Vessel Basin',
    category: 'sanitary',
    brandId: 'charu-ceramic',
    brandName: 'Charu Ceramic Industries Ltd.',
    price: 12500,
    wholesalePrice: 10800,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Exquisite round washbasin with luxurious golden marble textures, glazed in custom automated kilns.',
    specification: {
      'Mount Class': 'Countertop Vessel Basin',
      'Shape': 'Round Bowl Styling',
      'Outer Diameter': '410 mm Diameter',
      'Height Size': '150 mm height',
      'Finish design': 'Gold Marble effect with glossy glaze'
    },
    warranty: '5 Years Glazing Finish Guarantee',
    availability: 'In Stock',
    stock: 40,
    deliveryInfo: 'Fragile handling courier. Shipped in safe cardboard lined with sponge moulds.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: Modern Sanitary (modern-sanitary) ---
  {
    id: 'prod-modern-touchless-soap',
    title: 'Modern Sanitary Automatic Touchless Liquid Soap Dispenser',
    category: 'bathroom-accessories',
    brandId: 'modern-sanitary',
    brandName: 'Modern Sanitary',
    price: 3200,
    wholesalePrice: 2600,
    minWholesaleQty: 20,
    images: ['https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Smart battery-operated automatic liquid and gel soap dispenser, optimized to keep public washrooms germ-free.',
    specification: {
      'Dispensing volume': '0.8 ml to 1.5 ml (Adjustable)',
      'Liquid Reservoir Capacity': '800 ml visible tank',
      'Trigger Sensor': 'Fast infrared proximity sensor (0.2 seconds response)',
      'Power Source': '4x AA Alkaline batteries (Lasts up to 20,000 dispenses)',
      'Outer casing': 'ABS high-impact white plastic body with key lock block'
    },
    warranty: '1 Year Full Replacement Warranty',
    availability: 'In Stock',
    stock: 250,
    deliveryInfo: 'Includes wall screw mounting set and key lock tool.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-modern-led-mirror',
    title: 'Modern Sanitary Smart LED Anti-Fog Touch Screen Bathroom Mirror',
    category: 'bathroom-accessories',
    brandId: 'modern-sanitary',
    brandName: 'Modern Sanitary',
    price: 14500,
    wholesalePrice: 12800,
    minWholesaleQty: 5,
    images: ['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Futuristic wall-mounted bathroom mirror featuring a warm backlit LED light ring, digital clock, and built-in heat demister pad.',
    specification: {
      'Glass Material Dimensions': '600 mm x 800 mm Rectangular (5mm copper-free silver glass)',
      'Control Panel': 'Smart touch sensor buttons on glass front',
      'LED Lighting': 'Dual Color temperature selection (Cool White / Warm Yellow)',
      'Anti-Fog System': 'Integrated electrical defogger heating pad with auto shut-off',
      'Power source Input': 'AC 110V - 240V mains plug-in connection'
    },
    warranty: '2 Years Electronic Systems Warranty',
    availability: 'In Stock',
    stock: 35,
    deliveryInfo: 'Delivered in customized wood-boxed flight crates to ensure zero breakage.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: Texmo Industries (texmo-industries) ---
  {
    id: 'prod-texmo-borewell-heavy',
    title: 'Texmo Taro High-Head Deep Borewell Submersible Pump Set (3 HP)',
    category: 'water-pump',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 46000,
    wholesalePrice: 42500,
    minWholesaleQty: 2,
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade multistage high-head submersible borehole pump, designed for drinking water systems and farm sprinkler arrays.',
    specification: {
      'Horsepower': '3.0 HP',
      'Phase': 'Single Phase (220V/230V AC)',
      'Borewell Diameter size': '100 mm (4 Inches) minimum',
      'Maximum Pressure Head': '105 Meters',
      'Delivery Flow Rate': '120 Liters/Minute max',
      'Material Base': 'Full Satin Finish AISI 304 Stainless Steel'
    },
    warranty: '2 Years Texmo Taro Official Warranty',
    availability: 'In Stock',
    stock: 14,
    deliveryInfo: 'Includes heavy-duty 4-probe control panel box and cable connector.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-texmo-monoblock-heavy',
    title: 'Texmo Taro Premium High-Delivery Monoblock Pump (2 HP)',
    category: 'water-pump',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 24000,
    wholesalePrice: 21500,
    minWholesaleQty: 3,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Severe duty single-phase centrifugal monoblock pump set with massive water flow capacity for large overhead reservoirs.',
    specification: {
      'Horsepower': '2.0 HP',
      'Phase': 'Single Phase 220V AC',
      'Suction lift height': '25 Feet max',
      'Max Delivery Head Height': '32 Meters',
      'Water Flow capacity': '350 Liters/Minute',
      'Motor Frame Core': 'Thick Cast Iron Grade 25'
    },
    warranty: '2 Years Texmo Taro Official Warranty',
    availability: 'In Stock',
    stock: 20,
    deliveryInfo: 'Crate packaging with thick thermocol cushions.',
    rating: 4.8,
    reviews: []
  },

  // --- Brand: Apex Polymer & Pipes (apex-holding) ---
  {
    id: 'prod-apex-ppr-elbow',
    title: 'Apex Premium 90-Degree PPR Female Threaded Elbow',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 280,
    wholesalePrice: 220,
    minWholesaleQty: 100,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Multi-layer Polypropylene Random (PPR) 90-degree plumbing elbow containing an integrated forged brass female threaded insert.',
    specification: {
      'Fitting Connection size': '25 mm PPR Slip weld x 0.5" Female BSP Thread',
      'Thread Insert Metal': 'High quality solid machined Forged Brass',
      'Material Composition': '100% Virgin Borealis Type-3 PPR raw resin',
      'Pressure capacity Class': 'PN 25 rating',
      'Color style': 'Emerald Green with Brass element'
    },
    warranty: '30 Years Structural Durability Guarantee',
    availability: 'In Stock',
    stock: 4500,
    deliveryInfo: 'Delivered in packs of 50 inside cardboard cartons.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-apex-upvc-pipe-3inch',
    title: 'Apex Premium uPVC High-Pressure Class D Pipe',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 1150,
    wholesalePrice: 980,
    minWholesaleQty: 50,
    images: ['https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade Class D unplasticized PVC pressure pipe, optimized for high-pressure deep well jet lines and irrigation headers.',
    specification: {
      'Diameter Size': '3.0 Inches (90 mm)',
      'Standard Length': '10 Feet',
      'Pressure Class': 'Class D (12 Bar / 175 PSI)',
      'Raw Material base': 'Lead-free high density uPVC resin',
      'Socket Type': 'Self-socket solvent jointing end'
    },
    warranty: '20 Years Leakage Free Lifespan',
    availability: 'In Stock',
    stock: 900,
    deliveryInfo: 'Factory direct truck delivery. Free shipping on 200+ pieces.',
    rating: 4.7,
    reviews: []
  },

  // --- Brand: Energypac Power Generation PLC (energypac-power) ---
  {
    id: 'prod-energypac-dewatering-heavy',
    title: 'Energypac Heavy-Duty Self-Priming Dewatering Pump Set',
    category: 'water-pump',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 145000,
    wholesalePrice: 135000,
    minWholesaleQty: 1,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'High capacity self-priming mobile dewatering pump driven by continuous-duty industrial diesel engine block.',
    specification: {
      'Power Unit': 'Energypac Heavy Duty Single-cylinder Air-cooled Diesel Engine (8 HP)',
      'Pump Type': 'Self-priming Centrifugal Dewatering',
      'Suction / Delivery size': '3.0 Inches x 3.0 Inches flanged ports',
      'Max Delivery capacity': '1200 Liters/Minute',
      'Max Solid handling': 'Up to 15 mm suspended mud solids',
      'Chassis Mounting': 'Heavy steel protective trolley wheel frame'
    },
    warranty: '1 Year Industrial Engine & Pump Warranty',
    availability: 'Contact for Availability',
    stock: 4,
    deliveryInfo: 'Includes heavy canvas lay-flat hose lines and metal suction strainer.',
    rating: 5.0,
    reviews: []
  },
  {
    id: 'prod-energypac-ac-induction-15hp',
    title: 'Energypac Premium IE3 Industrial AC Induction Motor (15 HP)',
    category: 'motor',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 92000,
    wholesalePrice: 85000,
    minWholesaleQty: 1,
    images: ['https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'],
    shortDescription: 'Industrial grade heavy horsepower foot-mounted three phase AC electric induction motor, engineered for severe constant load systems.',
    specification: {
      'Horsepower': '15.0 HP',
      'Phase Grid': 'Three Phase (380V / 415V AC)',
      'Speed': '1470 RPM (4-Pole)',
      'Efficiency standard': 'IE3 Premium efficiency rating (92.1% efficiency)',
      'Bearings': 'SKF heavy load pre-greased double-row ball bearings',
      'Body Frame': 'Cast Iron Grade 25 corrugated housing (B3 Foot-mount style)'
    },
    warranty: '3 Years Full Replacement Warranty',
    availability: 'In Stock',
    stock: 8,
    deliveryInfo: 'Heavy crate dispatch. Local shipping with tailgate hydraulic lift crane.',
    rating: 4.9,
    reviews: []
  },

  // --- APEX POLYMER & PIPES PRODUCTS ---
  {
    id: 'prod-apex-ppr-pipe',
    title: 'Apex Premium PPR Hot & Cold Water Pipe (PN-25)',
    banglaTitle: 'এপেক্স প্রিমিয়াম পিপিআর (PPR) গরম ও ঠান্ডা পানির পাইপ',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 1250,
    wholesalePrice: 1080,
    minWholesaleQty: 30,
    images: [
      apexPprPipeImg
    ],
    shortDescription: 'German specification multi-layer Polypropylene Random (PPR) pipe designed with heat insulation layer for extreme temperature hot/cold water distribution.',
    banglaDescription: 'জার্মান প্রযুক্তিতে তৈরি উচ্চ মানের ও দীর্ঘস্থায়ী পিপিআর পাইপ। এটি বাসাবাড়িতে নিরাপদ খাবার পানি এবং যেকোনো ঠাণ্ডা বা গরম পানির লাইনে লিক-প্রুফ ব্যবহারের জন্য আদর্শ।',
    specification: {
      'Standard Length': '4 Meters (13.1 Feet)',
      'Outer Diameter': '32 mm',
      'Pressure Rating': 'PN 25 (Extra Heavy Duty)',
      'Wall Thickness': '5.4 mm',
      'Temperature Range': '-10°C to 95°C',
      'Color Finish': 'Emerald Green with Golden Stripe'
    },
    warranty: '30 Years Lifetime Guarantee',
    availability: 'In Stock',
    stock: 900,
    deliveryInfo: 'Packed in dust-resistant plastic bundles of 8 pipes.',
    rating: 4.9,
    reviews: [
      { id: 'rev-ap1', userName: 'Belal Uddin', rating: 5, date: '2026-06-20', comment: 'Outstanding thick material. Perfect for hot water lines.' }
    ]
  },
  {
    id: 'prod-apex-cpvc-pipe',
    title: 'Apex High-Impact CPVC Schedule-80 Pressure Pipe',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 1850,
    wholesalePrice: 1620,
    minWholesaleQty: 25,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial grade Chlorinated PVC (CPVC) pipe under Schedule 80 specification. Highly resistant to high pressure, acids, and thermal deformation.',
    specification: {
      'Standard Length': '10 Feet',
      'Outer Diameter': '1.5 Inches',
      'Pressure Class': 'Schedule 80 (Up to 470 PSI)',
      'Material': 'ASTM D1784 Certified CPVC',
      'Connection Type': 'Threaded Socket End',
      'Acid & Alkali Resistance': 'Excellent (Industrial Grade)'
    },
    warranty: '20 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 650,
    deliveryInfo: 'Flatbed transport dispatch. Protective soft padding included.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-apex-upvc-bend',
    title: 'Apex uPVC Heavy-Duty 90-Degree Threaded Elbow',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 320,
    wholesalePrice: 260,
    minWholesaleQty: 100,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-impact uPVC 90-degree plumbing elbow with reinforced brass-threaded female inserts to prevent cross-threading leakages.',
    specification: {
      'Fitting Type': '90 Degree Elbow / Bend',
      'Thread Size': '1.0 Inch BSP Female Thread',
      'Material': 'Lead-free high-impact unplasticized PVC',
      'Thread Insert': 'Machined Forged Solid Brass',
      'Pressure Level': 'PN-16 (16 Bar)'
    },
    warranty: '10 Years Leak-proof Warranty',
    availability: 'In Stock',
    stock: 3500,
    deliveryInfo: 'Supplied in boxes of 50 units. Instant courier delivery.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-apex-gate-valve',
    title: 'Apex Heavy Duty Forged Brass Gate Valve',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 2450,
    wholesalePrice: 2150,
    minWholesaleQty: 15,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Full-port heavy duty forged brass gate valve with ergonomic cast iron handwheel. Engineered to deliver reliable flow termination.',
    specification: {
      'Inlet / Outlet Port': '2.0 Inches BSP Threaded Female',
      'Body Material': 'Forged Lead-Free Brass (HPb59-1)',
      'Working Medium': 'Water, Non-corrosive liquids, Saturated Steam',
      'Working Pressure': 'PN-20 (300 PSI)',
      'Handwheel': 'Cast Iron Coated in Epoxy Red Gloss'
    },
    warranty: '5 Years Replacement Warranty',
    availability: 'In Stock',
    stock: 450,
    deliveryInfo: 'Packed in individual shock-absorber corrugated boxes.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-apex-water-tank',
    title: 'Apex Multi-Layer Food-Grade Clean Water Tank (1000L)',
    category: 'pipe-fittings',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 14500,
    wholesalePrice: 13200,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Quad-layer high-density polyethylene (HDPE) loft water tank featuring antimicrobial active carbon inner layer and absolute UV sun blocker.',
    specification: {
      'Capacity': '1000 Liters (220 Gallons)',
      'Construction Layers': '4 Layers (UV Sun Block + Structural Outer + Thermal Insulator + Antibacterial Inner)',
      'Material': '100% Virgin Food-Grade HDPE LLDPE',
      'Diameter': '1050 mm',
      'Height': '1350 mm',
      'Inlet/Outlet Pre-cuts': '1.5 Inches Threaded'
    },
    warranty: '15 Years No-Deformation Warranty',
    availability: 'In Stock',
    stock: 45,
    deliveryInfo: 'Direct rooftop lifting delivery available in Dhaka/Chittagong metropolitan areas.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-apex-submersible-pump',
    title: 'Apex Deep Borewell Multi-Stage Submersible Pump Set',
    category: 'water-pump',
    brandId: 'apex-holding',
    brandName: 'Apex Polymer & Pipes (Apex Husain Group)',
    price: 34500,
    wholesalePrice: 31000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High head borehole pump configured with floating impellers for maximum sand resistance, paired with 100% copper water-cooled motor.',
    specification: {
      'Horsepower': '2.0 HP',
      'Min Well Size': '4 Inches (100 mm)',
      'Max Head Height': '84 Meters',
      'Max Water Flow': '110 Liters/Minute',
      'Stage Impellers': '14 Polycarbonate Floating Impellers',
      'Housing Steel': 'Satin Stainless Steel AISI 304'
    },
    warranty: '2 Years Comprehensive Service Warranty',
    availability: 'In Stock',
    stock: 28,
    deliveryInfo: 'Includes heavy-duty control box panel with dual protection fuses.',
    rating: 4.8,
    reviews: []
  },

  // --- ENERGYPAC POWER MOTORS & PUMPS ---
  {
    id: 'prod-energypac-ie3-motor',
    title: 'Energypac IE3 Premium Efficiency Three-Phase Induction Motor',
    category: 'motor',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 68000,
    wholesalePrice: 62000,
    minWholesaleQty: 1,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Flagship high efficiency heavy-duty three phase induction motor designed for maximum energy savings in spinning mills, rice mills, and factories.',
    specification: {
      'Horsepower': '10.0 HP',
      'Phase': 'Three Phase (380V / 415V AC)',
      'Speed': '1460 RPM (4-Pole)',
      'Body Frame': 'Cast Iron Block GG25 (Severe Duty)',
      'Efficiency Class': 'IE3 Premium (Eco-Power Standard)',
      'Ingress Protection': 'IP55 Dust & Splash Water Protected',
      'Insulation Rating': 'Class H (Stands up to 180°C)'
    },
    warranty: '3 Years Comprehensive Factory Replacement Warranty',
    availability: 'In Stock',
    stock: 12,
    deliveryInfo: 'Shipped via heavy crane transport. Wooden box packed.',
    rating: 5.0,
    reviews: [
      { id: 'rev-en1', userName: 'Engr. Shafiul Alam', rating: 5, date: '2026-05-10', comment: 'Extremely high efficiency. Power bill dropped by 8% on this compressor block.' }
    ]
  },
  {
    id: 'prod-energypac-single-motor',
    title: 'Energypac Heavy Duty Single-Phase Dual Capacitor Motor',
    category: 'motor',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 26500,
    wholesalePrice: 23800,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial-spec single phase motor with custom dual capacitors (Start & Run) delivering maximum starting torque for air compressors and agricultural machinery.',
    specification: {
      'Horsepower': '3.0 HP',
      'Phase': 'Single Phase (220V AC 50Hz)',
      'Starting Current': 'Low starting current design',
      'Speed': '2850 RPM (2-Pole)',
      'Casing Shield': 'Corrugated Heat Dissipation Aluminum',
      'Bearings': 'Japanese SKF Double Sealed Ball Bearings'
    },
    warranty: '2 Years Manufacturer Replacement Warranty',
    availability: 'In Stock',
    stock: 35,
    deliveryInfo: 'Delivered inside heavy protective styrofoam and crate.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-energypac-centrifugal',
    title: 'Energypac Industrial High-Volume End-Suction Centrifugal Pump',
    category: 'water-pump',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 48500,
    wholesalePrice: 44000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High volume back-pull-out centrifugal pump. Extremely durable design for municipal water supply schemes and severe agricultural lifting.',
    specification: {
      'Horsepower': '5.0 HP Required input',
      'Suction Port': '3.0 Inches Flanged',
      'Discharge Port': '2.5 Inches Flanged',
      'Max Delivery Flow': '950 Liters/Minute',
      'Max Head Height': '42 Meters',
      'Impeller Block': 'Spheroidal Graphite Cast Iron'
    },
    warranty: '2 Years Comprehensive Mechanical Warranty',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Requires specialized delivery team. On-site installation guidance included.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-energypac-starter',
    title: 'Energypac Magnetic Auto Star-Delta Motor Control Panel',
    category: 'motor',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 18500,
    wholesalePrice: 16500,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial grade motor protection starter panel, configured with heavy magnetic contactors, digital over-current protector, and phase sequence monitor.',
    specification: {
      'Compatible Motor Range': '7.5 HP to 15.0 HP Motors',
      'Voltage Grid': 'Three Phase 380V - 415V AC',
      'Contactor Coil': 'Siemens-licensed high speed heavy duty contactors',
      'Protection Suites': 'Over-current, Under-voltage, Phase Loss, Phase Sequence inversion',
      'Enclosure Standard': 'IP65 Wall Mount Sheet Metal Cabinet'
    },
    warranty: '18 Months Service & Core Spares Replacement',
    availability: 'In Stock',
    stock: 40,
    deliveryInfo: 'Includes complete schematics diagram and installation clamps.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-energypac-dewatering',
    title: 'Energypac Heavy Duty Sewage Submersible Dewatering Pump',
    category: 'water-pump',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 39500,
    wholesalePrice: 35500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-torque heavy duty sewage cutter pump with built-in tungsten carbide blade shredder to liquefy waste and debris in residential drainage tanks.',
    specification: {
      'Horsepower': '3.0 HP',
      'Phase': 'Three Phase (380V/415V AC)',
      'Waste Shredder': 'Double Edge Tungsten Carbide alloy blade',
      'Max Passage Diameter': '35 mm Solid waste',
      'Max Delivery Flow': '450 Liters/Minute',
      'Body Core': 'Heavy Grade Gray Cast Iron'
    },
    warranty: '1 Year Industrial Grade Warranty',
    availability: 'In Stock',
    stock: 20,
    deliveryInfo: 'Shipped via freight logistics. Special lift handle integrated.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-energypac-solar-irrigation',
    title: 'Energypac Smart Solar DC Hybrid Lift Irrigation Pump',
    category: 'water-pump',
    brandId: 'energypac-power',
    brandName: 'Energypac Power Generation PLC (Motors & Pumps)',
    price: 98000,
    wholesalePrice: 91000,
    minWholesaleQty: 1,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Brushless solar powered monoblock lift pump with digital tracking hybrid system. Switches automatically to electric line if clouds persist.',
    specification: {
      'System Type': 'DC / AC Hybrid Automated Switch Centrifugal Lift',
      'Motor Horsepower': '4.0 HP DC Brushless',
      'Working Voltage Input': '200V - 680V DC (Solar Array input)',
      'Max Head Height': '35 Meters',
      'Flow Rate': '22,000 Liters/Hour',
      'Controller Suite': 'Maximum Power Point Tracking (MPPT) System'
    },
    warranty: '5 Years Warranty on Controller, 3 Years on Centrifugal Pump Body',
    availability: 'Contact for Availability',
    stock: 5,
    deliveryInfo: 'Shipped on specialized industrial pallets. Shipping across agricultural zones.',
    rating: 4.9,
    reviews: []
  },

  // --- ADDED PRODUCTS FOR EXACTLY 10 PER CATEGORY MATCH ---

  // === WATER-PUMPS (Adding 2 to make exactly 10) ===
  {
    id: 'prod-millat-heavy-monoblock',
    title: 'Millat Heavy Agricultural Monoblock Pump (MAM-5)',
    category: 'water-pump',
    brandId: 'millat-pumps',
    brandName: 'Millat Pumps Limited',
    price: 26500,
    wholesalePrice: 24000,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial-grade high-volume monoblock pump built for heavy agricultural irrigation and non-clogging surface water delivery.',
    specification: {
      'Horsepower': '5.0 HP',
      'Phase': 'Three Phase (380V/415V)',
      'Delivery Flow Rate': '650 Liters/Minute',
      'Max Suction lift': '25 Feet',
      'Max Head Height': '28 Meters',
      'Body Construction': 'Heavy Duty Cast Iron'
    },
    warranty: '2 Years Millat Warranty',
    availability: 'In Stock',
    stock: 22,
    deliveryInfo: 'Shipped via heavy transport. Tailgate unload support included.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-pedrollo-shallow-jet',
    title: 'Pedrollo Italian Self-Priming Jet Pump (JCRm 15M)',
    category: 'water-pump',
    brandId: 'pedrollo-nk',
    brandName: 'Pedrollo nk. Limited',
    price: 14200,
    wholesalePrice: 12900,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: '100% original Italian self-priming jet water pump designed for suctioning clean water even in the presence of air.',
    specification: {
      'Horsepower': '1.5 HP',
      'Phase': 'Single Phase (220V/230V)',
      'Body Material': 'Stainless Steel AISI 304',
      'Impeller Material': 'Stainless Steel',
      'Max Flow Rate': '85 Liters/Minute',
      'Max Head': '55 Meters'
    },
    warranty: '2 Years Pedrollo Official Warranty',
    availability: 'In Stock',
    stock: 30,
    deliveryInfo: 'Next-day delivery inside Dhaka. Custom carton packing.',
    rating: 4.9,
    reviews: []
  },

  // === PIPE-FITTINGS (Adding 1 to make exactly 10) ===
  {
    id: 'prod-rfl-agri-pipe',
    title: 'RFL PVC High-Flow Agricultural Irrigation Pipe (Class B)',
    category: 'pipe-fittings',
    brandId: 'rfl-pipe',
    brandName: 'RFL Pipe & Fittings',
    price: 580,
    wholesalePrice: 490,
    minWholesaleQty: 100,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Flexible yet highly durable Class B agricultural pipe for large-scale field flooding, water supply, and irrigation grids.',
    specification: {
      'Standard Length': '10 Feet',
      'Outer Diameter': '2.0 Inches',
      'Pressure Class': 'Class B (6 Bar)',
      'Material': 'Virgin Lead-Free PVC Resin',
      'UV Protection': 'Standard UV Inhibitors Added'
    },
    warranty: '10 Years Structural Durability',
    availability: 'In Stock',
    stock: 2500,
    deliveryInfo: 'Bulk truck shipping directly from factory. Free delivery on orders over 500 pcs.',
    rating: 4.7,
    reviews: []
  },

  // === SANITARY (Adding 4 to make exactly 10) ===
  {
    id: 'prod-bravat-bidet',
    title: 'BRAVAT Luxury Soft-Close Ceramic Bidet Toilet Set',
    category: 'sanitary',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 31000,
    wholesalePrice: 28000,
    minWholesaleQty: 4,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Elegant German-engineered bidet toilet featuring water-saving dual flush and soft-close ergonomic Duroplast seat cover.',
    specification: {
      'Mount Type': 'Floor Mounted S-Trap',
      'Roughing-In': '300 mm Standard',
      'Seat Cover': 'Soft Close Quiet Duroplast',
      'Water Consumption': 'Dual Flush (3L / 4.5L)',
      'Surface Glazing': 'Antibacterial Nano-Glaze Coating'
    },
    warranty: '10 Years Warranty on Ceramic Body',
    availability: 'In Stock',
    stock: 18,
    deliveryInfo: 'Double-walled carton with thermocol protection. Breakage free delivery.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-kohler-forefront',
    title: 'Kohler Forefront Rectangular Vessel Countertop Basin',
    category: 'sanitary',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 16500,
    wholesalePrice: 14800,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Stunning premium rectangular vessel countertop basin crafted from immaculate vitreous china for contemporary luxury bathrooms.',
    specification: {
      'Style': 'Contemporary Vessel Basin',
      'Shape': 'Rectangular Flush Deck',
      'Dimensions': '580 mm x 460 mm x 170 mm',
      'Material': 'Vitreous China Glossy',
      'Overflow Outlet': 'Front centered overflow hole with chrome cover'
    },
    warranty: '5 Years Official Kohler Warranty',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Fragile handling courier. Packed in multi-layer shockproof bubble wraps.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-charu-urinal',
    title: 'Charu Elite Wall-Hung Urinal Sensor Set',
    category: 'sanitary',
    brandId: 'charu-ceramic',
    brandName: 'Charu Ceramic Industries Ltd.',
    price: 12500,
    wholesalePrice: 11000,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Wall-hung ceramic urinal equipped with battery-operated automatic infrared sensor flush system for absolute commercial hygiene.',
    specification: {
      'Mount Type': 'Wall Mounted Urinal',
      'Flush Controller': 'Automatic Infrared Sensor (DC 6V)',
      'Inlet/Outlet Size': 'G 1/2" Standard Thread',
      'Sensor Range': '30 cm - 50 cm adjustable',
      'Material': '抗菌 Italian Clay Ceramic Formula'
    },
    warranty: '10 Years on Ceramic, 1 Year on Electronic Sensor',
    availability: 'In Stock',
    stock: 25,
    deliveryInfo: 'Includes heavy metal wall hooks, sensor box, and waste coupler.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-dhaka-squat-classic',
    title: 'TDS Classic Vitrified Squat Pan (White)',
    category: 'sanitary',
    brandId: 'dhaka-sanitary',
    brandName: 'The Dhaka Sanitary',
    price: 1800,
    wholesalePrice: 1500,
    minWholesaleQty: 20,
    images: [
      'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Classic floor-recessed squatting pan with raised anti-slip grid footrests, offering maximum ease of maintenance.',
    specification: {
      'Configuration': 'Floor-Recessed Squat Pan',
      'Material': 'High-Density Vitreous Porcelain',
      'Raised Footrests': 'Integrated Anti-Slip Cross Ridges',
      'Length': '18 Inches (450 mm)',
      'Trap Compatibility': 'Standard S-Trap or P-Trap compatible'
    },
    warranty: '5 Years Structural Crack Warranty',
    availability: 'In Stock',
    stock: 120,
    deliveryInfo: 'Securely stacked on wooden pallets for bulk orders.',
    rating: 4.3,
    reviews: []
  },

  // === BATHROOM-ACCESSORIES (Adding 9 to make exactly 10) ===
  {
    id: 'prod-kohler-shower-column',
    title: 'Kohler Mastershower Deluxe Shower Column',
    category: 'bathroom-accessories',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 38500,
    wholesalePrice: 35000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Elite multi-function shower column with overhead 10" rainfall plate, multi-spray hand shower, and thermostatic pressure valve.',
    specification: {
      'Valve Type': 'Thermostatic anti-scald cartridge',
      'Material': 'Solid Lead-Free Brass Core',
      'Finish': 'Vibrant Polished Chrome Coating',
      'Overhead Shower': '10-Inch Rainhead with easy clean nozzles',
      'Hand Shower': '3-Way Jet selection'
    },
    warranty: '5 Years Premium Kohler Warranty',
    availability: 'In Stock',
    stock: 12,
    deliveryInfo: 'Packed in deluxe padded flight-case style retail box.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-bravat-wall-mixer',
    title: 'Bravat Equis Wall-Mounted Concealed Basin Mixer',
    category: 'bathroom-accessories',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 14500,
    wholesalePrice: 13000,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Contemporary wall-mounted two-handle faucet with custom-engineered Swiss Neoperl aerator for high visual appeal and water saving.',
    specification: {
      'Mounting': 'Concealed Wall Mounted',
      'Spout Length': '200 mm Projection',
      'Aerator': 'Original Neoperl Honeycomb Aerator',
      'Material': 'Premium Brass Alloy',
      'Finish': 'Diamond Chrome Polish'
    },
    warranty: '5 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 20,
    deliveryInfo: 'Includes heavy-duty brass wall concealment installation box.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-modern-shower-set',
    title: 'Modern Sanitary Overhead Rainfall Shower Set',
    category: 'bathroom-accessories',
    brandId: 'modern-sanitary',
    brandName: 'Modern Sanitary',
    price: 7800,
    wholesalePrice: 6800,
    minWholesaleQty: 6,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Generous 12-inch overhead plate shower with flexible steel hand held hose and easy-to-use rotary water diverter.',
    specification: {
      'Overhead Plate Size': '12-Inch (300 mm) Square',
      'Body construction': 'AISI 304 Stainless Steel & Brass',
      'Shower Arm': '16-Inch Wall Projection Arm',
      'Nozzles': 'Anti-Lime Soft Silicone self-clean nozzles',
      'Water Flow': 'High pressure air-injection mix'
    },
    warranty: '3 Years Warranty',
    availability: 'In Stock',
    stock: 45,
    deliveryInfo: 'Immediate delivery. Standard shipping applies.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-badhon-towel-rail',
    title: 'Badhon Stainless Steel Towel Rail & Holder Set',
    category: 'bathroom-accessories',
    brandId: 'badhon-sanitary',
    brandName: 'Badhon Tiles & Sanitary',
    price: 3200,
    wholesalePrice: 2800,
    minWholesaleQty: 10,
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Sturdy wall-mounted double towel rail and multi-purpose robe hook, finished in elegant high-contrast matte black styling.',
    specification: {
      'Material': 'Solid AISI 304 Premium Stainless Steel',
      'Finish': 'Electroplated Matte Black',
      'Overall Width': '24 Inches (600 mm)',
      'Mounting': 'Concealed Screws & Wall Anchors included',
      'Rust Resistance': '100% Rust-Proof in high humidity'
    },
    warranty: '5 Years Rust-Free Warranty',
    availability: 'In Stock',
    stock: 60,
    deliveryInfo: 'Includes all hardware screws and hexagonal wrench key.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-modern-basin-mixer',
    title: 'Modern Sanitary Elegant Brass Basin Mixer Tap',
    category: 'bathroom-accessories',
    brandId: 'modern-sanitary',
    brandName: 'Modern Sanitary',
    price: 4900,
    wholesalePrice: 4200,
    minWholesaleQty: 10,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Sophisticated single-lever hot/cold water mixer tap built with zero-leak ceramic cartridges and deep chromium glossing.',
    specification: {
      'Cartridge Type': '40 mm Sedal Ceramic Disc Cartridge',
      'Inlet Connection': 'G 1/2" standard stainless steel braided hoses',
      'Lever Control': 'Single handle hot-cold toggle',
      'Material': 'Virgin Lead-Free Brass Core',
      'Chrome plating': 'Multi-layer nickel-chrome electroplate'
    },
    warranty: '3 Years Cartridge Leakage Guarantee',
    availability: 'In Stock',
    stock: 95,
    deliveryInfo: 'Shipped inside protective velvet pouch with flexible hose pipes.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-dhaka-floor-drain',
    title: 'TDS Premium Anti-Odor Stainless Steel Floor Drain',
    category: 'bathroom-accessories',
    brandId: 'dhaka-sanitary',
    brandName: 'The Dhaka Sanitary',
    price: 850,
    wholesalePrice: 700,
    minWholesaleQty: 25,
    images: [
      'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Modern floor grating featuring a smart magnetic gravity-drop trap that blocks cockroaches, insects, and sewer back-odors.',
    specification: {
      'Size dimensions': '4 x 4 Inches (100mm x 100mm)',
      'Steel Alloy': 'Thick AISI 304 Brushed Stainless Steel',
      'Anti-Odor Trap': 'Magnetic Gravity Self-Closing flap',
      'Grating Cover': 'Detachable hair-catcher inner grid',
      'Drainage Speed': 'High flow 30 Liters/Minute'
    },
    warranty: '5 Years Material Guarantee',
    availability: 'In Stock',
    stock: 250,
    deliveryInfo: 'Fast courier dispatch. Bulk discounts apply automatically.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-bravat-concealed-mixer',
    title: 'Bravat Luxury Concealed Wall Mixer with Diverter',
    category: 'bathroom-accessories',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 11200,
    wholesalePrice: 9900,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Minimalist bath and shower concealed mixer valve with rotary push diverter button for sleek, wall-flush visual elegance.',
    specification: {
      'Type': 'Concealed Mixer Valve',
      'Inlet / Outlet size': 'G 1/2" Standard Threads',
      'Diverter Function': 'Automatic lock push-button diverter',
      'Body casting': 'Heavy grade solid block brass',
      'Finish plating': 'German-standard thick nickel-chrome coat'
    },
    warranty: '5 Years Leak-Free Replacement Warranty',
    availability: 'In Stock',
    stock: 35,
    deliveryInfo: 'Complete unit shipped with inner brass block and decorative chrome faceplate.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-kohler-robe-hook',
    title: 'Kohler Components Double Robe Hook',
    category: 'bathroom-accessories',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 2900,
    wholesalePrice: 2500,
    minWholesaleQty: 10,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Sleek luxury double hanger hook for robes and towels, finished in scratch-resistant brushed gold/brass visual coloring.',
    specification: {
      'Product Type': 'Double Robe & Towel Hook',
      'Material': 'Solid Metal Die-Cast Construction',
      'Finish coating': 'Vibrant Brushed Moderne Brass (Gold)',
      'Mount Type': 'Heavy Duty Wall Bracket with Hex lock',
      'Corrosion Class': 'Grade 4 Ultra Resistance'
    },
    warranty: '2 Years Scratch & Coating Warranty',
    availability: 'In Stock',
    stock: 80,
    deliveryInfo: 'Shipped in premium Kohler velvet pouch box.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-badhon-stop-valve',
    title: 'Badhon Premium Angle Stop Valve (Quarter-Turn)',
    category: 'bathroom-accessories',
    brandId: 'badhon-sanitary',
    brandName: 'Badhon Tiles & Sanitary',
    price: 1100,
    wholesalePrice: 950,
    minWholesaleQty: 20,
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Heavy-duty quarter-turn wall valve to control water feeds to basins and cisterns. Durable ceramic cartridge prevents drips.',
    specification: {
      'Connections': 'G 1/2" Male x G 1/2" Male',
      'Control action': 'Quarter Turn smooth ceramic disc lever',
      'Body Metal': 'High Tensile Extruded Brass',
      'Flange': 'Included Stainless Steel wall rosette',
      'Max Pressure': '160 PSI'
    },
    warranty: '3 Years Warranty',
    availability: 'In Stock',
    stock: 300,
    deliveryInfo: 'Usually ordered alongside washbasin or toilet suites.',
    rating: 4.6,
    reviews: []
  },

  // === MOTOR (Adding 8 to make exactly 10) ===
  {
    id: 'prod-texmo-monoblock-motor',
    title: 'Texmo Single Phase Centrifugal Monoblock Motor Pump',
    category: 'motor',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 14500,
    wholesalePrice: 13200,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Compact high-delivery monoblock motor pump featuring dynamically balanced rotor and 100% premium copper wind.',
    specification: {
      'Horsepower': '1.0 HP',
      'Phase': 'Single Phase (220V/230V)',
      'Speed': '2880 RPM',
      'Winding Material': '100% Enameled Copper',
      'Max Head': '22 Meters',
      'Suction lift': '20 Feet'
    },
    warranty: '2 Years Texmo Taro Warranty',
    availability: 'In Stock',
    stock: 40,
    deliveryInfo: 'Secure wood-board packed container cargo.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-texmo-vertical-motor',
    title: 'Texmo Heavy-Duty High-Head Multistage Vertical Motor Pump',
    category: 'motor',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 52000,
    wholesalePrice: 48500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial vertical multistage high pressure booster motor pump set, built to power commercial reverse osmosis and multistory fire lines.',
    specification: {
      'Horsepower': '7.5 HP',
      'Phase': 'Three Phase (380V/415V AC)',
      'Stage Elements': '12 Polished Stainless Steel Impellers',
      'Speed': '2900 RPM',
      'Efficiency Class': 'IE3 Premium Industrial Standard',
      'Inlet/Outlet Flange': 'DN 50 Heavy Flanged Pipe Port'
    },
    warranty: '2 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 8,
    deliveryInfo: 'Flatbed cargo de-boarding setup. Pre-commissioning diagnostics check available.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-millat-induction-motor',
    title: 'Millat Industrial Three-Phase Electric Induction Motor',
    category: 'motor',
    brandId: 'millat-pumps',
    brandName: 'Millat Pumps Limited',
    price: 24000,
    wholesalePrice: 21500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Heavy-gauge foot-mounted three phase motor designed to run heavy agricultural thrashers and large booster pump arrays.',
    specification: {
      'Horsepower': '3.0 HP',
      'Phase': 'Three Phase (380V/415V)',
      'Speed': '1440 RPM',
      'Mount Type': 'Foot Mounted (B3 Style Frame)',
      'Body Material': 'Dense Cast Iron Grade 25',
      'Shaft Diameter': '28 mm with Keyway'
    },
    warranty: '2 Years Millat Factory Warranty',
    availability: 'In Stock',
    stock: 14,
    deliveryInfo: 'Fast dispatch from Dhaka warehouse. Nationwide delivery.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-shakti-solar-controller',
    title: 'Shakti Smart Solar DC Hybrid Motor-Pump Controller',
    category: 'motor',
    brandId: 'shakti-pumps',
    brandName: 'Shakti Pumps (Bangladesh) Limited',
    price: 39000,
    wholesalePrice: 36000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Advanced hybrid AC/DC solar motor controller with MPPT auto tracker for direct brushless motor flow stabilization.',
    specification: {
      'Max Output Power': '5.5 kW (7.5 HP Max)',
      'DC Input Voltage': '150V - 800V DC Voc',
      'AC Grid Input': '3-Phase 380V / 415V AC',
      'MPPT Tracking': '99% Smart Algorithm Efficiency',
      'Digital Screen': 'Multi-Parameter Backlit LCD monitor',
      'Dry run protection': 'Integrated auto cutoff sensor'
    },
    warranty: '5 Years Official Shakti Warranty',
    availability: 'In Stock',
    stock: 10,
    deliveryInfo: 'Includes mounting bracket accessories and water-level float cables.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-hatim-torque-motor',
    title: 'Hatim Single-Phase High-Torque Dual-Capacitor Motor',
    category: 'motor',
    brandId: 'hatim-pump',
    brandName: 'HATIM Group (Pump Division)',
    price: 12500,
    wholesalePrice: 11200,
    minWholesaleQty: 4,
    images: [
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Aluminum shell high starting torque electric induction motor with heavy duty start/run capacitors, optimal for high pressure reciprocating pumps.',
    specification: {
      'Horsepower': '1.5 HP',
      'Phase': 'Single Phase 220V',
      'Speed': '2800 RPM',
      'Shell casing': 'Lightweight Corrugated Extruded Aluminum',
      'Capacitors': 'Dual Heavy-duty Capacitors (Start + Run)',
      'Insulation Class': 'Class F High Temperature'
    },
    warranty: '1 Year Hatim Group Warranty',
    availability: 'In Stock',
    stock: 25,
    deliveryInfo: 'Standard package delivery within 48 hours.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-texmo-2pole-motor',
    title: 'Texmo Taro 2-Pole High Speed Electric Motor',
    category: 'motor',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 18000,
    wholesalePrice: 16200,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High efficiency 2-pole high speed electric motor designed specifically for domestic water pump retrofitting.',
    specification: {
      'Horsepower': '1.5 HP',
      'Phase': 'Single Phase (220V/230V AC)',
      'Speed': '2880 RPM',
      'Frequency': '50 Hz Standard',
      'Enclosure Envelop': 'TEFC (Totally Enclosed Fan Cooled)',
      'Protection Standard': 'IP44 Protection Level'
    },
    warranty: '2 Years Texmo Taro Warranty',
    availability: 'In Stock',
    stock: 30,
    deliveryInfo: 'Includes pre-installed premium quality rubber shock absorber base.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-genesis-booster-motor',
    title: 'Green Genesis Industrial Booster Pump Electric Motor',
    category: 'motor',
    brandId: 'green-genesis',
    brandName: 'Green Genesis Engineering Limited, Factory',
    price: 29500,
    wholesalePrice: 26800,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Heavy-duty industrial high speed AC motor with Class F insulation designed for non-stop, S1-duty commercial booster system operation.',
    specification: {
      'Horsepower': '4.0 HP',
      'Phase': 'Three Phase (380V/415V AC)',
      'Speed': '2900 RPM',
      'Insulation Material': 'Class F (Up to 155°C)',
      'Continuous Duty Cycle': 'S1 Duty (Continuous operation under constant load)',
      'Bearings': 'Japanese NTN Pre-lubricated high speed ball bearings'
    },
    warranty: '3 Years Comprehensive Engineering Warranty',
    availability: 'Contact for Availability',
    stock: 5,
    deliveryInfo: 'Expert factory freight dispatch.',
    rating: 5.0,
    reviews: []
  },
  {
    id: 'prod-pedrollo-replacement-motor',
    title: 'Pedrollo Italian High-Efficiency Replacement Motor',
    category: 'motor',
    brandId: 'pedrollo-nk',
    brandName: 'Pedrollo nk. Limited',
    price: 21000,
    wholesalePrice: 19000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High precision authentic replacement motor with AISI 431 Stainless Steel shaft and IP55 liquid-tight ingress protection.',
    specification: {
      'Horsepower': '2.0 HP',
      'Phase': 'Single Phase (220V/230V AC)',
      'Speed': '2850 RPM',
      'Motor Shaft': 'AISI 431 Stainless Steel Shaft Core',
      'Ingress Protection': 'IP55 Dust & Liquid Jet Protected',
      'Winding Wire': 'Pure Copper with High Heat-Shield Insulation'
    },
    warranty: '2 Years Pedrollo Service Warranty',
    availability: 'In Stock',
    stock: 12,
    deliveryInfo: 'Delivered in custom secure wood-reinforced boxes.',
    rating: 4.8,
    reviews: []
  },

  // --- TEXMO MOTORS & PUMPS ---
  {
    id: 'prod-texmo-motor-1',
    title: 'Texmo Single Phase Heavy Induction Motor (Taro Series)',
    category: 'motor',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 19500,
    wholesalePrice: 17500,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High torque 100% copper-wound continuous duty electric motor designed to run heavy-duty domestic, agricultural, and small industrial pumps.',
    specification: {
      'Horsepower': '2.0 HP',
      'Phase': 'Single Phase (220V/230V AC)',
      'Speed': '2880 RPM',
      'Frame Size': '90S',
      'Enclosure': 'TEFC (Totally Enclosed Fan Cooled)',
      'Winding Material': '100% Enameled Copper Wire',
      'Insulation Class': 'Class F'
    },
    warranty: '2 Years Texmo Taro Warranty',
    availability: 'In Stock',
    stock: 25,
    deliveryInfo: 'Shipped in wooden crate for total physical damage protection.',
    rating: 4.8,
    reviews: [
      { id: 'rev-texmo1', userName: 'Hasan Al-Banna', rating: 5, date: '2026-06-01', comment: 'Excellent motor. Very quiet and does not heat up even after hours of continuous operation.' }
    ]
  },
  {
    id: 'prod-texmo-motor-2',
    title: 'Texmo Three Phase Heavy Industrial Motor',
    category: 'motor',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 38000,
    wholesalePrice: 34500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Heavy-duty cast iron body industrial induction motor with superior power efficiency and rugged design for continuous non-stop operation.',
    specification: {
      'Horsepower': '5.0 HP',
      'Phase': 'Three Phase (380V/415V AC)',
      'Speed': '1440 RPM',
      'Body Material': 'High Grade Cast Iron',
      'Winding': 'Premium 100% Copper',
      'IP Rating': 'IP55 Dust and Water Protected',
      'Efficiency Class': 'IE3 Premium Efficiency'
    },
    warranty: '2 Years Industrial Warranty',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Freight shipping. Heavy handling support included.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-texmo-pump-1',
    title: 'Texmo Taro Submersible Borewell Pump Set',
    category: 'water-pump',
    brandId: 'texmo-industries',
    brandName: 'Texmo Industries (Taro Pumps & Motors)',
    price: 31000,
    wholesalePrice: 28200,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Premium multi-stage high-head water submersible pump designed for clean water extraction from deep borewells.',
    specification: {
      'Horsepower': '1.5 HP',
      'Minimum Borewell Size': '100 mm (4 Inches)',
      'Max Head': '72 Meters',
      'Max Flow Rate': '80 Liters/Minute',
      'Outlet Size': '1.25 Inches',
      'Motor Body': 'AISI 304 Stainless Steel'
    },
    warranty: '2 Years Service & Replacement Warranty',
    availability: 'In Stock',
    stock: 18,
    deliveryInfo: 'Includes pump body, motor connection wire, and control panel board.',
    rating: 4.7,
    reviews: []
  },
  // --- WATER PUMPS ---
  {
    id: 'prod-millat-1',
    title: 'Millat Domestic Centrifugal Suction Pump (MGP-2)',
    category: 'water-pump',
    brandId: 'millat-pumps',
    brandName: 'Millat Pumps Limited',
    price: 11800,
    wholesalePrice: 10200,
    minWholesaleQty: 4,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-speed local centrifugal suction pump engineered with standard thermal overload shield and pure copper windings.',
    specification: {
      'Horsepower': '2.0 HP',
      'Suction Depth': '30 Feet',
      'Max Head Height': '40 Meters',
      'Power Source': 'Single Phase, 220V AC',
      'Body Material': 'Durable Cast Iron',
      'Impeller Material': 'Forged Brass'
    },
    warranty: '2 Years Manufacturer Warranty',
    availability: 'In Stock',
    stock: 35,
    deliveryInfo: 'Fast dispatch from Dhaka warehouse. Nationwide delivery.',
    rating: 4.7,
    reviews: [
      { id: 'rev-m1', userName: 'Belal Hossain', rating: 5, date: '2026-04-12', comment: 'Extremely durable. Running for 3 years without issues.' }
    ]
  },
  {
    id: 'prod-shakti-1',
    title: 'Shakti Borehole Solar Submersible Pump System',
    category: 'water-pump',
    brandId: 'shakti-pumps',
    brandName: 'Shakti Pumps (Bangladesh) Limited',
    price: 88000,
    wholesalePrice: 82000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-efficiency solar DC powered borehole pump, perfect for agricultural irrigation where electric grid lines are scarce.',
    specification: {
      'Horsepower': '3.0 HP Equivalent',
      'Working Voltage': '110V - 380V DC',
      'Max Head': '95 Meters',
      'Max Flow': '14,000 Liters/Hour',
      'Solar Panel Requirement': '3000 Watts Array',
      'Enclosure': 'IP68 Waterproof Stainless Steel'
    },
    warranty: '5 Years Warranty on Solar Controller, 3 Years on Pump Body',
    availability: 'In Stock',
    stock: 12,
    deliveryInfo: 'Includes dedicated freight packaging. Delivery in 3-5 days.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-pedrollo-1',
    title: 'Genuine Pedrollo CPm-158 Centrifugal Pump',
    category: 'water-pump',
    brandId: 'pedrollo-nk',
    brandName: 'Pedrollo nk. Limited',
    price: 18500,
    wholesalePrice: 16800,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Premium Italian centrifugal pump supplying heavy duty water flow. Built with food-grade brass impeller and thermal protectors.',
    specification: {
      'Horsepower': '1.0 HP',
      'Max Flow Rate': '90 Liters/Min',
      'Max Head Height': '36 Meters',
      'Country of Origin': 'Italy (100% Original)',
      'Suction Port': '1 Inch BSP',
      'Motor Shaft': 'AISI 431 Stainless Steel'
    },
    warranty: '2 Years Pedrollo Service Warranty',
    availability: 'In Stock',
    stock: 28,
    deliveryInfo: 'Delivered in custom secure boxes with authentic verification sticker.',
    rating: 4.8,
    reviews: [
      { id: 'rev-p1', userName: 'Engr. Kamal Hasan', rating: 5, date: '2026-05-15', comment: 'Authentic Italian pump. Flow rates exactly as cataloged.' }
    ]
  },
  {
    id: 'prod-pedrollo-showroom-1',
    title: 'Pedrollo Twin-Impeller High-Head Centrifugal Pump (2CPm)',
    category: 'water-pump',
    brandId: 'pedrollo-showroom',
    brandName: 'Pedrollo Pump Showroom',
    price: 32000,
    wholesalePrice: 29500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Premium high head pressure pump available directly from the flagship showroom. Suitable for tall buildings and automatic booster systems.',
    specification: {
      'Horsepower': '2.0 HP',
      'Max Head Height': '68 Meters',
      'Max Flow Rate': '140 Liters/Min',
      'Inlet / Outlet Size': '1.25" / 1"',
      'Voltage': 'Single Phase 220V',
      'In-Built': 'Thermal Overload Protection'
    },
    warranty: '2 Years Flagship Showroom Warranty',
    availability: 'In Stock',
    stock: 14,
    deliveryInfo: 'Same-day delivery within Dhaka city. Wood-crated packaging.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-service-1',
    title: 'Heavy Submersible Dewatering Pump with Float Switch',
    category: 'water-pump',
    brandId: 'pump-sales-service',
    brandName: 'Pump Sales & Service | Reliable Water Pump Solutions',
    price: 24500,
    wholesalePrice: 22000,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Dewatering submersible utility pump with mechanical float switch for automatic basin and storm basement drainage.',
    specification: {
      'Horsepower': '1.5 HP',
      'Max Flow Rate': '220 Liters/Min',
      'Max Head Height': '15 Meters',
      'Float Switch': 'Automatic Mechanical Float Included',
      'Impeller Type': 'Open Cast Iron Impeller',
      'Power Cable': '10 Meters Heavy Waterproof Shield'
    },
    warranty: '1 Year Full Support & Free Field Service',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Field installation help available inside Dhaka.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-genesis-1',
    title: 'Green Genesis Automatic Triplex Water Booster System',
    category: 'water-pump',
    brandId: 'green-genesis',
    brandName: 'Green Genesis Engineering Limited, Factory',
    price: 175000,
    wholesalePrice: 165000,
    minWholesaleQty: 1,
    images: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Commercial central booster system engineered with three parallel multi-stage pumps, electronic VFD panel, and pressure transducers.',
    specification: {
      'System Configuration': 'Triplex Parallel Pumps on Baseplate',
      'Total Horsepower': '6.0 HP (2.0 HP x 3 Pumps)',
      'Smart Controller': 'Integrated VFD PLC Pressure Panel',
      'Manifold Pipes': 'AISI 304 Polished Stainless Steel',
      'Pressure Range': '4.0 Bar - 12.0 Bar (Adjustable)',
      'Power Grid': '3-Phase, 380V - 415V, 50Hz'
    },
    warranty: '3 Years Comprehensive Engineering Warranty',
    availability: 'Contact for Availability',
    stock: 3,
    deliveryInfo: 'Requires expert field logistics. Installation setup by industrial engineers.',
    rating: 5.0,
    reviews: []
  },
  {
    id: 'prod-hatim-1',
    title: 'Hatim Premium Centrifugal Self-Priming Jet Pump',
    category: 'water-pump',
    brandId: 'hatim-pump',
    brandName: 'HATIM Group (Pump Division)',
    price: 9200,
    wholesalePrice: 8100,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High suction self-priming jet pump designed specifically to draw water from deep reservoirs and deliver high pressure to upper storeys.',
    specification: {
      'Horsepower': '0.75 HP',
      'Suction lift': '25 Feet',
      'Max Head': '35 Meters',
      'Max Flow': '45 Liters/Min',
      'Winding Material': '100% Pure copper wire',
      'Plugs': 'Heavy duty 3-Pin grounded plug'
    },
    warranty: '1 Year Hatim Group replacement warranty',
    availability: 'In Stock',
    stock: 40,
    deliveryInfo: 'Shipped in premium secure cartons.',
    rating: 4.5,
    reviews: []
  },

  // --- PIPES & FITTINGS ---
  {
    id: 'prod-navana-pipe-1',
    title: 'Navana uPVC High-Pressure Water Pipeline (Class D)',
    category: 'pipe-fittings',
    brandId: 'navana-pipe',
    brandName: 'Navana Pipe & Plastic Factory',
    price: 780,
    wholesalePrice: 690,
    minWholesaleQty: 50,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Certified food-safe unplasticized PVC pressure pipe for non-toxic drinking water systems and high-rise building plumbing lines.',
    specification: {
      'Standard Length': '10 Feet (3.05 Meters)',
      'Outer Diameter': '1.5 Inches',
      'Pressure Class': 'Class D (12 Bar / 174 PSI)',
      'Material': 'Lead-Free Virgin uPVC Resin',
      'Joining Standard': 'Socket End for Solvent Welding',
      'Color': 'Industrial Off-White / Blue'
    },
    warranty: '15 Years Material Defect Protection',
    availability: 'In Stock',
    stock: 1500,
    deliveryInfo: 'Shipped via long-bed flat truck. Minimum wholesale orders qualify for logistics discounts.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-hatim-pipe-1',
    title: 'Hatim PPR Thermal Socket Fusion Water Pipe (PN-20)',
    category: 'pipe-fittings',
    brandId: 'hatim-pipe',
    brandName: 'Hatim Group Of Industries',
    price: 950,
    wholesalePrice: 820,
    minWholesaleQty: 40,
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Heavy-duty socket fusion Polypropylene Random copolymer pipe designed for both hot and cold municipal water arrays.',
    specification: {
      'Length': '4 Meters (13.1 Feet)',
      'Outer Diameter': '25 mm',
      'Pressure Rating': 'PN 20 (290 PSI)',
      'Wall Thickness': '4.2 mm',
      'Material': 'Premium Polypropylene Random Copolymer Type 3',
      'Color': 'Prussian Green with Blue / Red stripe indicator'
    },
    warranty: '25 Years Structural Integrity Guarantee',
    availability: 'In Stock',
    stock: 800,
    deliveryInfo: 'Packed in protective bundles of 10 pipes.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-gbtl-1',
    title: 'GBTL Heavy Galvanized Iron Threaded Pipe (GI)',
    category: 'pipe-fittings',
    brandId: 'gbtl',
    brandName: 'GBTL - Gram Bangla Tubes LTD',
    price: 3400,
    wholesalePrice: 2980,
    minWholesaleQty: 20,
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Industrial heavy-gauge galvanized steel piping with hot-dipped zinc coatings, suitable for main tube wells, gas lines, and fire fighting.',
    specification: {
      'Standard Length': '20 Feet (6.1 Meters)',
      'Nominal Bore': '2.0 Inches',
      'Zinc Coating Thickness': '360 g/m² Heavy Duty Coating',
      'End Connection': 'Threaded Ends on both sides with Socket',
      'Class standard': 'Class Medium (BS-1387 / ISO 65)',
      'Acid resistance': 'Outstanding'
    },
    warranty: '10 Years Rust Free Structural Warranty',
    availability: 'In Stock',
    stock: 120,
    deliveryInfo: 'Requires specialized pipe cargo carrier transport.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-sanami-1',
    title: 'Sanami CPVC Temperature Resistant Pipe SDR-11',
    category: 'pipe-fittings',
    brandId: 'sanami-cpvc',
    brandName: 'Sanami | Cpvc Pipes Fittings Seller',
    price: 1150,
    wholesalePrice: 980,
    minWholesaleQty: 30,
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Chlorinated PVC pressure pipe designed for central solar water heaters and multi-storey boiler outlets. Resists scaling.',
    specification: {
      'Standard Length': '10 Feet',
      'Pipe Dimension': '1.0 Inch SDR 11',
      'Max Temp Tolerance': '93°C (200°F)',
      'Material Standards': 'High-Impact TempRite CPVC (ASTM D2846)',
      'Solderless Join': 'CPVC Solvent Weld cement',
      'Pressure limits': '400 PSI at 23°C'
    },
    warranty: '25 Years Long-Life Material Warranty',
    availability: 'In Stock',
    stock: 450,
    deliveryInfo: 'Standard package delivery within 48 hours.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-asgar-1',
    title: 'M/S Asgar Heavy Brass Core uPVC Ball Valve',
    category: 'pipe-fittings',
    brandId: 'asgar-trading',
    brandName: 'M/S Asgar Trading',
    price: 1450,
    wholesalePrice: 1220,
    minWholesaleQty: 25,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Commercial quality leak-proof heavy ball valve designed with virgin uPVC body and fully machined inner brass sphere block.',
    specification: {
      'Nominal Size': '1.5 Inches',
      'Body Material': 'Virgin uPVC (Heavy Class D)',
      'Core Shaft': 'Solid Machined Forged Brass',
      'Connection Type': 'Female Threaded NPT',
      'Handle': 'Reinforced ABS Lever with Locking Screw',
      'Max Pressure': '240 PSI'
    },
    warranty: '5 Years Replacement Guarantee',
    availability: 'In Stock',
    stock: 600,
    deliveryInfo: 'Fast delivery across Bangladesh via courier services.',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'prod-rfl-pipe-1',
    title: 'RFL Precision Threaded Deep Tube Well Casing Pipe',
    category: 'pipe-fittings',
    brandId: 'rfl-pipe',
    brandName: 'RFL Pipe & Fittings',
    price: 2150,
    wholesalePrice: 1850,
    minWholesaleQty: 15,
    images: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Extra-thick threaded uPVC casing pipe engineered to resist deep subsoil shifting forces in rural tube wells.',
    specification: {
      'Standard Length': '10 Feet',
      'Outer Diameter': '3.0 Inches (Nominal)',
      'Joint Interface': 'Precision Male/Female Trapeze Threaded Ends',
      'Wall Thickness': '6.5 mm Heavy Duty',
      'Chemical Resistance': '100% Lead-Free & Corrosion Proof',
      'Inlet Slots': 'Continuous smooth bores'
    },
    warranty: '20 Years Under-soil Lifespan Protection',
    availability: 'In Stock',
    stock: 220,
    deliveryInfo: 'Requires truck logistics. Loading cost included in wholesale prices.',
    rating: 4.9,
    reviews: [
      { id: 'rev-rfl1', userName: 'M. A. Faruk', rating: 5, date: '2026-03-22', comment: 'Thread seal is tight and withstands drilling hammer impact easily.' }
    ]
  },
  {
    id: 'prod-bango-1',
    title: 'BANGO Flexible uPVC Flame Retardant Conduit Coil',
    category: 'pipe-fittings',
    brandId: 'bango-polymer',
    brandName: 'BANGO Polymer',
    price: 1650,
    wholesalePrice: 1400,
    minWholesaleQty: 10,
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Flexible electrical wiring protection conduit pipe coil. Fabricated with fire retardant chemicals preventing short-circuit hazard spread.',
    specification: {
      'Coil Length': '100 Meters Continuous',
      'Outer Diameter': '20 mm Standard',
      'Material': 'Flame-Retardant Self-Extinguishing uPVC',
      'Impact Protection': '750 Newton Compression Class',
      'Bending Radius': 'Flexible (No warm bending tool required)',
      'Color': 'Glossy Charcoal Gray'
    },
    warranty: '10 Years Structural Shield',
    availability: 'In Stock',
    stock: 350,
    deliveryInfo: 'Lightweight delivery via standard courier packages.',
    rating: 4.4,
    reviews: []
  },
  {
    id: 'prod-sajan-1',
    title: 'Sajan Premium PVC Rainwater Gutter Channel',
    category: 'pipe-fittings',
    brandId: 'sajan-group',
    brandName: 'Sajan Group BD',
    price: 1100,
    wholesalePrice: 950,
    minWholesaleQty: 25,
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High flow drainage profile with UV titanium dioxide stabilizer. Perfect for factory sheds, warehouses, and luxury villas.',
    specification: {
      'Length per Pipe': '12 Feet (3.65 Meters)',
      'Channel Profile Width': '6 Inches Semi-Circular',
      'UV Resistance': 'Built-in Titanium Dioxide UV Absorbers',
      'Joint Interface': 'Rubber Ring Seal Gaskets (No Adhesive Needed)',
      'Color Option': 'Chalk White'
    },
    warranty: '10 Years Weathering Color Lock Warranty',
    availability: 'In Stock',
    stock: 400,
    deliveryInfo: 'Requires careful flat-bed logistics. Shipped from Central Base Yard.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-aqua-1',
    title: 'Aqua Dynamics Forged Carbon Steel Gate Valve',
    category: 'pipe-fittings',
    brandId: 'aqua-dynamics',
    brandName: 'Aqua Dynamics BD',
    price: 8500,
    wholesalePrice: 7500,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-temperature industrial flanged gate valve. Engineered with solid carbon steel wedge block for heavy factory steam pipelines.',
    specification: {
      'Port Connection': '2.0 Inches Standard Flange',
      'Body Material': 'ASTM A105 Forged Carbon Steel',
      'Pressure Class': 'Class 800 (PN-40 Heavy Industrial)',
      'Packing Material': 'Flexible Graphite High-Temp packing',
      'Wedge Plate': 'Cobalt-chromium alloy coated steel'
    },
    warranty: '3 Years Industrial Replacement Warranty',
    availability: 'In Stock',
    stock: 65,
    deliveryInfo: 'Packed in secure wooden blocks. Shipped nationwide.',
    rating: 4.8,
    reviews: []
  },

  // --- SANITARY WARE ---
  {
    id: 'prod-bravat-toilet',
    title: 'BRAVAT Smart Siphonic One-Piece Toilet (German Spec)',
    category: 'sanitary',
    brandId: 'bravat',
    brandName: 'BRAVAT Bangladesh',
    price: 54000,
    wholesalePrice: 48000,
    minWholesaleQty: 3,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Elite smart luxury toilet with LCD digital display, remote controls, heated seat, siphonic jet flush, and antibacterial glazing.',
    specification: {
      'Flush System': 'Powerful Tornado Siphon Jet Dual Flush',
      'Flushing volume': '3L / 4.5L Water Saver',
      'Roughing-In Size': '300 mm S-Trap',
      'Smart Controller': 'LCD Side Wheel + Wireless RF Remote Control',
      'Functional Features': 'Heated Seat, Warm Water wash, Air Dryer, Deodorizer',
      'Color Finish': 'Vitreous Polar White Glossy'
    },
    warranty: '5 Years Warranty on Smart Electricals, 10 Years on Ceramic Body',
    availability: 'In Stock',
    stock: 10,
    deliveryInfo: 'Premium freight packing in reinforced wood crating to guarantee zero-breakage.',
    rating: 4.9,
    reviews: [
      { id: 'rev-b1', userName: 'Asif Al Masud', rating: 5, date: '2026-05-30', comment: 'Absolutely stellar smart toilet. Heated seat feels incredible.' }
    ]
  },
  {
    id: 'prod-kohler-basin',
    title: 'Kohler Derring Handcrafted Vessel Basin',
    category: 'sanitary',
    brandId: 'kohler',
    brandName: 'KOHLER Flagship Showroom Banani',
    price: 43000,
    wholesalePrice: 38500,
    minWholesaleQty: 2,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Artistically crafted circular countertop basin. Captures organic textures with high durability glaze coatings.',
    specification: {
      'Mount Installation': 'Countertop Deck Vessel Mount',
      'Material': 'Dense Artist Edition Vitreous China',
      'Shape': 'Circular textured bowl',
      'Bowl Diameter': '411 mm',
      'Overflow Hole': 'No (Aesthetic minimalist design)',
      'Color Finish': 'Hermosa Glazed Bronze Pattern'
    },
    warranty: '5 Years Kohler Limited Warranty',
    availability: 'In Stock',
    stock: 8,
    deliveryInfo: 'Velvet wrapped inside high-density foam box packaging.',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'prod-dhaka-sanitary-1',
    title: 'TDS Vitreous China Full Pedestal Basin',
    category: 'sanitary',
    brandId: 'dhaka-sanitary',
    brandName: 'The Dhaka Sanitary',
    price: 7500,
    wholesalePrice: 6500,
    minWholesaleQty: 10,
    images: [
      'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Traditional floor standing pedestal wash basin set, providing premium structural glazing and deep bowl capacity.',
    specification: {
      'Configuration': 'Floor-Standing Integrated Pedestal Set',
      'Material': 'Vitrified Sanitary Ware Porcelain',
      'Dimensions': '560mm x 440mm x 820mm',
      'Bowl Depth': '165 mm',
      'Overflow Outlet': 'Integrated chrome overflow ring',
      'Faucet Inlet': 'Pre-punched center hole'
    },
    warranty: '10 Years Porcelain Crack Warranty',
    availability: 'In Stock',
    stock: 45,
    deliveryInfo: 'Supplied in thick cardboard cartons with internal Styrofoam blocks.',
    rating: 4.4,
    reviews: []
  },
  {
    id: 'prod-badhon-sanitary-1',
    title: 'Badhon Wall-Hung Commode with Concealed Cistern',
    category: 'sanitary',
    brandId: 'badhon-sanitary',
    brandName: 'Badhon Tiles & Sanitary',
    price: 28500,
    wholesalePrice: 25000,
    minWholesaleQty: 5,
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Compact floating toilet design. Saves floor space and includes high-quality Geberit Swiss dual flushing tank assembly.',
    specification: {
      'Type': 'Wall-Hung Floating Water Closet',
      'Roughing-In': '180 mm P-Trap',
      'Cistern Tank': 'In-wall Concealed Geberit Tank with Plate',
      'Seat Cover': 'Soft close slim design Duroplast',
      'Flushing Volume': 'Dual flush 3L / 6L volume',
      'Load capacity': 'Up to 400 kg'
    },
    warranty: '10 Years Warranty on Ceramic body, 3 Years on In-wall Tank valves',
    availability: 'In Stock',
    stock: 15,
    deliveryInfo: 'Crated wood packaging. Same-day shipping available in Dhaka.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'prod-bisf-1',
    title: 'BISF Heavy Duty Ceramic Squatting Pan with Footrests',
    category: 'sanitary',
    brandId: 'bisf-factory',
    brandName: 'Bangladesh Insulator & Sanitaryware Factory',
    price: 2200,
    wholesalePrice: 1850,
    minWholesaleQty: 50,
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Government certified extra thick vitrified fireclay squat pan. Extremely rugged, optimal for high-traffic office and public rest zones.',
    specification: {
      'Product Standard': 'Commercial BISF-102 Standard',
      'Material': 'Thick Glazed Vitrified Fireclay',
      'Footrests': 'Integrated Raised Anti-Slip Grid Footrests',
      'Length': '20 Inches (500mm)',
      'Water Trap': 'Includes S-Trap connector base',
      'Siphon Standard': 'Non-clogging open throat design'
    },
    warranty: '10 Years Government Manufacturing Assurance',
    availability: 'In Stock',
    stock: 500,
    deliveryInfo: 'Requires truck transport. Shipped directly from BISF plant.',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'prod-charu-1',
    title: 'Charu Moderna Under-Counter Ceramic Oval Basin',
    category: 'sanitary',
    brandId: 'charu-ceramic',
    brandName: 'Charu Ceramic Industries Ltd.',
    price: 5200,
    wholesalePrice: 4500,
    minWholesaleQty: 15,
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Self-rimming sleek oval under-counter bathroom sink. Designed to sit flush with marble or granite countertops.',
    specification: {
      'Mount Configuration': 'Under-counter self-rimming',
      'Material': 'Italian clay-formula vitrified china',
      'Bowl Dimensions': '510mm x 380mm oval',
      'Glazing': 'Eco Shield anti-fouling glossy glaze',
      'Overflow Port': 'Yes (Central overflow outlet)'
    },
    warranty: '10 Years Porcelain Glaze Warranty',
    availability: 'In Stock',
    stock: 80,
    deliveryInfo: 'Fragile. Cartons lined with multi-layer bubble wrap.',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'prod-modern-faucet',
    title: 'Modern Sanitary Sensory Automatic Basin Faucet',
    category: 'bathroom-accessories',
    brandId: 'modern-sanitary',
    brandName: 'Modern Sanitary',
    price: 9500,
    wholesalePrice: 8200,
    minWholesaleQty: 12,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Infrared motion sensor activated automatic water tap. Designed to maximize hygiene and save up to 70% water flow.',
    specification: {
      'Activation Type': 'Infrared Proximity Motion Sensor',
      'Detection distance': '10 cm - 15 cm (Auto calibrated)',
      'Power Options': 'Dual Mode (4x AA batteries or AC 220V plug-in)',
      'Control Valve': 'Industrial Solenoid Valve with Ceramic core',
      'Flow Regulator': 'Built-in Swiss Neoperl pressure aerator',
      'Body Material': 'Triple-plated Chrome on Lead-Free Solid Brass'
    },
    warranty: '2 Years Full Replacement Warranty',
    availability: 'In Stock',
    stock: 140,
    deliveryInfo: 'Includes flexible hoses, control box, and battery pack.',
    rating: 4.8,
    reviews: []
  }
];

export const PRODUCTS: Product[] = enhanceProducts(RAW_PRODUCTS);

export const DEMO_ORDERS: Order[] = [
  {
    id: 'MTC-ORDER-99120',
    userId: 'cust-1',
    customerName: 'Afridi Mahmud',
    customerEmail: 'afridi@dhakadevelopers.com',
    phone: '+880 1712-345678',
    address: 'Plot 45, Road 11, Banani, Dhaka 1213',
    items: [
      {
        productId: 'prod-pedrollo-1',
        productTitle: 'Genuine Pedrollo CPm-158 Centrifugal Pump',
        brandName: 'Pedrollo nk. Limited',
        price: 18500,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
      },
      {
        productId: 'prod-hatim-pipe-1',
        productTitle: 'Hatim PPR Thermal Socket Fusion Water Pipe (PN-20)',
        brandName: 'Hatim Group Of Industries',
        price: 950,
        quantity: 10,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
      }
    ],
    totalAmount: 28000,
    status: 'Shipped',
    date: '2026-06-22',
    trackingNumber: 'MTC-TRK-771920B',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 'MTC-ORDER-99119',
    userId: 'cust-2',
    customerName: 'Masum Billah',
    customerEmail: 'masum.b@outlook.com',
    phone: '+880 1819-987654',
    address: 'Motalib Plaza, Room 402, Hatirpool, Dhaka',
    items: [
      {
        productId: 'prod-kohler-basin',
        productTitle: 'Kohler Derring Handcrafted Vessel Basin',
        brandName: 'KOHLER Flagship Showroom Banani',
        price: 43000,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
      }
    ],
    totalAmount: 86000,
    status: 'Delivered',
    date: '2026-06-18',
    trackingNumber: 'MTC-TRK-112093C',
    paymentMethod: 'bKash/Nagad'
  }
];
