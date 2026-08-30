/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, AcademyCourse } from '../types';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Check, 
  ShieldCheck,
  Heart,
  Star,
  PackageCheck,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

interface AcademyPageProps {
  onNavigate: (page: PageId) => void;
  onBookService: (serviceName?: string) => void;
  courses: AcademyCourse[];
  onShowToast: (msg: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ 
  onNavigate, 
  onBookService,
  courses, 
  onShowToast 
}) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse>(courses[0]);
  const [enrollmentName, setEnrollmentName] = useState('');
  const [enrollmentPhone, setEnrollmentPhone] = useState('');
  const [enrollmentEmail, setEnrollmentEmail] = useState('');
  const [enrollmentBatch, setEnrollmentBatch] = useState('Next Month 1st Batch');
  const [enrolledSuccess, setEnrolledSuccess] = useState<string | null>(null);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentName.trim() || !enrollmentPhone.trim()) {
      if (onShowToast) onShowToast('Please provide your name and WhatsApp number.');
      return;
    }
    
    // Trigger WhatsApp directly for academy admission
    openWhatsApp({
      name: enrollmentName,
      phone: enrollmentPhone,
      email: enrollmentEmail,
      service: `Academy Admission: ${selectedCourse.title}`,
      message: `Batch preference: ${enrollmentBatch}`,
    });

    setEnrolledSuccess(selectedCourse.title);
    if (onShowToast) onShowToast(`Opening WhatsApp admissions for ${selectedCourse.title}!`);
  };

  const kitHighlights = [
    '32-Piece Master Hakuhodo Style Natural Fiber Brush Roll',
    'Full-Spectrum 24-Shade Cream Concealer & Contour Palette',
    '3x High-Coverage Waterproof HD Foundation Pigments',
    'Professional Stainless Steel Mixing Spatula & Ring Palette',
    'False Lash Application Tweezers & Duo Lash Adhesive',
    'Pro Setting Sprays & Ultra-Fine Finishing Powders'
  ];

  return (
    <div id="academy_page" className="flex flex-col bg-[#FAF7F2]">
      
      {/* 1. ACADEMY HERO BANNER WITH WORKSHOP PHOTOGRAPHY */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-[#1A1A1A] text-white border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Certified Professional Academy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light italic leading-tight">
              Master the Craft of <br />
              <span className="text-[#C5A059]">High-Artistry Makeup.</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 font-serif italic leading-relaxed">
              Step into a transformative learning experience led by Certified VLCC alumna Zash. From skin histology and undertone physics to running a 6-figure bridal studio.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] bg-neutral-900 px-4 py-2 border border-[#C5A059]/30">
                <Award className="w-4 h-4" />
                <span>VLCC-Aligned Curriculum</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] bg-neutral-900 px-4 py-2 border border-[#C5A059]/30">
                <Users className="w-4 h-4" />
                <span>Intimate Batch Size (Max 6 Students)</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-[#C5A059]/40 overflow-hidden shadow-2xl space-y-4 w-full lg:w-96 text-center">
            <div className="h-44 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
                alt="Academy vanity station training"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 bg-[#C5A059] text-black text-[8px] uppercase tracking-widest font-bold px-2 py-0.5">
                Aligarh Studio
              </span>
            </div>

            <div className="p-6 pt-0 space-y-4">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">Admissions Open</span>
              <h3 className="font-serif text-2xl italic text-white">Upcoming Batch Seats</h3>
              <p className="text-xs text-neutral-400">
                Only <span className="text-[#C5A059] font-bold">4 seats remaining</span> for the upcoming Pro Bridal Artistry Diploma.
              </p>
              <button
                type="button"
                onClick={() => onBookService(`Academy Admission: ${selectedCourse.title}`)}
                className="block w-full py-3.5 bg-[#C5A059] hover:bg-[#A68041] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Reserve Masterclass Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE SELECTOR TABS & DETAILED BREAKDOWN WITH IMAGERY */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold">Educational Programs</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Course Catalog & Syllabi
            </h2>
            <p className="text-xs text-neutral-500">Choose between full professional certification, advanced technique workshops, or personal self-glam.</p>
          </div>

          {/* Course Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map((course) => {
              const isSelected = selectedCourse.id === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white border-[#C5A059] shadow-xl scale-[1.01]'
                      : 'bg-[#FAF7F2] text-neutral-800 border-[#C5A059]/20 hover:border-[#C5A059]'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 ${isSelected ? 'bg-[#C5A059] text-black' : 'bg-white text-[#C5A059] border border-[#C5A059]/30'}`}>
                        {course.level}
                      </span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-[#C5A059]' : 'text-neutral-500'}`}>
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl italic font-bold mb-2">{course.title}</h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex justify-between items-center">
                    <span className="font-serif text-2xl font-bold text-[#C5A059]">₹{course.fee.toLocaleString('en-IN')}</span>
                    <span className={`text-[9px] uppercase tracking-widest font-bold ${isSelected ? 'text-[#C5A059]' : 'text-neutral-400'}`}>
                      {isSelected ? 'Viewing Syllabus →' : 'Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Course Detailed Syllabus Card */}
          <div className="bg-[#FAF7F2] border-2 border-[#C5A059]/30 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#C5A059]/20 pb-6">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">Detailed Syllabus</span>
                <h3 className="font-serif text-2xl sm:text-3xl italic font-bold text-[#1A1A1A]">{selectedCourse.title}</h3>
                <p className="text-xs text-neutral-600 mt-1">{selectedCourse.schedule} • {selectedCourse.certification}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 block">Total Tuition</span>
                  <span className="font-serif text-3xl font-bold text-[#C5A059]">₹{selectedCourse.fee.toLocaleString('en-IN')}</span>
                </div>
                <button
                  onClick={() => onBookService(`Academy Admission: ${selectedCourse.title}`)}
                  className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
                >
                  ENQUIRE / BOOK
                </button>
              </div>
            </div>

            {/* Curriculum Checklist */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Curriculum Modules</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(selectedCourse.curriculum || []).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 border border-[#C5A059]/20">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-700 leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Starter Pro Kit */}
            <div className="space-y-4 pt-4 border-t border-[#C5A059]/20">
              <div className="flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#C5A059]" />
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Included Pro Kit ({selectedCourse.includedKit?.length || 0} Assets)</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(selectedCourse.includedKit || []).map((item, idx) => (
                  <div key={idx} className="bg-white p-3 border border-neutral-200 text-xs text-neutral-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ENROLLMENT & WHATSAPP ADMISSION DESK */}
      <section id="enrollment_section" className="py-16 sm:py-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto bg-white border-2 border-[#C5A059]/30 p-6 sm:p-10 lg:p-12 shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Registration Desk</span>
            <h3 className="font-serif text-2xl sm:text-3xl italic text-[#1A1A1A]">Reserve Your Academy Seat</h3>
            <p className="text-xs text-neutral-500">
              Fill out the details below to open a direct WhatsApp chat with our academic admissions counselor.
            </p>
          </div>

          {enrolledSuccess ? (
            <div className="text-center py-8 space-y-4 bg-[#FAF7F2] border border-[#C5A059]/30 p-6">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl italic font-bold text-[#1A1A1A]">WhatsApp Admissions Dispatched</h4>
              <p className="text-xs text-neutral-600">
                Inquiry formatted for <span className="font-bold text-[#1A1A1A]">{enrolledSuccess}</span>. Our team will assist with syllabus and seat confirmation.
              </p>
              <button
                onClick={() => setEnrolledSuccess(null)}
                className="px-6 py-2.5 bg-[#1A1A1A] text-white text-[9px] uppercase tracking-widest font-bold hover:bg-[#C5A059] cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={enrollmentName}
                    onChange={(e) => setEnrollmentName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={enrollmentPhone}
                    onChange={(e) => setEnrollmentPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Email Address</label>
                  <input
                    type="email"
                    value={enrollmentEmail}
                    onChange={(e) => setEnrollmentEmail(e.target.value)}
                    placeholder="ananya@example.com"
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Desired Course Program</label>
                  <select
                    value={selectedCourse.id}
                    onChange={(e) => {
                      const c = courses.find(item => item.id === e.target.value);
                      if (c) setSelectedCourse(c);
                    }}
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>{c.title} (${c.fee})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Preferred Batch Intake</label>
                <select
                  value={enrollmentBatch}
                  onChange={(e) => setEnrollmentBatch(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#C5A059]/25 p-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                >
                  <option>Next Month 1st Batch - 4 Seats Remaining</option>
                  <option>Weekend Intensive Batch - 2 Seats Remaining</option>
                  <option>Next Quarter Advance Batch</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
