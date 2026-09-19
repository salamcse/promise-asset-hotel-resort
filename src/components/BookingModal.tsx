'use client';
import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles, 
  MessageCircle,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, Currency } from '../types';
import { isValid11DigitPhone, isValidEmail } from '../utils/validators';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency?: Currency;
  initialPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const isEn = language === 'en';

  // Information collection state (Pure contact info collection)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityCountry: '',
    preferredContact: 'WhatsApp',
    notes: ''
  });

  const [errors, setErrors] = useState<{ phone?: string; email?: string; general?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, spaces, hyphens, and plus sign
    const val = e.target.value.replace(/[^0-9+ -]/g, '');
    setFormData(prev => ({ ...prev, phone: val }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmitInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { phone?: string; email?: string; general?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.general = isEn ? 'Please provide your Full Legal Name.' : 'অনুগ্রহ করে আপনার নাম প্রদান করুন।';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = isEn 
        ? 'Please enter an 11-digit phone number.' 
        : 'অনুগ্রহ করে ১১ ডিজিটের মোবাইল নম্বর দিন।';
    } else if (!isValid11DigitPhone(formData.phone)) {
      newErrors.phone = isEn 
        ? 'Invalid phone number. Must be exactly 11 digits (e.g. 017XXXXXXXX).' 
        : 'সঠিক নম্বর নয়। অবশ্যই ১১ ডিজিট হতে হবে (যেমন: ০১৭১২-৩৪৫৬৭৮)।';
    }

    if (!formData.email.trim()) {
      newErrors.email = isEn 
        ? 'Please enter your email address.' 
        : 'অনুগ্রহ করে আপনার ইমেইল অ্যাড্রেস লিখুন।';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = isEn 
        ? 'Invalid email format (e.g. investor@example.com).' 
        : 'সঠিক ইমেইল ফরম্যাট প্রদান করুন (যেমন: investor@example.com)।';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    const refCode = `PROMISE-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          packageType: 'Co-Ownership Share Allotment',
          message: `Location: ${formData.cityCountry || 'N/A'}, Preferred Contact: ${formData.preferredContact}. Notes: ${formData.notes || 'None'}`
        })
      });
    } catch (err) {
      console.warn('Inquiry submission offline, continuing with confirmation.');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore
    }
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1B3D]/80 backdrop-blur-sm overflow-y-auto font-sans animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div 
        id="booking-modal-container"
        className="bg-white border border-gray-200 rounded-none max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div id="booking-modal-header" className="px-5 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <h3 id="booking-modal-title" className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {isEn ? 'Book Your Share' : 'আপনার শেয়ার বুক করুন'}
            </h3>
          </div>

          <button
            id="btn-close-booking-modal"
            onClick={handleResetAndClose}
            aria-label="Close"
            className="w-8 h-8 rounded-none border border-gray-200 hover:bg-gray-100 hover:text-[#0B1B3D] text-gray-400 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div id="booking-modal-body" className="p-5 sm:px-6 sm:py-5 flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmitInfo} className="space-y-4">
              {/* Contact Information Fields */}
              <div>
                {errors.general && (
                  <div className="mb-3 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-none">
                    {errors.general}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                      {isEn ? 'Full Legal Name *' : 'পূর্ণ নাম *'}
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isEn ? "e.g. Mohammed Rahman" : "যেমন: মোহাম্মদ রহমান"}
                        className="w-full pl-8 pr-3 py-2 rounded-none bg-white border border-gray-300 text-gray-900 text-xs focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                      {isEn ? 'Phone or WhatsApp *' : 'ফোন বা হোয়াটসঅ্যাপ *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        maxLength={14}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={() => {
                          if (formData.phone.trim() && !isValid11DigitPhone(formData.phone)) {
                            setErrors((prev) => ({
                              ...prev,
                              phone: isEn 
                                ? 'Please enter an 11-digit phone number (e.g. 017XXXXXXXX).' 
                                : 'অবশ্যই ১১ ডিজিটের ফোন নম্বর হতে হবে (যেমন: ০১৭১২-৩৪৫৬৭৮)।'
                            }));
                          }
                        }}
                        placeholder="017XXXXXXXX"
                        className={`w-full pl-8 pr-3 py-2 rounded-none bg-white border text-gray-900 text-xs focus:outline-none ${
                          errors.phone ? 'border-rose-500 focus:border-rose-600 focus:ring-1 focus:ring-rose-500' : 'border-gray-300 focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-rose-600 mt-1 font-medium flex items-center gap-1">
                        <span>⚠️</span>
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                      {isEn ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleEmailChange}
                        placeholder="investor@example.com"
                        className={`w-full pl-8 pr-3 py-2 rounded-none bg-white border text-gray-900 text-xs focus:outline-none ${
                          errors.email ? 'border-rose-500 focus:border-rose-600 focus:ring-1 focus:ring-rose-500' : 'border-gray-300 focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-rose-600 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* City / Country */}
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 block mb-1">
                      {isEn ? 'Current City / Country' : 'বর্তমান শহর / দেশ'}
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.cityCountry}
                        onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                        placeholder={isEn ? "e.g. Dhaka / London / Dubai" : "যেমন: ঢাকা / লন্ডন / দুবাই"}
                        className="w-full pl-8 pr-3 py-2 rounded-none bg-white border border-gray-300 text-gray-900 text-xs focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferred Communication Mode */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 block mb-1.5">
                  {isEn ? 'How would you prefer to be contacted?' : 'কীভাবে যোগাযোগ করতে স্বাচ্ছন্দ্যবোধ করবেন?'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'WhatsApp', labelEn: 'WhatsApp', labelBn: 'হোয়াটসঅ্যাপ', icon: MessageCircle },
                    { id: 'Phone Call', labelEn: 'Phone Call', labelBn: 'সরাসরি ফোন', icon: Phone },
                    { id: 'In-Person', labelEn: 'Office Visit', labelBn: 'অফিস ভিজিট', icon: Building },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isSelected = formData.preferredContact === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContact: mode.id })}
                        className={`py-2 px-2.5 border rounded-none text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#0B1B3D] text-[#E5C378] border-[#0B1B3D] font-bold'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 font-medium'
                        }`}
                      >
                        <Icon className="w-3 h-3 shrink-0" />
                        <span className="truncate">{isEn ? mode.labelEn : mode.labelBn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 rounded-none border border-gray-300 text-gray-600 text-xs font-semibold hover:bg-gray-100 cursor-pointer"
                >
                  {isEn ? 'Cancel' : 'বাতিল'}
                </button>

                <button
                  type="submit"
                  id="btn-submit-share-reservation"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-none bg-[#E5C378] hover:bg-[#0B1B3D] hover:text-[#E5C378] text-[#0B1B3D] font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-md disabled:opacity-50"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {isSubmitting 
                      ? (isEn ? 'Submitting...' : 'জমা হচ্ছে...') 
                      : (isEn ? 'Submit Contact Request' : 'আবেদন জমা দিন')}
                  </span>
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Screen */
            <div id="booking-confirmation-view" className="text-center py-8 px-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#159E42]/10 text-[#159E42] border border-[#159E42]/25 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D]">
                  {isEn ? 'Thanks For Your Booking' : 'আপনার বুকিংয়ের জন্য ধন্যবাদ'}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'We will contact you for further discussion.'
                    : 'পরবর্তী আলোচনার জন্য আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'}
                </p>
              </div>

              {/* Action Button: Close */}
              <div className="flex items-center justify-center pt-2">
                <button
                  type="button"
                  id="btn-done-booking"
                  onClick={handleResetAndClose}
                  className="px-8 py-2.5 rounded-none bg-[#0B1B3D] hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] font-bold text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 shadow-md"
                >
                  {isEn ? 'Close' : 'সম্পন্ন'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
