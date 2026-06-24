import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import BrandShowcase from './components/BrandShowcase';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CustomerPortal from './components/CustomerPortal';
import AdminPortal from './components/AdminPortal';
import QuotationModal from './components/QuotationModal';

import { PRODUCTS, CATEGORIES, BRANDS, DEMO_ORDERS } from './data';
import { Product, CartItem, Order, QuoteRequest, User, CategoryType } from './types';
import { Sparkles, SlidersHorizontal, ArrowUpDown, RefreshCw, Layers, Compass, HelpCircle } from 'lucide-react';

export default function App() {
  // Global State Managers
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>(DEMO_ORDERS);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('');
  const [priceRangeFilter, setPriceRangeFilter] = useState<number>(120000);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Modal / Drawer Toggles
  const [selectedProductForDetails, setSelectedProductForDetails] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);

  // Scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  // Load cart and wishlist from localStorage if present
  useEffect(() => {
    const savedCart = localStorage.getItem('mtc_cart');
    const savedWishlist = localStorage.getItem('mtc_wishlist');
    const savedOrders = localStorage.getItem('mtc_orders');
    const savedQuotes = localStorage.getItem('mtc_quotes');

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedQuotes) setQuotes(JSON.parse(savedQuotes));
  }, []);

  // Save changes to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('mtc_cart', JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem('mtc_wishlist', JSON.stringify(newWishlist));
  };

  // Add to Cart handler
  const handleAddToCart = (product: Product, quantity: number, isWholesale: boolean) => {
    const existingIndex = cartItems.findIndex(
      item => item.product.id === product.id && item.isWholesale === isWholesale
    );

    let newCart = [...cartItems];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({ product, quantity, isWholesale });
    }

    saveCart(newCart);
    setCartOpen(true); // Open the drawer so they can see progress
  };

  const handleUpdateCartQty = (productId: string, quantity: number, isWholesale: boolean) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }

    const newCart = cartItems.map(item => {
      if (item.product.id === productId && item.isWholesale === isWholesale) {
        return { ...item, quantity };
      }
      return item;
    });

    saveCart(newCart);
  };

  const handleRemoveFromCart = (productId: string) => {
    const newCart = cartItems.filter(item => item.product.id !== productId);
    saveCart(newCart);
  };

  // Wishlist handler
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.id === product.id);
    let newWishlist = [];
    if (exists) {
      newWishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      newWishlist = [...wishlist, product];
    }
    saveWishlist(newWishlist);
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product, 1, false);
    setCartOpen(true);
  };

  // Order Placement
  const handlePlaceOrder = (orderData: Partial<Order>) => {
    const newOrder = {
      ...orderData,
      id: orderData.id || `MTC-ORDER-${Math.floor(100000 + Math.random() * 900000)}`,
      userId: currentUser?.id || 'guest-user',
    } as Order;

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem('mtc_orders', JSON.stringify(updatedOrders));
    
    // Clear cart
    saveCart([]);
    setCartOpen(false);
    
    // Navigate to customer portal history
    setCurrentTab('customer');
    alert(`Thank you! Your order ${newOrder.id} has been securely logged for freight logistics.`);
  };

  // Quotation Request
  const handleSubmitQuote = (quoteData: Partial<QuoteRequest>) => {
    const newQuote = {
      ...quoteData,
      id: quoteData.id || `MTC-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`,
    } as QuoteRequest;

    const updatedQuotes = [newQuote, ...quotes];
    setQuotes(updatedQuotes);
    localStorage.setItem('mtc_quotes', JSON.stringify(updatedQuotes));
  };

  // Filter and Search logic
  const filteredProducts = products.filter(prod => {
    // Search keyword match
    const keyword = searchQuery.toLowerCase();
    const titleMatch = prod.title.toLowerCase().includes(keyword);
    const descMatch = prod.shortDescription.toLowerCase().includes(keyword);
    const brandMatch = prod.brandName.toLowerCase().includes(keyword);
    const categoryMatchStr = prod.category.toLowerCase().includes(keyword);
    const specMatch = Object.entries(prod.specification).some(([k, v]) => 
      k.toLowerCase().includes(keyword) || String(v).toLowerCase().includes(keyword)
    );
    const queryMatch = !searchQuery || titleMatch || descMatch || brandMatch || categoryMatchStr || specMatch;

    // Category filter
    const catMatch = !selectedCategoryFilter || prod.category === selectedCategoryFilter;

    // Brand filter
    const brandMatchId = !selectedBrandFilter || prod.brandId === selectedBrandFilter;

    // Price range filter
    const priceLimitMatch = prod.price <= priceRangeFilter;

    return queryMatch && catMatch && brandMatchId && priceLimitMatch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured / no-sort
  });

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategoryFilter('');
    setSelectedBrandFilter('');
    setPriceRangeFilter(120000);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-900" id="global-application-wrapper">
      
      {/* Header bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        cartCount={cartItems.length}
        wishlistCount={wishlist.length}
        openCart={() => setCartOpen(true)}
        openWishlist={() => { setCurrentTab('customer'); }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        onRequestQuote={() => setQuoteModalOpen(true)}
      />

      {/* Main Body Routing */}
      <main className="flex-grow">
        
        {/* TAB 1: LUXURY HOMEPAGE */}
        {currentTab === 'home' && (
          <div className="space-y-0">
            {/* Elegant Industrial Hero */}
            <Hero
              onShopClick={() => setCurrentTab('products')}
              onBrandsClick={() => setCurrentTab('brands')}
              onRequestQuote={() => setQuoteModalOpen(true)}
            />

            {/* Image-based categories Grid */}
            <CategoryList
              onSelectCategory={(catId) => {
                setSelectedCategoryFilter(catId);
                setCurrentTab('products');
              }}
            />

            {/* Quick trust metrics banner */}
            <section className="bg-slate-100 py-16 px-4 border-t border-b border-slate-200">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center md:text-left space-y-2">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">Wholesale Pricing</h3>
                  <p className="text-xs text-slate-500">Access dynamic bulk discounts tailored for contractors, builders, and corporate trade partners.</p>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">ISO Certified Pipes</h3>
                  <p className="text-xs text-slate-500">Every single meter of uPVC and CPVC pipe complies with global safety and chemical tolerance indexes.</p>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">European Tech Pumps</h3>
                  <p className="text-xs text-slate-500">Importers of genuine Italian Pedrollo and German KSB heavy-duty boiler booster pumps.</p>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="font-sans font-extrabold text-xl text-[#0B192C]">Artistic Ceramics</h3>
                  <p className="text-xs text-slate-500">Showcasing Kohler and BRAVAT matte-black showers, brass taps, and anti-bacterial glazed commodes.</p>
                </div>
              </div>
            </section>

            {/* Quick Featured Carousel */}
            <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest block font-mono">
                  Marketplace Spotlights
                </span>
                <h2 className="font-sans font-extrabold text-3xl text-[#0B192C] tracking-tight">
                  Hot Sellers & Top Picks
                </h2>
                <div className="w-12 h-1 bg-[#D4AF37] mx-auto rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 3).map(prod => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAddToCart={handleAddToCart}
                    onBuyNow={handleBuyNow}
                    onProductClick={(p) => setSelectedProductForDetails(p)}
                    isWishlisted={wishlist.some(item => item.id === prod.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: PRODUCTS CATALOG + SEARCH & FILTERS */}
        {currentTab === 'products' && (
          <div className="py-12 px-4 max-w-7xl mx-auto space-y-8" id="products-catalog-page">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h2 className="font-sans font-extrabold text-3xl text-[#0B192C] tracking-tight">
                  Search & Discover Inventory
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Filtering {sortedProducts.length} of {products.length} registered high-fidelity architectural solutions.
                </p>
              </div>

              {/* Sorting and quick controls */}
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Sort Solutions:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded p-1.5 text-slate-800 font-bold"
                >
                  <option value="featured">★ Spotlight / Featured</option>
                  <option value="price-low">৳ Price: Low to High</option>
                  <option value="price-high">৳ Price: High to Low</option>
                  <option value="rating">⭐ Top Rated reviews</option>
                </select>

                {(searchQuery || selectedCategoryFilter || selectedBrandFilter || priceRangeFilter < 120000) && (
                  <button
                    onClick={clearAllFilters}
                    className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Master Catalog Layout (Sidebar + Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sidebar Filters (3 Cols) */}
              <aside className="lg:col-span-3 bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-6">
                
                <div className="flex justify-between items-center border-b pb-3">
                  <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                    Filter Parameters
                  </h3>
                  <button onClick={clearAllFilters} className="text-[10px] text-slate-400 hover:text-slate-600 underline">
                    Clear All
                  </button>
                </div>

                {/* Keyword Search inside filters too */}
                <div className="space-y-1.5 text-xs">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Keyword Search</label>
                  <input
                    type="text"
                    placeholder="Enter keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs"
                  />
                </div>

                {/* Category Filters */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">By Division Division</label>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <button
                      onClick={() => setSelectedCategoryFilter('')}
                      className={`text-left py-1.5 px-3 rounded-lg font-medium transition-colors ${
                        !selectedCategoryFilter ? 'bg-[#0B192C] text-white font-bold' : 'text-slate-600 hover:bg-slate-200/50'
                      }`}
                    >
                      📁 All Divisions
                    </button>
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategoryFilter(cat.id)}
                        className={`text-left py-1.5 px-3 rounded-lg font-medium transition-colors truncate ${
                          selectedCategoryFilter === cat.id ? 'bg-[#0B192C] text-white font-bold' : 'text-slate-600 hover:bg-slate-200/50'
                        }`}
                      >
                        • {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Importers Filters */}
                <div className="space-y-2 text-xs">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">By Manufacturer Brand</label>
                  <select
                    value={selectedBrandFilter}
                    onChange={(e) => setSelectedBrandFilter(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-lg text-slate-800"
                  >
                    <option value="">All Brands ({BRANDS.length})</option>
                    {BRANDS.map(b => (
                      <option key={b.id} value={b.id}>{b.name} ({b.country})</option>
                    ))}
                  </select>
                </div>

                {/* Price slider filter */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
                    <span>Max Price limit</span>
                    <span className="font-mono text-[#D4AF37]">৳ {priceRangeFilter.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={120000}
                    step={1000}
                    value={priceRangeFilter}
                    onChange={(e) => setPriceRangeFilter(Number(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B192C]"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                    <span>৳ 500</span>
                    <span>৳ 120,000+</span>
                  </div>
                </div>

                {/* Help Box inside filter sidebar */}
                <div className="bg-slate-200/40 p-4 rounded-xl border border-slate-200/20 text-xs text-slate-600 space-y-1.5">
                  <p className="font-bold flex items-center gap-1 text-[#0B192C]">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    Wholesale Quote Support
                  </p>
                  <p className="text-[11px]">Contractors can generate certified printable quote sheets directly. Click 'Get Quote' in the header to draft custom schedules.</p>
                </div>

              </aside>

              {/* Products Catalog grid (9 Cols) */}
              <div className="lg:col-span-9 space-y-6">
                {sortedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map(prod => (
                      <ProductCard
                        key={prod.id}
                        product={prod}
                        onAddToCart={handleAddToCart}
                        onBuyNow={handleBuyNow}
                        onProductClick={(p) => setSelectedProductForDetails(p)}
                        isWishlisted={wishlist.some(item => item.id === prod.id)}
                        onToggleWishlist={handleToggleWishlist}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 border border-slate-200 border-dashed rounded-3xl space-y-4 max-w-lg mx-auto">
                    <span className="text-5xl block animate-pulse">🔎</span>
                    <p className="font-sans font-bold text-slate-500 text-sm">No solutions match your active filter parameters.</p>
                    <button
                      onClick={clearAllFilters}
                      className="px-5 py-2 bg-[#0B192C] text-white font-bold text-xs uppercase tracking-wider rounded-lg"
                    >
                      Reset Filter Criteria
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: DEDICATED BRANDS SHOWCASE */}
        {currentTab === 'brands' && (
          <BrandShowcase
            onProductClick={(p) => setSelectedProductForDetails(p)}
            onShopWithFilter={(brandId) => {
              setSelectedBrandFilter(brandId);
              setCurrentTab('products');
            }}
          />
        )}

        {/* TAB 4: CUSTOMER PORTAL */}
        {currentTab === 'customer' && (
          <CustomerPortal
            wishlist={wishlist}
            onRemoveWishlist={handleToggleWishlist}
            orders={orders}
            onProductClick={(p) => setSelectedProductForDetails(p)}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

        {/* TAB 5: ADMIN MANAGEMENT PORTAL */}
        {currentTab === 'admin' && (
          <AdminPortal
            products={products}
            setProducts={setProducts}
            orders={orders}
            setOrders={setOrders}
            quotes={quotes}
            setQuotes={setQuotes}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

      </main>

      {/* Corporate Professional Footer */}
      <Footer 
        setCurrentTab={setCurrentTab} 
        setSelectedCategoryFilter={setSelectedCategoryFilter}
      />

      {/* Product Details Modal Overlay */}
      {selectedProductForDetails && (
        <ProductDetails
          product={selectedProductForDetails}
          onClose={() => setSelectedProductForDetails(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isWishlisted={wishlist.some(item => item.id === selectedProductForDetails.id)}
          onToggleWishlist={handleToggleWishlist}
          onProductClick={(p) => {
            setSelectedProductForDetails(p);
          }}
        />
      )}

      {/* Cart Drawer Overlay */}
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={handleUpdateCartQty}
          onRemoveItem={handleRemoveFromCart}
          onPlaceOrder={handlePlaceOrder}
          currentUser={currentUser}
        />
      )}

      {/* Custom Quotation Generator Modal */}
      {quoteModalOpen && (
        <QuotationModal
          onClose={() => setQuoteModalOpen(false)}
          onSubmitQuote={handleSubmitQuote}
        />
      )}

    </div>
  );
}
