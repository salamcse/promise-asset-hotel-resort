import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async checkHealth() {
    const isDbConnected = this.dataSource.isInitialized;
    return {
      status: 'ok',
      service: 'The Promise Hotel & Resort Backend (NestJS)',
      database: isDbConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
