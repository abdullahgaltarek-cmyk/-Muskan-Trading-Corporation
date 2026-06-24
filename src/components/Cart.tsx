import React, { useState } from 'react';
import { CartItem, Product, Order } from '../types';
import { X, Trash2, ShieldCheck, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { getProductFallbackImage } from '../utils/bilingual';

interface CartProps {
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQty: (productId: string, qty: number, isWholesale: boolean) => void;
  onRemoveItem: (productId: string) => void;
  onPlaceOrder: (orderData: Partial<Order>) => void;
  currentUser: any;
}

export default function Cart({
  cartItems,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onPlaceOrder,
  currentUser
}: CartProps) {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [customerName, setCustomerName] = useState(currentUser?.name || '');
  const [customerEmail, setCustomerEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [address, setAddress] = useState(currentUser?.address || '');
  const [paymentMethod, setPaymentMethod] = useState<any>('Cash on Delivery');

  const subtotal = cartItems.reduce((acc, item) => {
    const unitPrice = item.isWholesale && item.product.wholesalePrice ? item.product.wholesalePrice : item.product.price;
    return acc + (unitPrice * item.quantity);
  }, 0);

  // Bangladesh commercial tax is usually 5% on sanitary/building hardware
  const vat = Math.round(subtotal * 0.05);
  // Free delivery for orders above 30,000 BDT, else 1,500 BDT flat transport for heavy freight
  const shipping = subtotal > 30000 || subtotal === 0 ? 0 : 1500;
  const grandTotal = subtotal + vat + shipping;

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !phone || !address) {
      alert('Please fill in all checkout fields to secure delivery scheduling.');
      return;
    }

    const orderData: Partial<Order> = {
      customerName,
      customerEmail,
      phone,
      address,
      items: cartItems.map(item => ({
        productId: item.product.id,
        productTitle: item.product.title,
        brandName: item.product.brandName,
        price: item.isWholesale && item.product.wholesalePrice ? item.product.wholesalePrice : item.product.price,
        quantity: item.quantity,
        image: item.product.images[0]
      })),
      totalAmount: grandTotal,
      paymentMethod,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      trackingNumber: `MTC-TRK-${Math.floor(100000 + Math.random() * 900000)}`
    };

    onPlaceOrder(orderData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex justify-end" id="cart-drawer">
      <div className="bg-white w-full max-w-lg h-full flex flex-col justify-between shadow-2xl relative">
        
        {/* Cart Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#0B192C] text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h2 className="font-sans font-extrabold text-lg tracking-tight">Your Procurement Cart</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Dynamic content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {checkoutStep === 1 ? (
            /* STEP 1: REVIEW ITEMS IN CART */
            cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const unitPrice = item.isWholesale && item.product.wholesalePrice ? item.product.wholesalePrice : item.product.price;
                  const itemTotal = unitPrice * item.quantity;

                  return (
                    <div 
                      key={item.product.id} 
                      className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl relative hover:border-slate-200 transition-colors"
                    >
                      {/* Product small image */}
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.title} 
                        onError={(e) => {
                          e.currentTarget.src = getProductFallbackImage(item.product.category);
                        }}
                        className="w-16 h-16 object-cover rounded-lg border bg-white shrink-0" 
                      />
                      
                      {/* Product info */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate pr-4">
                            {item.product.title}
                          </h3>
                          <button 
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-400 hover:text-red-500 absolute top-3 right-3 p-1 rounded-full hover:bg-slate-100 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <p className="text-[10px] text-slate-400 uppercase font-mono font-bold tracking-wider">
                          Brand: {item.product.brandName} • {item.isWholesale ? 'Wholesale Batch' : 'Standard Retail'}
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center border border-slate-200 rounded-md overflow-hidden bg-white">
                            <button
                              onClick={() => onUpdateQty(item.product.id, item.quantity - 1, item.isWholesale)}
                              className="px-2.5 py-1 text-xs hover:bg-slate-50 font-bold text-slate-600"
                            >
                              -
                            </button>
                            <span className="px-3 text-xs font-mono font-bold text-slate-800">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(item.product.id, item.quantity + 1, item.isWholesale)}
                              className="px-2.5 py-1 text-xs hover:bg-slate-50 font-bold text-slate-600"
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block font-mono">৳ {unitPrice.toLocaleString()} ea</span>
                            <span className="text-xs sm:text-sm font-bold font-mono text-slate-950">৳ {itemTotal.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Wholesale alert indicator */}
                {cartItems.some(item => item.isWholesale) && (
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[11px] text-emerald-800 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
                    <p>
                      <strong>Wholesale Rate Activated:</strong> Some components qualify for corporate tax adjustments and bulk pricing structures.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <span className="text-5xl block animate-pulse">📦</span>
                <p className="font-sans font-bold text-slate-400 text-sm">Your shopping cart is empty.</p>
                <button onClick={onClose} className="px-5 py-2 text-xs bg-[#0B192C] text-white font-bold rounded-lg uppercase tracking-wider">
                  Browse Solutions Catalog
                </button>
              </div>
            )
          ) : (
            /* STEP 2: SHIPPING AND BILLING DETAILS */
            <form onSubmit={handleSubmitCheckout} className="space-y-4 text-xs">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-3 mb-4">
                <h3 className="font-sans font-bold text-slate-700 uppercase tracking-wider text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  Secure Delivery Register
                </h3>
                <p className="text-[10px] text-slate-500">Provide Bangladesh physical shipping address and direct active telephone lines for dispatch schedules.</p>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Abdullah Galib Tarek"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Email Address</label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="e.g. abdullahgaltarek@gmail.com"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Active Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +880 1712-345678"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Full Physical Address (Bangladesh)</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, Plot, Area, City (e.g. Dhanmondi, Dhaka)"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                ></textarea>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  Select Payment Gateway
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Cash on Delivery', label: '🚚 Cash On Delivery' },
                    { name: 'bKash/Nagad', label: '📱 bKash / Nagad' },
                    { name: 'Bank Transfer', label: '🏦 Bank Wire Transfer' },
                    { name: 'Wholesale Credit', label: '💳 Wholesale Credit' }
                  ].map((gateway) => (
                    <button
                      key={gateway.name}
                      type="button"
                      onClick={() => setPaymentMethod(gateway.name)}
                      className={`p-2.5 border text-center rounded-lg font-semibold transition-all ${
                        paymentMethod === gateway.name 
                          ? 'border-[#0B192C] bg-[#0B192C]/5 text-[#0B192C] font-bold' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {gateway.label}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Checkout Summary Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal:</span>
                <span className="font-mono">৳ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Value-Added Tax (VAT 5%):</span>
                <span className="font-mono">৳ {vat.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Freight Logistics Shipping:</span>
                <span className="font-mono">
                  {shipping === 0 ? (
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px]">Free Shipping</span>
                  ) : (
                    `৳ ${shipping.toLocaleString()}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[9px] text-slate-400 italic">Free transport on orders above ৳30,000.</p>
              )}
              <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Grand Total:</span>
                <span className="font-mono text-lg text-[#0B192C]">৳ {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Actions button */}
            {checkoutStep === 1 ? (
              <button
                onClick={() => setCheckoutStep(2)}
                className="w-full py-3.5 bg-[#0B192C] text-white hover:bg-slate-900 font-bold text-sm rounded-xl uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                Proceed to Secure Checkout
                <span>→</span>
              </button>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep(1)}
                  className="py-3 bg-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmitCheckout}
                  className="col-span-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-slate-950 font-bold text-xs rounded-xl hover:brightness-110 transition-all uppercase tracking-wider flex items-center justify-center gap-1 shadow"
                >
                  Confirm ৳{grandTotal.toLocaleString()} Order
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
