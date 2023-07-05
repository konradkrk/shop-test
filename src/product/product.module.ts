import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './enties/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [ProductService],
  controllers: [ProductController],
  providers: [ProductService ]
})
export class ProductModule {}
