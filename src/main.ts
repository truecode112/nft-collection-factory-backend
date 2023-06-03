import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NFT Collection Factory API')
    .setDescription('This api shows the endpoints for NFT collection and NFTs')
    .setVersion('1.0')
    .addTag('NFT Factory')
    .addServer('/nft-collection-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: true,
  });
  await app.listen(3333);
}
bootstrap();
