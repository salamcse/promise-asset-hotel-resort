import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateInquiryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  packageType?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  shareCount?: number;

  @IsOptional()
  @IsString()
  message?: string;
}
