/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookingFormData } from '../types/booking';
import { siteConfig } from '../config/siteConfig';

/**
 * Formats a clean, professional WhatsApp message from form values.
 */
export function generateWhatsAppMessage(formData: BookingFormData): string {
  const parts: string[] = [
    `Hello ${siteConfig.brand.name},`,
    '',
    'I would like to book/enquire about your services.',
    '',
    `Name: ${formData.name.trim()}`,
    `Phone: ${formData.phone.trim()}`,
  ];

  if (formData.email && formData.email.trim()) {
    parts.push(`Email: ${formData.email.trim()}`);
  }

  parts.push('');
  parts.push(`Selected Service: ${formData.service || 'General Bridal / Makeup Enquiry'}`);

  if (formData.preferredDate && formData.preferredDate.trim()) {
    parts.push(`Preferred Date: ${formData.preferredDate.trim()}`);
  }

  if (formData.preferredTime && formData.preferredTime.trim()) {
    parts.push(`Preferred Time: ${formData.preferredTime.trim()}`);
  }

  if (formData.location && formData.location.trim()) {
    parts.push(`Location: ${formData.location.trim()}`);
  }

  if (formData.message && formData.message.trim()) {
    parts.push('');
    parts.push('Additional Requirements:');
    parts.push(formData.message.trim());
  }

  parts.push('');
  parts.push('Thank you.');

  return parts.join('\n');
}

/**
 * Constructs the standard WhatsApp click-to-chat URL with full URL encoding.
 */
export function createWhatsAppUrl(formData: BookingFormData, customNumber?: string): string {
  const targetNumber = (customNumber || siteConfig.contact.whatsapp).replace(/[^0-9]/g, '');
  const rawMessage = generateWhatsAppMessage(formData);
  const encodedText = encodeURIComponent(rawMessage);
  return `https://wa.me/${targetNumber}?text=${encodedText}`;
}

/**
 * Safe client-side opener for WhatsApp across mobile & desktop browsers.
 */
export function openWhatsApp(formData: BookingFormData, customNumber?: string): void {
  const url = createWhatsAppUrl(formData, customNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
