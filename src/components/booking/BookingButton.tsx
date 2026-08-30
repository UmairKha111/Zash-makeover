/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BookingButtonProps {
  serviceName?: string;
  onBook: (serviceName?: string) => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark' | 'card';
  children?: React.ReactNode;
  id?: string;
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  serviceName,
  onBook,
  className = '',
  variant = 'primary',
  children,
  id,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onBook(serviceName);
  };

  let baseStyles = 'inline-flex items-center justify-center font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer select-none';

  if (variant === 'primary') {
    baseStyles += ' px-6 py-3 bg-[#C5A059] hover:bg-[#A68041] text-white shadow-xs hover:shadow-md';
  } else if (variant === 'outline') {
    baseStyles += ' px-6 py-3 border border-[#C5A059] text-[#1A1A1A] hover:bg-[#C5A059] hover:text-white bg-white';
  } else if (variant === 'dark') {
    baseStyles += ' px-6 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white';
  } else if (variant === 'card') {
    baseStyles += ' px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white text-[9px] uppercase tracking-widest';
  }

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${className}`}
    >
      {children || 'BOOK'}
    </button>
  );
};
