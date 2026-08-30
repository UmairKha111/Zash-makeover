/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, Review } from '../types';
import { 
  Heart, 
  Star, 
  CheckCircle, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  Send, 
  Award,
  Filter,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
  reviews: Review[];
  onAddReview: (review: Review) => void;
  onShowToast: (msg: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onNavigate,
  reviews,
  onAddReview,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [authorCategory, setAuthorCategory] = useState<'Bridal' | 'Party' | 'Editorial' | 'Academy'>('Bridal');
  const [authorRating, setAuthorRating] = useState(5);
  const [authorLocation, setAuthorLocation] = useState('');
  const [authorText, setAuthorText] = useState('');

  const categories = ['All', 'Bridal', 'Party', 'Editorial', 'Academy'];

  const filteredReviews = reviews.filter(r => {
    if (selectedCategory === 'All') return true;
    return r.category === selectedCategory;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !authorText) {
      alert('Please fill out your name and review details.');
      return;
    }

    const newReview: Review = {
      id: 'rev-' + Date.now(),
      name: authorName,
      role: authorRole || `${authorCategory} Client`,
      category: authorCategory,
      rating: authorRating,
      date: new Date().toISOString().split('T')[0],
      text: authorText,
      verified: true,
      eventLocation: authorLocation || 'Studio Client',
      avatarUrl: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?q=80&w=200&auto=format&fit=crop`
    };

    onAddReview(newReview);
    onShowToast('Thank you for sharing your experience! Your review is now published.');
    setShowReviewForm(false);
    setAuthorName('');
    setAuthorRole('');
    setAuthorLocation('');
    setAuthorText('');
  };

  return (
    <div id="reviews_page" className="flex flex-col bg-[#FAF7F2]">
      
      {/* 1. REVIEWS HERO BANNER */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-2">
              Enduring Love & Gratitude
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Love Stories & Reviews
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-serif italic max-w-xl mt-3">
              Read genuine accounts from real brides, fashion stylists, and academy graduates whose moments we've had the honor to touch.
            </p>
          </div>

          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>{showReviewForm ? 'Close Review Form' : 'Share Your Story'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS STATS RIBBON */}
      <section className="py-8 px-6 lg:px-12 bg-[#FAF7F2] border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-4 border border-[#C5A059]/15 shadow-2xs">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">5.0 ★</p>
            <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Average Rating</p>
          </div>
          <div className="bg-white p-4 border border-[#C5A059]/15 shadow-2xs">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">300+</p>
            <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Verified Brides</p>
          </div>
          <div className="bg-white p-4 border border-[#C5A059]/15 shadow-2xs">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">100%</p>
            <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Photo Longevity</p>
          </div>
          <div className="bg-white p-4 border border-[#C5A059]/15 shadow-2xs">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">50+</p>
            <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">MUA Graduates</p>
          </div>
        </div>
      </section>

      {/* 3. SUBMIT REVIEW FORM (TOGGLED) */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="py-12 px-6 lg:px-12 bg-white border-b border-[#C5A059]/20 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto bg-[#FAF7F2] border-2 border-[#C5A059]/30 p-6 sm:p-10 shadow-xl space-y-6">
              <div className="text-center space-y-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Community Voice</span>
                <h3 className="font-serif text-2xl italic text-[#1A1A1A]">Share Your Experience with Zash</h3>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Sanya Kapoor"
                      className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Role / Tagline</label>
                    <input
                      type="text"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      placeholder="e.g. Royal Bridal Bride"
                      className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Category</label>
                    <select
                      value={authorCategory}
                      onChange={(e) => setAuthorCategory(e.target.value as any)}
                      className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Bridal">Bridal</option>
                      <option value="Party">Party</option>
                      <option value="Editorial">Editorial</option>
                      <option value="Academy">Academy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Event City / Venue</label>
                    <input
                      type="text"
                      value={authorLocation}
                      onChange={(e) => setAuthorLocation(e.target.value)}
                      placeholder="e.g. Aligarh / Delhi NCR"
                      className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Rating</label>
                    <select
                      value={authorRating}
                      onChange={(e) => setAuthorRating(Number(e.target.value))}
                      className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value={5}>5 Stars ★★★★★</option>
                      <option value={4}>4 Stars ★★★★☆</option>
                      <option value={3}>3 Stars ★★★☆☆</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Your Story & Feedback *</label>
                  <textarea
                    required
                    rows={4}
                    value={authorText}
                    onChange={(e) => setAuthorText(e.target.value)}
                    placeholder="Describe how your makeup held up, comfort level, and comments from guests..."
                    className="w-full bg-white border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C5A059] hover:bg-[#A68041] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
                  >
                    Publish My Verified Review
                  </button>
                </div>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. FILTER TABS & REVIEWS GRID */}
      <section className="py-12 sm:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-white border-transparent'
                    : 'bg-white text-neutral-600 border-[#C5A059]/20 hover:border-[#C5A059]'
                }`}
              >
                {cat} Reviews
              </button>
            ))}
          </div>

          {/* Reviews Grid with Client Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white p-6 sm:p-8 border border-[#C5A059]/20 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#C5A059] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                      ))}
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-[#C5A059] font-bold px-2 py-0.5 bg-[#C5A059]/10">
                      Verified Client
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 font-serif italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {rev.avatarUrl ? (
                      <img
                        src={rev.avatarUrl}
                        alt={rev.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#C5A059]/30 shrink-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center font-serif font-bold text-[#C5A059] shrink-0">
                        {rev.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A]">{rev.name}</h4>
                      <p className="text-[9px] text-neutral-400 uppercase tracking-wider">{rev.role}</p>
                      {rev.eventLocation && (
                        <p className="text-[8px] text-[#C5A059] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{rev.eventLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="text-[8px] text-neutral-400 uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BRIDAL INQUIRY CTA */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-[#C5A059]/15">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">Write Your Own Chapter</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light italic leading-tight text-[#1A1A1A]">
            Ready to Begin Your Bridal Transformation?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-serif italic max-w-xl mx-auto">
            Book your event date early to guarantee artist exclusivity for your auspicious day.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#A68041] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Contact Studio Concierge
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
