import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { X, Heart, ShoppingCart, ShieldCheck, Truck, Star, Sparkles, MessageSquarePlus } from 'lucide-react';
import { getProductFallbackImage } from '../utils/bilingual';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, isWholesale: boolean) => void;
  onBuyNow: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export default function ProductDetails({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onProductClick
}: ProductDetailsProps) {
  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWholesale, setIsWholesale] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [localReviews, setLocalReviews] = useState(product.reviews || []);

  React.useEffect(() => {
    setActiveImg(product.images[0]);
    setLocalReviews(product.reviews || []);
    setQuantity(1);
    setIsWholesale(false);
  }, [product.id, product.images, product.reviews]);

  const relatedProducts = PRODUCTS.filter(

    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleWholesaleToggle = (bulk: boolean) => {
    setIsWholesale(bulk);
    if (bulk && product.minWholesaleQty) {
      setQuantity(Math.max(quantity, product.minWholesaleQty));
    } else if (!bulk) {
      setQuantity(1);
    }
  };

  const handleQtyChange = (val: number) => {
    if (isWholesale && product.minWholesaleQty) {
      setQuantity(Math.max(product.minWholesaleQty, val));
    } else {
      setQuantity(Math.max(1, val));
    }
  };

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) return;

    const newRev = {
      id: `rev-local-${Date.now()}`,
      userName: reviewName,
      rating: reviewRating,
      date: new Date().toISOString().split('T')[0],
      comment: reviewComment
    };

    setLocalReviews([newRev, ...localReviews]);
    setReviewName('');
    setReviewComment('');
  };

  const calculatedUnitPrice = isWholesale && product.wholesalePrice ? product.wholesalePrice : product.price;
  const totalPrice = calculatedUnitPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative" id="product-detail-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT: Image Zoom and Gallery (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <img 
                  src={activeImg} 
                  alt={product.title} 
                  onError={(e) => {
                    e.currentTarget.src = getProductFallbackImage(product.category);
                  }}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(img)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 bg-slate-50 transition-all ${
                        activeImg === img ? 'border-[#D4AF37] scale-102' : 'border-transparent hover:border-slate-300'
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
            </div>

            {/* RIGHT: Product Metadata & Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category, Brand, Rating */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-slate-100 text-[#0B192C] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category.replace('-', ' ')}
                  </span>
                  <span className="bg-amber-50 text-amber-800 font-mono font-bold px-3 py-1 rounded-full">
                    Brand: {product.brandName}
                  </span>
                  <span className="text-slate-400">|</span>
                  <span className="flex items-center gap-1 font-bold text-slate-700">
                    ⭐ {product.rating.toFixed(1)} ({localReviews.length} Reviews)
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#0B192C] tracking-tight leading-tight">
                  {product.title}
                </h1>
                {product.banglaTitle && (
                  <h2 className="text-lg sm:text-xl font-bold text-[#D4AF37] leading-tight mt-1">
                    {product.banglaTitle}
                  </h2>
                )}
              </div>

              {/* pricing details (Wholesale options toggleable) */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
                {product.wholesalePrice ? (
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleWholesaleToggle(false)}
                      className={`flex-1 p-3 rounded-xl border text-center transition-all ${
                        !isWholesale 
                          ? 'border-[#0B192C] bg-[#0B192C] text-white shadow-md' 
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold tracking-widest opacity-80">Retail Purchase</span>
                      <span className="block font-mono font-extrabold text-base mt-0.5">৳ {product.price.toLocaleString()}</span>
                    </button>
                    <button
                      onClick={() => handleWholesaleToggle(true)}
                      className={`flex-1 p-3 rounded-xl border text-center transition-all ${
                        isWholesale 
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-md' 
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold tracking-widest opacity-80">Wholesale Lot</span>
                      <span className="block font-mono font-extrabold text-base mt-0.5">৳ {product.wholesalePrice.toLocaleString()}</span>
                      <span className="block text-[9px] font-medium text-emerald-500 bg-emerald-50 text-emerald-800 rounded px-1.5 py-0.5 mt-1 inline-block">
                        Min Qty: {product.minWholesaleQty}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Standard Price</span>
                    <p className="font-mono font-extrabold text-3xl text-slate-900">৳ {product.price.toLocaleString()}</p>
                  </div>
                )}

                {/* Stock Status, Warranty, Delivery warnings */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${product.availability === 'In Stock' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></span>
                    <span className="font-medium text-slate-700">{product.availability} ({product.stock} units)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700 font-medium">{product.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <Truck className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-700 font-medium">Nationwide Cargo</span>
                  </div>
                </div>
              </div>

              {/* Product Description (English & Bangla) */}
              <div className="space-y-2.5 py-4 border-t border-b border-slate-100">
                <h3 className="font-sans font-extrabold text-xs text-[#0B192C] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-[#D4AF37] inline-block"></span>
                  Product Overview / পণ্যের বিবরণ
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-serif">
                  {product.shortDescription}
                </p>
                {product.banglaDescription && (
                  <div className="bg-amber-50/40 border-l-4 border-[#D4AF37] p-3.5 rounded-r-xl">
                    <p className="text-slate-800 font-bold text-xs sm:text-sm leading-relaxed">
                      {product.banglaDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Quantity Selector & Checkout Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => handleQtyChange(quantity - 1)}
                    className="px-4 py-3 hover:bg-slate-50 font-bold text-slate-600 text-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 font-mono font-bold text-slate-900 text-base">{quantity}</span>
                  <button
                    onClick={() => handleQtyChange(quantity + 1)}
                    className="px-4 py-3 hover:bg-slate-50 font-bold text-slate-600 text-lg transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onAddToCart(product, quantity, isWholesale)}
                    className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0B192C] border border-slate-200 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add ৳{totalPrice.toLocaleString()} To Cart
                  </button>
                  <button
                    onClick={() => onBuyNow({ ...product, price: calculatedUnitPrice })}
                    className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-slate-950 hover:brightness-110 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#0B192C]" />
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Custom specs grid */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="font-sans font-extrabold text-sm text-[#0B192C] uppercase tracking-wider">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(product.specification).map(([key, val]) => (
                    <div key={key} className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">{key}</span>
                      <span className="text-slate-900 font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery detailed statement */}
              <div className="bg-[#122238]/5 border border-amber-500/10 p-4 rounded-xl text-xs text-slate-600 flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  <strong>Logistics Note:</strong> {product.deliveryInfo} Rigid glass-glaze porcelain is packed in wooden pallets to ensure zero breakage. Delivery includes insurance protection.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Customer Reviews Section */}
          <div className="mt-12 pt-10 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-sans font-extrabold text-lg text-[#0B192C] flex items-center gap-2">
                Customer Feedback ({localReviews.length})
              </h3>

              {/* Write a review form */}
              <form onSubmit={submitReview} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-4">
                <h4 className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquarePlus className="w-4 h-4 text-blue-600" />
                  Leave Your Verification
                </h4>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="e.g. Engr. Atiqur Rahman"
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 items-center">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Rating Score</label>
                    <select
                      value={reviewRating}
                      onChange={(e) => setReviewRating(Number(e.target.value))}
                      className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                      <option value={4}>⭐⭐⭐⭐ (4)</option>
                      <option value={3}>⭐⭐⭐ (3)</option>
                      <option value={2}>⭐⭐ (2)</option>
                      <option value={1}>⭐ (1)</option>
                    </select>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-4 leading-tight block">Required for secure buyer logs.</span>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Written Review Details</label>
                  <textarea
                    required
                    rows={3}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Specify flow rate, build quality, or leakage tests..."
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#0B192C] hover:bg-slate-900 text-white font-bold text-xs rounded-lg uppercase tracking-wider transition-colors"
                >
                  Submit Client Feedback
                </button>
              </form>
            </div>

            {/* list reviews */}
            <div className="lg:col-span-7 space-y-4 max-h-[380px] overflow-y-auto pr-2">
              {localReviews.length > 0 ? (
                localReviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-slate-50/50 border border-slate-100 rounded-xl space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#0B192C]">{rev.userName}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{rev.date}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic">"{rev.comment}"</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No verified client reviews yet. Be the first to verify this batch!
                </div>
              )}
            </div>
          </div>

          {/* Related Cross-Sells Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-10 border-t border-slate-100 space-y-6">
              <h3 className="font-sans font-extrabold text-lg text-[#0B192C] uppercase tracking-wider">
                Related Solutions in Category
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onProductClick(rel);
                      setActiveImg(rel.images[0]);
                      setLocalReviews(rel.reviews || []);
                      setQuantity(1);
                      setIsWholesale(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="cursor-pointer group p-3 bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-xl transition-all"
                  >
                    <div className="aspect-square bg-white rounded-lg overflow-hidden mb-2.5">
                      <img 
                        src={rel.images[0]} 
                        alt={rel.title} 
                        onError={(e) => {
                          e.currentTarget.src = getProductFallbackImage(rel.category);
                        }}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300" 
                      />
                    </div>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{rel.brandName}</p>
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-amber-600 truncate mt-0.5">{rel.title}</h4>
                    <p className="text-xs font-mono font-bold text-slate-900 mt-1">৳ {rel.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
