'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { INVESTMENT_PACKAGES } from '../data/projectData';
import { isValid11DigitPhone, isValidEmail } from '../utils/validators';

interface PreFooterContactSectionProps {
  language?: Language;
}

export const PreFooterContactSection: React.FC<PreFooterContactSectionProps> = ({
  language = 'en'
}) => {
  const isEn = language === 'en';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageId: 'plan_500k',
    message: ''
  });
  const [errors, setErrors] = useState<{ phone?: string; email?: string; general?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const sanitized = raw.replace(/[^0-9+ -]/g, '');
    setFormData((prev) => ({ ...prev, phone: sanitized }));
    if (errors.phone || errors.general) {
      setErrors((prev) => ({ ...prev, phone: undefined, general: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email || errors.general) {
      setErrors((prev) => ({ ...prev, email: undefined, general: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { phone?: string; email?: string; general?: string } = {};

    if (!formData.name.trim()) {
      newErrors.general = isEn ? 'Please enter your name.' : 'অনুগ্রহ করে আপনার নাম লিখুন।';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = isEn ? 'Phone number is required.' : 'ফোন নম্বর আবশ্যক।';
    } else if (!isValid11DigitPhone(formData.phone)) {
      newErrors.phone = isEn 
        ? 'Please enter a valid 11-digit mobile number (e.g. 017XXXXXXXX).' 
        : 'অনুগ্রহ করে ১১ ডিজিটের সঠিক মোবাইল নম্বর দিন (যেমন: ০১৭১২-৩৪৫৬৭৮)।';
    }

    if (!formData.email.trim()) {
      newErrors.email = isEn ? 'Email address is required.' : 'ইমেইল অ্যাড্রেস আবশ্যক।';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = isEn 
        ? 'Please enter a valid email format (e.g. name@example.com).' 
        : 'সঠিক ইমেইল ফরম্যাট প্রদান করুন (যেমন: name@example.com)।';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      email: '',
      packageId: 'plan_500k',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      className="py-8 bg-[#F9FAFB] border-b border-gray-200 scroll-mt-12 font-sans relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered at the Top) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "TALK TO AN EXPERT" : "বিশেষজ্ঞ পরামর্শ ও যোগাযোগ"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D] mb-2 tracking-tight leading-tight text-center">
            {isEn ? "Get in Touch" : "যোগাযোগ করুন"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
            {isEn
              ? "Connect with our advisory team for verified deed papers and projections."
              : "যাচাইকৃত দলিলপত্র ও প্রজেকশনের জন্য আমাদের টিমের সাথে যোগাযোগ করুন।"}
          </p>
        </div>

        {/* 2-Column Split: Direct Contacts on Left + Polished Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct & Clean Info Cards */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white border border-gray-200 p-7 sm:p-8 shadow-sm text-left h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5C378] block mb-2">
                  {isEn ? "Direct Inquiries" : "সরাসরি যোগাযোগ"}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-6 text-left">
                  {isEn ? "Investment Advisory Desk" : "ইনভেস্টমেন্ট অ্যাডভাইজরি ডেস্ক"}
                </h3>

                {/* Minimal Direct Contacts */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 text-left p-3.5 bg-[#F9FAFB] border border-gray-100">
                    <div className="w-10 h-10 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                        {isEn ? "Direct Hotline (24/7)" : "হটলাইন (২৪/৭)"}
                      </span>
                      <a href="tel:+8801700000000" className="font-sans font-bold text-sm sm:text-base text-[#0B1B3D] hover:text-[#E5C378] transition-colors">
                        +880 1700-000000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-left p-3.5 bg-[#F9FAFB] border border-gray-100">
                    <div className="w-10 h-10 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                        {isEn ? "Official Email" : "অফিসিয়াল ইমেইল"}
                      </span>
                      <a href="mailto:invest@thepromisehotel.com" className="font-sans font-bold text-sm sm:text-base text-[#0B1B3D] hover:text-[#E5C378] transition-colors">
                        invest@thepromisehotel.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-left p-3.5 bg-[#F9FAFB] border border-gray-100">
                    <div className="w-10 h-10 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                        {isEn ? "Corporate Office" : "কর্পোরেট হেডকোয়ার্টার"}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#4B5563] text-left">
                        Gulshan Avenue, Dhaka-1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Polished Compact Form */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-md text-left h-full flex flex-col justify-between">
              
              {isSubmitted ? (
                <div className="py-8 text-left space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#159E42]/10 text-[#159E42] flex items-center justify-center border border-[#159E42]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-[#0B1B3D] mb-2 text-left">
                    {isEn ? "Thanks For Your Booking" : "আপনার বুকিংয়ের জন্য ধন্যবাদ"}
                  </h3>
                  <p className="font-sans text-sm text-[#4B5563] leading-relaxed mb-6 max-w-md text-left">
                    {isEn
                      ? "We will contact you for further discussion."
                      : "পরবর্তী আলোচনার জন্য আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#0B1B3D] text-white hover:bg-[#E5C378] hover:text-[#0B1B3D] transition-colors cursor-pointer"
                  >
                    {isEn ? "Submit Another Inquiry" : "আরেকটি আবেদন পাঠান"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="border-b border-gray-200 pb-3 mb-2">
                    <h3 className="font-sans text-lg font-bold text-[#0B1B3D] text-left">
                      {isEn ? "Investor Inquiry" : "বিনিয়োগ অনুসন্ধান"}
                    </h3>
                  </div>

                  {errors.general && (
                    <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {errors.general}
                    </div>
                  )}

                  {/* Name & Phone in 2-column on desktop for compact layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111827] mb-1 text-left">
                        {isEn ? "Your Name *" : "আপনার নাম *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isEn ? "e.g. Dr. Rafiqul Islam" : "যেমন: ড. রফিকুল ইসলাম"}
                        className="w-full px-3.5 py-2.5 bg-[#F9FAFB] border border-gray-300 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#0B1B3D] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111827] mb-1 text-left">
                        {isEn ? "Phone or WhatsApp *" : "ফোন বা হোয়াটসঅ্যাপ *"}
                      </label>
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
                        className={`w-full px-3.5 py-2.5 bg-[#F9FAFB] border text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:bg-white transition-all ${
                          errors.phone ? 'border-rose-500 focus:border-rose-600' : 'border-gray-300 focus:border-[#0B1B3D]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium flex items-center gap-1">
                          <span>⚠️</span>
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Package in 2-column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111827] mb-1 text-left">
                        {isEn ? "Email Address *" : "ইমেইল অ্যাড্রেস *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleEmailChange}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 bg-[#F9FAFB] border text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:bg-white transition-all ${
                          errors.email ? 'border-rose-500 focus:border-rose-600' : 'border-gray-300 focus:border-[#0B1B3D]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111827] mb-1 text-left">
                        {isEn ? "Investment Tier" : "প্যাকেজ"}
                      </label>
                      <select
                        value={formData.packageId}
                        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F9FAFB] border border-gray-300 text-sm text-[#111827] focus:outline-none focus:border-[#E5C378] focus:bg-white transition-all"
                      >
                        {INVESTMENT_PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {isEn ? pkg.name : pkg.nameBn} (৳ {pkg.priceBDT.toLocaleString('en-IN')})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Clean Short Note */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111827] mb-1 text-left">
                      {isEn ? "Message or Site Visit Preference" : "মন্তব্য বা সাইট ভিজিট"}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isEn ? "Specific questions or preferred contact time..." : "কোনো নির্দিষ্ট প্রশ্ন বা সাইট ভিজিটের সময়..."}
                      className="w-full px-3.5 py-2 bg-[#F9FAFB] border border-gray-300 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#E5C378] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Clean CTA Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 bg-[#E5C378] text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white cursor-pointer text-center justify-center shadow-sm"
                    >
                      {isEn ? "Request Call Back" : "কল ব্যাকের অনুরোধ জানান"}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
