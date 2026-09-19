/**
 * Strict validation utilities for forms
 * Validates 11-digit phone numbers and standard RFC email addresses
 */

/**
 * Validates that the phone number contains exactly 11 digits.
 * Accepts standard 11 digits (e.g., 01712345678, 01712-345678) 
 * or 13 digits when prefixed with Bangladesh country code 88 / +88 (e.g., +8801712345678).
 * Rejects any non-numeric alphabets or invalid length.
 */
export function isValid11DigitPhone(phone: string): boolean {
  if (!phone) return false;
  const trimmed = phone.trim();
  
  // Rejects letters or non-phone symbols
  if (/[a-zA-Z]/.test(trimmed)) return false;

  const digitsOnly = trimmed.replace(/\D/g, '');
  
  // Exactly 11 digits
  if (digitsOnly.length === 11) {
    return true;
  }
  
  // Country code 88 + 11 digits
  if (digitsOnly.length === 13 && digitsOnly.startsWith('88')) {
    return true;
  }

  return false;
}

/**
 * Validates standard RFC-compliant email addresses (e.g., user@domain.com)
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(trimmed);
}
