import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inquiry } from './inquiry.entity';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';

@Injectable()
export class InquiriesService {
  constructor(
    @InjectRepository(Inquiry)
    private readonly inquiryRepository: Repository<Inquiry>,
  ) {}

  async create(createInquiryDto: CreateInquiryDto): Promise<Inquiry> {
    const inquiry = this.inquiryRepository.create({
      ...createInquiryDto,
      shareCount: createInquiryDto.shareCount || 1,
      packageType: createInquiryDto.packageType || 'General Inquiry',
    });
    return await this.inquiryRepository.save(inquiry);
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
