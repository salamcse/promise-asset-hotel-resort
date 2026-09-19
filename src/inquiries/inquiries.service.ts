import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inquiry } from './inquiry.entity';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';

@Injectable()
export class InquiriesService {
  private readonly logger = new Logger(InquiriesService.name);

  constructor(
    @InjectRepository(Inquiry)
    private readonly inquiryRepository: Repository<Inquiry>,
  ) {}

  async create(createInquiryDto: CreateInquiryDto): Promise<Inquiry> {
    const rawName = createInquiryDto.name || createInquiryDto.fullName || 'Anonymous Investor';
    const rawPhone = createInquiryDto.phone || createInquiryDto.mobileNumber || 'N/A';
    const rawEmail = createInquiryDto.email || createInquiryDto.emailId || null;
    const rawPackage = createInquiryDto.packageType || createInquiryDto.packageId || 'General Inquiry';
    const rawMessage = createInquiryDto.message || createInquiryDto.description || createInquiryDto.notes || null;
    const shareCount = createInquiryDto.shareCount ? Number(createInquiryDto.shareCount) : 1;

    this.logger.log(`📥 Processing inquiry for: ${rawName} (${rawPhone}) [${rawPackage}]`);

    const inquiry = this.inquiryRepository.create({
      name: rawName.trim().slice(0, 150),
      phone: rawPhone.trim().slice(0, 50),
      email: rawEmail ? rawEmail.trim().slice(0, 150) : null,
      packageType: rawPackage.trim().slice(0, 250),
      shareCount: isNaN(shareCount) || shareCount < 1 ? 1 : shareCount,
      message: rawMessage ? rawMessage.trim() : null,
    });

    try {
      const saved = await this.inquiryRepository.save(inquiry);
      this.logger.log(`✅ Inquiry persisted successfully with ID #${saved.id}`);
      return saved;
    } catch (err: any) {
      this.logger.error(`❌ Error saving inquiry to MySQL: ${err.message}`, err.stack);
      throw err;
    }
  }

  async findAll(): Promise<Inquiry[]> {
    return await this.inquiryRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Inquiry> {
    const inquiry = await this.inquiryRepository.findOne({ where: { id } });
    if (!inquiry) {
      throw new NotFoundException(`Inquiry with ID #${id} not found`);
    }
    return inquiry;
  }

  async update(id: number, updateInquiryDto: UpdateInquiryDto): Promise<Inquiry> {
    const inquiry = await this.findOne(id);
    Object.assign(inquiry, updateInquiryDto);
    return await this.inquiryRepository.save(inquiry);
  }

  async remove(id: number): Promise<{ success: boolean; message: string }> {
    const result = await this.inquiryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Inquiry with ID #${id} not found`);
    }
    return { success: true, message: `Inquiry #${id} successfully deleted` };
  }
}
