/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Calendar as CalendarIcon, 
  History, 
  Menu, 
  X, 
  Sparkles, 
  GraduationCap, 
  Heart, 
  Phone, 
  Images, 
  Sliders, 
  Sparkle,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  bookingCount?: number;
  onBookAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  bookingCount = 0,
  onBookAppointment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'studio', label: 'The Studio', icon: <UserCheck className="w-3.5 h-3.5" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Images className="w-3.5 h-3.5" /> },
    { id: 'services', label: 'Services & Rates', icon: <Sliders className="w-3.5 h-3.5" /> },
    { id: 'academy', label: 'Academy', icon: <GraduationCap className="w-3.5 h-3.5" />, badge: 'VLCC Pro' },
    { id: 'reviews', label: 'Love Stories', icon: <Heart className="w-3.5 h-3.5" /> },
    { id: 'bookings', label: 'My Bookings', icon: <History className="w-3.5 h-3.5" />, badge: bookingCount > 0 ? `${bookingCount}` : undefined },
    { id: 'contact', label: 'Consultation', icon: <Phone className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* EXCLUSIVITY TOP BANNER */}
      <div id="exclusivity_banner" className="bg-[#1A1A1A] text-[#C5A059] py-2 px-4 text-center text-[10px] tracking-[0.3em] uppercase border-b border-[#C5A059]/20 flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
        <span>Now booking premium August brides & Autumn fashion editorial campaigns • limited dates</span>
      </div>

      {/* MAIN PRESTIGE HEADER */}
      <nav id="prestige_navigation" className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md z-40 border-b border-[#C5A059]/15 transition-all duration-300 shadow-xs">
        <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-6 lg:px-12">
          
          {/* Brand Logo with Serif and Luxury Tracking */}
          <div 
            id="nav_logo" 
            className="flex flex-col cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <span className="text-3xl font-serif tracking-[0.25em] font-light uppercase transition-all group-hover:text-[#C5A059]">
              Zash
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#C5A059] uppercase -mt-0.5 font-semibold">
              Makeup Artist & Academy
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div id="desktop_nav_links" className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav_link_${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 border-b-2 transition-all relative flex items-center gap-1.5 cursor-pointer ${
                    isActive 
                      ? 'border-[#C5A059] text-[#1A1A1A] font-semibold' 
                      : 'border-transparent text-neutral-600 hover:text-[#C5A059] hover:border-[#C5A059]/30'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-0.5 px-1.5 py-0.2 bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 text-[8px] tracking-normal rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Block */}
          <div id="nav_actions" className="flex items-center gap-3">
            {/* Quick My Bookings Link for Tablet/Desktop */}
            <button 
              id="my_bookings_quick_btn"
              onClick={() => handleNavClick('bookings')}
              className={`relative p-2.5 rounded-full border transition-all ${
                currentPage === 'bookings'
                  ? 'bg-[#C5A059] text-white border-transparent'
                  : 'border-[#C5A059]/25 bg-white/70 hover:bg-white text-[#C5A059] hover:scale-105'
              }`}
              title="View my appointment reservations"
            >
              <History className="w-4 h-4" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8C1D2F] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Book Appointment Main Button */}
            <button 
              id="book_appointment_btn_nav"
              onClick={onBookAppointment}
              className="hidden sm:inline-flex h-11 px-6 border border-[#C5A059] bg-white hover:bg-[#C5A059] hover:text-white text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer font-bold shadow-xs items-center justify-center"
            >
              Book Appointment
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile_menu_toggle_btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-neutral-700 hover:text-[#C5A059] border border-neutral-300 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile_nav_drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF7F2] border-b border-[#C5A059]/20 px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-1">
                  Explore Pages & Salons
                </span>
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-3 text-xs uppercase tracking-widest font-semibold border transition-all text-left ${
                        isActive
                          ? 'bg-[#1A1A1A] text-white border-transparent'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#C5A059]'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {item.icon}
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-[#C5A059] text-white text-[8px] rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAppointment();
                  }}
                  className="mt-2 w-full py-3.5 bg-[#C5A059] text-white text-[10px] uppercase tracking-[0.25em] font-bold text-center shadow-md hover:bg-[#A68041] cursor-pointer"
                >
                  Book Bespoke Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
