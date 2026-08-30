/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, Service, FAQItem } from '../types';
import { 
  Clock, 
  Check, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  ChevronDown,
  ChevronUp,
  Tag,
  Star,
  Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingButton } from '../components/booking/BookingButton';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onBookService: (serviceName?: string) => void;
  services: Service[];
  faqs: FAQItem[];
  onShowToast: (msg: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onBookService,
  services,
  faqs,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const categories = ['All', 'Bridal', 'Reception', 'Engagement', 'Party'];

  const filteredServices = services.filter(s => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  const rateMatrix = [
    {
      category: 'Party Makeup',
      basic: 1500,
      hd: 2500,
      celebrity: 5000,
      desc: 'Glowing skin, elegant eye styling & natural finish'
    },
    {
      category: 'Engagement Makeup',
      basic: 3000,
      hd: 5000,
      celebrity: 7000,
      desc: 'Luminous sagan & cocktail glam with custom lashes & draping'
    },
    {
      category: 'Bridal Makeup',
      basic: 8000,
      hd: 15000,
      celebrity: 25000,
      desc: 'Royal sweatproof 16h base, 3D contour, lashes & dupatta setting'
    },
    {
      category: 'Reception Makeup',
      basic: 7000,
      hd: 13000,
      celebrity: 23000,
      desc: 'Regal evening glow, smoked halo eyes & designer hair architecture'
    }
  ];

  return (
    <div id="services_page" className="flex flex-col bg-[#FAF7F2]">
      
      {/* 1. SERVICES HERO BANNER */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-2">
              Transparent Pricing & Bespoke Suites
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Services & Signature Rates
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-serif italic max-w-xl mt-3">
              Explore our all-inclusive bridal, party, and editorial packages. Every reservation includes pre-skin assessment, luxury lash application, and jewelry setting.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-4 border border-[#C5A059]/25 flex items-center gap-3 self-start md:self-auto">
            <Gift className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">Complimentary Inclusions</span>
              <span className="text-xs text-neutral-700 font-medium">Lashes, Hydra-Prep & Draping included with Bridal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL SERVICES CATALOG WITH LUXURY CARDS */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold">Artistry Menu</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Complete Services & Pricing Menu
            </h2>
            <p className="text-xs text-neutral-500">Select any look or suite below to initiate your booking enquiry.</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-white border-transparent shadow-xs'
                    : 'bg-[#FAF7F2] text-neutral-600 border-[#C5A059]/20 hover:border-[#C5A059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid with [ BOOK ] Button */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF7F2] border border-[#C5A059]/20 overflow-hidden shadow-xs hover:border-[#C5A059] transition-all flex flex-col justify-between"
              >
                {/* Service Image Header */}
                <div className="h-48 relative overflow-hidden bg-neutral-100">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-[#C5A059]">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[8px] uppercase tracking-widest font-bold text-[#C5A059]">
                    {service.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-bold">
                    {service.duration}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl italic font-bold leading-tight">{service.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">{service.description}</p>
                    
                    <div className="mt-4 space-y-2">
                      <span className="text-[8px] uppercase tracking-widest text-neutral-400 font-bold block">Inclusions:</span>
                      {(service.features || []).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-neutral-400 block">Rate / Investment</span>
                      <span className="font-serif text-2xl font-bold text-[#C5A059]">₹{service.price.toLocaleString('en-IN')}</span>
                    </div>

                    {/* [ BOOK ] BUTTON WITH CENTRALIZED FLOW */}
                    <BookingButton
                      serviceName={service.name}
                      onBook={onBookService}
                      variant="primary"
                      className="px-6 py-2.5"
                    >
                      BOOK
                    </BookingButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OFFICIAL RATE CARD COMPARISON MATRIX */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#FAF7F2] border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold">Official Rate Sheet</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Service Rates & Tier Matrix
            </h2>
            <p className="text-xs text-neutral-500">Transparent pricing across Basic, HD, and Celebrity finishes for all major occasions.</p>
          </div>

          <div className="overflow-x-auto bg-white border border-[#C5A059]/30 shadow-md">
            <table className="w-full text-left text-xs min-w-[700px]">
              <thead className="bg-[#1A1A1A] text-white uppercase text-[9px] tracking-widest">
                <tr>
                  <th className="p-4 border-r border-neutral-800">Occasion / Category</th>
                  <th className="p-4 border-r border-neutral-800 text-center">Basic Tier</th>
                  <th className="p-4 border-r border-neutral-800 text-center bg-[#C5A059]/20 text-[#C5A059]">HD Tier (Most Popular)</th>
                  <th className="p-4 text-center">Celebrity Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C5A059]/15 text-neutral-700">
                {rateMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="p-4 border-r border-[#C5A059]/15">
                      <div className="font-serif text-base italic font-bold text-[#1A1A1A]">{item.category}</div>
                      <p className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</p>
                    </td>

                    {/* Basic Tier */}
                    <td className="p-4 text-center border-r border-[#C5A059]/15 space-y-2">
                      <div className="font-serif text-xl font-bold text-[#1A1A1A]">
                        ₹{item.basic.toLocaleString('en-IN')}
                      </div>
                      <BookingButton
                        serviceName={`${item.category} (Basic)`}
                        onBook={onBookService}
                        variant="secondary"
                        className="px-3 py-1 text-[8px] mx-auto block"
                      >
                        BOOK BASIC
                      </BookingButton>
                    </td>

                    {/* HD Tier */}
                    <td className="p-4 text-center bg-[#FAF7F2] border-r border-[#C5A059]/15 space-y-2">
                      <div className="font-serif text-xl font-bold text-[#C5A059]">
                        ₹{item.hd.toLocaleString('en-IN')}
                      </div>
                      <BookingButton
                        serviceName={`${item.category} (HD)`}
                        onBook={onBookService}
                        variant="primary"
                        className="px-3 py-1 text-[8px] mx-auto block"
                      >
                        BOOK HD
                      </BookingButton>
                    </td>

                    {/* Celebrity Tier */}
                    <td className="p-4 text-center space-y-2">
                      <div className="font-serif text-xl font-bold text-[#1A1A1A]">
                        ₹{item.celebrity.toLocaleString('en-IN')}
                      </div>
                      <BookingButton
                        serviceName={`${item.category} (Celebrity)`}
                        onBook={onBookService}
                        variant="secondary"
                        className="px-3 py-1 text-[8px] mx-auto block"
                      >
                        BOOK CELEB
                      </BookingButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold">Questions & Clarifications</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light italic text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {(faqs || []).map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#C5A059]/20 bg-[#FAF7F2] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg italic font-bold text-[#1A1A1A] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#C5A059] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed border-t border-[#C5A059]/10 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
