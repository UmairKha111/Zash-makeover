/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId, Booking } from '../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle, 
  Trash2, 
  Download, 
  Phone, 
  Plus, 
  FileText, 
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

interface BookingsPageProps {
  onNavigate: (page: PageId) => void;
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
  onBookService: (serviceName?: string) => void;
  onShowToast: (msg: string) => void;
}

export const BookingsPage: React.FC<BookingsPageProps> = ({
  onNavigate,
  bookings,
  onCancelBooking,
  onBookService,
  onShowToast,
}) => {
  const handleExportCalendar = (b: Booking) => {
    // Generate simple .ics calendar file
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:Zash Makeup Artistry Session - ${b.service}`,
      `DESCRIPTION:Appointment for ${b.clientName}. Location: ${b.venueAddress || b.locationType}. Total: ₹${b.totalCost}`,
      `LOCATION:${b.venueAddress || b.locationType}`,
      `DTSTART:${b.date.replace(/-/g, '')}T110000Z`,
      `DTEND:${b.date.replace(/-/g, '')}T130000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Zash_Appointment_${b.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast(`Calendar event (.ics) downloaded for ${b.service}!`);
  };

  return (
    <div id="bookings_page" className="flex flex-col bg-[#FAF7F2] min-h-[calc(100vh-120px)]">
      
      {/* 1. BOOKINGS HEADER */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A059] font-bold block mb-2">
              WhatsApp Concierge & Itinerary
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-light italic leading-tight text-[#1A1A1A]">
              My Reservations & Inquiries
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-serif italic max-w-xl mt-3">
              Direct WhatsApp-first bookings. You can submit custom inquiries, add reminders to your digital calendar, or contact our lead artist directly.
            </p>
          </div>

          <button
            onClick={() => onBookService()}
            className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#A68041] text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer flex items-center gap-2 self-start md:self-auto shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Book New Appointment</span>
          </button>
        </div>
      </section>

      {/* 2. BOOKINGS LIST OR EMPTY STATE */}
      <section className="py-16 px-6 lg:px-12 flex-1">
        <div className="max-w-5xl mx-auto">
          
          {bookings.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-[#C5A059]/30 p-12 text-center space-y-6 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl italic text-[#1A1A1A]">Direct WhatsApp Booking Desk</h3>
                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                  Every booking request is routed directly to WhatsApp for real-time date verification, bespoke consultation, and VIP confirmation.
                </p>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 border border-[#C5A059] text-[#1A1A1A] hover:bg-[#FAF7F2] text-[10px] uppercase tracking-widest font-bold transition-colors cursor-pointer"
                >
                  Explore Services & Rates
                </button>
                <button
                  onClick={() => onBookService()}
                  className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#C5A059] text-[10px] uppercase tracking-widest font-bold transition-colors cursor-pointer"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  Active Reservations ({bookings.length})
                </span>
                <span className="text-xs text-green-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  WhatsApp Confirmed
                </span>
              </div>

              <div className="space-y-6">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white border-2 border-[#C5A059]/30 p-8 shadow-md flex flex-col md:flex-row justify-between gap-8 hover:border-[#C5A059] transition-all"
                  >
                    {/* Left: Booking Details */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold px-3 py-1 bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                          Ref: #{b.id}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-bold text-green-700 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {b.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl italic font-bold text-[#1A1A1A]">{b.service}</h3>
                        <p className="text-xs text-neutral-600 mt-1 font-semibold">Client: {b.clientName} ({b.clientPhone})</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#C5A059]" />
                          <span>Date: {b.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#C5A059]" />
                          <span>Slot: {b.timeSlot}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#C5A059]" />
                          <span>Location: {b.locationType}</span>
                        </div>
                        {b.venueAddress && (
                          <div className="text-xs italic text-neutral-500 col-span-full">
                            Venue: {b.venueAddress}
                          </div>
                        )}
                      </div>

                      {b.customNotes && (
                        <p className="text-xs text-neutral-500 bg-[#FAF7F2] p-3 border border-[#C5A059]/20 italic">
                          "{b.customNotes}"
                        </p>
                      )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col justify-between items-end gap-4 border-t md:border-t-0 md:border-l border-neutral-200 md:pl-8 pt-4 md:pt-0">
                      <div className="text-right">
                        <span className="text-[9px] uppercase tracking-widest text-neutral-400 block">Estimated Fee</span>
                        <span className="font-serif text-3xl font-bold text-[#C5A059]">₹{b.totalCost.toLocaleString('en-IN')}</span>
                      </div>

                      <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => handleExportCalendar(b)}
                          className="px-4 py-2 border border-neutral-300 hover:border-[#C5A059] text-neutral-700 hover:text-[#C5A059] text-[9px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download .ICS</span>
                        </button>
                        <button
                          onClick={() => {
                            const msg = encodeURIComponent(`Hello Zash, I am following up on booking #${b.id} for ${b.service} on ${b.date}.`);
                            window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`, '_blank');
                          }}
                          className="px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[9px] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Update</span>
                        </button>
                        <button
                          onClick={() => onCancelBooking(b.id)}
                          className="px-4 py-1.5 text-red-600 hover:text-red-800 text-[8px] uppercase tracking-widest font-bold text-center cursor-pointer"
                        >
                          Remove Log
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
