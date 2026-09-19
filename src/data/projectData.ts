import { InvestmentPackage, Amenity, TimelinePhase, ShareholderBenefit, FaqItem } from '../types';

export const USD_EXCHANGE_RATE = 120; // 1 USD = 120 BDT

export const PROJECT_STATS = {
  totalLandBigha: 125,
  builtUpPercentage: 35,
  builtUpBigha: 43,
  builtUpRange: "30% - 40% (≈ 37.5 - 50 Bigha)",
  greenSpacePercentage: 65,
  greenSpaceBigha: 82,
  greenSpaceRange: "60% - 70% (≈ 75 - 87.5 Bigha)",
  conventionCapacity: "2,000+",
  annualFreeStay: "3 Days / 2 Nights",
  payoutDuration: "24 Months",
  maxDevelopmentBenefit: "৳ 15,00,000",
  maxMonthlyPayout: "৳ 62,500 / month",
  location: "Marine Drive Road Coastal Zone, Bay of Bengal, Bangladesh",
  locationBn: "মেরিন ড্রাইভ রোড উপকূলীয় এলাকা, বঙ্গোপসাগর, বাংলাদেশ",
  developerName: "Promise Assets Ltd.",
  developerNameBn: "প্রমিজ অ্যাসেটস লিঃ",
};

export const INVESTMENT_PACKAGES: InvestmentPackage[] = [
  {
    id: "explorer",
    name: "Explorer Plan",
    nameBn: "এক্সপ্লোরার প্ল্যান",
    subtitle: "Start Your Journey",
    subtitleBn: "আপনার বিনিয়োগের শুভ সূচনা",
    priceBDT: 100000,
    originalPriceBDT: 200000,
    landSqFt: 48,
    landDecimal: 0.11,
    constructionShareSqFt: 10,
    projectShares: 1,
    developmentBenefitBDT: 100000,
    durationMonths: 24,
    monthlyPayoutBDT: 4166,
    membershipLevel: "Project Shareholder",
    membershipLevelBn: "প্রজেক্ট শেয়ারহোল্ডার মেম্বারশিপ",
    keyPerks: [
      "100% Registered Land Ownership (48 Sq.ft)",
      "10 Sq.ft Construction Share Unit (1 Share)",
      "Up to ৳ 1,00,000 Development Benefit",
      "Annual Complimentary 3D/2N Resort Stay",
      "15% - 25% Exclusive Member Discounts",
      "Free Resort & Beach Access Privileges",
      "Official Deed Registration & Legal Title"
    ],
    keyPerksBn: [
      "নিজের নামে ১০০% নিবন্ধিত জমি (৪৮ বর্গফুট)",
      "১০ বর্গফুট নিশ্চিত নির্মিত সম্পত্তি (১ শেয়ার)",
      "সর্বোচ্চ ৳ ১,০০,০০০ পর্যন্ত ডেভেলপমেন্ট বেনিফিট",
      "প্রতি বছর ৩ দিন ২ রাত ফ্রী রিসোর্ট স্টে",
      "রুম, ফুড ও অ্যাক্টিভিটিতে ১৫% - ২৫% ছাড়",
      "নিজস্ব সৈকত ও সকল রিসোর্ট সুবিধায় বিশেষ অ্যাক্সেস",
      "অফিসিয়াল সাফ-কবলা দলিল রেজিস্ট্রেশন ও স্বত্ব"
    ],
    highlight: "Ideal starter real estate asset with registered legal title and assured returns.",
    highlightBn: "স্বল্প বিনিয়োগে নিজের জমি, নিশ্চিত রিটার্ন ও আজীবন রিসোর্ট লাইফস্টাইল।",
    color: "emerald"
  },
  {
    id: "signature",
    name: "Signature Plan",
    nameBn: "সিগনেচার প্ল্যান",
    subtitle: "Best Value • Most Preferred",
    subtitleBn: "সর্বোচ্চ জনপ্রিয় ও লাভজনক প্ল্যান",
    badge: "MOST POPULAR",
    badgeBn: "সর্বাধিক জনপ্রিয়",
    popular: true,
    priceBDT: 500000,
    originalPriceBDT: 1000000,
    landSqFt: 240,
    landDecimal: 0.55,
    constructionShareSqFt: 50,
    projectShares: 5,
    developmentBenefitBDT: 500000,
    durationMonths: 24,
    monthlyPayoutBDT: 20833,
    membershipLevel: "Project Shareholder & Club Member",
    membershipLevelBn: "প্রজেক্ট শেয়ারহোল্ডার ও ক্লাব মেম্বারশিপ",
    keyPerks: [
      "100% Registered Land Ownership (240 Sq.ft / 0.55 Decimal)",
      "50 Sq.ft Construction Share Units (5 Shares)",
      "Up to ৳ 5,00,000 Development Benefit",
      "Annual Complimentary 3D/2N Resort Stay",
      "15% - 25% Discounts on Rooms, Villas, F&B & Events",
      "Investor & Referral Incentive Bonuses",
      "Priority Booking for Peak Holiday Seasons"
    ],
    keyPerksBn: [
      "নিজের নামে নিবন্ধিত ২৪০ বর্গফুট (০.৫৫ ডেসিমাল) জমি",
      "৫০ বর্গফুট নিশ্চিত নির্মিত সম্পত্তি (৫ শেয়ার)",
      "সর্বোচ্চ ৳ ৫,০০,০০০ পর্যন্ত ডেভেলপমেন্ট বেনিফিট",
      "প্রতি বছর পরিবারসহ ৩ দিন ২ রাত ফ্রী অবকাশ",
      "রিসোর্ট ও রেস্তোরাঁয় ১৫% - ২৫% বিশেষ ছাড়",
      "রেফারেল ও ইনভেস্টর অতিরিক্ত বোনাস সুবিধা",
      "ছুটির পিক মৌসুমে অগ্রাধিকারমূলক বুকিং সুবিধা"
    ],
    highlight: "Optimal capital growth combined with high monthly payout and premium lifestyle perks.",
    highlightBn: "উচ্চ মাসিক ক্যাশফ্লো এবং চমৎকার পারিবারিক রিসোর্ট সুবিধার আদর্শ সংমিশ্রণ।",
    color: "blue"
  },
  {
    id: "prestige",
    name: "Prestige Plan",
    nameBn: "প্রেষ্টিজ প্ল্যান",
    subtitle: "Premium Living • Unlimited Possibilities",
    subtitleBn: "প্রিমিয়াম লিভিং ও সর্বোচ্চ আর্থিক প্রাপ্তি",
    badge: "VIP SHAREHOLDER",
    badgeBn: "ভিআইপি শেয়ারহোল্ডার",
    priceBDT: 1500000,
    originalPriceBDT: 3000000,
    landSqFt: 720,
    landDecimal: 1.65,
    landKatha: 1.0,
    constructionShareSqFt: 200,
    projectShares: 20,
    developmentBenefitBDT: 1500000,
    durationMonths: 24,
    monthlyPayoutBDT: 62500,
    membershipLevel: "Premium Shareholder & VIP Member",
    membershipLevelBn: "প্রিমিয়াম শেয়ারহোল্ডার ও আজীবন ভিআইপি মেম্বার",
    keyPerks: [
      "1 Katha (720 Sq.ft / 1.65 Dec) 100% Registered Land & Sale Deed",
      "200 Sq.ft Assured Construction Share Units (20 Shares)",
      "৳ 15,00,000 Development Benefit (৳ 62,500/Month)",
      "Annual Complimentary Luxury 3D/2N Suite Stay",
      "Lifetime VIP Shareholder Membership & Club Access",
      "Participation in Hotel Operational Profit Sharing",
      "Exclusive Access to Marina Yacht Club & Sky Lounge"
    ],
    keyPerksBn: [
      "১ কাঠা (৭২০ বর্গফুট / ১.৬৫ শতক) রেজিস্ট্রিকৃত জমি ও সাফ-কবলা দলিল",
      "২০০ বর্গফুট নিশ্চিত নির্মিত সম্পত্তি ইউনিট (২০ শেয়ার)",
      "৳ ১৫,০০,০০০ ডেভেলপমেন্ট বেনিফিট (মাসিক ৳ ৬২,৫০০)",
      "প্রতি বছর লাক্সারি স্যুইটে ৩ দিন ২ রাত ফ্রী অবকাশ",
      "আজীবন ভিআইপি মেম্বারশিপ ও প্রিমিয়াম ক্লাব সুবিধা",
      "হোটেল ও রিসোর্টের বার্ষিক পরিচালন মুনাফা (ডিভিডেন্ড) প্রাপ্তি",
      "মেরিনা ইয়ট ক্লাব ও স্কাই লাউঞ্জে এক্সক্লুসিভ অ্যাক্সেস"
    ],
    highlight: "Own 1 full Katha of prime beachfront land with guaranteed ৳ 62,500 monthly payout + hotel profit sharing.",
    highlightBn: "পুরো ১ কাঠা সমুদ্রতীরবর্তী জমির মালিকানা, প্রতি মাসে ৳ ৬২,৫০০ নিশ্চিত আয় এবং বার্ষিক মুনাফার অংশীদারিত্ব।",
    color: "amber"
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "iconic-tower",
    title: "Luxury Iconic Tower",
    titleBn: "লাক্সারি আইকনিক টাওয়ার",
    tagline: "The Signature Landmark of The Promise Hotel & Resort",
    taglineBn: "প্রকল্পের প্রধান আইকনিক স্থাপত্য ও আকাশচুম্বী ল্যান্ডমার্ক",
    category: "Hospitality",
    categoryBn: "হসপিটালিটি ও আবাসন",
    badge: "Architectural Marvel",
    description: "Soaring high above the Bay of Bengal, the Iconic Tower delivers 360° panoramic ocean vistas, ultra-luxury sky suites, private observatory deck, and an elite sky lounge.",
    descriptionBn: "বঙ্গোপসাগরের কোল ঘেঁষে নির্মিত এই আকাশচুম্বী টাওয়ারে রয়েছে ৩৬০ ডিগ্রি সমুদ্র দর্শন, লাক্সারি স্কাই স্যুইট, ইনফিনিটি স্কাই পুল এবং উচ্চমানের ফাইন ডাইনিং স্কাই লাউঞ্জ।",
    features: [
      "360° Panoramic Sea Views",
      "Iconic Contemporary Architecture",
      "Luxury Sky Suites & Residences",
      "Sky Lounge & Fine Dining",
      "Infinity Sky Pool at Roof Peak",
      "Premium Observation Deck"
    ],
    featuresBn: [
      "৩৬০° প্যানোরামিক সমুদ্র ভিউ",
      "বিশ্বমানের সমকালীন স্থাপত্য শৈলী",
      "লাক্সারি স্কাই স্যুইটস ও রেসিডেন্স",
      "রুফটপ স্কাই লাউঞ্জ ও ফাইন ডাইনিং",
      "আকাশচুম্বী ইনফিনিটি স্কাই পুল",
      "প্রিমিয়াম অবজারভেশন ভিউইং ডেক"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    iconName: "Building2"
  },
  {
    id: "five-star-hotel",
    title: "5-Star Hotel Interiors",
    titleBn: "৫-তারকা হোটেল ও স্যুইটস",
    tagline: "Luxury Crafted for Exceptional Comfort",
    taglineBn: "আন্তর্জাতিক মানের আরাম ও রাজকীয় আতিথেয়তা",
    category: "Hospitality",
    categoryBn: "হসপিটালিটি ও আবাসন",
    badge: "5-Star Luxury",
    description: "Opulently appointed guest rooms and suites engineered with smart room technology, marble bathrooms, oceanfront balconies, and bespoke concierge services.",
    descriptionBn: "প্রতিটি কক্ষে রয়েছে আধুনিক স্মার্ট অটোমেশন, মার্বেল বাথরুম, সমুদ্রমুখী ব্যক্তিগত ব্যালকনি এবং ২৪ ঘণ্টার নিবেদিত আতিথেয়তা।",
    features: [
      "Elegant Guest Rooms & Suites",
      "Panoramic Sea View Balconies",
      "Premium Interior Finishes & Italian Marble",
      "Smart Room Automation & Climate Control",
      "Luxury Bathrooms with Jacuzzis",
      "24/7 Dedicated Butler & Concierge"
    ],
    featuresBn: [
      "অভিজাত গেস্ট রুম ও প্রেসিডেন্সিয়াল স্যুইট",
      "সমুদ্রমুখী প্যানোরামিক ব্যালকনি",
      "প্রিমিয়াম ইন্টেরিয়র ফিনিশিং ও মার্বেল সজ্জা",
      "স্মার্ট অটোমেশন প্রযুক্তি",
      "জ্যাকুজি সমন্বিত বিলাসবহুল বাথরুম",
      "২৪/৭ বিশ্বমানের তারকা আতিথেয়তা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    iconName: "Hotel"
  },
  {
    id: "shell-cottages",
    title: "Signature Shell Cottages",
    titleBn: "সিগনেচার শেল কটেজ",
    tagline: "Inspired by Nature, Crafted for Luxury",
    taglineBn: "প্রকৃতি থেকে অনুপ্রাণিত ঝিনুক আকৃতির ইকো লাক্সারি কটেজ",
    category: "Hospitality",
    categoryBn: "হসপিটালিটি ও আবাসন",
    badge: "Eco Architecture",
    description: "Unique seashell-inspired domes blending organic coastal curves with opulent private decks, surrounded by tranquil tropical water bodies.",
    descriptionBn: "সৈকতের ঝিনুকের আদলে নির্মিত দৃষ্টিনন্দন ইকো-কটেজ, যেখানে আধুনিক বিলাসের সাথে প্রাকৃতিক প্রশান্তির নিখুঁত মেলবন্ধন ঘটানো হয়েছে।",
    features: [
      "Iconic Shell-Inspired Organic Design",
      "Private Luxury Deck & Outdoor Seating",
      "Panoramic Sea & Garden Views",
      "Eco-Friendly Sustainable Architecture",
      "Peaceful Nature & Water Lagoon Retreat",
      "Exclusive In-Cottage Spa Treatment"
    ],
    featuresBn: [
      "ঝিনুক-অনুপ্রাণিত স্বকীয় স্থাপত্য",
      "ব্যক্তিগত লাক্সারি ডেক ও আউটডোর সিটিং",
      "সমুদ্র ও মনোরম বাগানের দৃশ্যপট",
      "পরিবেশবান্ধব টেকসই নির্মাণ শৈলী",
      "লেগুন পরিবেষ্টিত নির্জন প্রশান্তিময় পরিবেশ",
      "ইন-কটেজ স্পা ও প্রাইভেট সার্ভিস"
    ],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    iconName: "Home"
  },
  {
    id: "waterfront-villas",
    title: "Luxury Waterfront Villas",
    titleBn: "লাক্সারি ওয়াটারফ্রন্ট ভিলা",
    tagline: "Private Luxury Surrounded by Nature",
    taglineBn: "লেগুনের পাড়ে ব্যক্তিগত পুল ও বাগান সমন্বিত অভিজাত ভিলা",
    category: "Hospitality",
    categoryBn: "হসপিটালিটি ও আবাসন",
    badge: "Ultra Luxury",
    description: "Exclusive multi-bedroom villas perched along crystalline waterways with private plunge pools, lush gardens, and personal yacht docking access.",
    descriptionBn: "স্বচ্ছ লেগুন ঘিরে সাজানো ব্যক্তিগত পুল ভিলা, যেখানে রয়েছে সবুজ বাগান, পারিবারিক বিনোদন স্থান এবং ২৪ ঘণ্টার প্রাইভেট রিসোর্ট সার্ভিস।",
    features: [
      "Exclusive Waterfront Lagoon Villas",
      "Private Infinity Plunge Pool & Garden",
      "Panoramic Lagoon & Canal Views",
      "Elegant Contemporary Design",
      "Premium Family Multi-Suite Retreat",
      "24/7 Dedicated Resort Services"
    ],
    featuresBn: [
      "লেগুন ঘেঁষা এক্সক্লুসিভ ওয়াটার ভিলা",
      "নিজস্ব প্রাইভেট পুল ও সুসজ্জিত বাগান",
      "প্যানোরামিক লেগুন ও ক্যানাল ভিউ",
      "আধুনিক শৈল্পিক ইন্টেরিয়র",
      "পারিবারিক অবকাশের জন্য সেরা পরিবেশ",
      "২৪/৭ পার্সোনালাইজড রিসোর্ট সেবা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    iconName: "Sparkles"
  },
  {
    id: "musical-fountain",
    title: "Musical Fountain Plaza",
    titleBn: "মিউজিক্যাল ফাউন্টেন প্লাজা",
    tagline: "Where Water, Light & Music Come Alive",
    taglineBn: "পানি, আলো ও সঙ্গীতের জাদুকরী সমন্বয়ে রাতের মোহময় পরিবেশ",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "Nighttime Attraction",
    description: "A grand central amphitheater and illuminated water plaza with synchronized high-jet water spouts choreographed to symphonic music.",
    descriptionBn: "কেন্দ্রীয় চত্বরে বর্ণিল আলোকচ্ছটা এবং মিউজিকের তালে তালে জলের মোহময় নৃত্য—পরিবারের সাথে সান্ধ্যকালীন আনন্দ উদযাপনের সেরা ঠিকানা।",
    features: [
      "Synchronized Water & Multi-Color Light Show",
      "Music & Multimedia Holographic Experience",
      "Central Gathering Amphitheater",
      "Stunning Evening Ambience",
      "Iconic Photo & Social Media Destination",
      "Daily Live Evening Performances"
    ],
    featuresBn: [
      "মিউজিক ও লাইটের সুরেলা নৃত্যময় ওয়াটার শো",
      "মাল্টিমিডিয়া ও হলোগ্রাফিক প্রদর্শনী",
      "কেন্দ্রীয় মিলনমেলা ও অ্যাম্ফিথিয়েটার",
      "মনোমুগ্ধকর সান্ধ্যকালীন পরিবেশ",
      "ফটোগ্রাফির চমৎকার স্পট",
      "প্রতিদিন সন্ধ্যায় নিয়মিত লাইভ পারফরম্যান্স"
    ],
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    iconName: "Waves"
  },
  {
    id: "private-beach",
    title: "Private Beach Access & Beach Club",
    titleBn: "প্রাইভেট বিচ ও বিচ ক্লাব",
    tagline: "Your Exclusive Gateway to the Bay of Bengal",
    taglineBn: "বঙ্গোপসাগরের উন্মুক্ত সৈকতে একান্ত ব্যক্তিগত প্রবেশাধিকার",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "Beachfront",
    description: "Direct secured access to pristine golden sand shoreline with luxury cabanas, seaside dining, jet skis, and spectacular sunset decks.",
    descriptionBn: "রিসোর্টের অতিথিদের জন্য নির্ধারিত নিরাপদ প্রাইভেট সমুদ্র সৈকত, যেখানে রয়েছে লাক্সারি কাবানা, সানসেট ভিউয়িং ডেক এবং ওয়াটার স্পোর্টস।",
    features: [
      "Direct Gated Private Beach Access",
      "Premium Sunset Beach Club & Bar",
      "Panoramic Sunset Viewing Boardwalk",
      "Beachfront BBQ & Seafood Dining",
      "Exciting Water Sports & Jet Skiing",
      "24/7 Monitored Beach Lifeguards & Security"
    ],
    featuresBn: [
      "সরাসরি ব্যক্তিগত সৈকত প্রবেশপথ",
      "প্রিমিয়াম বিচ ক্লাব ও রিফ্রেশমেন্ট বার",
      "সূর্যাস্ত উপভোগের বিশেষ সানসেট ডেক",
      "সমুদ্রতীরে বারবিকিউ ও সীফুড ডাইনিং",
      "জেটস্কি ও রোমাঞ্চকর ওয়াটার স্পোর্টস",
      "২৪/৭ লাইফগার্ড ও নিরাপত্তা প্রহরা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    iconName: "Sun"
  },
  {
    id: "marina-yacht-club",
    title: "Marina & Yacht Club",
    titleBn: "মেরিনা ও ইয়ট ক্লাব",
    tagline: "Sail into Luxury • Live the Extraordinary",
    taglineBn: "সমুদ্রযাত্রার অভিজাত লাইফস্টাইল ও সানসেট ক্রুজ",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "VIP Exclusive",
    description: "Full-service private yacht marina with dedicated berths, sunset coastal cruises, waterfront promenade, and an exclusive members-only yacht lounge.",
    descriptionBn: "ব্যক্তিগত ইয়ট বার্থিং সুবিধা, বিলাসবহুল ক্রুজ ভ্রমণ, ওয়াটারফ্রন্ট প্রমেনেড এবং বিশিষ্ট ক্লাব সদস্যদের জন্য বিশেষ মেরিনা লাউঞ্জ।",
    features: [
      "Private Yacht Marina & Docking Slips",
      "Luxury Yacht Club & VIP Lounge",
      "Daily Sunset Coastal Cruises",
      "Premium Waterfront Dining Promenade",
      "Exclusive Shareholders' Boating Privileges",
      "Charter & Water Excursion Services"
    ],
    featuresBn: [
      "প্রাইভেট ইয়ট মেরিনা ও ডকিং সুবিধা",
      "লাক্সারি ইয়ট ক্লাব ও ভিআইপি লাউঞ্জ",
      "দৈনিক সূর্যাস্ত সমুদ্র ভ্রমণ (সানসেট ক্রুজ)",
      "মনোরম ওয়াটারফ্রন্ট প্রমেনেড ও ক্যাফে",
      "শেয়ারহোল্ডারদের জন্য বিশেষ বোটিং সুবিধা",
      "চার্টার সার্ভিস ও গভীর সমুদ্রে ভ্রমণ"
    ],
    imageUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80",
    iconName: "Compass"
  },
  {
    id: "ocean-aquarium",
    title: "Giant Ocean Aquarium",
    titleBn: "বিশাল মহাসমুদ্র অ্যাকোয়ারিয়াম",
    tagline: "Discover the Wonders Beneath the Sea",
    taglineBn: "দক্ষিণ এশিয়ার অন্যতম বৃহৎ আন্ডারওয়াটার টানেল ও অ্যাকোয়ারিয়াম",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "Regional Landmark",
    description: "One of the region's largest public aquariums with 360-degree underwater walkthrough tunnels, shark galleries, and living coral reefs.",
    descriptionBn: "সমুদ্রতলের রোমাঞ্চকর জগৎ প্রত্যক্ষ করার জন্য বিশাল এক্রিলিক টানেল, হাঙ্গর ও বিরল সামুদ্রিক মাছের সমন্বয়ে শিক্ষণীয় ও আনন্দদায়ক প্রদর্শনী।",
    features: [
      "One of the Region's Largest Marine Aquariums",
      "360° Acrylic Underwater Viewing Walkway Tunnel",
      "Shark, Ray & Tropical Reef Gallery",
      "Interactive Marine Touch Exhibits",
      "Marine Biology Education & Conservation Center",
      "Unforgettable Family Tourism Attraction"
    ],
    featuresBn: [
      "অঞ্চলের অন্যতম বৃহত্তম মহাসাগরীয় অ্যাকোয়ারিয়াম",
      "৩৬০° আন্ডারওয়াটার ভিউয়িং টানেল",
      "শার্ক, স্টিংরে ও রঙিন কোরাল রিফ গ্যালারি",
      "ইন্টারেক্টিভ মেরিন টাচ ও লার্নিং কর্নার",
      "সামুদ্রিক জীববৈচিত্র্য সংরক্ষণ ও শিক্ষা কেন্দ্র",
      "পরিবারের সকল সদস্যের জন্য স্মরণীয় অভিজ্ঞতা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    iconName: "Fish"
  },
  {
    id: "water-park",
    title: "World-Class Water Park",
    titleBn: "আন্তর্জাতিক ওয়াটার পার্ক",
    tagline: "Splash • Play • Create Memories",
    taglineBn: "সব বয়সের মানুষের জন্য আনন্দ ও রোমাঞ্চের মেলা",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "Family Favorite",
    description: "Massive tropical aquatic adventure park with multi-lane high-speed waterslides, giant wave pool, lazy river, and kid splash fortresses.",
    descriptionBn: "বিশাল ওয়াটার স্লাইড, কৃত্রিম তরঙ্গ বিশিষ্ট ওয়েভ পুল, লেজি রিভার এবং শিশুদের জন্য নিরাপদ স্প্ল্যাশ জোন নিয়ে সাজানো বিশাল ওয়াটার পার্ক।",
    features: [
      "Thrilling Multi-Storey Water Slides",
      "Giant Tsunami Wave Pool & Lazy River",
      "Kids Pirate Splash Fortress Zone",
      "Family Raft & Speed Adventure Rides",
      "Poolside Private Cabana Relaxation",
      "Certified Lifeguard Safety Supervision"
    ],
    featuresBn: [
      "উত্তেজনাপূর্ণ রোমাঞ্চকর ওয়াটার স্লাইড",
      "বিশাল ওয়েভ পুল ও শান্ত লেজি রিভার",
      "শিশুদের জন্য বিশেষ স্প্ল্যাশ প্লে জোন",
      "পারিবারিক ওয়াটার রাইডস ও অ্যাডভেঞ্চার",
      "পুলসাইড ক্যাবানা ও ফুড কোর্ট",
      "আন্তর্জাতিক সার্টিফায়েড লাইফগার্ড নিরাপত্তা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582650625119-3a31f841839d?auto=format&fit=crop&w=1200&q=80",
    iconName: "Ship"
  },
  {
    id: "adventure-park",
    title: "Adventure Park & Zipline",
    titleBn: "অ্যাডভেঞ্চার পার্ক ও জিপলাইন",
    tagline: "Adventure Awaits Above the Sea",
    taglineBn: "সমুদ্রের ওপর দিয়ে উড়ে চলার রোমাঞ্চকর জিপলাইন ও চ্যালেঞ্জ",
    category: "Entertainment",
    categoryBn: "বিনোদন ও আকর্ষণ",
    badge: "High Thrill",
    description: "Adrenaline-fueled outdoor challenge zone boasting high rope obstacle courses, rock climbing walls, and ocean-facing sunset ziplines.",
    descriptionBn: "সমুদ্রের উপর রোমাঞ্চকর জিপলাইন, হাই রোপ কোর্স, রক ক্লাইম্বিং এবং আন্তর্জাতিক নিরাপত্তা মানের অ্যাডভেঞ্চার ট্র্যাক।",
    features: [
      "High Rope Aerial Obstacle Course",
      "Scenic Coastline Zipline Experience",
      "Rock Climbing & Bouldering Towers",
      "Sunset Panoramic Viewing Platforms",
      "International CE Safety Certified Equipment",
      "Expert Instructors for All Skill Levels"
    ],
    featuresBn: [
      "উঁচু ট্রিপল-লেয়ার হাই রোপ কোর্স",
      "উপকূল ঘেঁষে সমুদ্রমুখী দীর্ঘ জিপলাইন",
      "রক ক্লাইম্বিং ও অবস্টাকল চ্যালেঞ্জ",
      "প্যানোরামিক সানসেট ভিউ পয়েন্ট",
      "আন্তর্জাতিক সার্টিফায়েড সেফটি গিয়ার",
      "অভিজ্ঞ ট্রেইনারদের সার্বক্ষণিক দিকনির্দেশনা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
    iconName: "Mountain"
  },
  {
    id: "spa-village",
    title: "Wellness & Spa Village",
    titleBn: "ওয়েলনেস ও স্পা ভিলেজ",
    tagline: "Relax • Rejuvenate • Renew",
    taglineBn: "শরীর, মন ও আত্মার পুনরুজ্জীবনে প্রাকৃতিক নিরাময় কেন্দ্র",
    category: "Wellness & Nature",
    categoryBn: "ওয়েলনেস ও প্রকৃতি",
    badge: "Holistic Health",
    description: "Secluded sanctuary providing hydrotherapy mineral baths, herbal steam pavilions, private couple suites, yoga decks, and Ayurvedic healing.",
    descriptionBn: "হাইড্রোথেরাপি, ভেষজ স্টিম বাথ, আয়ুর্বেদিক চিকিৎসা, ব্যক্তিগত স্পা স্যুইট এবং উন্মুক্ত যোগব্যায়াম ডেকের সমন্বয়ে গড়ে তোলা বিশেষ ওয়েলনেস জোন।",
    features: [
      "World-Class Holistic Spa & Wellness Center",
      "Hydrotherapy Mineral Pools & Steam Rooms",
      "Private VIP Garden Spa Pavilions",
      "Ayurvedic & Aromatherapy Programs",
      "Lagoon-Side Yoga & Meditation Decks",
      "Organic Herbal Teas & Vitality Lounge"
    ],
    featuresBn: [
      "আন্তর্জাতিক মানের বিশ্বমানের স্পা ও ওয়েলনেস",
      "হাইড্রোথেরাপি পুল, সোনা ও স্টিম রুম",
      "প্রাইভেট গার্ডেন স্পা স্যুইটস",
      "আয়ুর্বেদিক ও প্রাকৃতিক ভেষজ থেরাপি",
      "লেগুনের পাড়ে শান্ত ইয়োগা ও মেডিটেশন ডেক",
      "অর্গানিক হার্বাল কেয়ার ও রিফ্রেশমেন্ট"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    iconName: "HeartPulse"
  },
  {
    id: "botanical-garden",
    title: "Eco Botanical Garden",
    titleBn: "ইকো বোটানিক্যাল গার্ডেন",
    tagline: "Where Nature Blooms in Harmony",
    taglineBn: "সবুজ অরণ্য, বিরল অর্কিড ও প্রজাপতি পার্কের সুরভিত রাজ্য",
    category: "Wellness & Nature",
    categoryBn: "ওয়েলনেস ও প্রকৃতি",
    badge: "Eco Conservation",
    description: "Sprawling botanical reserve spanning lush trails, lily ponds, butterfly sanctuaries, and hundreds of rare indigenous and tropical flora.",
    descriptionBn: "শত শত প্রজাতির দুর্লভ বৃক্ষ, রঙিন অর্কিড, প্রজাপতি পার্ক, পদ্ম পুকুর ও ছায়ানিবিড় হাঁটার ট্রেইল সমৃদ্ধ পরিবেশবান্ধব বোটানিক্যাল গার্ডেন।",
    features: [
      "Extensive Tropical & Coastal Flora Reserve",
      "Scenic Shaded Walking & Jogging Trails",
      "Lotus Lakes & Cascading Water Features",
      "Protected Butterfly & Exotic Bird Sanctuary",
      "Nature Photography Gazebos",
      "Peaceful Meditation & Reading Groves"
    ],
    featuresBn: [
      "বিশাল দেশি-বিদেশি উদ্ভিদ ও অর্কিড কালেকশন",
      "ছায়াঘেরা হাঁটা ও জগিং ট্রেইল",
      "পদ্মপুকুর, ঝর্ণা ও কৃত্রিম জলাশয়",
      "প্রজাপতি ও পাখির সুরক্ষিত প্রাকৃতিক আবাস",
      "ফটোগ্রাফি ও বিশ্রামের দৃষ্টিনন্দন প্যাভিলিয়ন",
      "শান্ত নিরিবিলি রিডিং ও মেডিটেশন স্পট"
    ],
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    iconName: "Trees"
  },
  {
    id: "convention-hall",
    title: "Grand Convention Hall & Weddings",
    titleBn: "গ্র্যান্ড কনভেনশন হল ও ওয়েডিং ডেস্টিনেশন",
    tagline: "Where Every Event Becomes Extraordinary",
    taglineBn: "২০০০+ আসনবিশিষ্ট আন্তর্জাতিক মানের কনভেনশন ও রাজকীয় বিয়ে",
    category: "Events & Dining",
    categoryBn: "ইভেন্টস ও ডাইনিং",
    badge: "2,000+ Capacity",
    description: "State-of-the-art pillarless mega hall accommodating over 2,000 guests for corporate summits, international expos, and beachfront luxury dream weddings.",
    descriptionBn: "আন্তর্জাতিক সেমিনার, কর্পোরেট সামিট এবং রাজকীয় বিচফ্রন্ট ওয়েডিং আয়োজনের জন্য ২,০০০+ ধারণক্ষমতার অত্যাধুনিক সেন্ট্রাল অডিটোরিয়াম।",
    features: [
      "2,000+ Guest Capacity Mega Auditorium",
      "Beachfront Outdoor Wedding Lawns",
      "Pillarless Architecture with 4K Laser Projection",
      "Dedicated Presidential & Bridal Suites",
      "Multi-Kitchen Master Banquet Catering",
      "High-Profile Corporate Summit Ready"
    ],
    featuresBn: [
      "২,০০০+ অতিথি ধারণক্ষমতাসম্পন্ন অডিটোরিয়াম",
      "সমুদ্রমুখী উন্মুক্ত বিচ ওয়েডিং চত্বর",
      "পিলারহীন আধুনিক স্পেস ও লেজার প্রজেকশন",
      "ভিআইপি লাউঞ্জ ও লাক্সারি ব্রাইডাল স্যুইট",
      "আন্তর্জাতিক মানের বিশাল ব্যাংকুয়েট ক্যাটারিং",
      "জাতীয় ও আন্তর্জাতিক কর্পোরেট সম্মেলনের উপযোগী"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    iconName: "Trophy"
  },
  {
    id: "food-court",
    title: "International Food Court & Fine Dining",
    titleBn: "আন্তর্জাতিক ফুড কোর্ট ও রেস্তোরাঁ",
    tagline: "Taste the World, One Destination",
    taglineBn: "বিশ্বসেরা রন্ধনশিল্প ও সীফুড স্পেশালিটির সমাহার",
    category: "Events & Dining",
    categoryBn: "ইভেন্টস ও ডাইনিং",
    badge: "Multi-Cuisine",
    description: "Culinary hub presenting global delicacies, fresh Bay of Bengal seafood barbecue, authentic pan-Asian, traditional cuisines, and artisanal coffee roasteries.",
    descriptionBn: "তাজা সামুদ্রিক মাছের বারবিকিউ, এশিয়ান, অ্যারাবিক, কন্টিনেন্টাল এবং ঐতিহ্যবাহী খাবারের আন্তর্জাতিক ফুড কোর্ট ও প্রিমিয়াম ক্যাফে।",
    features: [
      "Multi-Cuisine Pavilion with 15+ Global Brands",
      "Live Bay Seafood Grills & BBQ Terrace",
      "Rooftop Sunset Fine Dining Restaurant",
      "Artisanal Coffee, Bakery & Gelateria",
      "Family & Corporate Dining Enclaves",
      "Halal Certified World-Class Kitchens"
    ],
    featuresBn: [
      "১৫+ আন্তর্জাতিক খাদ্য ব্র্যান্ড সমৃদ্ধ ফুড কোর্ট",
      "লাইভ সীফুড গ্রিল ও বারবিকিউ টেরেস",
      "রুফটপ সানসেট লাক্সারি রেস্তোরাঁ",
      "স্পেশালিটি কফি, বেকারি ও আইসক্রিম কর্নার",
      "পারিবারিক ও কর্পোরেট ডাইনিং স্পেস",
      "হালাল ও স্বাস্থ্যকর খাদ্য প্রস্তুতের নিশ্চয়তা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    iconName: "Utensils"
  },
  {
    id: "medical-center",
    title: "24/7 Medical Center & Pharmacy",
    titleBn: "২৪/৭ জরুরি মেডিকেল সেন্টার",
    tagline: "Healthcare You Can Trust, Anytime",
    taglineBn: "সার্বক্ষণিক বিশেষজ্ঞ চিকিৎসক, ডায়াগনস্টিক ও অ্যাম্বুলেন্স সেবা",
    category: "Infrastructure & Safety",
    categoryBn: "নিরাপত্তা ও অবকাঠামো",
    badge: "24/7 Emergency Care",
    description: "Fully equipped on-site medical emergency trauma facility with licensed resident physicians, ICU transport ambulance, and 24/7 stocked pharmacy.",
    descriptionBn: "রিসোর্টের ভেতর সার্বক্ষণিক ডাক্তার, নার্সিং টিম, আধুনিক প্যাথলজি ও জরুরি লাইফ সাপোর্ট অ্যাম্বুলেন্স সমৃদ্ধ উন্নত চিকিৎসা কেন্দ্র।",
    features: [
      "24/7 Emergency Medical Care & Resident Doctors",
      "Modern Diagnostic & Pathology Lab",
      "Dedicated Critical Care Transport Ambulance",
      "First Aid & Pediatric Trauma Facilities",
      "24/7 On-Site Pharmacy & Medical Supplies",
      "Direct Coordination with City Hospitals"
    ],
    featuresBn: [
      "২৪ ঘণ্টা বিশেষজ্ঞ ডাক্তার ও জরুরি চিকিৎসা সেবা",
      "আধুনিক ডায়াগনস্টিক ও প্যাথলজি সুবিধা",
      "জরুরি লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস",
      "ফার্স্ট এইড ও ট্রমা কেয়ার ব্যবস্থা",
      "২৪/৭ অন-সাইট ফার্মেসি সুবিধা",
      "এয়ার অ্যাম্বুলেন্স ও বিশেষায়িত হাসপাতালের সংযোগ"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    iconName: "ShieldCheck"
  },
  {
    id: "solar-power",
    title: "Green Solar & Clean Energy Grid",
    titleBn: "সোলার পাওয়ার ও গ্রিন এনার্জি গ্রিড",
    tagline: "Powering the Future with Clean Energy",
    taglineBn: "পরিবেশবান্ধব সৌরবিদ্যুৎ ও নিরবচ্ছিন্ন শক্তি ব্যবস্থাপনা",
    category: "Infrastructure & Safety",
    categoryBn: "নিরাপত্তা ও অবকাঠামো",
    badge: "Zero Emission",
    description: "Massive solar panel farm integrated into rooftops and parking shades, generating sustainable zero-emission power with battery storage backups.",
    descriptionBn: "রিসোর্টের কার্বন ফুটপ্রিন্ট কমিয়ে পরিবেশবান্ধব সৌরবিদ্যুৎ ও বৃষ্টির পানি সংরক্ষণের সমন্বয়ে গড়ে তোলা আধুনিক শক্তি ব্যবস্থাপনা।",
    features: [
      "Megawatt Rooftop & Ground Solar Farm",
      "Zero-Carbon Clean Energy Generation",
      "Industrial Battery Energy Storage System (BESS)",
      "Rainwater Harvesting & Water Treatment Plant",
      "Smart Energy Efficient LED & Microgrid Control",
      "Uninterrupted 100% Power Guarantee"
    ],
    featuresBn: [
      "মেগাওয়াট ক্ষমতার সমন্বিত সোলার বিদ্যুৎ ব্যবস্থা",
      "কার্বনমুক্ত পরিবেশবান্ধব গ্রিন এনার্জি",
      "আধুনিক ব্যাটারি এনার্জি স্টোরেজ সিস্টেম",
      "বৃষ্টির পানি সংরক্ষণ ও ওয়াটার ট্রিটমেন্ট প্ল্যান্ট",
      "স্মার্ট মাইক্রোগ্রিড ও শতভাগ বিদ্যুতের নিশ্চয়তা",
      "টেকসই ও পরিবেশবান্ধব রিসোর্ট পরিচালনা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    iconName: "Zap"
  },
  {
    id: "vip-helipad",
    title: "VIP Helipad & Air Ambulance",
    titleBn: "ভিআইপি হেলিপ্যাড ও এয়ার অ্যাম্বুলেন্স",
    tagline: "Luxury Access • Life-Saving Connectivity",
    taglineBn: "দ্রুততম যাতায়াত ও আকাশপথে জরুরি স্থানান্তরের নিশ্চয়তা",
    category: "Infrastructure & Safety",
    categoryBn: "নিরাপত্তা ও অবকাঠামো",
    badge: "Aviation Ready",
    description: "Certified private helipad providing seamless executive helicopter transfers from Dhaka/Chittagong and rapid air-evacuation preparedness.",
    descriptionBn: "ঢাকা বা চট্টগ্রাম থেকে সরাসরি ভিআইপিদের হেলিকপ্টার ড্রপ-অফ এবং জরুরি চিকিৎসা প্রয়োজনে এয়ার অ্যাম্বুলেন্স অবতরণের আন্তর্জাতিক মানের হেলিপ্যাড।",
    features: [
      "ICAO Certified On-Site VIP Helipad",
      "Rapid Air Ambulance Emergency Evacuation",
      "Executive Helicopter Guest Transfers",
      "Night-Landing Aviation Radar & Lights",
      "VIP Terminal & Luggage Concierge",
      "Seamless Intercity Air Connectivity"
    ],
    featuresBn: [
      "আন্তর্জাতিক মানসম্পন্ন প্রাইভেট হেলিপ্যাড",
      "জরুরি এয়ার অ্যাম্বুলেন্স অবতরণের সার্বক্ষণিক প্রস্তুতি",
      "ভিআইপি গেস্টদের সরাসরি হেলিকপ্টার ড্রপ ও পিকআপ",
      "নাইট-ল্যান্ডিং লাইটিং ও এভিয়েশন গিয়ার",
      "লাক্সারি এভিয়েশন লাউঞ্জ ও কনসিয়ার্জ",
      "দ্রুত ও নিরাপদ আকাশপথের যোগাযোগ"
    ],
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    iconName: "Navigation"
  },
  {
    id: "ai-security",
    title: "Integrated AI Security & Surveillance",
    titleBn: "এআই সিকিউরিটি ও সেন্ট্রাল কমান্ড সেন্টার",
    tagline: "Smart Security • Complete Peace of Mind",
    taglineBn: "আধুনিক এআই ক্যামেরা, ফেসিয়াল রিকগনিশন ও ২৪/৭ কমান্ড সেন্টার",
    category: "Infrastructure & Safety",
    categoryBn: "নিরাপত্তা ও অবকাঠামো",
    badge: "24/7 Smart Guard",
    description: "Comprehensive 24/7 perimeter shield utilizing 500+ AI-powered surveillance cameras, facial recognition access control, and rapid response units.",
    descriptionBn: "৫০০+ এআই ক্যামেরা, স্মার্ট অ্যাক্সেস কন্ট্রোল এবং সার্বক্ষণিক কেন্দ্রীয় কমান্ড সেন্টারের মাধ্যমে অতিথিদের শতভাগ নিরাপত্তা ও গোপনীয়তা নিশ্চিত।",
    features: [
      "500+ AI-Powered High-Definition CCTV Network",
      "Central Smart Command & Operations Center",
      "Facial Recognition & Smart Gate Access",
      "Automated Fire & Emergency Detection Sensor Grid",
      "Patrolling Rapid Security Response Squad",
      "Uncompromising Privacy & Asset Protection"
    ],
    featuresBn: [
      "৫০০+ আধুনিক এআই নাইট-ভিশন সিসিটিভি ক্যামেরা",
      "কেন্দ্রীয় কমান্ড ও মনিটরিং রুম",
      "স্মার্ট গেট অ্যাক্সেস ও স্বয়ংক্রিয় শনাক্তকরণ",
      "অটোমেটিক ফায়ার ও ইমার্জেন্সি সেন্সর নেটওয়ার্ক",
      "সার্বক্ষণিক পেট্রোলিং নিরাপত্তা দল",
      "অতিথিদের পূর্ণ নিরাপত্তা ও ব্যক্তিগত গোপনীয়তা"
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    iconName: "Eye"
  }
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: "Phase 01",
    phaseBn: "ফেজ - ০১",
    title: "Planning, Legal & Initial Infrastructure",
    titleBn: "পরিকল্পনা, আইনগত ডকুমেন্টেশন ও প্রাথমিক উন্নয়ন",
    timeframe: "2026 - 2027",
    timeframeBn: "২০২৬ - ২০২৭",
    status: "In Progress",
    statusBn: "চলমান",
    points: [
      "Land Acquisition & Complete Legal Documentation / Vetting",
      "125 Bigha Master Plan & Feasibility Studies",
      "Architectural & Structural Engineering Designs",
      "Government Approvals, Environmental & Fire Clearances",
      "Project Share & Construction Share Unit (CSU) Allocation",
      "Boundary Walling, Site Office & Earthwork Development"
    ],
    pointsBn: [
      "জমি অধিগ্রহণ ও ১০০% নিষ্কণ্টক আইনগত ডকুমেন্টেশন",
      "১২৫ বিঘা মাস্টার প্ল্যান ও সম্ভাব্যতা সমীক্ষা (Feasibility Study)",
      "প্রকৌশল নকশা ও আন্তর্জাতিক স্থাপত্য আর্কিটেকচার অনুমোদন",
      "পরিবেশ ও সংশ্লিষ্ট সরকারি ছাড়পত্র সংগ্রহ",
      "প্রজেক্ট শেয়ার ও কনস্ট্রাকশন শেয়ার ইউনিট বরাদ্দ শুরু",
      "সীমানা প্রাচীর, ড্রেনেজ ও প্রাথমিক অবকাঠামো উন্নয়ন"
    ]
  },
  {
    phase: "Phase 02",
    phaseBn: "ফেজ - ০২",
    title: "Core Construction & Mega Infrastructure",
    titleBn: "মূল নির্মাণ, হসপিটালিটি ও বিনোদন অবকাঠামো",
    timeframe: "2027 - 2029",
    timeframeBn: "২০২৭ - ২০২৯",
    status: "Upcoming",
    statusBn: "আসন্ন",
    points: [
      "Paved Internal Road Networks, Drainage & Lake Excavation",
      "Luxury Iconic Tower & 5-Star Hotel Structural Erection",
      "Waterfront Luxury Villas & Signature Shell Cottages Construction",
      "2,000+ Guest Grand Convention Center & Banquet Hall",
      "Giant Ocean Aquarium, Water Park & Adventure Zones",
      "Luxury Interior Finishing, Solar Grid & Landscaping Works"
    ],
    pointsBn: [
      "অভ্যন্তরীণ রাস্তা, ড্রেনেজ, ইউটিলিটি ও লেক খনন কার্যক্রম",
      "আইকনিক টাওয়ার ও ৫-তারকা হোটেলের মূল কাঠামো নির্মাণ",
      "ওয়াটারফ্রন্ট লাক্সারি ভিলা ও সিগনেচার শেল কটেজ প্রস্তুতকরণ",
      "২০০০+ আসনবিশিষ্ট গ্র্যান্ড কনভেনশন সেন্টারের নির্মাণ",
      "বিশাল ওশেন অ্যাকোয়ারিয়াম, ওয়াটার পার্ক ও জিপলাইন স্থাপন",
      "ইন্টেরিয়র ফিনিশিং, সোলার গ্রিড ও নান্দনিক ল্যান্ডস্কেপিং"
    ]
  },
  {
    phase: "Phase 03",
    phaseBn: "ফেজ - ০৩",
    title: "Testing, Grand Opening & Operational Profit Sharing",
    titleBn: "কমিশনিং, গ্র্যান্ড ওপেনিং ও বাণিজ্যিক মুনাফা বণ্টন",
    timeframe: "2029 - 2030",
    timeframeBn: "২০২৯ - ২০৩০",
    status: "Future",
    statusBn: "চূড়ান্ত ধাপ",
    points: [
      "Hospitality Systems Testing, Auditing & Commissioning",
      "International Standard Staff Recruitment & 5-Star Training",
      "Soft Opening & Beta Operational Trials with VIP Shareholders",
      "Grand Opening & Full Commercial Operations Launch",
      "Execution of Development Benefit Payout Completion",
      "Annual Hotel Operational Profit Participation Distribution"
    ],
    pointsBn: [
      "সকল রিসোর্ট রাইড, হসপিটালিটি ও নিরাপত্তা ব্যবস্থার কমিশনিং",
      "আন্তর্জাতিক মানের স্টাফ নিয়োগ ও ৫-তারকা প্রশিক্ষণ",
      "সফট ওপেনিং ও শেয়ারহোল্ডারদের জন্য পরীক্ষামূলক আতিথেয়তা",
      "জমকালো গ্র্যান্ড ওপেনিং ও পূর্ণাঙ্গ বাণিজ্যিক কার্যক্রম",
      "ডেভেলপমেন্ট বেনিফিট প্রদান সফল সমাপ্তি",
      "বার্ষিক হোটেল পরিচালন মুনাফা (ডিভিডেন্ড) বণ্টন বাস্তবায়ন"
    ]
  }
];

export const SHAREHOLDER_BENEFITS: ShareholderBenefit[] = [
  {
    id: "free-stay",
    number: "01",
    title: "Annual Complimentary Resort Stay",
    titleBn: "প্রতি বছর ফ্রী রিসোর্ট অবকাশ",
    subtitle: "3 Days / 2 Nights Every Single Year",
    subtitleBn: "প্রতি বছর ৩ দিন ২ রাত ফ্রী থাকার সুবিধা",
    description: "Enjoy a complimentary luxury 3-day/2-night vacation each year with your family in our star-class suites or villas with VIP concierge privileges.",
    descriptionBn: "প্রতি বছর পরিবারসহ ৩ দিন ২ রাত বিলাসবহুল স্যুইট বা কটেজে সম্পূর্ণ ফ্রিতে অবকাশ যাপন এবং বিশেষ ভিআইপি সেবা উপভোগের নিশ্চয়তা।",
    iconName: "Palmtree"
  },
  {
    id: "dev-benefit",
    number: "02",
    title: "24-Month Development Benefit",
    titleBn: "২৪ মাসের নিশ্চিত ডেভেলপমেন্ট বেনিফিট",
    subtitle: "Monthly Bank Payouts Up to ৳ 62,500/Month",
    subtitleBn: "প্রতি মাসে সর্বোচ্চ ৳ ৬২,৫০০ পর্যন্ত নিয়মিত ব্যাংক আয়",
    description: "Receive attractive cashflow returns during the resort construction phase, paid in 24 equal monthly installments directly into your bank account.",
    descriptionBn: "নির্মাণকালীন সময়ে আপনার বিনিয়োগের বিপরীতে ২৪টি সমান মাসিক কিস্তিতে সরাসরি ব্যাংক অ্যাকাউন্টে নিয়মিত আর্থিক সুবিধা প্রদান।",
    iconName: "Coins"
  },
  {
    id: "profit-sharing",
    number: "03",
    title: "Hotel Operational Profit Sharing",
    titleBn: "রিসোর্টের বাণিজ্যিক মুনাফা বণ্টন",
    subtitle: "Lifetime Dividend from Multi-Revenue Streams",
    subtitleBn: "আজীবন রিসোর্ট ও হোটেলের বাৎসরিক লভ্যাংশ প্রাপ্তি",
    description: "Participate in recurring operational profits from room tariffs, restaurants, banquet conventions, water parks, marina charters, and commercial leases.",
    descriptionBn: "হোটেল বুকিং, রেস্তোরাঁ, কনভেনশন হল, ওয়াটার পার্ক ও মেরিনার বাৎসরিক মোট পরিচালন মুনাফা থেকে নিয়মতান্ত্রিক ডিভিডেন্ড প্রাপ্তি।",
    iconName: "TrendingUp"
  },
  {
    id: "discounts",
    number: "04",
    title: "Exclusive Member Discounts (15% - 25%)",
    titleBn: "১৫% থেকে ২৫% বিশেষ আজীবন ডিসকাউন্ট",
    subtitle: "Special Privileges Across All Resort Facilities",
    subtitleBn: "রিসোর্টের প্রতিটি খাবারে, রুমে ও অনুষ্ঠানে বিশেষ ছাড়",
    description: "Save 15% to 25% on extra room bookings, signature villas, fine-dining restaurants, banquet halls for family weddings, and adventure park passes.",
    descriptionBn: "অতিরিক্ত রুম বুকিং, ভিলা, রেস্তোরাঁ, পারিবারিক বিয়ে ও কনভেনশন হল বুকিং এবং রাইডস-এ আজীবন ১৫% থেকে ২৫% বিশেষ ছাড়।",
    iconName: "Percent"
  },
  {
    id: "vip-membership",
    number: "05",
    title: "Lifetime Shareholder Club Membership",
    titleBn: "আজীবন শেয়ারহোল্ডার মেম্বারশিপ",
    subtitle: "Prestigious VIP Status & Priority Access",
    subtitleBn: "ভিআইপি মর্যাদা ও সকল সুযোগ-সুবিধায় অগ্রাধিকার",
    description: "Gain lifetime member status with private yacht club lounge access, VIP beach zone entry, priority booking during peak Eid & New Year seasons.",
    descriptionBn: "প্রাইভেট মেরিনা লাউঞ্জে প্রবেশাধিকার, ঈদ ও ছুটির দিনে অগ্রাধিকার বুকিং এবং বিনিয়োগকারী কমিউনিটিতে আজীবন ভিআইপি স্বীকৃতি।",
    iconName: "Crown"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "legal-ownership",
    category: "Legal & Safety",
    question: "Is the land legally registered in my name?",
    questionBn: "আমার নামে কি জমির রেজিস্ট্রি ও দলিল সম্পন্ন হবে?",
    answer: "Yes, 100%! When you invest in The Promise Hotel & Resort, the exact land portion (e.g. 48 sq.ft, 240 sq.ft, or 1 full Katha / 720 sq.ft) is transferred and registered directly in your name through a legally binding Sub-Registry Sale Deed (দলিল) and registered Power of Attorney.",
    answerBn: "হ্যাঁ, শতভাগ নিশ্চিত! আপনার কেনা জমি (যেমন ৪৮ বর্গফুট, ২৪০ বর্গফুট কিংবা ১ কাঠা/৭২০ বর্গফুট) সরাসরি আপনার নামে সাব-রেজিস্ট্রি দলিলের মাধ্যমে ১০০% মালিকানাসহ হস্তান্তর ও রেজিস্ট্রি সম্পন্ন করা হবে।"
  },
  {
    id: "development-benefit-source",
    category: "Financials",
    question: "How is the Development Benefit generated and paid?",
    questionBn: "ডেভেলপমেন্ট বেনিফিট কোথা থেকে কীভাবে প্রদান করা হয়?",
    answer: "The Development Benefit is paid strictly from the commercial monetization value of the company's 70% development rights and construction share units — NOT from new customer deposits. For example, on 1 Katha, ~700 sq.ft construction is generated. You keep 30% (200 sq.ft), while the company commercializes its 70% (500 sq.ft) to fund the project construction, infrastructure, and your 24-month development payout.",
    answerBn: "ডেভেলপমেন্ট বেনিফিট কোম্পানির ৭০% উন্নয়ন অধিকার এবং কনস্ট্রাকশন শেয়ারের বাণিজ্যিক মূল্যায়নের মাধ্যমে অর্জিত রাজস্ব থেকে প্রদান করা হয়—কোনো নতুন গ্রাহক আমানত থেকে নয়। ১ কাঠা জমিতে প্রায় ৭০০ বর্গফুট নির্মাণ সক্ষমতা তৈরি হয়, যার ৩০% (২০০ বর্গফুট) আপনি নিশ্চিত পান এবং কোম্পানি ৭০% বাণিজ্যিকভাবে বিক্রি করে আপনার ডেভেলপমেন্ট বেনিফিট ও প্রকল্পের নির্মাণ ব্যয় নির্বাহ করে।"
  },
  {
    id: "payout-method",
    category: "Financials",
    question: "How and when do I receive the monthly installments?",
    questionBn: "মাসিক কিস্তির টাকা কখন এবং কীভাবে আমার কাছে পৌঁছাবে?",
    answer: "Following the execution of your Sale Deed and Development Agreement, your Development Benefit is disbursed monthly (e.g. ৳ 62,500/month for Prestige Plan) via direct BEFTN / NPSB bank transfer or account payee cheques on the first week of every calendar month for 24 continuous months.",
    answerBn: "রেজিস্ট্রিকৃত দলিল ও ডেভেলপমেন্ট চুক্তি সম্পাদনের পর প্রতি মাসের ১ম সপ্তাহে আপনার ব্যাংক অ্যাকাউন্টে সরাসরি BEFTN / NPSB বা অ্যাকাউন্ট পেয়ী চেকের মাধ্যমে নিয়মিত ২৪ মাস যাবত মাসিক কিস্তি (যেমন প্রেষ্টিজ প্ল্যানে মাসিক ৳ ৬২,৫০০) জমা হবে।"
  },
  {
    id: "resort-stay-booking",
    category: "Lifestyle Perks",
    question: "How do I book my annual 3D/2N complimentary stay?",
    questionBn: "বাৎসরিক ৩ দিন ২ রাত ফ্রী থাকার সুবিধা কীভাবে বুক করব?",
    answer: "Shareholders receive a dedicated VIP Concierge portal and hotline. You simply submit your preferred vacation dates at least 15 days in advance (30 days during national peak holidays) to enjoy your 3 Days / 2 Nights luxury stay without any accommodation fee.",
    answerBn: "শেয়ারহোল্ডারদের জন্য নিবেদিত অনলাইন পোর্টাল ও ভিআইপি হটলাইনের মাধ্যমে অন্তত ১৫ দিন পূর্বে (পিক সিজনে ৩০ দিন পূর্বে) পছন্দের তারিখ জানালেই কোনো রুম চার্জ ছাড়াই আপনার ৩ দিন ২ রাতের অবকাশ নিশ্চিত করা হবে।"
  },
  {
    id: "resale-transfer",
    category: "Exit Strategy",
    question: "Can I sell, gift, or transfer my land and shares later?",
    questionBn: "ভবিষ্যতে কি আমি আমার জমি ও শেয়ার বিক্রি বা স্থানান্তর করতে পারব?",
    answer: "Yes. Because you hold genuine registered land title and Construction Share Units, you have the full legal right to sell, gift, or transfer your asset at prevailing market value. The company also provides secondary resale assistance to match verified institutional or individual buyers.",
    answerBn: "অবশ্যই। যেহেতু জমি আপনার নামে রেজিস্ট্রিকৃত এবং আপনি নির্মাণ শেয়ার ইউনিটের বৈধ মালিক, তাই আপনি যেকোনো সময় বাজারমূল্যে আপনার এই সম্পদ বিক্রি, হস্তান্তর বা উত্তরাধিকারীর নামে নামজারি করতে পারবেন।"
  },
  {
    id: "nri-investors",
    category: "NRI & Foreign Investors",
    question: "Can Non-Resident Bangladeshis (NRIs) invest from abroad?",
    questionBn: "প্রবাসীরা কি বিদেশ থেকে এই প্রকল্পে বিনিয়োগ করতে পারবেন?",
    answer: "Yes, we have specialized NRI investor desks with support in USD, GBP, AED, SAR, EUR, and CAD. Documentation can be executed through Bangladesh Embassies / High Commissions or designated power-of-attorney representatives with international wire transfers.",
    answerBn: "হ্যাঁ! বিশ্বের যেকোনো দেশ থেকে প্রবাসীরা সহজেই বিনিয়োগ করতে পারবেন। দূতাবাস বা পাওয়ার অব অ্যাটর্নির মাধ্যমে আইনগত কাজ সম্পন্ন করা যায় এবং আন্তর্জাতিক ব্যাংকিং চ্যানেলে পেমেন্ট ও মাসিক রিটার্ন গ্রহণ করা যায়।"
  }
];
