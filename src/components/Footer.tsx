/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Award, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onBookAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookAppointment }) => {
  return (
    <footer id="luxury_footer" className="bg-[#1A1A1A] text-white border-t border-[#C5A059]/20 pt-16 pb-12 z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif tracking-[0.25em] font-light uppercase text-white">Zash</span>
              <span className="text-[9px] tracking-[0.45em] text-[#C5A059] uppercase -mt-0.5 font-semibold">
                Makeup Artist & Academy
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-serif italic leading-relaxed pt-2">
              "The craft of prestige beauty is an architectural celebration of natural luminescence. Certified VLCC alumna creating unforgettable memories."
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold pt-1">
              <Award className="w-3.5 h-3.5" />
              <span>Certified VLCC Professional</span>
            </div>
          </div>

          {/* Col 2: Site Pages Directory */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Explore Collections</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Home & Studio Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  The Studio & Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Curated Portrait Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Services & Pricing Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Academy Masterclasses</span>
                  <span className="text-[8px] bg-[#C5A059] text-black px-1.5 py-0.2 rounded-full font-bold">New</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Love Stories & Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-[#C5A059] font-bold"
                >
                  WhatsApp Booking & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Details & Location */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Studio & Consultations</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: {siteConfig.contact.displayPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onBookAppointment}
                  className="px-4 py-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black text-[9px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: WhatsApp Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Direct WhatsApp Desk</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have questions regarding bridal dates, vanity trials, or masterclasses? Message our lead artist directly.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent(`Hello ${siteConfig.brand.name}, I am interested in inquiring about your bridal makeup packages.`);
                window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`, '_blank');
              }}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[9px] uppercase tracking-[0.25em] py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-light">
          <div className="flex items-center gap-6">
            <span>Aligarh, UP</span>
            <span>•</span>
            <span>Certified VLCC Artist</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} {siteConfig.brand.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#C5A059]">Direct VIP Booking via WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
