/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioItem } from '../types';
import { X, Clock, Sparkles, Check, Heart, Shield, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookLook: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose, onBookLook }) => {
  if (!item) return null;

  return (
    <div id="portfolio_modal_backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#FAF7F2] border border-[#C5A059]/40 w-full max-w-3xl overflow-hidden shadow-2xl relative my-8"
      >
        {/* Header Visual Image Banner */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-neutral-900">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Ambient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/30 to-transparent"></div>
          
          <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[9px] uppercase tracking-[0.3em] font-bold border border-[#C5A059]/40 shadow-sm">
              {item.category} Masterpiece
            </span>
            <button
              onClick={onClose}
              className="p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-1">
              Curated Master Artistry
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl italic font-light drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-300 font-serif italic mt-1">
              Palette Harmony: {item.accentTone}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Story & Description */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">The Creative Concept & Story</h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
              "{item.description}"
            </p>
            {item.story && (
              <p className="text-xs text-neutral-600 bg-white p-4 border border-[#C5A059]/15 rounded-xs leading-relaxed mt-2">
                <span className="font-bold text-[#1A1A1A] block mb-1 uppercase tracking-wider text-[9px]">Artist Note:</span>
                {item.story}
              </p>
            )}
          </div>

          {/* Techniques Applied */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Key Architectural Techniques</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.techniques.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-2.5 border border-neutral-200 text-xs text-neutral-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Products Used */}
          {item.productsUsed && item.productsUsed.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Vanity Kit Ingredients & Brands</h4>
              <div className="flex flex-wrap gap-2">
                {item.productsUsed.map((prod, idx) => (
                  <span key={idx} className="text-[10px] px-3 py-1 bg-white border border-[#C5A059]/25 text-neutral-800 font-medium">
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Timing & Action Bar */}
          <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                {item.timeEst} Artistry Duration
              </span>
              <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                Est. ₹{item.priceEst.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 border border-neutral-300 hover:border-neutral-500 text-neutral-700 text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer text-center"
              >
                Back to Gallery
              </button>
              <button
                onClick={() => {
                  onBookLook(item);
                  onClose();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#C5A059] hover:bg-[#A68041] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>Book This Look</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
