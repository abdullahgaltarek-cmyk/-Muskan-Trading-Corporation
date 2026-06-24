import React from 'react';
import { ShieldCheck, Mail, MapPin, PhoneCall, Clock, CreditCard, Award, Truck } from 'lucide-react';
import logoImg from '../assets/images/muskan_logo_1782325714940.jpg';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  setSelectedCategoryFilter: (cat: string) => void;
}

export default function Footer({ setCurrentTab, setSelectedCategoryFilter }: FooterProps) {
  const handleCategoryClick = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setCurrentTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/20 font-sans" id="main-footer">
      {/* Value Prop bar */}
      <div className="bg-[#001733] border-b border-gold-500/10 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 p-2">
            <div className="p-3 bg-gold-500/10 text-gold-500 rounded-none border border-gold-500/20">
              <Award className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white tracking-tight">100% Genuine Brands</h4>
              <p className="text-xs text-slate-400 mt-1 font-serif italic">Authorized importer of Pedrollo, Kohler, RAK & more.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 p-2">
            <div className="p-3 bg-gold-500/10 text-gold-500 rounded-none border border-gold-500/20">
              <Truck className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white tracking-tight">Secure Freight Delivery</h4>
              <p className="text-xs text-slate-400 mt-1 font-serif italic">Carefully packaged ceramics & pumps sent across Bangladesh.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 p-2">
            <div className="p-3 bg-gold-500/10 text-gold-500 rounded-none border border-gold-500/20">
              <CreditCard className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white tracking-tight">Wholesale Credit & Terms</h4>
              <p className="text-xs text-slate-400 mt-1 font-serif italic">Flexible letter of credit (LC) terms for corporate buyers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full p-0.5 flex items-center justify-center shadow-lg border border-gold-500/55 overflow-hidden">
              <img 
                src={logoImg} 
                alt="Muskan Trading Logo" 
                className="w-full h-full object-contain rounded-full" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block font-serif font-black tracking-tight text-white text-lg leading-none">Muskan Trading</span>
              <span className="block text-[9px] tracking-widest text-gold-500 uppercase font-mono font-bold mt-1.5">Corporation</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-serif italic">
            Muskan Trading Corporation is a premium industrial marketplace and authorized distributor based in Dhaka, Bangladesh. We supply high-end water pumps, durable pipes & fittings, and luxury bathroom sanitary ware to builders, government, and retail partners nationwide.
          </p>
          <div className="pt-2">
            <span className="text-[10px] font-bold text-white block mb-1 uppercase tracking-wider font-mono">Corporate Registration</span>
            <span className="text-xs text-gold-500 font-mono font-bold">TRAD/DNCC/029103/2026</span>
          </div>
        </div>

        {/* Categories Quick Links */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/5 font-mono">
            Product Categories
          </h3>
          <ul className="space-y-2.5 text-xs font-serif italic">
            <li>
              <button onClick={() => handleCategoryClick('water-pump')} className="text-slate-400 hover:text-gold-500 transition-colors text-left">
                Water Pump Systems
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('pipe-fittings')} className="text-slate-400 hover:text-gold-500 transition-colors text-left">
                uPVC, CPVC & PPR Pipes
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('sanitary')} className="text-slate-400 hover:text-gold-500 transition-colors text-left">
                Luxury Sanitary Ware
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('bathroom-accessories')} className="text-slate-400 hover:text-gold-500 transition-colors text-left">
                Bathroom Accessories & Faucets
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('motor')} className="text-slate-400 hover:text-gold-500 transition-colors text-left">
                Heavy Industrial Motors
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Office Info */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/5 font-mono">
            Head Office (Dhaka)
          </h3>
          <ul className="space-y-4 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span className="font-serif italic">
                <strong className="text-white font-sans not-italic font-bold">Muskan Tower</strong>, Level 4-6,<br />
                Hatirpool Outer Circular Road,<br />
                Dhaka-1205, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-mono">01349679393, +880 2-9831093</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="hover:text-white transition-colors font-mono">info@muskantrading.com.bd</span>
            </li>
          </ul>
        </div>

        {/* Chittagong Warehouse Office Info */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/5 font-mono">
            Warehouse & Logistics
          </h3>
          <ul className="space-y-4 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span className="font-serif italic">
                <strong className="text-white font-sans not-italic font-bold">MTC Central Yard</strong>, Plot 18-20,<br />
                Kadamtali Industrial Area,<br />
                Chittagong, Bangladesh
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span className="font-serif italic">
                <strong className="text-white font-sans not-italic font-bold">Working Hours:</strong><br />
                Saturday - Thursday: 9:00 AM - 7:00 PM<br />
                Friday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-[#000E1F] text-[9px] text-slate-500 py-6 px-4 border-t border-white/5 uppercase tracking-widest font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Muskan Trading Corporation. All Rights Reserved. Engineered for excellence in Bangladesh.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Wholesale Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
