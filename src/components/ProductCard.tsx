import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingCart, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { getProductFallbackImage } from '../utils/bilingual';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product, quantity: number, isWholesale: boolean) => void;
  onBuyNow: (product: Product) => void;
  onProductClick: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onBuyNow,
  onProductClick,
  isWishlisted,
  onToggleWishlist
}: ProductCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Extract first 3 specifications for quick card view
  const quickSpecs = Object.entries(product.specification).slice(0, 3);

  return (
    <div
      className="group bg-white rounded-none border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id={`product-card-${product.id}`}
    >
      {/* Visual Header / Image Gallery */}
      <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
        {/* Main Image */}
        <img
          src={product.images[activeImgIndex]}
          alt={product.title}
          onClick={() => onProductClick(product)}
          onError={(e) => {
            e.currentTarget.src = getProductFallbackImage(product.category);
          }}
          className="w-full h-full object-cover cursor-pointer group-hover:scale-102 transition-transform duration-500"
        />

        {/* Availability Badge */}
        <span className={`absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-none uppercase tracking-widest shadow-sm z-10 ${
          product.availability === 'In Stock' 
            ? 'bg-emerald-600 text-white' 
            : 'bg-gold-500 text-white'
        }`}>
          {product.availability}
        </span>

        {/* Quick Gallery Overlay on Hover */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImgIndex(idx)}
                className={`w-7 h-7 rounded-none border-2 overflow-hidden transition-all bg-white ${
                  activeImgIndex === idx ? 'border-gold-500 scale-105' : 'border-transparent opacity-80'
                }`}
              >
                <img 
                  src={img} 
                  alt="" 
                  onError={(e) => {
                    e.currentTarget.src = getProductFallbackImage(product.category);
                  }}
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        )}

        {/* Wishlist Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md backdrop-blur-md transition-all ${
            isWishlisted 
              ? 'bg-rose-50 text-rose-500 hover:bg-rose-100' 
              : 'bg-white/80 hover:bg-white text-slate-500 hover:text-rose-500'
          }`}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Brand and Rating Row */}
        <div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="text-gold-600 hover:text-gold-500 cursor-pointer font-serif italic font-bold">{product.brandName}</span>
            <span className="flex items-center gap-1">
              ⭐ {product.rating.toFixed(1)}
            </span>
          </div>

          <h3 
            onClick={() => onProductClick(product)}
            className="font-serif font-bold text-base text-navy-800 line-clamp-1 hover:text-gold-500 cursor-pointer mt-1.5 transition-colors"
          >
            {product.title}
          </h3>
          {product.banglaTitle && (
            <p className="text-xs font-bold text-[#D4AF37] mt-0.5 leading-tight">
              {product.banglaTitle}
            </p>
          )}

          <p className="text-slate-500 text-xs line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
          {product.banglaDescription && (
            <p className="text-slate-600 font-medium text-[11px] line-clamp-2 mt-1 leading-relaxed border-l-2 border-[#D4AF37] pl-1.5 py-0.5 bg-slate-50/70">
              {product.banglaDescription}
            </p>
          )}
        </div>

        {/* Mini Spec table */}
        <div className="bg-slate-50 p-2.5 border border-slate-200/60 space-y-1.5 text-[11px] text-slate-600 rounded-none">
          {quickSpecs.map(([key, val]) => (
            <div key={key} className="flex justify-between items-center gap-2">
              <span className="text-slate-400 font-medium">{key}:</span>
              <span className="text-slate-700 font-bold text-right truncate max-w-[120px]">{val}</span>
            </div>
          ))}
        </div>

        {/* Price Tag with Wholesale discount info */}
        <div className="pt-2 border-t border-slate-200/60 flex items-baseline justify-between gap-2">
          <div>
            <span className="text-slate-400 text-[9px] uppercase font-bold block">Retail Price</span>
            <span className="text-base font-mono font-bold text-navy-800">৳ {product.price.toLocaleString()}</span>
          </div>
          {product.wholesalePrice && (
            <div className="text-right">
              <span className="text-gold-600 text-[9px] uppercase font-extrabold block">Wholesale (Min Qty: {product.minWholesaleQty})</span>
              <span className="text-xs font-mono font-bold text-emerald-600">৳ {product.wholesalePrice.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Trust Badges - Warranty & Delivery info */}
        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 border-t border-b border-slate-200/60 py-2 rounded-none">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-navy-600 shrink-0" />
            <span className="truncate">{product.warranty.split(' ')[0]} {product.warranty.split(' ')[1] || 'Warranty'}</span>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <Truck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span className="truncate font-serif italic">Nationwide Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToCart(product, 1, false)}
              className="px-3 py-2 border border-slate-200 hover:bg-slate-50 text-navy-800 font-bold text-xs rounded-none active:scale-97 transition-all flex items-center justify-center gap-1 uppercase tracking-wider"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add Cart
            </button>
            <button
              onClick={() => onBuyNow(product)}
              className="px-3 py-2 bg-navy-800 text-white hover:bg-navy-900 font-bold text-xs rounded-none active:scale-97 transition-all text-center uppercase tracking-wider"
            >
              Buy Now
            </button>
          </div>
          {product.wholesalePrice && (
            <button
              onClick={() => onAddToCart(product, product.minWholesaleQty || 5, true)}
              className="w-full py-1.5 bg-gold-100 hover:bg-gold-500 hover:text-white text-gold-600 border border-gold-400/25 font-bold text-[9px] uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-gold-500 animate-pulse" />
              Add Bulk Wholesale Lot
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
