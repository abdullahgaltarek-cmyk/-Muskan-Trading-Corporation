import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ShieldCheck, Menu, X, User, Briefcase, ChevronDown } from 'lucide-react';
import { CategoryType, Product, User as UserType } from '../types';
import { CATEGORIES } from '../data';
import logoImg from '../assets/images/muskan_logo_1782325714940.jpg';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  openCart: () => void;
  openWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  currentUser: UserType | null;
  setCurrentUser: (user: UserType | null) => void;
  onRequestQuote: () => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  cartCount,
  wishlistCount,
  openCart,
  openWishlist,
  searchQuery,
  setSearchQuery,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
  currentUser,
  setCurrentUser,
  onRequestQuote
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentTab('products');
  };

  const selectCategoryFromHeader = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setCurrentTab('products');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-800 text-white border-b border-gold-500/20 shadow-md font-sans" id="main-header">
      {/* Top Banner: Corporate Trust indicators & Fast Delivery */}
      <div className="bg-navy-900 text-xs text-slate-300 py-1.5 px-4 hidden md:flex justify-between items-center border-b border-navy-950/40">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></span>
            Bangladesh Targeted Premium Wholesale & Retail
          </span>
          <span>•</span>
          <span>Fast Delivery Nationwide</span>
          <span>•</span>
          <span className="text-amber-400 font-medium">Official Distributor</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+8801349679393" className="hover:text-white transition-colors">Hotline: 01349679393</a>
          <span>|</span>
          <button 
            onClick={() => { setCurrentTab('customer'); }} 
            className="hover:text-white transition-colors font-medium text-[#D4AF37]"
          >
            Track Your Order
          </button>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo / Brand Name */}
        <div 
          onClick={() => { setCurrentTab('home'); }} 
          className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div className="relative w-12 h-12 bg-white rounded-full p-0.5 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform border border-gold-500/55">
            <img 
              src={logoImg} 
              alt="Muskan Trading Logo" 
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="block font-serif font-extrabold tracking-tight text-lg md:text-xl text-white group-hover:text-gold-500 transition-colors leading-none">
              Muskan Trading
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-gold-500 uppercase mt-1 font-bold">
              Corporation
            </span>
          </div>
        </div>

        {/* Global Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-lg relative">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search pumps, pipes, luxury sanitary, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              className="w-full bg-navy-950 text-white border border-navy-900 rounded-none py-2 pl-4 pr-10 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm placeholder-slate-400 font-serif italic"
            />
            <button type="submit" className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-gold-500 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Action Widgets / Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Quick Access Tabs */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase mr-4">
            <button 
              onClick={() => { setCurrentTab('home'); }} 
              className={`hover:text-gold-500 transition-colors py-1 ${currentTab === 'home' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-slate-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentTab('products'); setSelectedCategoryFilter(''); }} 
              className={`hover:text-gold-500 transition-colors py-1 ${currentTab === 'products' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-slate-300'}`}
            >
              Products
            </button>
            <button 
              onClick={() => { setCurrentTab('brands'); }} 
              className={`hover:text-gold-500 transition-colors py-1 ${currentTab === 'brands' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-slate-300'}`}
            >
              Brands Collection
            </button>
          </nav>

          {/* Request Quotation (Luxury CTA Button) */}
          <button
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-none text-xs font-bold bg-gold-500 text-navy-950 hover:bg-gold-600 active:scale-95 transition-all shadow-md uppercase tracking-widest border border-gold-500"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Get Quote
          </button>

          {/* Wishlist Button */}
          <button 
            onClick={openWishlist} 
            className="relative p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button 
            onClick={openCart} 
            className="relative p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-1.5 p-1.5 md:px-3 md:py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-sm"
            >
              <User className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden md:inline max-w-[100px] truncate">
                {currentUser ? currentUser.name.split(' ')[0] : 'Account'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-navy-900 border border-gold-500/20 rounded-none shadow-2xl py-2 text-slate-200 text-xs z-50">
                {currentUser ? (
                  <>
                    <div className="px-4 py-2 border-b border-slate-700/60">
                      <p className="font-semibold text-white truncate">{currentUser.name}</p>
                      <p className="text-xs text-amber-400 capitalize">{currentUser.role} Account</p>
                    </div>
                    {currentUser.role !== 'customer' && (
                      <button 
                        onClick={() => { setCurrentTab('admin'); setUserDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-800 text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 font-medium"
                      >
                        <span>🛡️</span> Admin Panel
                      </button>
                    )}
                    <button 
                      onClick={() => { setCurrentTab('customer'); setUserDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-800 text-white transition-colors"
                    >
                      My Dashboard & Orders
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentUser(null);
                        setUserDropdownOpen(false);
                        setCurrentTab('home');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-red-950/40 text-red-400 hover:text-red-300 transition-colors border-t border-slate-700/40 mt-1"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-700/50">
                      Access wholesale pricing & order history
                    </div>
                    <button 
                      onClick={() => { setCurrentTab('customer'); setUserDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-800 text-white transition-colors font-medium"
                    >
                      Customer Sign In
                    </button>
                    <button 
                      onClick={() => { setCurrentTab('admin'); setUserDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 border-t border-slate-700/50 mt-1"
                    >
                      🛡️ Portal login (Admin)
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search & Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold-500/20 bg-navy-950 px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 text-white border border-navy-800 rounded-none py-2 pl-3 pr-10 text-sm"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-slate-400">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Navigation links */}
          <div className="flex flex-col gap-2 font-semibold text-xs tracking-wider uppercase">
            <button 
              onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-none ${currentTab === 'home' ? 'bg-navy-900 text-gold-500' : 'text-slate-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentTab('products'); setSelectedCategoryFilter(''); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-none ${currentTab === 'products' ? 'bg-navy-900 text-gold-500' : 'text-slate-300'}`}
            >
              Products List
            </button>
            <button 
              onClick={() => { setCurrentTab('brands'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-none ${currentTab === 'brands' ? 'bg-navy-900 text-gold-500' : 'text-slate-300'}`}
            >
              Brands Showcase
            </button>
            <button 
              onClick={() => { onRequestQuote(); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-none text-gold-500 font-bold"
            >
              💼 Get Custom Quotation
            </button>
          </div>

          {/* Quick Categories list in mobile */}
          <div className="border-t border-slate-800 pt-3">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider px-3 mb-2">Shop by Category</p>
            <div className="grid grid-cols-2 gap-1 px-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { selectCategoryFromHeader(cat.id); setMobileMenuOpen(false); }}
                  className="text-left text-xs text-slate-300 hover:text-white py-1.5 truncate"
                >
                  • {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
