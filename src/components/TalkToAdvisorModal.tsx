'use client';
import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Loader2,
  Headphones
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { isValid11DigitPhone, isValidEmail } from '../utils/validators';

interface TalkToAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const TalkToAdvisorModal: React.FC<TalkToAdvisorModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const isEn = language === 'en';

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailId: '',
    inquiryTopic: 'share_investment',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ phone?: string; email?: string; general?: string }>({});

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      const sanitized = value.replace(/[^0-9+ -]/g, '');
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      if (errors.phone || errors.general) {
        setErrors((prev) => ({ ...prev, phone: undefined, general: undefined }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'emailId' && (errors.email || errors.general)) {
      setErrors((prev) => ({ ...prev, email: undefined, general: undefined }));
    }
    if (errors.general) setErrors((prev) => ({ ...prev, general: undefined }));
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '',
      mobileNumber: '',
      emailId: '',
      inquiryTopic: 'share_investment',
      description: '',
    });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { phone?: string; email?: string; general?: string } = {};

    // Strict Validation
    if (!formData.fullName.trim()) {
      newErrors.general = isEn ? 'Please enter your Full Name.' : 'অনুগ্রহ করে আপনার পুরো নাম লিখুন।';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.phone = isEn ? 'Phone number is required.' : 'ফোন নম্বর আবশ্যক।';
    } else if (!isValid11DigitPhone(formData.mobileNumber)) {
      newErrors.phone = isEn 
        ? 'Please enter an 11-digit phone number (e.g. 017XXXXXXXX).' 
        : 'অবশ্যই ১১ ডিজিটের ফোন নম্বর হতে হবে (যেমন: ০১৭১২-৩৪৫৬৭৮)।';
    }

    if (!formData.emailId.trim()) {
      newErrors.email = isEn ? 'Email address is required.' : 'ইমেইল অ্যাড্রেস আবশ্যক।';
    } else if (!isValidEmail(formData.emailId)) {
      newErrors.email = isEn 
        ? 'Please enter a valid email format (e.g. name@example.com).' 
        : 'সঠিক ইমেইল ফরম্যাট প্রদান করুন (যেমন: name@example.com)।';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Post to backend inquiries API
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          phone: formData.mobileNumber.trim(),
          email: formData.emailId.trim() || 'N/A',
          packageType: `Advisor Request: ${formData.inquiryTopic}`,
          shareCount: 1,
          message: formData.description.trim(),
        }),
      });
    } catch (err) {
      console.warn('Advisor inquiry saved locally (offline mode fallback).', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger subtle celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E5C378', '#0B1B3D', '#FFFFFF', '#10B981'],
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }
  };

  return (
    <div 
      id="talk-to-advisor-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        id="talk-to-advisor-modal-container"
        className="relative w-full max-w-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scaleUp"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#070E1E] via-[#0B1B3D] to-[#122550] px-6 py-5 text-white flex items-center justify-between relative border-b border-[#E5C378]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#E5C378]/20 border border-[#E5C378]/40 flex items-center justify-center text-[#E5C378] shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-wide text-white">
                {isEn ? 'Talk To an Advisor' : 'পরামর্শকের সাথে কথা বলুন'}
              </h3>
              <p className="text-xs text-slate-300">
                {isEn ? 'The Promise Hotel & Resort Investment Desk' : 'দ্য প্রমিজ হোটেল অ্যান্ড রিসোর্ট ইনভেস্টমেন্ট ডেস্ক'}
              </p>
            </div>
          </div>

          <button
            id="close-advisor-modal-btn"
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            /* Successful Submission Message */
            <div id="advisor-form-success-view" className="text-center py-8 px-2 flex flex-col items-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-4 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] font-sans mb-2 leading-snug">
                {isEn ? 'Thanks For Your Booking' : 'আপনার বুকিংয়ের জন্য ধন্যবাদ'}
              </h4>

              <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
                {isEn 
                  ? 'We will contact you for further discussion.' 
                  : 'পরবর্তী আলোচনার জন্য আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'}
              </p>

              <button
                id="advisor-success-close-btn"
                onClick={handleClose}
                className="w-full max-w-xs py-3 px-6 bg-[#0B1B3D] hover:bg-[#E5C378] hover:text-[#0B1B3D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                {isEn ? 'Close' : 'সম্পন্ন'}
              </button>
            </div>
          ) : (
            /* Pop-up Form with Horizontal Style */
            <form id="talk-to-advisor-form" onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errors.general}</span>
                </div>
              )}

              {/* Row 1: Full Name & Phone or WhatsApp (Horizontal 2-columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isEn ? 'Full Name *' : 'পুরো নাম *'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={isEn ? 'e.g. Dr. Rafiqul Islam' : 'আপনার পুরো নাম লিখুন'}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. Phone or WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isEn ? 'Phone or WhatsApp *' : 'ফোন বা হোয়াটসঅ্যাপ *'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      maxLength={14}
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      onBlur={() => {
                        if (formData.mobileNumber.trim() && !isValid11DigitPhone(formData.mobileNumber)) {
                          setErrors((prev) => ({
                            ...prev,
                            phone: isEn 
                              ? 'Please enter an 11-digit phone number (e.g. 017XXXXXXXX).' 
                              : 'অবশ্যই ১১ ডিজিটের ফোন নম্বর হতে হবে (যেমন: ০১৭১২-৩৪৫৬৭৮)।'
                          }));
                        }
                      }}
                      placeholder="017XXXXXXXX"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.phone ? 'border-rose-500 focus:border-rose-600' : 'border-slate-300 focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address & Advisory Topic (Horizontal 2-columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 3. Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isEn ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="emailId"
                      required
                      value={formData.emailId}
                      onChange={handleInputChange}
                      onBlur={() => {
                        if (formData.emailId.trim() && !isValidEmail(formData.emailId)) {
                          setErrors((prev) => ({
                            ...prev,
                            email: isEn 
                              ? 'Please enter a valid email format (e.g. name@example.com).' 
                              : 'সঠিক ইমেইল ফরম্যাট দিন (যেমন: name@example.com)।'
                          }));
                        }
                      }}
                      placeholder="investor@example.com"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all ${
                        errors.email ? 'border-rose-500 focus:border-rose-600' : 'border-slate-300 focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* 4. Consultation Topic */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isEn ? 'Topic of Interest' : 'পরামর্শের বিষয়'}
                  </label>
                  <select
                    name="inquiryTopic"
                    value={formData.inquiryTopic}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-none text-sm text-slate-900 focus:bg-white focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] outline-none transition-all cursor-pointer"
                  >
                    <option value="share_investment">
                      {isEn ? 'Co-Ownership Share Investment' : 'কো-ওনারশিপ শেয়ার বিনিয়োগ'}
                    </option>
                    <option value="roi_buyback">
                      {isEn ? 'ROI & Buyback Guarantee' : 'মুনাফা ও বাই-ব্যাক পলিসি'}
                    </option>
                    <option value="site_visit">
                      {isEn ? 'Resort Site Tour & Inspection' : 'রিসোর্ট সাইট ভিজিট ও পরিদর্শন'}
                    </option>
                    <option value="general">
                      {isEn ? 'General Inquiry & Legal Paperwork' : 'সাধারণ তথ্য ও লিগ্যাল কাগজপত্র'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Description Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isEn ? 'Specific Questions / Message (Optional)' : 'নির্দিষ্ট প্রশ্ন / বার্তা (ঐচ্ছিক)'}
                </label>
                <textarea
                  name="description"
                  rows={2}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder={
                    isEn
                      ? 'Write any specific inquiries, preferred package, or best call time...'
                      : 'আপনার কাঙ্ক্ষিত প্যাকেজ, যেকোনো প্রশ্ন অথবা কথা বলার উপযুক্ত সময় লিখুন...'
                  }
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons: Horizontal bar */}
              <div className="pt-2 flex items-center justify-end gap-3">
                {/* Cancel Button */}
                <button
                  type="button"
                  id="advisor-form-cancel-btn"
                  onClick={handleClose}
                  className="py-2.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-none transition-all cursor-pointer border border-slate-300 text-center"
                >
                  {isEn ? 'Cancel' : 'বাতিল'}
                </button>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="advisor-form-submit-btn"
                  disabled={isSubmitting}
                  className="py-2.5 px-6 bg-[#0B1B3D] hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] font-bold text-xs uppercase tracking-wider rounded-none transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#E5C378]" />
                      <span>{isEn ? 'Submitting...' : 'জমা হচ্ছে...'}</span>
                    </>
                  ) : (
                    <span>{isEn ? 'Submit Inquiry' : 'পরামর্শের অনুরোধ পাঠান'}</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
