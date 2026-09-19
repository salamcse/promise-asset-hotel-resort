'use client';

import React, { useState } from 'react';
import { ContainedHeroSection } from '../src/components/ContainedHeroSection';
import { ProjectAtAGlanceSection } from '../src/components/ProjectAtAGlanceSection';
import { MissionVisionSection } from '../src/components/MissionVisionSection';
import { ProjectOverviewSplitBento } from '../src/components/ProjectOverviewSplitBento';
import { InvestmentPlansSection } from '../src/components/InvestmentPlansSection';
import { WhyInvestGlassmorphismSection } from '../src/components/WhyInvestGlassmorphismSection';
import { LegalSafetySection } from '../src/components/LegalSafetySection';
import { MasterPlanGallerySection } from '../src/components/MasterPlanGallerySection';
import { ResortExperienceGallerySlider } from '../src/components/ResortExperienceGallerySlider';
import { DevelopmentTimelineSection } from '../src/components/DevelopmentTimelineSection';
import { ProjectLocationSection } from '../src/components/ProjectLocationSection';
import { FaqSection } from '../src/components/FaqSection';
import { PreFooterContactSection } from '../src/components/PreFooterContactSection';
import { InvestNowCtaBanner } from '../src/components/InvestNowCtaBanner';
import { Footer } from '../src/components/Footer';
import { BackToTopButton } from '../src/components/BackToTopButton';
import { BookingModal } from '../src/components/BookingModal';
import { AiAdvisorModal } from '../src/components/AiAdvisorModal';
import { TalkToAdvisorModal } from '../src/components/TalkToAdvisorModal';
import { PackagesPreviewModal } from '../src/components/PackagesPreviewModal';
import { ContactPreviewModal } from '../src/components/ContactPreviewModal';
import { AboutProjectPreviewModal } from '../src/components/AboutProjectPreviewModal';
import { WhyInvestPreviewModal } from '../src/components/WhyInvestPreviewModal';
import { LegalProcessPreviewModal } from '../src/components/LegalProcessPreviewModal';
import { Language, Currency, InvestmentPackage } from '../src/types';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isTalkToAdvisorOpen, setIsTalkToAdvisorOpen] = useState<boolean>(false);
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState<boolean>(false);
  const [isPackagesPreviewOpen, setIsPackagesPreviewOpen] = useState<boolean>(false);
  const [isContactPreviewOpen, setIsContactPreviewOpen] = useState<boolean>(false);
  const [isAboutPreviewOpen, setIsAboutPreviewOpen] = useState<boolean>(false);
  const [isWhyInvestPreviewOpen, setIsWhyInvestPreviewOpen] = useState<boolean>(false);
  const [isLegalPreviewOpen, setIsLegalPreviewOpen] = useState<boolean>(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string>('signature');

  const handleOpenBooking = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageForBooking(packageId);
    }
    setIsBookingOpen(true);
  };

  const handleSelectPackage = (pkg: InvestmentPackage) => {
    setSelectedPackageForBooking(pkg.id);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] flex justify-center text-[#111827] font-sans selection:bg-[#E5C378] selection:text-[#0B1B3D] relative antialiased">
      
      {/* 1920px Contained Frame */}
      <div className="w-full max-w-[1920px] bg-[#F8F9FA] min-h-screen shadow-2xl relative flex flex-col overflow-x-hidden">
        {/* Main Content Sections Following Strict 14-Step Sequence */}
        <main className="w-full">
          
          {/* Section 1: Navbar + Hero Section */}
          <ContainedHeroSection
            language={language}
            currency={currency}
            onOpenBooking={() => handleOpenBooking()}
            onOpenPackagesPreview={() => setIsPackagesPreviewOpen(true)}
            onOpenContactPreview={() => setIsContactPreviewOpen(true)}
            onOpenAboutPreview={() => setIsAboutPreviewOpen(true)}
            onOpenWhyInvestPreview={() => setIsWhyInvestPreviewOpen(true)}
            onOpenLegalPreview={() => setIsLegalPreviewOpen(true)}
            onOpenTalkToAdvisor={() => setIsTalkToAdvisorOpen(true)}
            onToggleLanguage={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            onToggleCurrency={() => setCurrency(currency === 'BDT' ? 'USD' : 'BDT')}
          />

          {/* Section 2: Project at a Glance */}
          <ProjectAtAGlanceSection 
            language={language} 
            onOpenTalkToAdvisor={() => setIsTalkToAdvisorOpen(true)}
          />

          {/* Section 3: Mission & Vision */}
          <MissionVisionSection language={language} />

          {/* Section 4: Resort Experience */}
          <ResortExperienceGallerySlider language={language} />

          {/* Section 5: Master Plan */}
          <MasterPlanGallerySection
            language={language}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Section 6: Investment Packages */}
          <InvestmentPlansSection
            language={language}
            currency={currency}
            onSelectPackage={handleSelectPackage}
          />

          {/* Section 7: Location & Advantage */}
          <ProjectLocationSection 
            language={language} 
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Section 8: Project Progress */}
          <DevelopmentTimelineSection language={language} />

          {/* Section 9: About the Project */}
          <ProjectOverviewSplitBento
            language={language}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Section 10: Why Invest */}
          <WhyInvestGlassmorphismSection 
            language={language} 
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* Section 11: Legal Process */}
          <LegalSafetySection 
            language={language} 
            onOpenBooking={() => handleOpenBooking()} 
          />

          {/* Section 12: Frequently Asked Questions */}
          <FaqSection
            language={language}
            onOpenAiAdvisor={() => setIsAiAdvisorOpen(true)}
          />

          {/* Section 13: Contact / Lead Form */}
          <PreFooterContactSection language={language} />

          {/* Section 14: Invest Now Pre-Footer CTA Banner */}
          <InvestNowCtaBanner 
            language={language} 
            onInvestNow={() => handleOpenBooking()}
          />

        </main>

        {/* Step 14: Footer */}
        <Footer language={language} />
      </div>

      {/* Floating Circular Back To Top Button */}
      <BackToTopButton language={language} />

      {/* Investment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        currency={currency}
        initialPackageId={selectedPackageForBooking}
      />

      {/* AI Senior Investment Advisor Modal */}
      <AiAdvisorModal
        isOpen={isAiAdvisorOpen}
        onClose={() => setIsAiAdvisorOpen(false)}
        language={language}
        onOpenBooking={handleOpenBooking}
      />

      {/* Talk To An Advisor Lead Popup Modal */}
      <TalkToAdvisorModal
        isOpen={isTalkToAdvisorOpen}
        onClose={() => setIsTalkToAdvisorOpen(false)}
        language={language}
      />

      {/* Packages Preview Modal */}
      <PackagesPreviewModal
        isOpen={isPackagesPreviewOpen}
        onClose={() => setIsPackagesPreviewOpen(false)}
        language={language}
        currency={currency}
        onSelectPackageForBooking={(pkgId) => handleOpenBooking(pkgId)}
        onNavigateToFullSection={() => {
          const el = document.getElementById('packages');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Contact Us Preview Modal */}
      <ContactPreviewModal
        isOpen={isContactPreviewOpen}
        onClose={() => setIsContactPreviewOpen(false)}
        language={language}
        onNavigateToFullSection={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About Project Preview Modal */}
      <AboutProjectPreviewModal
        isOpen={isAboutPreviewOpen}
        onClose={() => setIsAboutPreviewOpen(false)}
        language={language}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToFullSection={() => {
          const el = document.getElementById('overview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Why Invest Preview Modal */}
      <WhyInvestPreviewModal
        isOpen={isWhyInvestPreviewOpen}
        onClose={() => setIsWhyInvestPreviewOpen(false)}
        language={language}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToFullSection={() => {
          const el = document.getElementById('why-invest');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Legal Process Preview Modal */}
      <LegalProcessPreviewModal
        isOpen={isLegalPreviewOpen}
        onClose={() => setIsLegalPreviewOpen(false)}
        language={language}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToFullSection={() => {
          const el = document.getElementById('legal');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
