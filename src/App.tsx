/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Booking, Review, PortfolioItem, Service } from './types';
import { 
  SERVICES_DATA, 
  PORTFOLIO_ITEMS, 
  ACADEMY_COURSES, 
  INITIAL_REVIEWS, 
  FAQ_DATA 
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PortfolioModal } from './components/PortfolioModal';
import { HomePage } from './pages/HomePage';
import { StudioPage } from './pages/StudioPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { AcademyPage } from './pages/AcademyPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BookingsPage } from './pages/BookingsPage';
import { ContactPage } from './pages/ContactPage';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function App() {
  // Navigation & Page State with URL Hash Synchronizer
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Bookings with LocalStorage
  const [myBookings, setMyBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('zash_mua_bookings_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'ZASH-7842',
        clientName: 'Pooja Agarwal',
        clientPhone: '+91 98765 43210',
        date: '2026-08-24',
        timeSlot: '02:30 PM',
        service: 'Bridal Makeup (HD)',
        locationType: 'Destination / Venue (On-location)',
        venueAddress: 'Noor Manzil Grand Lawn, Aligarh',
        totalCost: 15000,
        customNotes: 'Warm gold jewelry pairing, royal crimson velvet dupatta drape.',
        status: 'WhatsApp Confirmed'
      }
    ];
  });

  // Reviews with LocalStorage
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('zash_mua_reviews_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_REVIEWS;
  });

  // Active Portfolio Inspection Modal
  const [activePortfolioItem, setActivePortfolioItem] = useState<PortfolioItem | null>(null);

  // Toast Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // URL Hash Sync for True Multi-Page Navigation & Browser Back/Forward Support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = ['home', 'studio', 'portfolio', 'services', 'academy', 'reviews', 'bookings', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToPage = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Centralized WhatsApp-First Booking Dispatcher
  const handleBookService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    navigateToPage('contact');
  };

  const handleCancelBooking = (bookingId: string) => {
    if (confirm('Are you sure you want to cancel this appointment reservation?')) {
      const updated = myBookings.filter(b => b.id !== bookingId);
      setMyBookings(updated);
      try {
        localStorage.setItem('zash_mua_bookings_v2', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      showToast('Appointment record removed.');
    }
  };

  const handleAddReview = (newReview: Review) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('zash_mua_reviews_v2', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A] font-sans antialiased flex flex-col selection:bg-[#C5A059] selection:text-white">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 right-6 z-50 bg-[#1A1A1A] text-white px-5 py-3.5 border border-[#C5A059] shadow-2xl flex items-center gap-3 text-xs max-w-sm"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span className="font-serif italic text-neutral-200">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateToPage}
        bookingCount={myBookings.length}
        onBookAppointment={() => handleBookService()}
      />

      {/* Main Multi-page Dynamic Router Body */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage
                onNavigate={navigateToPage}
                onBookService={handleBookService}
                onOpenPortfolioModal={(item) => setActivePortfolioItem(item)}
                portfolioItems={PORTFOLIO_ITEMS}
                services={SERVICES_DATA}
                reviews={reviews}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'studio' && (
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <StudioPage
                onNavigate={navigateToPage}
                onBookService={handleBookService}
              />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage
                onNavigate={navigateToPage}
                onBookService={handleBookService}
                onOpenPortfolioModal={(item) => setActivePortfolioItem(item)}
                portfolioItems={PORTFOLIO_ITEMS}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesPage
                onNavigate={navigateToPage}
                onBookService={handleBookService}
                services={SERVICES_DATA}
                faqs={FAQ_DATA}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'academy' && (
            <motion.div
              key="academy"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <AcademyPage
                onNavigate={navigateToPage}
                onBookService={handleBookService}
                courses={ACADEMY_COURSES}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ReviewsPage
                onNavigate={navigateToPage}
                reviews={reviews}
                onAddReview={handleAddReview}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'bookings' && (
            <motion.div
              key="bookings"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <BookingsPage
                onNavigate={navigateToPage}
                bookings={myBookings}
                onCancelBooking={handleCancelBooking}
                onBookService={handleBookService}
                onShowToast={showToast}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage
                onNavigate={navigateToPage}
                selectedService={selectedService}
                onClearSelectedService={() => setSelectedService(undefined)}
                onShowToast={showToast}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateToPage}
        onBookAppointment={() => handleBookService()}
      />

      {/* Portfolio Item Deep Inspection Modal */}
      <PortfolioModal
        item={activePortfolioItem}
        onClose={() => setActivePortfolioItem(null)}
        onBookLook={(item) => {
          setActivePortfolioItem(null);
          handleBookService(item.title);
        }}
      />

    </div>
  );
}

export default App;
