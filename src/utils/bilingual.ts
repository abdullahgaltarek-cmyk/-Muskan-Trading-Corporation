import { Product, Brand } from '../types';

// Import exact generated product images
import millatBorewellImg from '../assets/images/millat_borewell_pump_1782327259214.jpg';
import millatJetMaxImg from '../assets/images/millat_jet_max_pump_1782327274032.jpg';
import shaktiSolarPumpImg from '../assets/images/shakti_solar_pump_set_1782327287037.jpg';
import bravatSmartToiletImg from '../assets/images/bravat_smart_toilet_1782327297517.jpg';
import pedrolloCpm200Img from '../assets/images/pedrollo_cpm_200_1782327310951.jpg';
import bravatRainshowerImg from '../assets/images/bravat_rainshower_1782327323712.jpg';
import kohlerVeilToiletImg from '../assets/images/kohler_veil_toilet_1782327337410.jpg';
import apexPprPipeImg from '../assets/images/apex_ppr_pipe_1782327350674.jpg';
import shaktiBoosterImg from '../assets/images/shakti_booster_system_1782327368982.jpg';
import pvcSolventGlueImg from '../assets/images/pvc_solvent_glue_1782327381820.jpg';

// Curated high-resolution Unsplash images representing exact products
const CURATED_IMAGES = {
  // Pipes & Fittings
  pipePvcBlue: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80', // solvent glue/blue pipes
  pipeGreenPpr: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', // copper joint/PPR
  pipeWhiteUpvc: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80', // white plumbing line
  brassFitting: 'https://images.unsplash.com/photo-1585144860131-245d551c77f6?auto=format&fit=crop&w=800&q=80', // brass plumbing valve/fitting
  valvesSteel: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', // heavy steel valves

  // Sanitary Ware
  smartCommode: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', // luxury sleek bidet toilet
  premiumCommode: 'https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=800&q=80', // clean ceramic toilet
  porcelainBasin: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80', // round pedestal washbasin
  vanityMarble: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80', // marble countertop sink

  // Bathroom Accessories
  chromeMixer: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', // modern chrome faucet/mixer
  goldFaucet: 'https://images.unsplash.com/photo-1585144860131-245d551c77f6?auto=format&fit=crop&w=800&q=80', // elegant gold tap
  ledMirror: 'https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&w=800&q=80', // luxury illuminated mirror
  showerColumn: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', // luxury steel shower column

  // Heavy Motors & Machinery
  electricMotorBlue: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80', // heavy motor/electric coil
  industrialControlPanel: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', // power starter control board
  solarPanelField: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80', // solar panels setup

  // Pumps
  centrifugalBluePump: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80', // blue high-pressure centrifugal pump
  submersibleSteelWell: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', // heavy water infrastructure
};

// Translate English brands to Bengali
const BRAND_TRANSLATIONS: Record<string, string> = {
  'millat-pumps': 'মিল্লাত পাম্পস লিমিটেড',
  'shakti-pumps': 'শক্তি পাম্পস (বাংলাদেশ) লিমিটেড',
  'pedrollo-nk': 'পেড্রোলো এনকে লিমিটেড',
  'pedrollo-showroom': 'পেড্রোলো পাম্প শোরুম',
  'pedrollo-co': 'পেড্রোলো অ্যান্ড কোং',
  'pump-sales-service': 'পাম্প সেলস অ্যান্ড সার্ভিস',
  'pss-bd': 'পিএসএস ইঞ্জিনিয়ারিং বাংলাদেশ',
  'green-genesis': 'গ্রিন জেনেসিস ইঞ্জিনিয়ারিং লিমিটেড',
  'gge-water': 'গ্রিন গ্লোবাল এনভায়রনমেন্ট ওয়াটার',
  'hatim-pump': 'হাতিম গ্রুপ (পাম্প ডিভিশন)',
  'hatim-pumps': 'হাতিম ওয়াটার পাম্পস',
  'genesis-motors': 'জেনেসিস পাওয়ার মোটরস',
  'apex-holding': 'এপেক্স পলিমার অ্যান্ড পাইপস',
  'navana-pipe': 'নাভানা পাইপ অ্যান্ড প্লাস্টিক ফ্যাক্টরি',
  'navana-polymer': 'নাভানা পলিমার লিমিটেড',
  'hatim-pipe': 'হাতিম পাইপ অ্যান্ড ফিটিংস',
  'hatim-polymer': 'হাতিম পলিমার লিমিটেড',
  'gbtl': 'জিবিটিএল - গ্রাম বাংলা টিউবস লিমিটেড',
  'gbtl-pipes': 'গাজী বোরিং অ্যান্ড ট্রেডিং (GBTL)',
  'sanami-cpvc': 'সানামি সিপিভিসি পাইপস অ্যান্ড ফিটিংস',
  'sanami-pipes': 'সানামি প্লাস্টিকস লিমিটেড',
  'asgar-trading': 'মেসার্স আসগর ট্রেডিং',
  'rfl-pipe': 'আরএফএল পাইপ অ্যান্ড ফিটিংস',
  'rfl-plastics': 'আরএফএল প্লাস্টিকস লিমিটেড',
  'bango-polymer': 'বাংগো পলিমার লিমিটেড',
  'bango-pipes': 'বাংগো পাইপস লিমিটেড',
  'sajan-group': 'সাজন গ্রুপ বাংলাদেশ',
  'sajan-traders': 'সাজন ট্রেডার্স অ্যান্ড ফিটিংস',
  'aqua-dynamics': 'অ্যাকোয়া ডায়নামিক্স বাংলাদেশ',
  'aqua-valves': 'অ্যাকোয়া ভালভস লিমিটেড',
  'bravat': 'ব্রাভাট বাংলাদেশ লিমিটেড',
  'kohler': 'কোহলার ফ্ল্যাগশিপ শোরুম',
  'tds-sanitary': 'টিডিএস স্যানিটারি ওয়্যার',
  'dhaka-sanitary': 'দ্য ঢাকা স্যানিটারি',
  'badhon-sanitary': 'বাধন টাইলস অ্যান্ড স্যানিটারি',
  'bisf': 'বাংলাদেশ ইনসুলেটর অ্যান্ড স্যানিটারি ওয়্যার',
  'bisf-factory': 'বাংলাদেশ ইনসুলেটর অ্যান্ড স্যানিটারি ওয়্যার',
  'charu-ceramic': 'চারু সিরামিক ইন্ডাস্ট্রিজ লিমিটেড',
  'modern-sanitary': 'মডার্ন স্যানিটারি',
  'modern-fittings': 'মডার্ন স্যানিটারি অ্যান্ড ফিটিংস',
  'texmo-industries': 'টেক্সমোড ইন্ডাস্ট্রিজ (তারো পাম্পস)',
  'texmo-motors': 'টেক্সমো হেভি ডিউটি মোটরস',
  'energypac-power': 'এনার্জিপ্যাক পাওয়ার জেনারেশন পিএলসি',
  'energypac': 'এনার্জিপ্যাক পাওয়ার জেনারেশন',
};

// Map common product categories, keywords, and brands to accurate Bengali titles
export function generateBanglaTitle(title: string, brandId: string): string {
  let clean = title;
  
  // Extract horsepower if available
  const hpMatch = title.match(/(\d+(\.\d+)?)\s*HP/i);
  const hpStr = hpMatch ? ` (${hpMatch[1]} হর্সপাওয়ার)` : '';

  // Extract pipe size if available
  const inchMatch = title.match(/(\d+(\.\d+)?)\s*(Inch|"|mm)/i);
  const sizeStr = inchMatch ? ` - ${inchMatch[1]}${inchMatch[3]}` : '';

  const brandPrefix = BRAND_TRANSLATIONS[brandId] ? `${BRAND_TRANSLATIONS[brandId]} - ` : '';

  // Keywords translation
  if (title.toLowerCase().includes('submersible pump')) {
    return `সাবমার্সিবল পাম্প সেট${hpStr}${sizeStr}`;
  }
  if (title.toLowerCase().includes('borewell')) {
    return `ডিপ বোরওয়েল সাবমার্সিবল পাম্প${hpStr}`;
  }
  if (title.toLowerCase().includes('booster')) {
    return `স্মার্ট প্রেসার বুস্টার পাম্প${hpStr}`;
  }
  if (title.toLowerCase().includes('centrifugal pump')) {
    return `হাই-ফ্লো সেন্ট্রিফিউগাল পাম্প${hpStr}`;
  }
  if (title.toLowerCase().includes('jet-max') || title.toLowerCase().includes('jet pump')) {
    return `ডুয়াল ইম্পেলার জেট পাম্প${hpStr}`;
  }
  if (title.toLowerCase().includes('sewage') || title.toLowerCase().includes('dewatering')) {
    return `হেভি-ডিউটি সুয়েজ নিষ্কাশন পাম্প${hpStr}`;
  }
  if (title.toLowerCase().includes('ppr pipe')) {
    return `প্রিমিয়াম পিপিআর (PPR) ওয়াটার পাইপ${sizeStr}`;
  }
  if (title.toLowerCase().includes('cpvc pipe')) {
    return `সিপিভিসি (CPVC) হাই-টেম্পারেচার পাইপ${sizeStr}`;
  }
  if (title.toLowerCase().includes('upvc pipe')) {
    return `ইউপিভিসি (uPVC) ওয়াটার পাইপ${sizeStr}`;
  }
  if (title.toLowerCase().includes('sewer pipe') || title.toLowerCase().includes('sewerage')) {
    return `হেভি-ডিউটি সুয়ারেজ ড্রেনেজ পাইপ${sizeStr}`;
  }
  if (title.toLowerCase().includes('solvent cement') || title.toLowerCase().includes('glue')) {
    return `পিভিসি স্ট্রং সলভেন্ট সিমেন্ট গাম`;
  }
  if (title.toLowerCase().includes('teflon tape')) {
    return `লিক-প্রুফ থ্রেড সিল টেফলন টেপ`;
  }
  if (title.toLowerCase().includes('gate valve')) {
    return `হেভি ব্রাস গেট ভালভ (চাবি)`;
  }
  if (title.toLowerCase().includes('smart toilet') || title.toLowerCase().includes('intelligent veil')) {
    return `লাক্সারি ইন্টেলিজেন্ট স্মার্ট কমোড (টয়লেট)`;
  }
  if (title.toLowerCase().includes('commode') || title.toLowerCase().includes('toilet')) {
    return `প্রিমিয়াম ওয়ান-পিস সিরামিক কমোড`;
  }
  if (title.toLowerCase().includes('vessel basin') || title.toLowerCase().includes('basin')) {
    return `ডিজাইনার সিরামিক ওয়াশ বেসিন`;
  }
  if (title.toLowerCase().includes('vanity')) {
    return `লাক্সারি বাথরুম ভ্যানিটি ক্যাবিনেট`;
  }
  if (title.toLowerCase().includes('rainshower') || title.toLowerCase().includes('shower set') || title.toLowerCase().includes('shower column')) {
    return `লাক্সারি রেইনফল শাওয়ার সেট`;
  }
  if (title.toLowerCase().includes('mixer') || title.toLowerCase().includes('faucet')) {
    return `হট অ্যান্ড কোল্ড ওয়াটার মিক্সার কল`;
  }
  if (title.toLowerCase().includes('induction motor') || title.toLowerCase().includes('electric motor')) {
    return `হেভি-ডিউটি থ্রি-ফেজ ইন্ডাকশন মোটর${hpStr}`;
  }
  if (title.toLowerCase().includes('starter') || title.toLowerCase().includes('control panel')) {
    return `ডিজিটাল মোটর প্রটেকশন কন্ট্রোল প্যানেল`;
  }
  if (title.toLowerCase().includes('pressure tank')) {
    return `হাই-প্রেসার ওয়াটার একুমুলেটর ট্যাংক`;
  }
  if (title.toLowerCase().includes('membrane') || title.toLowerCase().includes('filter')) {
    return `হেভি-ফ্লো ইন্ডাস্ট্রিয়াল ওয়াটার ফিল্টার ফিল্ট্রেশন পার্টস`;
  }
  if (title.toLowerCase().includes('gas pipe') || title.toLowerCase().includes('hdpe')) {
    return `HDPE হাই-প্রেসার গ্যাস ও ওয়াটার পাইপ${sizeStr}`;
  }
  if (title.toLowerCase().includes('casing')) {
    return `গভীর নলকূপ ফিল্টার ও কেসিং পাইপ`;
  }

  // Generics for items
  return clean.replace(/Pump/gi, 'পাম্প')
              .replace(/Pipe/gi, 'পাইপ')
              .replace(/Valve/gi, 'ভালভ')
              .replace(/Motor/gi, 'মোটর')
              .replace(/Basin/gi, 'বেসিন')
              .replace(/Toilet/gi, 'টয়লেট')
              .replace(/Shower/gi, 'শাওয়ার')
              .replace(/Fittings/gi, 'ফিটিংস');
}

// Generate fluid, professional Bengali translations for product descriptions
export function generateBanglaDescription(product: Product): string {
  const brandName = product.brandName || 'আমাদের কোম্পানি';
  const category = product.category;
  const title = product.title.toLowerCase();

  if (category === 'water-pump') {
    if (title.includes('submersible') || title.includes('borewell')) {
      return `কৃষি জমি, সেচ প্রকল্প এবং বহুতল ভবনে গভীর নলকূপ থেকে পানি উত্তোলনের জন্য ${brandName} ব্র্যান্ডের অত্যন্ত শক্তিশালী এবং টেকসই সাবমার্সিবল পাম্প সেট। এটি বিদ্যুৎ সাশ্রয়ী ও দীর্ঘস্থায়ী কার্যকারিতা নিশ্চিত করে।`;
    }
    if (title.includes('booster') || title.includes('hybrid')) {
      return `আধুনিক বহুতল অ্যাপার্টমেন্ট এবং বাণিজ্যিক ভবনের প্রতিটি কল ও শাওয়ারে পানির সমান ও উচ্চ প্রেসার বজায় রাখার জন্য অত্যাধুনিক অটোমেটিক বুস্টার প্রেসার পাম্প সিস্টেম।`;
    }
    if (title.includes('jet') || title.includes('shallow')) {
      return `কম গভীরতার কূপ বা ভূগর্ভস্থ রিজার্ভ ট্যাংক থেকে দ্রুত ও উচ্চ গতিতে পানি সরবরাহের জন্য ডিজাইনকৃত সেলফ-প্রাইমিং জেট বা বুস্টার ওয়াটার পাম্প।`;
    }
    if (title.includes('sewage') || title.includes('dewatering') || title.includes('dirty')) {
      return `টয়লেট, সেপটিক ট্যাংক এবং বন্যা বা ড্রেনের ভারী কাদা ও নোংরা পানি নিরাপদে নিষ্কাশনের জন্য স্পেশাল কাস্ট আয়রন বডি ও প্রপেলার বিশিষ্ট হেভি-ডিউটি সাবমার্সিবল পাম্প।`;
    }
    return `${brandName} ব্র্যান্ডের আসল হাই-ফ্লো ওয়াটার পাম্প। এটি কম বিদ্যুৎ খরচে সর্বোচ্চ পরিমাণ পানি উত্তোলন করতে সক্ষম এবং দীর্ঘস্থায়ী ওয়ারেন্টি যুক্ত।`;
  }

  if (category === 'pipe-fittings') {
    if (title.includes('ppr')) {
      return `অরিজিনাল কাঁচামাল এবং উন্নত হিট-রেজিস্ট্যান্ট প্রযুক্তি দ্বারা তৈরি পিপিআর পাইপ ও ফিটিংস। এটি সম্পূর্ণ লিক-প্রুফ এবং যেকোনো ঠান্ডা ও ফুটন্ত গরম পানির লাইনে আজীবন ব্যবহারের জন্য নিরাপদ।`;
    }
    if (title.includes('cpvc')) {
      return `উচ্চ তাপমাত্রা এবং রাসায়নিক প্রতিরোধী সিপিভিসি পাইপ। এটি আবাসিক ও বাণিজ্যিক বিল্ডিংয়ে নিরাপদ ও স্বাস্থ্যকর পানির লাইনে ব্যবহারের জন্য আন্তর্জাতিক মানসম্মত।`;
    }
    if (title.includes('upvc') || title.includes('sewer') || title.includes('sewerage')) {
      return `ভারী ড্রেনেজ, বাড়ির প্রধান সুয়ারেজ লাইন এবং বোরিং কাজের জন্য অত্যন্ত নমনীয়, শক্ত এবং দীর্ঘস্থায়ী ইউপিভিসি পাইপ। মাটি বা রোদ-বৃষ্টিতে সহজে নষ্ট হয় না।`;
    }
    if (title.includes('solvent') || title.includes('glue') || title.includes('cement')) {
      return `পিভিসি এবং ইউপিভিসি পাইপ ও ফিটিংসের জোড়া আজীবনের জন্য সিল ও জোড়া লাগানোর জন্য অত্যন্ত শক্তিশালী এবং দ্রুত ড্রাইং হেভি-ডিউটি সলভেন্ট আঠা বা গাম।`;
    }
    if (title.includes('valve') || title.includes('brass')) {
      return `শতভাগ খাঁটি পিতল বা ব্রাস দিয়ে তৈরি হেভি-ডিউটি গেট ভালভ, ইউনিয়ন এবং এলবো। এটি শতভাগ জং-প্রতিরোধী এবং পানির প্রবাহ মসৃণভাবে নিয়ন্ত্রণ করে।`;
    }
    return `উচ্চ চাপ সহনশীল এবং টেকসই স্যানিটারি প্লাস্টিক বা মেটাল ফিটিংস। নিরাপদ পানির লাইন ও দীর্ঘমেয়াদী ব্যবহারের জন্য অত্যন্ত নির্ভরযোগ্য।`;
  }

  if (category === 'sanitary') {
    if (title.includes('smart') || title.includes('intelligent') || title.includes('veil')) {
      return `অটো ফ্লাশ, সিট ওয়ার্মার, এলইডি ডিসপ্লে, টাচ রিমোট কন্ট্রোল এবং অ্যান্টি-ব্যাকটেরিয়াল সেলফ-ক্লিনিং নজেল সমৃদ্ধ বিশ্বমানের আধুনিক লাক্সারি স্মার্ট টয়লেট কমোড সেট।`;
    }
    if (title.includes('commode') || title.includes('toilet') || title.includes('wall-hung')) {
      return `চমৎকার গ্লসি ফিনিশিং এবং হাই-ক্লাস সিরামিক ম্যাটেরিয়ালে তৈরি আধুনিক ও আরামদায়ক ওয়ান-পিস কমোড। কম পানি ব্যবহারে শক্তিশালী সাইফন জেট ফ্লাশিং প্রযুক্তি সম্পন্ন।`;
    }
    if (title.includes('basin') || title.includes('vessel')) {
      return `মার্জিত ও মডার্ন বাথরুম ডিজাইনের জন্য কাউন্টারটপ সিরামিক ভেসেল বেসিন। এটি অত্যন্ত মসৃণ, স্ক্র্যাচ-প্রতিরোধী এবং সহজে দাগ ধরে না।`;
    }
    if (title.includes('vanity') || title.includes('cabinet')) {
      return `বাথরুমের সৌন্দর্য বাড়াতে প্রিমিয়াম ওয়াটারপ্রুফ মেটাল বা উড ক্যাবিনেট ও গ্লাস মিররসহ আলিশান বাথরুম ভ্যানিটি সেট। প্রয়োজনীয় জিনিস গোছানোর জন্য পর্যাপ্ত ড্রয়ার সুবিধাযুক্ত।`;
    }
    return `${brandName} ব্র্যান্ডের প্রিমিয়াম গ্রেড সিরামিক স্যানিটারি ওয়্যার। এটি দৃষ্টিনন্দন ডিজাইনে তৈরি এবং টেকসই দীর্ঘস্থায়িত্ব নিশ্চিত করে।`;
  }

  if (category === 'bathroom-accessories') {
    if (title.includes('rainshower') || title.includes('shower set') || title.includes('column')) {
      return `প্রাকৃতিক বৃষ্টির মতো প্রশান্তিদায়ক গোসলের অনুভূতি দিতে প্রশস্ত রেইনফল শাওয়ার প্লেট এবং কনসিলড থার্মোস্ট্যাটিক মিক্সার সংবলিত প্রিমিয়াম শাওয়ার কলাম সেট।`;
    }
    if (title.includes('mixer') || title.includes('faucet') || title.includes('tap')) {
      return `সলিড ব্রাস বা মেটাল দিয়ে তৈরি প্রিমিয়াম হট/কোল্ড মিক্সার ট্যাপ কল। এর মসৃণ ক্রোমিয়াম বা গোল্ড কোটিং বাথরুমের লুককে আকর্ষণীয় করে তোলে এবং লিক-প্রুফ কাজ করে।`;
    }
    if (title.includes('mirror') || title.includes('led')) {
      return `বাথরুম বা ড্রেসিং রুমের জন্য ফ্রন্ট-লিট অ্যান্টি-ফগ এলইডি টাচ মিরর। এর স্মার্ট টাচ বোতামের সাহায্যে আলোর উজ্জ্বলতা ও তাপমাত্রা এডজাস্ট করা যায়।`;
    }
    return `উচ্চ মানের জং-প্রতিরোধী মেটাল বা স্টেইনলেস স্টিল দিয়ে তৈরি বাথরুম ফিটিংস ও অ্যাক্সেসরিজ। বাথরুম পরিষ্কার ও পরিপাটি রাখতে অত্যন্ত উপযোগী।`;
  }

  if (category === 'motor') {
    if (title.includes('induction') || title.includes('electric') || title.includes('motor')) {
      return `ইন্ডাস্ট্রিয়াল গ্রেড কপার ওয়াইন্ডিং (তামার কয়েল) বিশিষ্ট শক্তিশালী থ্রি-ফেজ বা সিঙ্গেল-ফেজ ইলেকট্রিক মোটর। এটি যেকোনো ফ্যাক্টরি মেশিনারি বা ভারী ওয়াটার পাম্প চালানোর জন্য ডিজাইনকৃত।`;
    }
    if (title.includes('starter') || title.includes('control')) {
      return `অতিরিক্ত লোড, ভোল্টেজ ওঠানামা এবং শর্ট সার্কিট থেকে পানির মোটর বা পাম্পকে শতভাগ নিরাপদ রাখতে ডিজিটাল ডিসপ্লে সংবলিত হাই-গ্রেড স্টার্টার ও কন্ট্রোল প্যানেল।`;
    }
    return `উচ্চ টর্ক সম্পন্ন এবং বিদ্যুৎ সাশ্রয়ী হেভি ডিউটি ইলেকট্রিক মোটর ও ড্রাইভার। এটি দীর্ঘমেয়াদী এবং বিরামহীন ব্যবহারের জন্য উপযোগী।`;
  }

  return `আপনার বিশ্বস্ত ${brandName} ব্র্যান্ডের অরিজিনাল ও প্রিমিয়াম প্রোডাক্ট। আমাদের প্রতিটি প্রোডাক্ট কঠোর মান নিয়ন্ত্রণ পরীক্ষার মাধ্যমে বাজারজাত করা হয়।`;
}

// Automatically assign precise product image arrays based on keywords & category to replace generic placeholder images
export function getProductExactImages(product: Product): string[] {
  const title = product.title.toLowerCase();
  const category = product.category;
  const brandId = product.brandId;

  // 1. First, check pre-generated high quality image matches
  if (product.id === 'prod-millat-borewell-6' || title.includes('borewell 6"')) {
    return [millatBorewellImg];
  }
  if (product.id === 'prod-millat-jet-max' || title.includes('jet-max')) {
    return [millatJetMaxImg];
  }
  if (product.id === 'prod-shakti-sub-7' || title.includes('solar submersible pump set')) {
    return [shaktiSolarPumpImg];
  }
  if (product.id === 'prod-bravat-smart-toilet' || (title.includes('bravat') && title.includes('smart toilet'))) {
    return [bravatSmartToiletImg];
  }
  if (product.id === 'prod-pedrollo-cpm-200' || title.includes('cpm-200')) {
    return [pedrolloCpm200Img];
  }
  if (product.id === 'prod-bravat-rainshower-thermo' || (title.includes('bravat') && title.includes('rainshower'))) {
    return [bravatRainshowerImg];
  }
  if (product.id === 'prod-kohler-intelligent-veil' || title.includes('veil intelligent')) {
    return [kohlerVeilToiletImg];
  }
  if (product.id === 'prod-apex-ppr-pipe' || (title.includes('apex') && title.includes('ppr pipe'))) {
    return [apexPprPipeImg];
  }
  if (product.id === 'prod-shakti-booster-hybrid' || title.includes('hydro-pneumatic smart hybrid')) {
    return [shaktiBoosterImg];
  }
  if (product.id === 'prod-asgar-solvent-cement' || title.includes('solvent cement')) {
    return [pvcSolventGlueImg];
  }

  // 2. Curated mappings for remaining products to ensure high quality and zero placeholders
  if (category === 'water-pump') {
    if (title.includes('solar') || title.includes('irrigation')) {
      return [CURATED_IMAGES.solarPanelField, CURATED_IMAGES.valvesSteel];
    }
    if (title.includes('control panel') || title.includes('starter')) {
      return [CURATED_IMAGES.industrialControlPanel];
    }
    if (title.includes('pressure tank')) {
      return [CURATED_IMAGES.valvesSteel, CURATED_IMAGES.centrifugalBluePump];
    }
    if (title.includes('sewage') || title.includes('dewatering') || title.includes('vxm')) {
      return [CURATED_IMAGES.submersibleSteelWell, CURATED_IMAGES.centrifugalBluePump];
    }
    if (title.includes('multistage') || title.includes('vertical')) {
      return [CURATED_IMAGES.submersibleSteelWell, CURATED_IMAGES.valvesSteel];
    }
    // General pump fallback
    return [CURATED_IMAGES.centrifugalBluePump];
  }

  if (category === 'pipe-fittings') {
    if (title.includes('solvent') || title.includes('cement') || title.includes('glue') || title.includes('tape')) {
      return [pvcSolventGlueImg, CURATED_IMAGES.pipePvcBlue];
    }
    if (title.includes('ppr') || title.includes('cpvc') || title.includes('elbow') || title.includes('tee')) {
      return [apexPprPipeImg, CURATED_IMAGES.pipeGreenPpr];
    }
    if (title.includes('sewer') || title.includes('drainage') || title.includes('upvc')) {
      return [CURATED_IMAGES.pipeWhiteUpvc];
    }
    if (title.includes('valve') || title.includes('brass') || title.includes('union')) {
      return [CURATED_IMAGES.brassFitting, CURATED_IMAGES.valvesSteel];
    }
    return [CURATED_IMAGES.pipeGreenPpr];
  }

  if (category === 'sanitary') {
    if (title.includes('smart') || title.includes('toilet') || title.includes('commode') || title.includes('veil')) {
      return [bravatSmartToiletImg, kohlerVeilToiletImg];
    }
    if (title.includes('basin') || title.includes('vessel')) {
      return [CURATED_IMAGES.porcelainBasin, CURATED_IMAGES.vanityMarble];
    }
    if (title.includes('cabinet') || title.includes('vanity') || title.includes('tiles')) {
      return [CURATED_IMAGES.vanityMarble, CURATED_IMAGES.porcelainBasin];
    }
    return [CURATED_IMAGES.premiumCommode];
  }

  if (category === 'bathroom-accessories') {
    if (title.includes('shower') || title.includes('rain') || title.includes('column')) {
      return [bravatRainshowerImg, CURATED_IMAGES.showerColumn];
    }
    if (title.includes('mixer') || title.includes('faucet') || title.includes('tap') || title.includes('valve')) {
      return [CURATED_IMAGES.chromeMixer, CURATED_IMAGES.goldFaucet];
    }
    if (title.includes('mirror') || title.includes('led')) {
      return [CURATED_IMAGES.ledMirror];
    }
    if (title.includes('drain') || title.includes('towel') || title.includes('hook')) {
      return [CURATED_IMAGES.chromeMixer, CURATED_IMAGES.porcelainBasin];
    }
    return [CURATED_IMAGES.chromeMixer];
  }

  if (category === 'motor') {
    if (title.includes('starter') || title.includes('control')) {
      return [CURATED_IMAGES.industrialControlPanel];
    }
    return [CURATED_IMAGES.electricMotorBlue];
  }

  // Fallback to random high-quality matching image
  return [CURATED_IMAGES.centrifugalBluePump];
}

// Process the entire list of products to make sure they are fully enhanced with correct images and translations
export function enhanceProducts(products: Product[]): Product[] {
  return products.map(product => {
    // Process images
    const correctImages = getProductExactImages(product);
    
    // Process title
    const banglaTitle = product.banglaTitle || generateBanglaTitle(product.title, product.brandId);

    // Process description
    const banglaDescription = product.banglaDescription || generateBanglaDescription(product);

    return {
      ...product,
      images: correctImages,
      banglaTitle,
      banglaDescription
    };
  });
}

const BRAND_DESCRIPTIONS_BD: Record<string, string> = {
  'millat-pumps': 'কৃষি সেচ ও গার্হস্থ্য ব্যবহারের জন্য পুরো বাংলাদেশ জুড়ে অত্যন্ত পরিচিত ও সাশ্রয়ী দেশীয় পানির পাম্প ব্র্যান্ড।',
  'shakti-pumps': 'অত্যাধুনিক ও উচ্চ প্রযুক্তিসম্পন্ন পরিবেশবান্ধব সোলার ওয়াটার পাম্প এবং হাইব্রিড কন্ট্রোলার প্রযুক্তির নির্ভরযোগ্য বিশ্বস্ত ব্র্যান্ড।',
  'pedrollo-nk': 'ইতালীয় প্রযুক্তি ও ১০০% কপার কয়েল সম্পন্ন প্রিমিয়াম পেড্রোলো ওয়াটার পাম্পের একমাত্র অনুমোদিত আমদানিকারক ও পরিবেশক।',
  'pedrollo-showroom': 'বাসাবাড়ি ও কলকারখানার জন্য উন্নত পেড্রোলো পাম্পের আকর্ষণীয় ফ্ল্যাগশিপ ডিসপ্লে গ্যালারি।',
  'pump-sales-service': 'সারাদেশে যেকোনো জটিল ওয়াটার পাম্প মেরামত ও ডায়াগনস্টিক সেবার জন্য আসল পার্টস সরবরাহকারী প্রতিষ্ঠান।',
  'green-genesis': 'শিল্পকারখানার ওয়াটার ট্রিটমেন্ট প্ল্যান্ট এবং হেভি-ডিউটি সেন্ট্রাল বুস্টার পাম্প ইঞ্জিনিয়ারিং সুবিধা।',
  'hatim-pump': 'হাতিম গ্রুপের আধুনিক সেলফ-প্রাইমিং সেন্ট্রিফিউগাল পাম্প ও প্রেসার বুস্টার সিস্টেম।',
  'navana-pipe': 'খাদ্য ও ব্যবহারের জন্য ১০০% নিরাপদ প্লাস্টিক প্রযুক্তিতে তৈরি উন্নত মানের নাভানা পাইপ নেটওয়ার্ক।',
  'hatim-pipe': 'শিল্প ও বড় বড় সরকারি প্রজেক্টে পানির লাইন ও গ্যাস পরিবহনে অত্যন্ত টেকসই হাতিম পাইপ সলিউশন।',
  'gbtl': 'গ্রাম বাংলার ডিপ বোরিং এবং গভীর নলকূপের কাজকে লিক-প্রুফ রাখতে নির্ভরযোগ্য জিবিটিএল কেসিং ও জিআই পাইপ।',
  'sanami-cpvc': 'উচ্চ তাপমাত্রা ও চাপ প্রতিরোধী খাঁটি এএসটিএম সিপিভিসি পাইপ এবং নিখুঁত থ্রেডেড ব্রাস ফিটিংস।',
  'asgar-trading': 'দেশের স্যানিটারি ও প্লাস্টিক পাইকারি বাজারে শীর্ষস্থানীয় পাইপ, ফিটিংস ও টেফলন টেপ সরবরাহকারী ডিলার।',
  'rfl-pipe': 'বাংলাদেশের পাইপ ও ফিটিংসের শীর্ষ বাজারে প্রতিদিন লক্ষ লক্ষ মানুষের বিশ্বস্ত ব্র্যান্ড আরএফএল।',
  'bango-polymer': 'জাতীয় টেলিকম ও বৈদ্যুতিক ওয়্যারিং কাজের জন্য অত্যন্ত নির্ভরযোগ্য ও নিরাপদ বাংগো প্লাস্টিক কনডুইট পাইপ।',
  'sajan-group': 'বাসাবাড়ির ছাদের বৃষ্টির পানি নিষ্কাশন এবং মজবুত ওয়াটার লাইনের নির্ভরযোগ্য সাজন পাইপ ফিটিংস।',
  'aqua-dynamics': 'শিল্প-কারখানার বাষ্প, গ্যাস এবং বর্জ্য নিষ্কাশন লাইনে ব্যবহারের জন্য শতভাগ নির্ভরযোগ্য মেটাল অ্যাকোয়া ভালভস।',
  'bravat': 'জার্মান প্রযুক্তিতে তৈরি অত্যন্ত অভিজাত স্যানিটারি ওয়্যার, উন্নত ডিজাইন এবং চমৎকার স্মার্ট ওয়াটার কন্ট্রোল সিস্টেম।',
  'kohler': 'বিশ্বের সবচেয়ে বিলাসবহুল বাথরুম স্যানিটারি ওয়্যার, ডিজাইনার কাউন্টারটপ বেসিন এবং অটোমেটিক শাওয়ার কল।',
  'dhaka-sanitary': 'ঢাকাসহ সারাদেশে সব ধরনের স্যানিটারি ওয়্যার ও বাথরুম অ্যাক্সেসরিজের প্রধান পাইকারি ও খুচরা বিক্রেতা।',
  'badhon-sanitary': 'বাসাবাড়িকে আকর্ষণীয় করতে প্রিমিয়াম গ্লসি ফ্লোর ও ওয়াল টাইলস এবং চমৎকার বাথরুম ভ্যানিটি ক্যাবিনেট।',
  'bisf-factory': 'সরকারি মালিকানাধীন প্রাচীনতম ও ঐতিহ্যবাহী অত্যন্ত মজবুত সিরামিক কমোড এবং চিনা মাটির স্যানিটারি ফিটিংস।',
  'charu-ceramic': 'ইতালিয়ান প্রযুক্তিতে তৈরি ব্যাকটেরিয়া-প্রতিরোধী চকচকে সাদা চারু সিরামিক স্যানিটারি ওয়্যার।',
  'modern-sanitary': 'অফিস, হোটেল বা হাসপাতালের মতো ভারী ব্যবহারের জন্য পানি সাশ্রয়ী ডুয়াল-ফ্লাশ সিস্টেম ও উন্নত ফিটিংস।',
  'texmo-industries': 'টেক্সমো (তারো পাম্প) ব্রান্ডের হেভি-ডিউটি সিঙ্গেল ও থ্রি-ফেজ ইন্ডাকশন মোটর এবং সাবমার্সিবল পাম্প।',
  'apex-holding': 'এপেক্স হুসাইন গ্রুপের অরিজিনাল থ্রি-লেয়ার পিপিআর পাইপ এবং লিক-প্রুফ প্লাস্টিক সলিউশন।',
  'energypac-power': 'এনার্জিপ্যাক পাওয়ার জেনারেশন লিঃ এর অত্যন্ত নির্ভরযোগ্য ও বিশ্বমানের হেভি-ডিউটি জেনারেটর এবং ওয়াটার পাম্প।'
};

// Process the list of brands to make sure they are fully enhanced with Bengali translations and bios
export function enhanceBrands(brands: Brand[]): Brand[] {
  return brands.map(brand => {
    const banglaName = BRAND_TRANSLATIONS[brand.id] || brand.name;
    const banglaDescription = BRAND_DESCRIPTIONS_BD[brand.id] || `${banglaName} এর অফিশিয়াল ডিস্ট্রিবিউশন প্রোফাইল ও আসল প্রোডাক্ট রেঞ্জ।`;
    return {
      ...brand,
      banglaName,
      banglaDescription
    };
  });
}

// Fallback high quality local image based on product category
export function getProductFallbackImage(category?: string): string {
  if (category === 'water-pump') return millatJetMaxImg;
  if (category === 'pipe-fittings') return apexPprPipeImg;
  if (category === 'sanitary') return bravatSmartToiletImg;
  if (category === 'bathroom-accessories') return bravatRainshowerImg;
  if (category === 'motor') return shaktiBoosterImg;
  return millatJetMaxImg; // Default fallback
}

