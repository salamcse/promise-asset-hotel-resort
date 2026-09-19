import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { InquiriesService } from './inquiries.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';

@Controller('inquiries')
export class InquiriesController {
  constructor(private readonly inquiriesService: InquiriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createInquiryDto: CreateInquiryDto) {
    const inquiry = await this.inquiriesService.create(createInquiryDto);
    return {
      success: true,
      message: 'Your inquiry has been registered successfully. Our luxury investment advisors will reach out shortly.',
      data: inquiry,
    };
  }

  @Get()
  async findAll() {
    const inquiries = await this.inquiriesService.findAll();
    return {
      success: true,
      count: inquiries.length,
      data: inquiries,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const inquiry = await this.inquiriesService.findOne(id);
    return {
      success: true,
      data: inquiry,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInquiryDto: UpdateInquiryDto,
  ) {
    const inquiry = await this.inquiriesService.update(id, updateInquiryDto);
    return {
      success: true,
      message: 'Inquiry updated successfully',
      data: inquiry,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.inquiriesService.remove(id);
  }
}
