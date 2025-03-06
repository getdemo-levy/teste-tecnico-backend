import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { pinoLoggerConfig } from 'src/configs/logger/pino-logger.config';

@Module({
  imports: [LoggerModule.forRoot(pinoLoggerConfig)],
  exports: [LoggerModule],
})
export class PinoLoggerModule {}
