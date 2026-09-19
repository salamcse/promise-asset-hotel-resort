import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiAdvisorController } from './ai-advisor.controller';
import { AiAdvisorService } from './ai-advisor.service';

@Module({
  imports: [ConfigModule],
  controllers: [AiAdvisorController],
  providers: [AiAdvisorService],
  exports: [AiAdvisorService],
})
export class AiAdvisorModule {}
