/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 
  | 'home' 
  | 'studio' 
  | 'portfolio' 
  | 'services' 
  | 'academy' 
  | 'reviews' 
  | 'bookings' 
  | 'contact';

export interface Service {
  id: string;
  name: string;
  category: 'Bridal' | 'Engagement' | 'Party' | 'Reception' | 'Editorial' | 'Hair' | 'Addon' | string;
  tier?: 'Basic' | 'HD' | 'Celebrity';
  price: number;
  duration: string;
  description: string;
  imageUrl?: string;
  features?: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Soft Glam' | 'Editorial' | 'Sagan' | 'Cocktail';
  description: string;
  imageUrl?: string;
  beforeImageUrl?: string;
  techniques: string[];
  priceEst: number;
  timeEst: string;
  primaryColor: string;
  secondaryColor: string;
  accentTone: string;
  story?: string;
  productsUsed?: string[];
}

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  date: string;
  time: string;
  service: string;
  locationType: 'Studio (Aligarh)' | 'Destination / Venue (On-location)';
  venueAddress?: string;
  totalCost: number;
  specialRequests?: string;
  bookingTime: string;
  status: 'Confirmed' | 'Pending Review' | 'Completed';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  category: 'Bridal' | 'Party' | 'Editorial' | 'Academy';
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  eventLocation?: string;
  avatarUrl?: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Masterclass & Pro';
  fee: number;
  schedule: string;
  description: string;
  imageUrl?: string;
  curriculum: string[];
  includedKit: string[];
  certification: string;
  seatsAvailable: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Booking' | 'Bridal' | 'Hygiene' | 'Academy';
}
