import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  Logger.log(`🚀  Server is listening on port ${PORT!}`, 'Bootstrap', false);
}
bootstrap();
