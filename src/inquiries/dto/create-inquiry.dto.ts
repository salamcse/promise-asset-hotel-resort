import {
  IsOptional,
  IsString,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateInquiryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  emailId?: string;

  @IsOptional()
  @IsString()
  packageType?: string;

  @IsOptional()
  @IsString()
  packageId?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  shareCount?: number;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
