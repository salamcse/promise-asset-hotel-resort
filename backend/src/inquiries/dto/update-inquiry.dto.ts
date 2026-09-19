import { IsEnum, IsOptional, IsString } from 'class-validator';
import { InquiryStatus } from '../inquiry.entity';

export class UpdateInquiryDto {
  @IsOptional()
  @IsEnum(InquiryStatus)
  status?: InquiryStatus;

  @IsOptional()
  @IsString()
  message?: string;
}
