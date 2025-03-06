import { Module } from '@nestjs/common';
import { HealthController } from 'src/health/health.controller';
import { DatabaseModule } from './database.module';
import { PinoLoggerModule } from './logger.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from 'src/configs/database/database.config';
import { FrameModule } from './frame.module';
import { DemoModule } from './demo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
      ],
    }),
    PinoLoggerModule,
    DatabaseModule,
    FrameModule,
    DemoModule,
  ],
  controllers: [HealthController],
  providers: [],
  exports: [],
})
export class AppModule { }