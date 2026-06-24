import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Truck, Users2 } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onBrandsClick: () => void;
  onRequestQuote: () => void;
}

export default function Hero({ onShopClick, onBrandsClick, onRequestQuote }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-navy-950 overflow-hidden py-16" id="hero-section">
      {/* Background Premium Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80" 
          alt="Premium Industrial Water Engineering" 
          className="w-full h-full object-cover opacity-25 object-center"
        />
        {/* Navy to gold linear gradients to build ultra luxury appearance */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950/40"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-navy-900/80 border border-gold-500/20 px-3.5 py-1.5 rounded-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-gold-500 uppercase font-mono">
              Industrial Importer & Distributor • Bangladesh
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight"
          >
            Premium Water Pump, <br />
            <span className="text-gold-500 font-serif italic font-normal">
              Pipe & Sanitary
            </span> Solutions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed"
          >
            Trusted Products • Professional Service • Fast Delivery <br />
            <span className="text-slate-400 text-xs sm:text-sm block mt-2 font-serif italic">
              We supply top-tier international brands with guaranteed warranties for large infrastructure, agricultural pipelines, and luxurious residential projects.
            </span>
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button
              onClick={onShopClick}
              className="w-full sm:w-auto px-8 py-4 rounded-none bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-600 transition-all shadow-xl hover:shadow-gold-500/10 flex items-center justify-center gap-2 group uppercase tracking-widest border border-gold-500"
            >
              Shop Products
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={onBrandsClick}
              className="w-full sm:w-auto px-8 py-4 rounded-none bg-navy-900 border border-white/10 text-white font-bold text-xs hover:bg-navy-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              Explore Brands
            </button>
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-none bg-transparent border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all font-bold text-xs uppercase tracking-widest"
            >
              Request Quotation
            </button>
          </motion.div>
        </div>

        {/* Right Side: Trust Info Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-6"
        >
          <div className="bg-navy-900/90 border border-gold-500/10 p-6 rounded-none space-y-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-none bg-gold-500/10 flex items-center justify-center text-gold-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-white text-base">Authorized Supplier</h3>
            <p className="text-xs text-slate-400">Official distributor certificates for Italy Pedrollo, USA Kohler, and RAK Ceramics.</p>
          </div>

          <div className="bg-navy-900/90 border border-gold-500/10 p-6 rounded-none space-y-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-none bg-gold-500/10 flex items-center justify-center text-gold-500">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-white text-base">Nationwide Delivery</h3>
            <p className="text-xs text-slate-400">Specially packaged wood crating logistics to protect heavy sanitary ware and heavy-pumps.</p>
          </div>

          <div className="bg-navy-900/90 border border-gold-500/10 p-6 rounded-none space-y-3 backdrop-blur-md sm:col-span-2">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Industrial Distribution Network</span>
              <Users2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div>
                <span className="block font-serif font-bold text-white text-lg">25+</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Global Brands</span>
              </div>
              <div>
                <span className="block font-serif font-bold text-white text-lg">1500+</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Products</span>
              </div>
              <div>
                <span className="block font-serif font-bold text-gold-500 text-lg">Dhaka</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono font-bold">Base Yard</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative slant boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-navy-950 to-transparent"></div>
    </section>
  );
}
