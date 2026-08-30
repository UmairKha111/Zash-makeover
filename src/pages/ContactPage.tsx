/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BookingFormData, FormValidationErrors } from '../types/booking';
import { siteConfig } from '../config/siteConfig';
import { openWhatsApp, createWhatsAppUrl } from '../utils/whatsapp';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Calendar, 
  User, 
  Tag, 
  X, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  selectedService?: string;
  onClearSelectedService?: () => void;
  onShowToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  selectedService,
  onClearSelectedService,
  onShowToast,
}) => {
  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    service: selectedService || siteConfig.servicesList[0] || 'Luxury HD Bridal Signature Suite',
    preferredDate: '',
    preferredTime: '11:00 AM',
    location: 'Studio Atelier (Aligarh)',
    message: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Sync selectedService prop when passed
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
      // Scroll to form smoothly
      const formEl = document.getElementById('central_booking_form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService]);

  const validateForm = (): boolean => {
    const newErrors: FormValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp phone number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.service || !formData.service.trim()) {
      newErrors.service = 'Please select a service or course.';
    }

    if (!formData.preferredDate || !formData.preferredDate.trim()) {
      newErrors.preferredDate = 'Please select your preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      if (onShowToast) onShowToast('Please review the required fields highlighted below.');
      return;
    }

    // Capture submitted state for success view
    setSubmittedData({ ...formData });

    // Open WhatsApp with all structured details
    openWhatsApp(formData);

    if (onShowToast) {
      onShowToast(`Opening WhatsApp enquiry for ${formData.service}...`);
    }
  };

  const handleReopenWhatsApp = () => {
    if (submittedData) {
      openWhatsApp(submittedData);
    } else {
      openWhatsApp(formData);
    }
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: siteConfig.servicesList[0] || 'Luxury HD Bridal Signature Suite',
      preferredDate: '',
      preferredTime: '11:00 AM',
      location: 'Studio Atelier (Aligarh)',
      message: '',
    });
    setErrors({});
    if (onClearSelectedService) onClearSelectedService();
  };

  return (
    <div id="contact_page" className="flex flex-col bg-[#FAF7F2] min-h-[calc(100vh-120px)]">
      
      {/* 1. CONTACT & BOOKING HERO BANNER */}
      <section className="py-16 sm:py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-2">
              VIP Concierge & Atelier Desk
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              Book & Enquire on WhatsApp
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-serif italic max-w-2xl mt-3">
              Direct booking and personalized consultations handled seamlessly. Fill your preferred dates and requirements below to instantly start your booking conversation with our master vanity desk.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-4 border border-[#C5A059]/25 flex items-center gap-3 self-start md:self-auto">
            <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">WhatsApp-First Concierge</span>
              <span className="text-xs text-neutral-700 font-medium">Direct connection to Lead Artist</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CENTRAL BOOKING FORM & STUDIO INFO GRID */}
      <section className="py-12 sm:py-16 px-6 lg:px-12 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: REUSABLE CENTRAL BOOKING / CONTACT FORM (7 Cols) */}
          <div id="central_booking_form" className="lg:col-span-7 bg-white border-2 border-[#C5A059]/30 p-6 sm:p-10 lg:p-12 shadow-xl">
            
            {/* Contextual Service Selection Indicator if arriving from BOOK button */}
            {formData.service && (
              <div className="mb-6 p-4 bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">You're enquiring about</span>
                    <span className="text-sm font-serif italic font-bold text-[#1A1A1A]">{formData.service}</span>
                  </div>
                </div>
                {onClearSelectedService && (
                  <button
                    type="button"
                    onClick={() => {
                      onClearSelectedService();
                      setFormData(prev => ({ ...prev, service: siteConfig.servicesList[0] }));
                    }}
                    className="text-[9px] uppercase tracking-wider text-neutral-400 hover:text-[#1A1A1A] underline cursor-pointer"
                  >
                    Change
                  </button>
                )}
              </div>
            )}

            {submittedData ? (
              /* SUCCESS / WHATSAPP DISPATCH STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto border-2 border-[#25D366]">
                  <MessageCircle className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">Enquiry Transmitted</span>
                  <h3 className="font-serif text-2xl sm:text-3xl italic text-[#1A1A1A]">Your enquiry is opening in WhatsApp</h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A1A1A]">{submittedData.name}</strong>. Your custom enquiry details for <strong className="text-[#1A1A1A]">{submittedData.service}</strong> have been formatted. Our concierge will review your dates and manually confirm your booking over WhatsApp.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#FAF7F2] border border-[#C5A059]/25 p-5 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase text-[9px] tracking-wider font-semibold">Service</span>
                    <span className="font-bold text-[#1A1A1A]">{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase text-[9px] tracking-wider font-semibold">Preferred Date & Time</span>
                    <span className="font-medium text-[#1A1A1A]">{submittedData.preferredDate} at {submittedData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase text-[9px] tracking-wider font-semibold">Phone (WhatsApp)</span>
                    <span className="font-medium text-[#1A1A1A]">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase text-[9px] tracking-wider font-semibold">Location</span>
                    <span className="font-medium text-[#1A1A1A]">{submittedData.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <button
                    onClick={handleReopenWhatsApp}
                    className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Re-open WhatsApp Chat</span>
                  </button>
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-3.5 border border-[#C5A059] text-[#1A1A1A] hover:bg-[#FAF7F2] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              /* THE REUSABLE BOOKING / ENQUIRY FORM */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">Direct Reservation Form</span>
                  <h2 className="font-serif text-2xl sm:text-3xl italic text-[#1A1A1A]">Personalize Your Artistry Booking</h2>
                  <p className="text-xs text-neutral-500">All enquiries generate a direct WhatsApp message to guarantee rapid responses.</p>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full bg-[#FAF7F2] border p-3 text-xs text-[#1A1A1A] transition-colors focus:outline-none ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#C5A059]/30 focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      WhatsApp Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-[#FAF7F2] border p-3 text-xs text-[#1A1A1A] transition-colors focus:outline-none ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#C5A059]/30 focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address & Selected Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="priya@example.com"
                      className={`w-full bg-[#FAF7F2] border p-3 text-xs text-[#1A1A1A] transition-colors focus:outline-none ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#C5A059]/30 focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      Selected Service / Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/30 p-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    >
                      {siteConfig.servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                      <option value="Other Bespoke Artistry / Multiple Services">
                        Other Bespoke Artistry / Multiple Services
                      </option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate || ''}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                      }}
                      className={`w-full bg-[#FAF7F2] border p-3 text-xs text-[#1A1A1A] transition-colors focus:outline-none ${
                        errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-[#C5A059]/30 focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/30 p-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Morning (08:00 AM – 11:00 AM)">Morning (08:00 AM – 11:00 AM)</option>
                      <option value="Midday (11:00 AM – 02:00 PM)">Midday (11:00 AM – 02:00 PM)</option>
                      <option value="Afternoon (02:00 PM – 05:00 PM)">Afternoon (02:00 PM – 05:00 PM)</option>
                      <option value="Evening / Muhurat (05:00 PM – 09:00 PM)">Evening / Muhurat (05:00 PM – 09:00 PM)</option>
                      <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                    </select>
                  </div>
                </div>

                {/* Location / Event Venue */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                    Event Location / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Studio (Aligarh) OR Noor Manzil Grand Lawn / Delhi NCR"
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/30 p-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Additional Requirements / Message */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block mb-1">
                    Additional Requirements / Vision Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your outfit palette, jewelry style, number of people needing hair/makeup, or specific preferences..."
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/30 p-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                  ></textarea>
                </div>

                {/* Actions */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Proceed & Open in WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-2">
                    Submitting this form launches your pre-filled inquiry directly on WhatsApp. No payment or account required.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: STUDIO CONTACT DETAILS & REASSURANCE (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Quick Contact Card */}
            <div className="bg-[#1A1A1A] text-white p-8 border border-[#C5A059]/40 shadow-xl space-y-5">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
                Direct WhatsApp Concierge
              </span>
              <h3 className="font-serif text-2xl italic">Instant Studio Access</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Prefer to message us directly without filling the form? Click below to start an open WhatsApp conversation with our booking manager.
              </p>
              
              <button
                type="button"
                onClick={() => {
                  const defaultMsg = encodeURIComponent(`Hello ${siteConfig.brand.name}, I would like to inquire about booking a makeup appointment or academy course.`);
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${defaultMsg}`, '_blank');
                }}
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Direct on WhatsApp</span>
              </button>
            </div>

            {/* Studio Address & Schedule */}
            <div className="bg-white border border-[#C5A059]/25 p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif text-xl italic font-bold text-[#1A1A1A]">Studio Location & Hours</h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-600 leading-relaxed">
                <p>
                  <strong className="text-[#1A1A1A] block mb-0.5">Primary Sanctuary Atelier:</strong>
                  {siteConfig.contact.location}
                </p>
                <p>
                  <strong className="text-[#1A1A1A] block mb-0.5">Operating Hours:</strong>
                  {siteConfig.contact.operatingHours}
                </p>
                <p>
                  <strong className="text-[#1A1A1A] block mb-0.5">Destination Bookings:</strong>
                  Available for travel across Delhi NCR, Jaipur, Agra, Lucknow, Goa, Udaipur, and international resorts worldwide.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2 text-xs font-semibold text-neutral-700">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{siteConfig.contact.displayPhone}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>{siteConfig.contact.email}</span>
                </span>
              </div>
            </div>

            {/* Serenity Guarantee Card */}
            <div className="bg-[#FAF7F2] p-6 border border-[#C5A059]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                <ShieldCheck className="w-4 h-4" />
                <span>Date Exclusivity Guarantee</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-serif italic">
                "We accept only one bridal party per slot to ensure undivided artistry attention. Once your date is mutually confirmed via WhatsApp, it is exclusively yours."
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
