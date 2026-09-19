import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AiAdvisorService } from './ai-advisor.service';
import { ChatAdvisorDto } from './dto/chat-advisor.dto';

@Controller('ai-advisor')
export class AiAdvisorController {
  constructor(private readonly aiAdvisorService: AiAdvisorService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async chat(@Body() chatDto: ChatAdvisorDto) {
    const result = await this.aiAdvisorService.getAdvice(chatDto);
    return {
      reply: result.reply,
      source: result.source,
    };
  }
}
