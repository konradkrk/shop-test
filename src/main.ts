import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CreateProductDto } from './product/dto/create-product.dto';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
  .setTitle('Test api example')
  .setDescription('API description')
  .setVersion('1.0')
  .addTag('REST API - test')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [CreateProductDto]}
  );
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
