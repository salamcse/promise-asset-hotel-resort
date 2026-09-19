export type Language = 'en' | 'bn';

export type Currency = 'BDT' | 'USD';

export interface InvestmentPackage {
  id: string;
  name: string;
  nameBn: string;
  subtitle: string;
  subtitleBn: string;
  badge?: string;
  badgeBn?: string;
  popular?: boolean;
  priceBDT: number;
  originalPriceBDT: number;
  landSqFt: number;
  landDecimal: number;
  landKatha?: number;
  constructionShareSqFt: number;
  projectShares: number;
  developmentBenefitBDT: number;
  monthlyPayoutBDT?: number;
  durationMonths: number;
  membershipLevel: string;
  membershipLevelBn: string;
  keyPerks: string[];
  keyPerksBn: string[];
  highlight: string;
  highlightBn: string;
  color: string;
}

export interface Amenity {
  id: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  category: 'Hospitality' | 'Entertainment' | 'Wellness & Nature' | 'Events & Dining' | 'Infrastructure & Safety';
  categoryBn: string;
  description: string;
  descriptionBn: string;
  features: string[];
  featuresBn: string[];
  imageUrl: string;
  iconName: string;
  badge?: string;
}

export interface TimelinePhase {
  phase: string;
  phaseBn: string;
  title: string;
  titleBn: string;
  timeframe: string;
  timeframeBn: string;
  status: 'In Progress' | 'Upcoming' | 'Future';
  statusBn: string;
  points: string[];
  pointsBn: string[];
}

export interface ShareholderBenefit {
  id: string;
  number: string;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  description: string;
  descriptionBn: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}
