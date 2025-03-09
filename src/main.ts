import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://main.d288zmy9qlsxi0.amplifyapp.com/',
    methods: '*',
  });
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
