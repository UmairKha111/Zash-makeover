/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Sun, 
  HeartHandshake, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Sparkle, 
  Layers, 
  Maximize2,
  MapPin,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface StudioPageProps {
  onNavigate: (page: PageId) => void;
  onBookService: (serviceName?: string) => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onNavigate, onBookService }) => {
  const steps = [
    {
      num: '01',
      title: 'Aesthetic Consultation & Undertone Mapping',
      desc: 'We analyze your natural skin undertone, facial contours, outfit embroidery, and jewelry metals to calibrate the perfect pigment balance.',
      imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4a9b6b71f9?q=80&w=600&auto=format&fit=crop'
    },
    {
      num: '02',
      title: 'Hydra-Skin Prep & Barrier Priming',
      desc: 'Using luxury French and Korean hydration serums, micro-exfoliating essences, and lymphatic facial massage to create an ultra-smooth porcelain base.',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop'
    },
    {
      num: '03',
      title: 'Architectural Micro-Layering & HD Base',
      desc: 'Applying ultra-thin, camera-calibrated pigment layers rather than heavy mask-like coats. Enhances natural beauty with invisible seamless blending.',
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop'
    },
    {
      num: '04',
      title: '16-Hour Humidity Lock & Draping Artistry',
      desc: 'Sealing with silicon-based micro-mists and completing hair styling, authentic flower pinning, and precision dupatta setting.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const brands = [
    { name: 'Charlotte Tilbury', role: 'Flawless Filter & Lip Cheats' },
    { name: 'Dior Backstage', role: 'Airflash & Glow Palettes' },
    { name: 'NARS Cosmetics', role: 'Radiant Creamy Pigments' },
    { name: 'MAC Cosmetics', role: 'Studio Fix & Prep+Prime' },
    { name: 'Huda Beauty', role: 'FauxFilter & Rose Quartz' },
    { name: 'Pat McGrath Labs', role: 'Mothership Eye Opulence' },
    { name: 'Temptu Airbrush Pro', role: '24-Hour Waterproof Base' },
    { name: 'Laura Mercier', role: 'Translucent Setting Powders' },
    { name: 'Anastasia Beverly Hills', role: 'Brow Architecture Systems' },
    { name: 'Tom Ford Beauty', role: 'Shade and Illuminate' },
    { name: 'Estée Lauder', role: 'Double Wear Foundation' },
    { name: 'Rare Beauty', role: 'Soft Pinch Liquid Flush' }
  ];

  return (
    <div id="studio_page" className="flex flex-col bg-[#FAF7F2]">
      
      {/* 1. STUDIO HERO BANNER WITH LUXURY VANITY PHOTOGRAPHY */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 border-b border-[#C5A059]/15 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-3/5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block">
              The Atelier & Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Where Skin Science Meets <br />
              <span className="text-[#C5A059] not-italic font-medium">Bespoke Artistry.</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 font-serif italic leading-relaxed max-w-2xl">
              "Founded by Zash, a certified VLCC beauty professional, our sanctuary in Aligarh is built on the belief that true luxury makeup should never mask your essence — it should illuminate your innate architecture."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-[#FAF7F2] px-4 py-2.5 border border-[#C5A059]/20">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>Certified VLCC Alumna</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-[#FAF7F2] px-4 py-2.5 border border-[#C5A059]/20">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>100% Medical-Sanitized Vanity</span>
              </div>
            </div>
          </div>

          {/* Aesthetic Graphic Card representing Studio Sanctuary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-[#FAF7F2] border border-[#C5A059]/30 overflow-hidden shadow-xl">
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop"
                  alt="Zash Luxury Bridal Vanity Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-serif text-lg tracking-[0.2em] uppercase text-white block">Zash Sanctuary Atelier</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Civil Lines, Aligarh, UP</span>
                </div>
              </div>
              
              <div className="p-6 space-y-5">
                <p className="text-xs text-neutral-600 leading-relaxed font-serif italic">
                  Equipped with calibrated 5500K daylight lighting rigs, medical-grade ultrasonic brush sanitizers, and a private bridal dressing suite designed for peace and pampered serenity.
                </p>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white p-3 border border-[#C5A059]/15">
                    <p className="font-serif text-2xl font-bold text-[#1A1A1A]">5500K</p>
                    <p className="text-[8px] uppercase tracking-widest text-neutral-400 mt-0.5">True-Color Lighting</p>
                  </div>
                  <div className="bg-white p-3 border border-[#C5A059]/15">
                    <p className="font-serif text-2xl font-bold text-[#1A1A1A]">100%</p>
                    <p className="text-[8px] uppercase tracking-widest text-neutral-400 mt-0.5">Hypoallergenic Kit</p>
                  </div>
                </div>

                <button
                  onClick={() => onBookService('Studio Consultation & Skin Trial')}
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-colors cursor-pointer text-center"
                >
                  Reserve Studio Consultation
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 4-STEP BRIDAL JOURNEY WITH IMAGES */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 border-b border-[#C5A059]/15 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-2">Process & Craft</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              The 4-Step Artistry Journey
            </h2>
            <p className="text-xs text-neutral-500 mt-3">Every bride experiences our meticulous, stress-free protocol designed for timeless photographs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="bg-white border border-[#C5A059]/20 overflow-hidden shadow-xs hover:border-[#C5A059] transition-all flex flex-col justify-between"
              >
                <div className="h-44 relative overflow-hidden bg-neutral-100">
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-[#C5A059] font-serif text-sm font-bold px-2.5 py-1 border border-[#C5A059]/30">
                    {step.num}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg italic font-bold text-[#1A1A1A] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans mt-2">
                      {step.desc}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Meticulous Standard</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE PRESTIGE KIT & INGREDIENT STANDARDS */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block">
                Zero Compromise Kit Quality
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
                Only World-Class Prestige Formulations
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-serif italic leading-relaxed">
                We believe your skin on your wedding day deserves the purest cosmetic grade products available worldwide. We strictly use 100% authentic, unexpired luxury formulations imported from Paris, New York, and Seoul.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {brands.map((brand, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF7F2] border border-[#C5A059]/20 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A]">{brand.name}</h4>
                      <p className="text-[9px] text-neutral-500 uppercase tracking-wider">{brand.role}</p>
                    </div>
                    <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Flatlay Presentation */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="h-72 sm:h-96 relative overflow-hidden border border-[#C5A059]/30 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
                  alt="Prestige Luxury Cosmetic Kit & Brushes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block mb-1">
                    Authenticity Guarantee
                  </span>
                  <h3 className="font-serif text-2xl italic font-light">Custom Hand-Bundled Hakuhodo Brushes</h3>
                  <p className="text-xs text-neutral-300 mt-1">Softest natural fibers that prevent micro-creasing and ensure seamless featherlight buffing.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. STERILIZATION & LIGHTING RIG SCIENCE */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#1A1A1A] text-white border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-neutral-900 border border-[#C5A059]/30 p-8 space-y-4">
            <Sun className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl italic">5500K Daylight Science</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              We apply makeup exclusively under CRI 95+ full-spectrum daylight rigs. This guarantees that your foundation will never look ashen or mismatched whether viewed under noon sun, stage spots, or flash photography.
            </p>
          </div>

          <div className="bg-neutral-900 border border-[#C5A059]/30 p-8 space-y-4">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl italic">Hospital-Grade Sanitation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Zero cross-contamination policy. Mascara wands, lip applicators, and sponge puffs are single-use disposable. Metal spatulas and mixing palettes are autoclaved between every client.
            </p>
          </div>

          <div className="bg-neutral-900 border border-[#C5A059]/30 p-8 space-y-4">
            <HeartHandshake className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl italic">The Serene Bridal Suite</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Your wedding morning should be peaceful. Our private bridal dressing lounge in Aligarh features herbal teas, aromatic diffusers, comfortable seating for your mother or bridesmaid, and private changing spaces.
            </p>
          </div>

        </div>
      </section>

      {/* 5. MEET ARTIST ZASH BANNER */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative border-4 border-[#FAF7F2] shadow-xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Lead Artist Zash"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-serif text-2xl italic block">Zash</span>
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">Founder & Creative Director</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block">
              Meet The Creative Mind
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              "Makeup is not a facade. It is the architectural illumination of who you are."
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-serif italic leading-relaxed">
              Trained rigorously at VLCC's premier beauty and wellness institute, Zash has dedicated years to mastering skin anatomy, colour physics, and high-longevity bridal styling. Having dolled over 300 brides across Uttar Pradesh, Delhi NCR, and destination resorts, her signature remains effortless, glowing elegance.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onBookService('Studio Consultation & Skin Trial')}
                className="px-8 py-3.5 bg-[#1A1A1A] text-white hover:bg-[#C5A059] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Schedule Private Consultation
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-3.5 border border-[#C5A059] text-[#1A1A1A] hover:bg-[#FAF7F2] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                View Curated Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
