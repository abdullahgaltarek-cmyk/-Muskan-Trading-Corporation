import React, { useState } from 'react';
import { Product, Order, User } from '../types';
import { Lock, Mail, UserCheck, Heart, ShoppingBag, Truck, MapPin, Eye, Search, ClipboardCheck } from 'lucide-react';
import logoImg from '../assets/images/muskan_logo_1782325714940.jpg';
import { getProductFallbackImage } from '../utils/bilingual';

interface CustomerPortalProps {
  wishlist: Product[];
  onRemoveWishlist: (product: Product) => void;
  orders: Order[];
  onProductClick: (product: Product) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export default function CustomerPortal({
  wishlist,
  onRemoveWishlist,
  orders,
  onProductClick,
  currentUser,
  setCurrentUser
}: CustomerPortalProps) {
  const [activeTab, setActiveTab] = useState<'auth' | 'history' | 'tracking' | 'wishlist'>(currentUser ? 'history' : 'auth');
  
  // Auth Form State
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');

  // Tracking Search State
  const [trackId, setTrackId] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(null);
  const [trackError, setTrackError] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      if (!name || !email || !password || !phone) {
        alert('Please fill out all registered parameters.');
        return;
      }
      const newUser: User = {
        id: `cust-${Date.now()}`,
        name,
        email,
        role: 'customer',
        phone,
        companyName,
        address
      };
      setCurrentUser(newUser);
      setActiveTab('history');
    } else {
      if (!email || !password) {
        alert('Please enter valid credentials.');
        return;
      }
      // Demo authentication for any input
      const demoUser: User = {
        id: 'cust-demo-99',
        name: email.split('@')[0].toUpperCase(),
        email,
        role: 'customer',
        phone: '+880 1712-000111',
        companyName: 'General Contractors Ltd.',
        address: 'Banani Road 12, Block F, Dhaka'
      };
      setCurrentUser(demoUser);
      setActiveTab('history');
    }
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError('');
    setSearchedOrder(null);

    if (!trackId.trim()) return;

    // Search in current orders
    const matched = orders.find(
      o => o.id.toLowerCase() === trackId.trim().toLowerCase() || 
           o.trackingNumber.toLowerCase() === trackId.trim().toLowerCase()
    );

    if (matched) {
      setSearchedOrder(matched);
    } else {
      setTrackError('No delivery matches this Tracking Number or Order ID. Please check with your account manager.');
    }
  };

  const selectOrderToTrack = (order: Order) => {
    setTrackId(order.trackingNumber);
    setSearchedOrder(order);
    setActiveTab('tracking');
  };

  // Tracking milestone status map
  const getStatusStep = (status: Order['status']) => {
    const steps = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered'];
    return steps.indexOf(status);
  };

  return (
    <section className="py-16 px-4 bg-white text-[#0B192C] font-sans" id="customer-portal-section">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h2 className="font-sans font-extrabold text-3xl text-[#0B192C] tracking-tight">
              Customer Operations Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Manage architectural wishlists, review heavy-freight tracking systems, and request billing statement history.
            </p>
          </div>
          
          {currentUser && (
            <div className="flex items-center gap-3 bg-slate-50 border p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center font-extrabold">
                {currentUser.name.slice(0,2).toUpperCase()}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-slate-400 font-mono truncate max-w-[150px]">{currentUser.email}</p>
              </div>
            </div>
          )}
        </div>

        {/* Inner Tabs Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs buttons (Left - 3 Cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 border-b lg:border-b-0 border-slate-100">
            {!currentUser && (
              <button
                onClick={() => setActiveTab('auth')}
                className={`py-2.5 px-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'auth' ? 'bg-[#0B192C] text-white' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                🔐 Sign In / Register
              </button>
            )}
            
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`py-2.5 px-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'wishlist' ? 'bg-[#0B192C] text-white' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Heart className="w-4 h-4 text-red-500" />
              Wishlist ({wishlist.length})
            </button>

            {currentUser && (
              <>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`py-2.5 px-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'history' ? 'bg-[#0B192C] text-white' : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 text-amber-500" />
                  Order History ({orders.length})
                </button>
                <button
                  onClick={() => setActiveTab('tracking')}
                  className={`py-2.5 px-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'tracking' ? 'bg-[#0B192C] text-white' : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Truck className="w-4 h-4 text-blue-500" />
                  Track Deliveries
                </button>
                <button
                  onClick={() => setCurrentUser(null)}
                  className="py-2.5 px-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider text-red-500 hover:bg-red-50 whitespace-nowrap mt-4"
                >
                  🚪 Log Out
                </button>
              </>
            )}
          </div>

          {/* Tab Screen (Right - 9 Cols) */}
          <div className="lg:col-span-9 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-inner">
            
            {/* 1. AUTH SUB-TAB */}
            {activeTab === 'auth' && !currentUser && (
              <div className="max-w-md mx-auto space-y-6">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="relative w-16 h-16 bg-white rounded-full p-1 shadow-md border border-gold-500/40">
                      <img 
                        src={logoImg} 
                        alt="Muskan Trading Logo" 
                        className="w-full h-full object-contain rounded-full" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">
                    {isRegister ? 'Create Authorized Account' : 'Secure Client Entrance'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isRegister 
                      ? 'Register to access deep-well wholesale discounts and trade accounts.' 
                      : 'Login using your registered client credentials.'}
                  </p>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-4 text-xs">
                  {isRegister && (
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Afridi Mahmud"
                        className="w-full p-3 bg-white border border-slate-200 rounded-xl"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. client@dhakabuilders.com"
                        className="w-full p-3 pl-10 bg-white border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Security Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-3 pl-10 bg-white border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  {isRegister && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Mobile Phone</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+880 1712-345678"
                            className="w-full p-3 bg-white border border-slate-200 rounded-xl font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Company Name (Optional)</label>
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Dhaka Developers Ltd"
                            className="w-full p-3 bg-white border border-slate-200 rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Primary Delivery Address (Bangladesh)</label>
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="e.g. Sector 4, Uttara, Dhaka"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl"
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0B192C] text-white hover:bg-slate-900 font-bold uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2 mt-2"
                  >
                    <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                    {isRegister ? 'Register & Join Network' : 'Verify Secure Login'}
                  </button>
                </form>

                <div className="text-center pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setIsRegister(!isRegister)}
                    className="text-xs text-[#D4AF37] font-bold hover:underline"
                  >
                    {isRegister 
                      ? 'Already have an authorized partner account? Login Here' 
                      : 'Request a new corporate wholesale account? Register Here'}
                  </button>
                </div>
              </div>
            )}

            {/* 2. WISHLIST SUB-TAB */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">Saved Product Catalog Items</h3>
                  <p className="text-xs text-slate-400">Your curated selection of premium water pumps, copper conduits, and luxury bathrooms.</p>
                </div>

                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wishlist.map((prod) => (
                      <div 
                        key={prod.id}
                        className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex gap-4 items-center relative"
                      >
                        <img 
                          src={prod.images[0]} 
                          alt={prod.title} 
                          onError={(e) => {
                            e.currentTarget.src = getProductFallbackImage(prod.category);
                          }}
                          className="w-20 h-20 object-cover rounded-xl border bg-slate-50 shrink-0" 
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">{prod.brandName}</span>
                          <h4 
                            onClick={() => onProductClick(prod)}
                            className="font-bold text-xs sm:text-sm text-[#0B192C] hover:text-blue-900 cursor-pointer truncate"
                          >
                            {prod.title}
                          </h4>
                          <p className="text-xs font-bold font-mono text-slate-800">৳ {prod.price.toLocaleString()}</p>
                          <div className="flex gap-2 pt-1">
                            <button
                              onClick={() => onProductClick(prod)}
                              className="text-[10px] font-bold bg-[#0B192C] text-white px-3 py-1 rounded"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => onRemoveWishlist(prod)}
                              className="text-[10px] font-bold text-red-500 border border-red-200 px-3 py-1 rounded hover:bg-red-50"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-400 space-y-2">
                    <span className="text-4xl block">❤️</span>
                    <p className="font-bold text-sm">Your wishlist is empty.</p>
                    <p className="text-xs text-slate-400">Save products while browsing to compare specifications later.</p>
                  </div>
                )}
              </div>
            )}

            {/* 3. ORDER HISTORY SUB-TAB */}
            {activeTab === 'history' && currentUser && (
              <div className="space-y-6">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">Partner Order Statement Logs</h3>
                  <p className="text-xs text-slate-400">History of all freight shipments dispatched to your coordinates.</p>
                </div>

                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div 
                        key={order.id}
                        className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4 hover:border-slate-300 transition-colors"
                      >
                        {/* Order Header */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-50 pb-3">
                          <div>
                            <span className="text-xs font-bold text-slate-900 block font-mono">{order.id}</span>
                            <span className="text-[10px] text-slate-400 block">Date: {order.date}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold px-3 py-1 bg-amber-50 text-amber-800 rounded-full">
                              💳 {order.paymentMethod}
                            </span>
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                              order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              🚚 {order.status}
                            </span>
                          </div>
                        </div>

                        {/* Order Items preview */}
                        <div className="space-y-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-xs">
                              <img 
                                src={item.image} 
                                alt="" 
                                onError={(e) => {
                                  e.currentTarget.src = getProductFallbackImage();
                                }}
                                className="w-8 h-8 object-cover rounded border" 
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-slate-800 truncate">{item.productTitle}</p>
                                <p className="text-[10px] text-slate-400">Brand: {item.brandName} • Qty: {item.quantity}</p>
                              </div>
                              <span className="font-mono font-bold text-slate-900 text-right">৳ {(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>

                        {/* Order Footer summary */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-slate-50">
                          <div>
                            <span className="text-xs text-slate-400 block font-semibold">Freight Log Tracking Number</span>
                            <span className="text-xs font-mono font-bold text-blue-600 block">{order.trackingNumber}</span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 block">Total Amount Paid</span>
                              <span className="text-sm sm:text-base font-extrabold font-mono text-[#0B192C]">৳ {order.totalAmount.toLocaleString()}</span>
                            </div>
                            
                            <button
                              onClick={() => selectOrderToTrack(order)}
                              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0B192C] font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              Track
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-400 text-xs">
                    No orders have been dispatched under your partner credentials yet. Place a checkout from your cart!
                  </div>
                )}
              </div>
            )}

            {/* 4. TRACKING SUB-TAB */}
            {activeTab === 'tracking' && (
              <div className="space-y-6">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">Real-Time Heavy-Freight Tracking</h3>
                  <p className="text-xs text-slate-400">Lookup physical shipping locations and transit milestones across Bangladesh.</p>
                </div>

                {/* Tracking search bar */}
                <form onSubmit={handleTrackSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Enter Tracking Number (e.g. MTC-TRK-771920B) or Order ID"
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      className="w-full text-xs py-3.5 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#0B192C] hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                  >
                    Locate Freight
                  </button>
                </form>

                {trackError && (
                  <p className="text-xs text-red-500 font-bold bg-red-50 p-3 rounded-lg flex items-center gap-1.5">
                    ⚠️ {trackError}
                  </p>
                )}

                {/* Tracking Milestones Visualization */}
                {searchedOrder ? (
                  <div className="bg-white border border-slate-100 p-6 rounded-3xl space-y-6 shadow-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-50 pb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] bg-blue-50 text-blue-800 font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                          Transit ID: {searchedOrder.trackingNumber}
                        </span>
                        <h4 className="font-extrabold text-base text-[#0B192C] font-mono mt-1">{searchedOrder.id}</h4>
                      </div>
                      
                      <div className="text-left sm:text-right text-xs">
                        <p className="text-slate-400">Destination Location:</p>
                        <p className="font-bold text-slate-900 flex items-center gap-1 sm:justify-end mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-red-500" />
                          {searchedOrder.address}
                        </p>
                      </div>
                    </div>

                    {/* Step milestones */}
                    <div className="space-y-6 py-4">
                      <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                        {/* Connecting Line for desktop */}
                        <div className="hidden md:block absolute top-5 left-8 right-8 h-1 bg-slate-200 z-0">
                          <div 
                            className="h-full bg-emerald-500 transition-all duration-500"
                            style={{ width: `${(getStatusStep(searchedOrder.status) / 4) * 100}%` }}
                          ></div>
                        </div>

                        {/* Milestones steps loops */}
                        {[
                          { title: 'Order Placed', desc: 'Secure booking logged', key: 'Pending' },
                          { title: 'Confirmed', desc: 'Schedules approved', key: 'Confirmed' },
                          { title: 'Processing', desc: 'Crater timber framing', key: 'Processing' },
                          { title: 'In Transit', desc: 'Dispatched via carrier', key: 'Shipped' },
                          { title: 'Delivered', desc: 'Recipient verified', key: 'Delivered' }
                        ].map((m, idx) => {
                          const orderStep = getStatusStep(searchedOrder.status);
                          const active = orderStep >= idx;
                          const current = orderStep === idx;

                          return (
                            <div key={idx} className="relative z-10 flex md:flex-col items-center gap-4 md:gap-2 text-center flex-1 w-full md:w-auto">
                              {/* Step circle */}
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all shrink-0 ${
                                current ? 'bg-[#D4AF37] text-slate-950 ring-4 ring-amber-100' :
                                active ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-200 text-slate-500'
                              }`}>
                                {active ? '✓' : idx + 1}
                              </div>

                              {/* labels */}
                              <div className="text-left md:text-center space-y-0.5">
                                <p className={`font-bold text-xs ${active ? 'text-slate-900' : 'text-slate-400'}`}>
                                  {m.title}
                                </p>
                                <p className="text-[10px] text-slate-400 font-medium leading-none">
                                  {m.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Cargo manifest summary */}
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs space-y-3">
                      <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px] flex items-center gap-1">
                        <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                        Dispatched Freight Manifest
                      </p>
                      <div className="divide-y divide-slate-100">
                        {searchedOrder.items.map((it, i) => (
                          <div key={i} className="py-2 flex justify-between gap-4">
                            <span className="text-slate-600 truncate">{it.productTitle} x {it.quantity}</span>
                            <span className="font-bold text-slate-900 shrink-0 font-mono">৳ {(it.price * it.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                        <div className="pt-2 flex justify-between font-bold text-slate-900 text-sm">
                          <span>Verified Paid Summary:</span>
                          <span className="font-mono">৳ {searchedOrder.totalAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 border-dashed rounded-3xl p-10 text-center text-slate-400 max-w-sm mx-auto">
                    <Truck className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <p className="font-bold text-xs text-slate-600">Enter your active tracking token or locate any order from the "Order History" tab using the Track button.</p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
