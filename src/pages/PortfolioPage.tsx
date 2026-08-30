/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PageId, PortfolioItem } from '../types';
import {
  Clock,
  Sparkles,
  Search,
} from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onBookService: (serviceName?: string) => void;
  onOpenPortfolioModal: (item: PortfolioItem) => void;
  portfolioItems: PortfolioItem[];
  onShowToast: (msg: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onBookService,
  onOpenPortfolioModal,
  portfolioItems,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [transformationSlide, setTransformationSlide] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'gallery' | 'transformation'>('gallery');
  const [selectedTransformationLook, setSelectedTransformationLook] = useState<number>(0);

  const categories = [
    'All',
    'Bridal',
    'Soft Glam',
    'Editorial',
    'Sagan',
    'Cocktail',
  ];

  const transformationLooks = [
    {
      title: 'Royal Mughal Crimson Bride',
      beforeImg:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
      afterImg:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      beforeLabel: 'Step 1: Hydra-Prep & Undertone Calibration',
      afterLabel: 'Step 4: Royal HD Finished Radiance',
      description:
        'Micro-pigmentation, 3D contour sculpting, and 24K gold foil highlighting for maximum camera longevity.',
    },
    {
      title: 'Luminescent Rose Glass Skin',
      beforeImg:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop',
      afterImg:
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
      beforeLabel: 'Step 1: Bare Skin & Barrier Priming',
      afterLabel: 'Step 4: Featherlight Dewy Glow',
      description:
        'French essence infusing with airbrushed blush drape and satin glazed ombre lips.',
    },
  ];

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return portfolioItems.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory;

      const matchQuery =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.techniques.some((technique) =>
          technique.toLowerCase().includes(query)
        );

      return matchCategory && matchQuery;
    });
  }, [portfolioItems, selectedCategory, searchQuery]);

  return (
    <div
      id="portfolio_page"
      className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FAF7F2]"
    >
      {/* =========================================================
          1. PORTFOLIO HERO HEADER
      ========================================================= */}
      <section className="border-b border-[#C5A059]/15 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="min-w-0">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.45em] text-[#C5A059]">
              Master Curated Archive
            </span>

            <h1 className="font-serif text-3xl font-light italic leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              The Portrait Gallery
            </h1>

            <p className="mt-3 max-w-xl font-serif text-xs italic text-neutral-500 sm:text-sm">
              Explore our comprehensive gallery of real bridal transformations,
              fashion spreads, and glowing skin architectures.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex w-full gap-2 border border-[#C5A059]/20 bg-[#FAF7F2] p-1.5 md:w-auto">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer md:flex-none ${
                activeTab === 'gallery'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#C5A059]'
              }`}
            >
              Gallery Looks ({portfolioItems.length})
            </button>

            <button
              onClick={() => setActiveTab('transformation')}
              className={`flex flex-1 items-center justify-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer md:flex-none ${
                activeTab === 'transformation'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#C5A059]'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Glam Simulator</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. TRANSFORMATION SLIDER
      ========================================================= */}
      {activeTab === 'transformation' && (
        <section className="border-b border-[#C5A059]/15 bg-[#FAF7F2] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto w-full max-w-4xl space-y-8 border border-[#C5A059]/30 bg-white p-5 shadow-xl sm:p-10 lg:p-12">
            <div className="mx-auto max-w-xl space-y-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059]">
                Interactive Artistry Simulator
              </span>

              <h2 className="font-serif text-2xl italic text-[#1A1A1A] sm:text-3xl">
                Skin Science Transformation
              </h2>

              <p className="text-xs text-neutral-500">
                Drag the interactive slider below to reveal how our skin
                hydration, 3D micro-contouring, and HD pigment layering
                transforms bare skin into a radiant royal bridal glow.
              </p>
            </div>

            {/* Look Selector */}
            <div className="flex flex-wrap justify-center gap-3">
              {transformationLooks.map((look, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTransformationLook(idx)}
                  className={`border px-3 py-2 text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer sm:px-4 sm:text-[10px] ${
                    selectedTransformationLook === idx
                      ? 'border-transparent bg-[#1A1A1A] text-white'
                      : 'border-[#C5A059]/20 bg-white text-neutral-600 hover:border-[#C5A059]'
                  }`}
                >
                  {look.title}
                </button>
              ))}
            </div>

            {/* Transformation Canvas */}
            <div className="group relative h-72 w-full select-none overflow-hidden border-2 border-white shadow-2xl sm:h-96 md:h-[420px]">
              {/* AFTER */}
              <div className="absolute inset-0 h-full w-full bg-[#FAF7F2]">
                <img
                  src={transformationLooks[selectedTransformationLook].afterImg}
                  alt="After Glam Transformation"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <span className="absolute bottom-4 right-4 border border-[#C5A059]/40 bg-black/80 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                  {transformationLooks[selectedTransformationLook].afterLabel}
                </span>
              </div>

              {/* BEFORE */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#C5A059] shadow-lg"
                style={{
                  width: `${transformationSlide}%`,
                }}
              >
                <img
                  src={transformationLooks[selectedTransformationLook].beforeImg}
                  alt="Before Prep Transformation"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <span className="absolute bottom-4 left-4 border border-[#C5A059]/40 bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                  {transformationLooks[selectedTransformationLook].beforeLabel}
                </span>
              </div>

              {/* Divider Handle */}
              <div
                className="pointer-events-none absolute bottom-0 top-0 z-10 flex items-center justify-center"
                style={{
                  left: `${transformationSlide}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#C5A059] text-xs font-bold text-white shadow-xl">
                  ↔
                </div>
              </div>

              {/* Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={transformationSlide}
                onChange={(e) =>
                  setTransformationSlide(Number(e.target.value))
                }
                className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
                aria-label="Interactive Before/After slider control"
              />
            </div>

            <div className="border border-[#C5A059]/20 bg-[#FAF7F2] p-4 text-center">
              <p className="font-serif text-xs italic text-neutral-600">
                "{transformationLooks[selectedTransformationLook].description}"
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          3. SEARCH & FILTER
      ========================================================= */}
      <section className="border-b border-[#C5A059]/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          {/* Categories */}
          <div className="scrollbar-none flex min-w-0 items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'border-transparent bg-[#1A1A1A] text-white'
                    : 'border-[#C5A059]/20 bg-[#FAF7F2] text-neutral-600 hover:border-[#C5A059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full shrink-0 md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search looks, palettes, techniques..."
              className="w-full border border-[#C5A059]/25 bg-[#FAF7F2] py-2 pl-9 pr-4 text-xs text-[#1A1A1A] focus:border-[#C5A059] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. GALLERY
      ========================================================= */}
      {activeTab === 'gallery' && (
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            {filteredItems.length === 0 ? (
              <div className="border border-[#C5A059]/20 bg-white p-8 py-16 text-center">
                <p className="font-serif text-xl italic text-neutral-600">
                  No portraits match your search criteria.
                </p>

                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 cursor-pointer bg-[#1A1A1A] px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white"
                >
                  Reset Filter Parameters
                </button>
              </div>
            ) : (
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="group flex min-w-0 cursor-pointer flex-col overflow-hidden border border-[#C5A059]/20 bg-white transition-all duration-300 hover:border-[#C5A059] hover:shadow-xl"
                    onClick={() => onOpenPortfolioModal(item)}
                  >
                    {/* =================================================
                        FIXED IMAGE AREA
                        
                        IMPORTANT:
                        object-contain = FULL IMAGE
                        No crop
                        No distortion
                    ================================================= */}
                    <div className="relative flex h-[360px] w-full items-center justify-center overflow-hidden bg-[#F3EFE8] sm:h-[390px]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="block h-full w-full object-contain object-center"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* Category */}
                      <div className="absolute left-3 top-3 flex gap-1.5">
                        <span className="border border-[#C5A059]/30 bg-white/95 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-[#C5A059]">
                          {item.category}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="absolute right-3 top-3 border border-[#C5A059]/40 bg-black/70 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-white">
                        Est. ₹{item.priceEst.toLocaleString('en-IN')}
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="font-serif text-xl font-semibold italic leading-tight drop-shadow-sm">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 font-serif text-[10px] italic text-neutral-300">
                          Palette: {item.accentTone}
                        </p>
                      </div>
                    </div>

                    {/* =================================================
                        CARD META
                    ================================================= */}
                    <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                      <p className="line-clamp-2 font-serif text-xs italic leading-relaxed text-neutral-600">
                        "{item.description}"
                      </p>

                      <div className="space-y-1.5">
                        <span className="block text-[8px] font-bold uppercase tracking-widest text-neutral-400">
                          Artistry Techniques:
                        </span>

                        <div className="flex flex-wrap gap-1.5">
                          {item.techniques.map((tech, idx) => (
                            <span
                              key={idx}
                              className="border border-neutral-200 bg-[#FAF7F2] px-2 py-0.5 text-[8px] uppercase tracking-wider text-neutral-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Meta */}
                      <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-3">
                        <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-widest text-neutral-500">
                          <Clock className="h-3 w-3 text-[#C5A059]" />
                          {item.timeEst}
                        </span>

                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenPortfolioModal(item);
                            }}
                            className="cursor-pointer border border-[#C5A059]/30 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-[#C5A059] hover:bg-[#FAF7F2]"
                          >
                            Inspect
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onBookService(item.title);
                            }}
                            className="cursor-pointer bg-[#1A1A1A] px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C5A059]"
                          >
                            Book Look
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================
          5. BOTTOM CTA
      ========================================================= */}
      <section className="border-t border-[#C5A059]/15 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059]">
            Have A Custom Moodboard?
          </span>

          <h2 className="font-serif text-3xl font-light italic leading-tight text-[#1A1A1A] sm:text-4xl">
            We Translate Your Pinterest Vision Into High-Definition Reality.
          </h2>

          <p className="mx-auto max-w-xl font-serif text-xs italic text-neutral-600 sm:text-sm">
            Book an in-studio consultation or submit your outfit references.
            We customize pigments and undertones specifically to your bridal
            jewelry and lehenga embroidery.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() =>
                onBookService('Custom Moodboard / Bespoke Bridal Look')
              }
              className="cursor-pointer bg-[#C5A059] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#A68041]"
            >
              Book Bespoke Look Consultation
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer border border-[#C5A059] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] transition-colors hover:bg-[#FAF7F2]"
            >
              Contact Studio Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};