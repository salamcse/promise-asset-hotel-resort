import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inquiry } from './inquiries/inquiry.entity';
import { InquiriesModule } from './inquiries/inquiries.module';
import { AiAdvisorModule } from './ai-advisor/ai-advisor.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', '127.0.0.1'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'root'),
        database: configService.get<string>('DB_DATABASE', 'promise_resort'),
        entities: [Inquiry],
        synchronize: configService.get<string>('DB_SYNCHRONIZE', 'true') === 'true',
        logging: false,
      }),
    }),
    InquiriesModule,
    AiAdvisorModule,
    HealthModule,
  ],
})
export class AppModule {}
