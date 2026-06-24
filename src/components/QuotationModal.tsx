import React, { useState } from 'react';
import { Product, QuoteRequest } from '../types';
import { PRODUCTS } from '../data';
import { X, Briefcase, Plus, Trash2, Printer, Sparkles, CheckCircle } from 'lucide-react';

interface QuotationModalProps {
  onClose: () => void;
  onSubmitQuote: (quoteData: Partial<QuoteRequest>) => void;
}

export default function QuotationModal({ onClose, onSubmitQuote }: QuotationModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Array of items to request quote for
  const [quoteItems, setQuoteItems] = useState<{ productId: string; quantity: number; notes: string }[]>([
    { productId: PRODUCTS[0].id, quantity: 10, notes: 'Need 30-day corporate trade terms.' }
  ]);

  const [generatedSheet, setGeneratedSheet] = useState<any | null>(null);

  const addQuoteItem = () => {
    setQuoteItems([...quoteItems, { productId: PRODUCTS[0].id, quantity: 5, notes: '' }]);
  };

  const removeQuoteItem = (idx: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== idx));
  };

  const updateQuoteItem = (idx: number, field: string, val: any) => {
    setQuoteItems(quoteItems.map((item, i) => {
      if (i === idx) {
        return { ...item, [field]: val };
      }
      return item;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) {
      alert('Please fill out essential contact details.');
      return;
    }

    if (quoteItems.length === 0) {
      alert('Please add at least one product to your quotation request.');
      return;
    }

    const compiledProducts = quoteItems.map(item => {
      const match = PRODUCTS.find(p => p.id === item.productId);
      return {
        productId: item.productId,
        productTitle: match ? match.title : 'Custom Solution',
        quantity: item.quantity,
        notes: item.notes,
        // Mock estimate for sheet generation
        price: match ? (match.wholesalePrice || match.price) : 5000
      };
    });

    const quoteId = `MTC-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;

    const quoteData: Partial<QuoteRequest> = {
      id: quoteId,
      customerName,
      companyName,
      email,
      phone,
      products: compiledProducts,
      message,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };

    // Store in sheet state to render invoice-style preview
    setGeneratedSheet({
      ...quoteData,
      compiledProducts
    });

    // Notify parent to store in admin quotes state
    onSubmitQuote(quoteData);
  };

  const printQuoteSheet = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#0B192C] font-sans" id="quote-modal-body">
        
        {/* Header bar */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#0B192C] text-white">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-sans font-extrabold text-lg tracking-tight">Request Wholesale Bids</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {!generatedSheet ? (
            /* STEP 1: FILL OUT FORM */
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-500">
                <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider mb-1">Wholesale Pricing Policy</p>
                <p>Bulk pricing is activated on quantities exceeding manufacturer batch lines. Quotations are verified by our Dhaka backoffice within 2 hours.</p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Your Full Name *</label>
                  <input
                    type="text" required placeholder="e.g. Engr. Abdullah Galib Tarek"
                    value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Company Name (If applicable)</label>
                  <input
                    type="text" placeholder="e.g. Bangladesh Pipeline Conglomerate"
                    value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Active Mobile Line *</label>
                  <input
                    type="tel" required placeholder="e.g. +880 1712-345678"
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Email Address *</label>
                  <input
                    type="email" required placeholder="e.g. corporate@company.com.bd"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dynamic products chooser */}
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-bold text-[#0B192C] uppercase tracking-wider text-[10px]">Select Catalog Items for Quotation</span>
                  <button
                    type="button" onClick={addQuoteItem}
                    className="px-3 py-1 bg-[#0B192C] text-white font-bold rounded text-[10px] uppercase tracking-wider flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Add Item
                  </button>
                </div>

                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2">
                  {quoteItems.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg flex items-center gap-3 relative border border-slate-100">
                      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {/* select product */}
                        <div className="sm:col-span-2">
                          <select
                            value={item.productId}
                            onChange={(e) => updateQuoteItem(idx, 'productId', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs focus:outline-none"
                          >
                            {PRODUCTS.map(p => (
                              <option key={p.id} value={p.id}>
                                [{p.brandName}] {p.title} - (৳{(p.wholesalePrice || p.price).toLocaleString()} unit)
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* quantity */}
                        <div>
                          <input
                            type="number" min={1} required
                            value={item.quantity}
                            onChange={(e) => updateQuoteItem(idx, 'quantity', Number(e.target.value))}
                            placeholder="Qty"
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs font-mono"
                          />
                        </div>

                        {/* custom specifications notes */}
                        <div className="sm:col-span-3">
                          <input
                            type="text"
                            placeholder="Custom project specifications notes (e.g. 'Class D thick-wall standard requested')"
                            value={item.notes}
                            onChange={(e) => updateQuoteItem(idx, 'notes', e.target.value)}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs"
                          />
                        </div>
                      </div>

                      {/* delete */}
                      <button
                        type="button" onClick={() => removeQuoteItem(idx)}
                        className="text-slate-400 hover:text-red-500 p-1.5 hover:bg-white rounded-full transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message block */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Additional Project Instructions</label>
                <textarea
                  rows={2} value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide delivery schedules, logistics barriers, or trade credit timeline inquiries..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                ></textarea>
              </div>

              {/* Action */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button" onClick={onClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold rounded-lg uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0B192C] text-white hover:bg-slate-900 font-bold rounded-lg uppercase tracking-wider flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  Generate Live Quotation
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: SHOW LUXURY QUOTATION INVOICE PREVIEW */
            <div className="space-y-6">
              
              {/* Printable sheet container */}
              <div className="border border-slate-300 p-8 rounded-3xl bg-white shadow-md text-slate-800 space-y-6" id="printable-quotation-sheet">
                
                {/* Official letterhead */}
                <div className="flex justify-between items-start border-b-2 border-[#0B192C] pb-4">
                  <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight text-[#0B192C]">Muskan Trading Corporation</h2>
                    <p className="text-[10px] text-slate-400 -mt-1 font-semibold uppercase tracking-wider">Premium Water Pump, Pipe & Sanitary Solutions</p>
                    <p className="text-[9px] text-slate-500 font-mono mt-1.5">Reg: TRAD/DNCC/029103/2026 • Dhaka Base, Bangladesh</p>
                  </div>
                  <div className="text-right text-[10px] text-slate-500">
                    <p className="font-bold text-slate-800 uppercase tracking-widest text-xs">Wholesale Quote</p>
                    <p className="font-mono mt-1">ID: {generatedSheet.id}</p>
                    <p>Date: {generatedSheet.date}</p>
                  </div>
                </div>

                {/* client info */}
                <div className="grid grid-cols-2 gap-4 text-[11px] bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-slate-400 uppercase tracking-widest font-bold text-[9px]">Quotation Issued To</p>
                    <p className="font-bold text-slate-900 text-xs mt-0.5">{generatedSheet.customerName}</p>
                    {generatedSheet.companyName && <p className="text-slate-600 font-medium">{generatedSheet.companyName}</p>}
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase tracking-widest font-bold text-[9px]">Contact Coordinates</p>
                    <p className="font-bold text-slate-900 mt-0.5">{generatedSheet.phone}</p>
                    <p className="text-slate-500 font-mono">{generatedSheet.email}</p>
                  </div>
                </div>

                {/* Items table */}
                <table className="w-full text-left text-[11px] divide-y divide-slate-200">
                  <thead>
                    <tr className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                      <th className="pb-2">Sl.</th>
                      <th className="pb-2">Description / Specifications</th>
                      <th className="pb-2 text-center">Qty</th>
                      <th className="pb-2 text-right">Unit Est.</th>
                      <th className="pb-2 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {generatedSheet.compiledProducts.map((item: any, i: number) => {
                      const totalItem = item.price * item.quantity;
                      return (
                        <tr key={i} className="py-2 text-slate-700">
                          <td className="py-2.5 font-mono">{i + 1}</td>
                          <td className="py-2.5">
                            <span className="font-bold text-slate-900 block">{item.productTitle}</span>
                            {item.notes && <span className="text-[10px] text-slate-400 italic block">Specs adjustment: "{item.notes}"</span>}
                          </td>
                          <td className="py-2.5 text-center font-mono font-bold">{item.quantity}</td>
                          <td className="py-2.5 text-right font-mono">৳ {item.price.toLocaleString()}</td>
                          <td className="py-2.5 text-right font-mono font-bold text-slate-900">৳ {totalItem.toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* total calculations */}
                <div className="pt-4 border-t border-slate-200 flex justify-end text-xs">
                  <div className="w-56 space-y-1 text-slate-500">
                    <div className="flex justify-between">
                      <span>Subtotal Estimate:</span>
                      <span className="font-mono text-slate-800 font-bold">৳ {generatedSheet.compiledProducts.reduce((a: any, b: any) => a + (b.price * b.quantity), 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected VAT (5%):</span>
                      <span className="font-mono text-slate-800 font-bold">৳ {Math.round(generatedSheet.compiledProducts.reduce((a: any, b: any) => a + (b.price * b.quantity), 0) * 0.05).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#0B192C] text-sm pt-1.5 border-t">
                      <span>Estimated Bid Total:</span>
                      <span className="font-mono">৳ {Math.round(generatedSheet.compiledProducts.reduce((a: any, b: any) => a + (b.price * b.quantity), 0) * 1.05).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* terms and seal placeholder */}
                <div className="grid grid-cols-2 gap-4 items-end pt-6 text-[10px] text-slate-400">
                  <div className="space-y-1 leading-relaxed">
                    <p className="font-bold text-slate-500">Terms of Business:</p>
                    <p>1. Prices are dynamic and subject to manufacturer standard material rates.</p>
                    <p>2. Subject to 50% advance for customized logistics casting.</p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="border-b border-slate-300 w-32 mx-auto"></div>
                    <p className="font-semibold text-[#0B192C]">Muskan Backoffice Seal</p>
                  </div>
                </div>

              </div>

              {/* print block trigger */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Quotation Successfully Generated!</p>
                  <p>Our sales desk has compiled these parameters. Click print to generate a clean PDF or paper copy for architectural design archives.</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button" onClick={() => setGeneratedSheet(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold rounded-lg uppercase tracking-wider"
                >
                  Adjust Parameters
                </button>
                <button
                  type="button" onClick={printQuoteSheet}
                  className="px-5 py-2.5 bg-[#0B192C] text-white hover:bg-slate-900 font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-[#D4AF37]" />
                  Print PDF Sheet
                </button>
                <button
                  type="button" onClick={onClose}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-lg uppercase tracking-wider hover:bg-emerald-500"
                >
                  Done
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
