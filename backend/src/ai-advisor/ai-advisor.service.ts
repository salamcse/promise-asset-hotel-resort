import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
import { ChatAdvisorDto } from './dto/chat-advisor.dto';

const SYSTEM_PROMPT = `You are the official AI Senior Investment Consultant for "The Promise Hotel & Resort" developed by "Promise Assets Ltd." in Bangladesh (along the iconic Marine Drive Bay of Bengal coastal area).

Your role is to assist potential investors, NRIs (Non-Resident Bangladeshis), and hospitality enthusiasts with accurate, transparent, and encouraging financial and project information based directly on the project's official 125 Bigha Master Plan and Development Benefit Program.

KEY FACTS ABOUT THE PROMISE HOTEL & RESORT:
- Developer: Promise Assets Ltd.
- Tagline: "Own Land. Build Wealth. Enjoy Resort Lifestyle." / "নিজের জমি, নিশ্চিত রিটার্ন, রিসোর্ট লাইফস্টাইল - সবকিছু একসাথে"
- Location: Prime coastal beach location on Marine Drive Road, Bangladesh facing the Bay of Bengal.
- Total Land: 125 Bigha Master Development
  * Built-up Construction Area: 35% (~43 Bigha, range 30-40% / 37.5 - 50 Bigha)
  * Open Space, Greenery, Water Bodies & Landscapes: 65% (~82 Bigha, range 60-70% / 75 - 87.5 Bigha) - Sustainable luxury balance.

INVESTMENT PACKAGES:
1. EXPLORER PLAN:
   - Package Price: ৳ 1,00,000 (Special offer, Base ৳ 2,00,000)
   - Land Ownership: 48 Sq.ft (~0.11 Decimal)
   - Construction Share: 10 Sq.ft (1 Share)
   - Development Benefit: Up to ৳ 1,00,000
   - Membership: Project Shareholder
   - Perks: 3D/2N complimentary stay annually, resort and beach access, member discounts.

2. SIGNATURE PLAN (Most Popular):
   - Package Price: ৳ 5,00,000 (Special offer, Base ৳ 10,00,000)
   - Land Ownership: 240 Sq.ft (~0.55 Decimal)
   - Construction Share: 50 Sq.ft (5 Shares)
   - Development Benefit: Up to ৳ 5,00,000
   - Membership: Project Shareholder
   - Perks: 3D/2N complimentary stay annually, 15%-25% discounts on rooms/villas/F&B/events, referral & investor bonuses.

3. PRESTIGE PLAN (VIP & Maximum Return):
   - Package Price: ৳ 15,00,000 (Special offer, Base ৳ 30,00,000)
   - Land Ownership: 720 Sq.ft (1 Katha ≈ 1.65 Decimal)
   - Construction Share: 200 Sq.ft (20 Shares)
   - Development Benefit: ৳ 15,00,000 paid in 24 equal monthly installments of ৳ 62,500/month!
   - Membership: Premium Shareholder & VIP Member
   - Perks: 3D/2N Luxury stay every year, lifetime VIP club privileges, hotel profit sharing, priority booking.

HOW THE 30:70 DEVELOPMENT BUSINESS MODEL WORKS:
1. Investor purchases land with 100% registered ownership in their name (Registered Sale Deed).
2. Investor executes Development Agreement & Power of Attorney granting 70% commercial development rights to the company.
3. Example on 1 Katha: Generates ~700 sq.ft total construction potential.
   - Investor receives 30% = 200 sq.ft construction share (assured entitlement)
   - Company receives 70% = 500 sq.ft construction + land rights.
4. Company funds 100% of construction, marketing, and operations at its own cost and risk.
5. Company monetizes its 70% share through sales and resort operations; Development Benefit is paid from this commercial monetization (NOT from customer deposits).
6. Multi-revenue streams include: 5-Star Hotel, Waterfront Villas, Shell Cottages, Convention Hall (2,000+ pax), Grand Aquarium, Water Park, Adventure Park, Marina & Yacht Club, International Food Court, Commercial Leasing.

PROJECT TIMELINE:
- Phase 1 (2026-2027): Planning, legal documentation, master plan, engineering approvals, share allocation.
- Phase 2 (2027-2029): Infrastructure, 5-star hotel, villas, cottages, convention center, landscaping.
- Phase 3 (2029-2030): Testing & commissioning, soft opening, grand opening, full operational profit sharing.

GUIDELINES FOR ANSWERS:
- Be polite, professional, financial-savvy, and transparent.
- Respond in the language used by the user (Bangla or English).
- When asked about calculations, show clear step-by-step numbers (e.g. monthly installment, ROI, land size in sq.ft & Katha/Decimal).
- Highlight security features: 100% registered land in investor's name, registered legal deed, force majeure clauses.`;

@Injectable()
export class AiAdvisorService {
  private readonly logger = new Logger(AiAdvisorService.name);
  private aiClient: GoogleGenAI | null = null;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      try {
        this.aiClient = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });
      } catch (err) {
        this.logger.warn(`Failed to initialize GoogleGenAI: ${err}`);
      }
    }
  }

  async getAdvice(dto: ChatAdvisorDto): Promise<{ reply: string; source: 'gemini' | 'knowledge_base' }> {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');

    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && this.aiClient) {
      try {
        const contents: any[] = [];
        if (Array.isArray(dto.history)) {
          for (const item of dto.history.slice(-6)) {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }],
            });
          }
        }

        const langInstruction = dto.language === 'bn' ? '\nPlease answer in Bengali (বাংলা) with clear professional terminology.' : '';
        contents.push({
          role: 'user',
          parts: [{ text: dto.message + langInstruction }],
        });

        const res = await this.aiClient.models.generateContent({
          model: 'gemini-2.5-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.7,
          },
        });

        const reply = res.text?.trim();
        if (reply) {
          return { reply, source: 'gemini' };
        }
      } catch (error) {
        this.logger.warn(`Gemini API error, falling back to knowledge base: ${error}`);
      }
    }

    // High quality contextual fallback responses based on inquiry intent
    const lower = dto.message.toLowerCase();
    let reply = '';

    if (lower.includes('price') || lower.includes('cost') || lower.includes('দাম') || lower.includes('প্যাকেজ') || lower.includes('package')) {
      reply = `The Promise Hotel & Resort offers 3 transparent investment packages:
1. **Explorer Plan**: ৳ 1,00,000 (48 sq.ft land, 10 sq.ft construction share, up to ৳ 1,00,000 benefit).
2. **Signature Plan**: ৳ 5,00,000 (240 sq.ft land, 50 sq.ft construction share, up to ৳ 5,00,000 benefit).
3. **Prestige Plan**: ৳ 15,00,000 (1 Katha / 720 sq.ft land, 200 sq.ft construction share, ৳ 15,00,000 development benefit paid in 24 monthly installments of ৳ 62,500/month!).

All packages include registered land ownership, 3D/2N free stay annually, and shareholder privileges!`;
    } else if (lower.includes('security') || lower.includes('safe') || lower.includes('নিরাপদ') || lower.includes('দলিল')) {
      reply = `Your investment is 100% secure through:
1. **Registered Land Ownership**: Land is registered directly in your name via Registered Sale Deed and Power of Attorney.
2. **30:70 Development Structure**: The company develops at its own cost and risk.
3. **Guaranteed Construction Share**: You receive guaranteed construction share entitlement (e.g. 200 sq.ft on 1 Katha).
4. **Transparent Payouts**: Monthly development benefits paid directly to your bank account.`;
    } else if (lower.includes('timeline') || lower.includes('সময়') || lower.includes('কখন')) {
      reply = `Project Timeline:
- **Phase 01 (2026-2027)**: Master planning, legal documentation, land registration & share booking.
- **Phase 02 (2027-2029)**: Full construction of Iconic Tower, 5-Star Hotel, Villas, Water Park & Convention Center.
- **Phase 03 (2029-2030)**: Grand opening, full commercial operations & hotel profit participation!`;
    } else {
      reply = `Welcome to **The Promise Hotel & Resort**! We offer a unique real estate investment model where you get 100% registered land ownership (from 48 sq.ft up to 1 Katha), construction share units, attractive 24-month development benefits (up to ৳ 62,500/mo), and lifetime 3D/2N annual complimentary resort stays. How can I assist your investment journey today?`;
    }

    return { reply, source: 'knowledge_base' };
  }
}
