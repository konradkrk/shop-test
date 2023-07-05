import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { Order } from './enties/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './enties/order-item.entity';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/services/product.service';
import { Product } from 'src/product/enties/product.entity';

@Module({
  imports: [ProductModule, TypeOrmModule.forFeature([Order, OrderItem, Product])],
  controllers: [OrderController],
  providers: [OrderService, ProductService ],
})
export class OrderModule {}
