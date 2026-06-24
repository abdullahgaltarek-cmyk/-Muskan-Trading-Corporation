import React from 'react';
import { motion } from 'motion/react';
import { Category } from '../types';
import { CATEGORIES } from '../data';
import { ArrowRight } from 'lucide-react';

interface CategoryListProps {
  onSelectCategory: (catId: string) => void;
}

export default function CategoryList({ onSelectCategory }: CategoryListProps) {
  // Stagger animation parents
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section className="py-24 px-4 bg-[#FDFDFD] text-navy-800 border-t border-b border-slate-100" id="categories-section">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-widest block font-mono">
            Premium Architectural Materials
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-navy-800 tracking-tight">
            Explore Image-Based Categories
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto"></div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto font-serif italic">
            Select one of our specialized industrial divisions below to browse our inventory, compare top-tier specifications, and access wholesale pricing matrices.
          </p>
        </div>

        {/* Categories Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer bg-white hover:bg-navy-800 hover:text-white rounded-none overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between"
              id={`category-card-${cat.id}`}
            >
              {/* Image box with overlay zooming */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                
                {/* Editorial Number Badge */}
                <span className="absolute top-4 right-4 text-white text-base font-serif italic border-b border-gold-400 pb-0.5 tracking-wider">
                  0{idx + 1}.
                </span>

                <span className="absolute bottom-4 left-4 text-white text-[9px] font-bold bg-navy-950/80 px-3 py-1 rounded-none uppercase tracking-widest">
                  Division Overview
                </span>
              </div>

              {/* Content box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-black text-xl text-navy-800 group-hover:text-gold-500 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-500 uppercase tracking-widest group-hover:translate-x-1.5 transition-transform">
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
