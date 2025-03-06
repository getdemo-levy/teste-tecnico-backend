import { Injectable, Module } from '@nestjs/common';
import {
  SequelizeModule,
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { models } from 'src/infra/database/models/models';

@Injectable()
class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'sqlite',
      storage: this.configService.get<string>('SQLITE_PATH') || 'database.sqlite',
      autoLoadModels: true,
      logging: false,
      synchronize: true,
      define: {
        timestamps: false,
      },
    };
  }
}

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    SequelizeModule.forFeature(models),
  ],
  providers: [SequelizeConfigService],
  exports: [SequelizeModule],
})
export class DatabaseModule { }