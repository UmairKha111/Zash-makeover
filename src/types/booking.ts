/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  location?: string;
  message?: string;
}

export interface FormValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  location?: string;
  message?: string;
}
