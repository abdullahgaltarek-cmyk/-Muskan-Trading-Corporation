import React, { useState } from 'react';
import { Product, Order, Brand, Category, QuoteRequest, User } from '../types';
import { CATEGORIES, BRANDS } from '../data';
import { BarChart3, Package, Layers, ShieldAlert, CheckCircle, RefreshCcw, Plus, Trash2, Edit3, MessageSquareCode, Users, Briefcase } from 'lucide-react';
import logoImg from '../assets/images/muskan_logo_1782325714940.jpg';
import { getProductFallbackImage } from '../utils/bilingual';

interface AdminPortalProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  quotes: QuoteRequest[];
  setQuotes: React.Dispatch<React.SetStateAction<QuoteRequest[]>>;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export default function AdminPortal({
  products,
  setProducts,
  orders,
  setOrders,
  quotes,
  setQuotes,
  currentUser,
  setCurrentUser
}: AdminPortalProps) {
  const [isAdminAuth, setIsAdminAuth] = useState(currentUser?.role === 'owner' || currentUser?.role === 'staff');
  const [adminRole, setAdminRole] = useState<'owner' | 'staff'>(currentUser?.role === 'owner' ? 'owner' : 'staff');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active admin tab state
  const [activeTab, setActiveTab] = useState<'reports' | 'products' | 'orders' | 'quotes' | 'customers'>('reports');

  // New product form states
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [pTitle, setPTitle] = useState('');
  const [pCategory, setPCategory] = useState<any>('water-pump');
  const [pBrandId, setPBrandId] = useState('pedrollo');
  const [pPrice, setPPrice] = useState(15000);
  const [pWholesalePrice, setPWholesalePrice] = useState(13000);
  const [pMinQty, setPMinQty] = useState(5);
  const [pImg, setPImg] = useState('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80');
  const [pDesc, setPDesc] = useState('');
  const [pWarranty, setPWarranty] = useState('1 Year Warranty');
  const [pStock, setPStock] = useState(20);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!adminEmail.trim() || !adminPassword.trim()) return;

    // Administrative Password must be "muskan7292"
    if (adminPassword.trim() !== 'muskan7292') {
      setLoginError('Incorrect Administrative Password. Please try again.');
      return;
    }

    // Email prefix and domain check for Muskan Trading Corporation (domain: @muskantrading.com.bd)
    const emailLower = adminEmail.toLowerCase().trim();
    if (!emailLower.endsWith('@muskantrading.com.bd')) {
      setLoginError('Invalid domain. Employees must use "@muskantrading.com.bd" email prefix.');
      return;
    }

    const roleSelected = emailLower.includes('owner') ? 'owner' : 'staff';
    const fakeAdmin: User = {
      id: `adm-${Date.now()}`,
      name: roleSelected === 'owner' ? 'Owner Admin (Muskan)' : 'Staff Manager (Logistics)',
      email: adminEmail,
      role: roleSelected,
    };

    setCurrentUser(fakeAdmin);
    setAdminRole(roleSelected);
    setIsAdminAuth(true);
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedBrand = BRANDS.find(b => b.id === pBrandId);

    if (editingProduct) {
      // Edit existing
      setProducts(products.map(p => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            title: pTitle,
            category: pCategory,
            brandId: pBrandId,
            brandName: matchedBrand ? matchedBrand.name : 'Custom Brand',
            price: Number(pPrice),
            wholesalePrice: Number(pWholesalePrice),
            minWholesaleQty: Number(pMinQty),
            images: [pImg],
            shortDescription: pDesc,
            warranty: pWarranty,
            stock: Number(pStock)
          };
        }
        return p;
      }));
      setEditingProduct(null);
    } else {
      // Add new product
      const newProd: Product = {
        id: `prod-added-${Date.now()}`,
        title: pTitle,
        category: pCategory,
        brandId: pBrandId,
        brandName: matchedBrand ? matchedBrand.name : 'Custom Brand',
        price: Number(pPrice),
        wholesalePrice: Number(pWholesalePrice),
        minWholesaleQty: Number(pMinQty),
        images: [pImg],
        shortDescription: pDesc,
        specification: {
          'Power': '1.5 HP',
          'Material': 'Stainless Cast Iron',
          'Fittings Standard': 'National ISO'
        },
        warranty: pWarranty,
        availability: Number(pStock) > 0 ? 'In Stock' : 'Out of Stock',
        stock: Number(pStock),
        deliveryInfo: 'Fast dispatch from warehouse.',
        rating: 5.0,
        reviews: []
      };
      setProducts([newProd, ...products]);
    }

    // Reset Form
    setShowProductForm(false);
    setPTitle('');
    setPDesc('');
    setPStock(20);
    setPPrice(15000);
  };

  const startEditProduct = (prod: Product) => {
    setEditingProduct(prod);
    setPTitle(prod.title);
    setPCategory(prod.category);
    setPBrandId(prod.brandId);
    setPPrice(prod.price);
    setPWholesalePrice(prod.wholesalePrice || 0);
    setPMinQty(prod.minWholesaleQty || 5);
    setPImg(prod.images[0]);
    setPDesc(prod.shortDescription);
    setPWarranty(prod.warranty);
    setPStock(prod.stock);
    setShowProductForm(true);
  };

  const deleteProduct = (id: string) => {
    if (confirm('Are you sure you want to remove this product from the master catalog?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(o => {
      if (o.id === orderId) {
        return { ...o, status: newStatus };
      }
      return o;
    }));
  };

  const updateQuoteStatus = (quoteId: string, newStatus: QuoteRequest['status']) => {
    setQuotes(quotes.map(q => {
      if (q.id === quoteId) {
        return { ...q, status: newStatus };
      }
      return q;
    }));
  };

  // Calculations for Reports Dashboard
  const totalRevenues = orders
    .filter(o => o.status !== 'Cancelled')
    .reduce((acc, o) => acc + o.totalAmount, 0);

  const pendingOrdersCount = orders.filter(o => o.status === 'Pending').length;
  const transitOrdersCount = orders.filter(o => o.status === 'Shipped').length;
  const quotePendingCount = quotes.filter(q => q.status === 'Pending').length;

  return (
    <section className="py-16 px-4 bg-slate-900 text-slate-100 font-sans min-h-[70vh]" id="admin-management-portal">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Sign In Screen if not authenticated */}
        {!isAdminAuth ? (
          <div className="max-w-md mx-auto bg-navy-950 border border-gold-500/20 rounded-none p-8 space-y-6">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="relative w-16 h-16 bg-white rounded-full p-1 shadow-lg border border-gold-500/40">
                  <img 
                    src={logoImg} 
                    alt="Muskan Trading Logo" 
                    className="w-full h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h2 className="font-serif font-black text-2xl text-white tracking-tight">Enterprise Backoffice Gate</h2>
              <p className="text-xs text-slate-400 font-serif italic">Authenticated employees and company owners can login to coordinate freight orders.</p>
            </div>

            {loginError && (
              <div className="p-3 bg-red-950/80 border border-red-500/30 text-red-200 text-xs font-semibold rounded-none animate-shake">
                ⚠️ {loginError}
              </div>
            )}

            <form onSubmit={handleAdminLogin} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Employee Email Prefix</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. owner@muskantrading.com.bd or staff@muskantrading.com.bd"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full p-3 bg-navy-900 border border-navy-800 rounded-none focus:outline-none focus:border-gold-500 text-white font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Administrative Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full p-3 bg-navy-900 border border-navy-800 rounded-none focus:outline-none focus:border-gold-500 text-white"
                />
              </div>

              <div className="p-3.5 bg-navy-900/60 border border-gold-500/10 rounded-none text-[10px] text-slate-300 leading-relaxed font-serif">
                💡 <strong className="text-gold-500 font-sans uppercase text-[9px] tracking-wider block mb-1">Credentials verification:</strong> 
                Use <code>owner@muskantrading.com.bd</code> or <code>staff@muskantrading.com.bd</code> with Administrative Password <code>muskan7292</code>.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gold-500 text-navy-950 font-bold uppercase tracking-widest rounded-none hover:bg-gold-600 active:scale-97 transition-all shadow-md border border-gold-500"
              >
                Access Control Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* MAIN ADMINISTRATIVE VIEW (OWNER & STAFF PANELS) */
          <div className="space-y-8">
            
            {/* Admin Header info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight flex items-center gap-2">
                  <span>🛡️</span>
                  Muskan Trading Backoffice
                </h2>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Active Security clearance: <span className="font-bold uppercase">{adminRole} Access Panel</span> • Corporate logistics control
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setIsAdminAuth(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
                >
                  🚪 Portal Exit
                </button>
              </div>
            </div>

            {/* Dashboard Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-px text-sm">
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-3 px-4 font-bold rounded-t-xl transition-all flex items-center gap-2 ${
                  activeTab === 'reports' ? 'bg-slate-800 text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Performance Reports
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`py-3 px-4 font-bold rounded-t-xl transition-all flex items-center gap-2 ${
                  activeTab === 'products' ? 'bg-slate-800 text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Package className="w-4 h-4" />
                Manage Products ({products.length})
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-3 px-4 font-bold rounded-t-xl transition-all flex items-center gap-2 ${
                  activeTab === 'orders' ? 'bg-slate-800 text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                Manage Orders ({orders.length})
              </button>
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-3 px-4 font-bold rounded-t-xl transition-all flex items-center gap-2 ${
                  activeTab === 'quotes' ? 'bg-slate-800 text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Wholesale Quotes ({quotes.length})
              </button>
            </div>

            {/* TAB SCREENS ROUTING */}
            
            {/* TAB 1: REPORTS AND SUMMARY METRICS */}
            {activeTab === 'reports' && (
              <div className="space-y-8">
                {/* Visual Widgets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Gross Procurement Volume</span>
                    <p className="text-2xl sm:text-3xl font-extrabold font-mono text-[#D4AF37]">৳ {totalRevenues.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-500">Excludes cancelled/refunded freight manifests.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Pending Orders (Awaiting Confirm)</span>
                    <p className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-500">{pendingOrdersCount} orders</p>
                    <p className="text-[10px] text-slate-500">Requires manual staff verification check.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Freight in Transit across BD</span>
                    <p className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">{transitOrdersCount} shipments</p>
                    <p className="text-[10px] text-slate-500">Active tracking tokens broadcasted.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Wholesale Quote Requests</span>
                    <p className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">{quotePendingCount} bids</p>
                    <p className="text-[10px] text-slate-500">Requires customized pricing calculations.</p>
                  </div>
                </div>

                {/* Regional logistics chart/split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Revenue division */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-4">
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white">
                      Division Sales Allocation Split
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Water Pump division', value: '45%', amount: '৳ 350,000', color: 'bg-blue-500' },
                        { label: 'Pipe & Fittings network', value: '25%', amount: '৳ 195,000', color: 'bg-emerald-500' },
                        { label: 'Sanitary Ware suites', value: '20%', amount: '৳ 156,000', color: 'bg-[#D4AF37]' },
                        { label: 'Bathroom accessories', value: '10%', amount: '৳ 78,000', color: 'bg-purple-500' }
                      ].map((div, idx) => (
                        <div key={idx} className="space-y-1 text-xs">
                          <div className="flex justify-between font-medium">
                            <span className="text-slate-300">{div.label} ({div.value})</span>
                            <span className="font-mono text-slate-400">{div.amount}</span>
                          </div>
                          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                            <div className={`h-full ${div.color}`} style={{ width: div.value }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational instructions */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 space-y-4">
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-amber-400">
                      🛡️ Administrative Security Guidelines
                    </h3>
                    <div className="text-xs space-y-3 text-slate-300">
                      <p>1. <strong>Strict Price Floor:</strong> Staff are strictly forbidden from selling below the wholesale listed prices without written owner approval.</p>
                      <p>2. <strong>Ceramics safety packaging:</strong> Wood pallet reinforcement is mandatory on all shipments containing ceramic washbasins or toilets to prevent transit damages.</p>
                      <p>3. <strong>bKash/Nagad payments:</strong> Confirm verification code receipt from the SMS terminal log before marking any order as "Confirmed".</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PRODUCTS CRUD MANAGEMENT */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white">Master Products Catalog ({products.length})</h3>
                    <p className="text-xs text-slate-400">Add, edit, or remove water pumps, pipes, and sanitary wares from the customer inventory.</p>
                  </div>
                  <button
                    onClick={() => { setShowProductForm(!showProductForm); setEditingProduct(null); }}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:brightness-110 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    New catalog Item
                  </button>
                </div>

                {/* Add/Edit Product Form */}
                {showProductForm && (
                  <form onSubmit={handleProductSubmit} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <h4 className="font-sans font-bold text-[#D4AF37] uppercase tracking-wider text-xs md:col-span-3 pb-2 border-b border-slate-700">
                      {editingProduct ? 'Edit Catalog Item' : 'Create New Catalog Item'}
                    </h4>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Product Title</label>
                      <input
                        type="text" required value={pTitle} onChange={(e) => setPTitle(e.target.value)}
                        placeholder="e.g. Premium Brass Gate Valve"
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Product Category</label>
                      <select
                        value={pCategory} onChange={(e) => setPCategory(e.target.value as any)}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none"
                      >
                        {CATEGORIES.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Brand Manufacturer</label>
                      <select
                        value={pBrandId} onChange={(e) => setPBrandId(e.target.value)}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none"
                      >
                        {BRANDS.map(b => (
                          <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Retail Price (BDT)</label>
                      <input
                        type="number" required value={pPrice} onChange={(e) => setPPrice(Number(e.target.value))}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Wholesale Price (BDT)</label>
                      <input
                        type="number" value={pWholesalePrice} onChange={(e) => setPWholesalePrice(Number(e.target.value))}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Min Wholesale Qty</label>
                      <input
                        type="number" value={pMinQty} onChange={(e) => setPMinQty(Number(e.target.value))}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Primary Product Image URL</label>
                      <input
                        type="text" required value={pImg} onChange={(e) => setPImg(e.target.value)}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Stock Units available</label>
                      <input
                        type="number" required value={pStock} onChange={(e) => setPStock(Number(e.target.value))}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-3">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Short Sales Description</label>
                      <textarea
                        required rows={2} value={pDesc} onChange={(e) => setPDesc(e.target.value)}
                        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white"
                      ></textarea>
                    </div>

                    <div className="md:col-span-3 flex justify-end gap-2 pt-2">
                      <button
                        type="button" onClick={() => setShowProductForm(false)}
                        className="px-4 py-2 bg-slate-700 text-slate-300 font-bold rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg"
                      >
                        {editingProduct ? 'Save Changes' : 'Append Catalog Item'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Products list grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map(p => (
                    <div key={p.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700/60 flex items-center gap-4 relative">
                      <img 
                        src={p.images[0]} 
                        alt="" 
                        onError={(e) => {
                          e.currentTarget.src = getProductFallbackImage(p.category);
                        }}
                        className="w-16 h-16 object-cover rounded-lg border border-slate-700 bg-slate-900 shrink-0" 
                      />
                      
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider">{p.brandName}</span>
                        <h4 className="font-bold text-xs text-white truncate pr-12">{p.title}</h4>
                        <div className="flex gap-4 mt-1 font-mono text-[11px] text-slate-300">
                          <span>Retail: ৳{p.price.toLocaleString()}</span>
                          <span>Stock: {p.stock}</span>
                        </div>
                      </div>

                      {/* Controls absolute top right */}
                      <div className="absolute top-4 right-4 flex gap-1.5">
                        <button
                          onClick={() => startEditProduct(p)}
                          className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-200"
                          title="Edit"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        {adminRole === 'owner' && (
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="p-1.5 bg-red-950 hover:bg-red-900 rounded text-red-400"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ORDERS LIST & STATUS COORDINATION */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Freight Logistics Orders Logs ({orders.length})</h3>
                  <p className="text-xs text-slate-400">Change fulfillment status of dispatches across Bangladesh, or review customer bKash transactions.</p>
                </div>

                <div className="space-y-4">
                  {orders.map((o) => (
                    <div key={o.id} className="bg-slate-800 p-5 rounded-2xl border border-slate-700/60 space-y-4">
                      {/* header */}
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-700 pb-3 text-xs">
                        <div>
                          <span className="font-bold text-white font-mono block">{o.id}</span>
                          <span className="text-[10px] text-slate-400 block">Customer: {o.customerName} ({o.customerEmail})</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-700 text-amber-400 rounded">
                            {o.paymentMethod}
                          </span>
                          <span className="text-slate-400">|</span>
                          <span className="text-slate-300 font-mono font-bold">৳ {o.totalAmount.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="text-xs text-slate-300 flex items-start gap-1">
                        <span className="font-bold text-[#D4AF37]">📍 Address:</span>
                        <span>{o.address} • Phone: {o.phone}</span>
                      </div>

                      {/* Items */}
                      <div className="space-y-1.5">
                        {o.items.map((it, idx) => (
                          <p key={idx} className="text-xs text-slate-400 flex justify-between">
                            <span>• {it.productTitle} (Brand: {it.brandName}) x {it.quantity}</span>
                            <span className="font-mono text-slate-300">৳ {(it.price * it.quantity).toLocaleString()}</span>
                          </p>
                        ))}
                      </div>

                      {/* Status select controls */}
                      <div className="pt-3 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-semibold">Change Dispatch Status:</span>
                          <select
                            value={o.status}
                            onChange={(e) => updateOrderStatus(o.id, e.target.value as any)}
                            className="bg-slate-900 text-white border border-slate-700 rounded p-1.5 font-bold"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>

                        <div>
                          <span className="text-slate-500 block text-[10px]">Logistics Carrier Code</span>
                          <span className="font-mono text-slate-300 block">{o.trackingNumber}</span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: WHOLESALE QUOTATION BIDS */}
            {activeTab === 'quotes' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Wholesale Quotation Requests ({quotes.length})</h3>
                  <p className="text-xs text-slate-400">Review custom specification bids and reply to corporate buyers with specialized rate cards.</p>
                </div>

                <div className="space-y-4">
                  {quotes.map((q) => (
                    <div key={q.id} className="bg-slate-800 p-5 rounded-2xl border border-slate-700/60 space-y-4 text-xs">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-700 pb-3">
                        <div>
                          <span className="text-amber-400 font-bold block">Quotation ID: {q.id}</span>
                          <span className="text-slate-400 block">Date: {q.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full font-bold ${
                          q.status === 'Pending' ? 'bg-amber-950 text-amber-400 border border-amber-800' : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        }`}>
                          {q.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
                        <div>
                          <p><strong>Customer Name:</strong> {q.customerName}</p>
                          {q.companyName && <p><strong>Company:</strong> {q.companyName}</p>}
                        </div>
                        <div>
                          <p><strong>Active Contact:</strong> {q.phone}</p>
                          <p><strong>Email Address:</strong> {q.email}</p>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                        <p className="font-bold text-[#D4AF37]">Requested Products Checklist:</p>
                        {q.products.map((p, index) => (
                          <div key={index} className="flex justify-between border-b border-slate-800 pb-1.5">
                            <span>{p.productTitle} x {p.quantity}</span>
                            {p.notes && <span className="text-slate-400 italic">Notes: "{p.notes}"</span>}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-400">Custom message:</p>
                        <p className="p-3 bg-slate-900 rounded italic text-slate-300">"{q.message}"</p>
                      </div>

                      {q.status === 'Pending' && (
                        <div className="flex justify-end gap-2 pt-2">
                          <button
                            onClick={() => updateQuoteStatus(q.id, 'Replied')}
                            className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-bold flex items-center gap-1 hover:bg-emerald-500 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Mark as Replied / Send Rate Card
                          </button>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
