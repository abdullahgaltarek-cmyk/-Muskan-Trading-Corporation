import React, { useState } from 'react';
import { BRANDS, PRODUCTS } from '../data';
import { Brand, Product } from '../types';
import { ArrowUpRight, Award, Globe, Layers, BookOpen, Sparkles } from 'lucide-react';
import { getProductFallbackImage } from '../utils/bilingual';

interface BrandShowcaseProps {
  onProductClick: (product: Product) => void;
  onShopWithFilter: (brandId: string) => void;
}

export default function BrandShowcase({ onProductClick, onShopWithFilter }: BrandShowcaseProps) {
  const [activeSection, setActiveSection] = useState<'pump' | 'pipe' | 'sanitary'>('pump');
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const pumpBrands = BRANDS.filter(b => b.type === 'pump');
  const pipeBrands = BRANDS.filter(b => b.type === 'pipe');
  const sanitaryBrands = BRANDS.filter(b => b.type === 'sanitary');

  const currentBrands = 
    activeSection === 'pump' ? pumpBrands :
    activeSection === 'pipe' ? pipeBrands : sanitaryBrands;

  const getBrandProducts = (brandId: string) => {
    return PRODUCTS.filter(p => p.brandId === brandId);
  };

  return (
    <section className="py-24 px-4 bg-[#F4F5F7] text-navy-800 border-b border-slate-100" id="brands-collection-section">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-widest block font-mono">
            Verified Global Manufacturers
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-navy-800 tracking-tight">
            Distributor Brand Portfolios
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto"></div>
          <p className="text-slate-500 text-xs sm:text-sm font-serif italic">
            We are certified logistics partners with major industrial companies in Italy, Germany, the USA, India, and premier manufacturers in Bangladesh.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-200">
          <div className="flex gap-4 sm:gap-8 -mb-px">
            <button
              onClick={() => { setActiveSection('pump'); setSelectedBrand(null); }}
              className={`py-4 px-4 font-sans font-extrabold text-xs tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${activeSection === 'pump' ? 'border-gold-500 text-navy-800' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              Water Pump ({pumpBrands.length})
            </button>
            <button
              onClick={() => { setActiveSection('pipe'); setSelectedBrand(null); }}
              className={`py-4 px-4 font-sans font-extrabold text-xs tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${activeSection === 'pipe' ? 'border-gold-500 text-navy-800' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              Pipe & Fittings ({pipeBrands.length})
            </button>
            <button
              onClick={() => { setActiveSection('sanitary'); setSelectedBrand(null); }}
              className={`py-4 px-4 font-sans font-extrabold text-xs tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${activeSection === 'sanitary' ? 'border-gold-500 text-navy-800' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              Sanitary Ware ({sanitaryBrands.length})
            </button>
          </div>
        </div>

        {/* Brands Horizontal Scroller/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentBrands.map((brand) => {
            const products = getBrandProducts(brand.id);
            const isSelected = selectedBrand?.id === brand.id;

            return (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className={`cursor-pointer p-6 rounded-none bg-white border transition-all flex flex-col justify-between hover:shadow-md ${isSelected ? 'border-gold-500 ring-1 ring-gold-500 bg-gold-500/5' : 'border-slate-200/60'}`}
                id={`brand-logo-card-${brand.id}`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="w-10 h-10 rounded-none bg-navy-800 text-gold-500 flex items-center justify-center font-bold text-sm shadow-md">
                    {brand.logo}
                  </div>
                  <span className="text-[9px] bg-slate-50 text-slate-500 py-0.5 px-2 rounded-none border border-slate-150 font-mono font-bold flex items-center gap-0.5 uppercase tracking-widest">
                    <Globe className="w-2.5 h-2.5" />
                    {brand.country}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="font-serif font-bold text-sm text-navy-800 truncate">{brand.name}</h3>
                  {brand.banglaName && (
                    <h4 className="font-sans font-extrabold text-xs text-amber-600 truncate">{brand.banglaName}</h4>
                  )}
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{brand.description}</p>
                  {brand.banglaDescription && (
                    <p className="text-[10px] text-slate-500 line-clamp-1 font-medium">{brand.banglaDescription}</p>
                  )}
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-slate-500 font-normal normal-case">{products.length} Products</span>
                  <span className="text-gold-500">Details →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Brand Showcase Detail Card */}
        <div className="mt-8">
          {selectedBrand ? (
            <div className="bg-navy-950 text-white rounded-none overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 border border-gold-500/20">
              {/* Brand Premium Banner Image */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px]">
                <img 
                  src={selectedBrand.image} 
                  alt={selectedBrand.name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/80 lg:to-navy-950"></div>
                {/* Floating Logo Overlay */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-none text-navy-800 font-extrabold flex items-center justify-center shadow-lg text-lg">
                    {selectedBrand.logo}
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-lg">{selectedBrand.name}</h4>
                    <p className="text-gold-500 text-xs font-mono">Origin: {selectedBrand.country}</p>
                  </div>
                </div>
              </div>

              {/* Brand Text Details */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold-500 text-[10px] font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span>Selected Manufacturer profile</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white">
                    {selectedBrand.name}
                  </h3>
                  {selectedBrand.banglaName && (
                    <h4 className="text-lg font-sans font-bold text-amber-400 -mt-2">
                      {selectedBrand.banglaName}
                    </h4>
                  )}
                  
                  <div className="space-y-2.5">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-serif italic">
                      {selectedBrand.description}
                    </p>
                    {selectedBrand.banglaDescription && (
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium border-l-2 border-gold-500 pl-3 py-1 bg-navy-900/40">
                        {selectedBrand.banglaDescription}
                      </p>
                    )}
                  </div>

                  {/* Brand Type Specific Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-navy-900 border border-gold-500/15 p-4 rounded-none text-xs">
                    <div className="space-y-1">
                      <span className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px] font-mono">
                        <Award className="w-3.5 h-3.5 text-gold-500" />
                        Primary Segment
                      </span>
                      <span className="text-white text-sm font-semibold capitalize">{selectedBrand.type} Division</span>
                    </div>

                    {selectedBrand.materialType && (
                      <div className="space-y-1">
                        <span className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px] font-mono">
                          <Layers className="w-3.5 h-3.5 text-gold-500" />
                          Material Standard
                        </span>
                        <span className="text-white text-sm font-semibold">{selectedBrand.materialType}</span>
                      </div>
                    )}

                    {selectedBrand.popularCategories && (
                      <div className="space-y-1 sm:col-span-2">
                        <span className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px] font-mono">
                          <BookOpen className="w-3.5 h-3.5 text-gold-500" />
                          Popular Categories
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedBrand.popularCategories.map((cat, idx) => (
                            <span key={idx} className="bg-navy-800 text-gold-500 border border-gold-500/10 py-0.5 px-2 rounded-none text-[10px] font-mono font-bold uppercase tracking-wider">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedBrand.collection && (
                      <div className="space-y-1">
                        <span className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px] font-mono">
                          <Layers className="w-3.5 h-3.5 text-gold-500" />
                          Design Collection
                        </span>
                        <span className="text-gold-500 text-sm font-semibold">{selectedBrand.collection}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Featured Products of the Brand */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">
                    Featured Products ({getBrandProducts(selectedBrand.id).length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getBrandProducts(selectedBrand.id).length > 0 ? (
                      getBrandProducts(selectedBrand.id).map(prod => (
                        <div 
                          key={prod.id}
                          onClick={() => onProductClick(prod)}
                          className="flex items-center gap-3 p-2 bg-navy-900 hover:bg-navy-800 border border-gold-500/10 rounded-none cursor-pointer transition-colors group"
                        >
                          <img 
                            src={prod.images[0]} 
                            alt={prod.title} 
                            onError={(e) => {
                              e.currentTarget.src = getProductFallbackImage(prod.category);
                            }}
                            className="w-10 h-10 object-cover rounded-none" 
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-white truncate group-hover:text-gold-500 transition-colors font-serif">
                              {prod.title}
                            </p>
                            <p className="text-[10px] text-gold-500 font-mono font-bold">৳ {prod.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-400 font-serif italic">Products are currently being loaded into our catalog system. Please check with sales support.</p>
                    )}
                  </div>
                  
                  <div className="flex justify-end mt-5">
                    <button 
                      onClick={() => onShopWithFilter(selectedBrand.id)}
                      className="px-5 py-2.5 rounded-none bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:bg-gold-600 transition-colors border border-gold-500"
                    >
                      Browse Brand Catalog
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 border-dashed rounded-none p-12 text-center max-w-lg mx-auto">
              <Award className="w-12 h-12 text-gold-500 mx-auto opacity-50 mb-4" />
              <p className="font-serif italic text-sm text-slate-600">Select any brand above to view its technical profile, certified origin, and popular categories.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
