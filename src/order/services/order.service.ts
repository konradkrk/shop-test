import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../enties/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Product } from 'src/product/enties/product.entity';
import { OrderItem } from '../enties/order-item.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly ordersRepository: Repository<Order>,
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>,
    ) {}

    
    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = new Order();
        order.user_id = createOrderDto.user_id;
        order.status = createOrderDto.status;
        order.total = createOrderDto.total;
        order.created_at = Math.floor(Date.now() / 1000);
        
        const orderSave: Order = await this.ordersRepository.save(order);

        createOrderDto.productList.forEach((productOrder: {productId: number, price: number, quantity: number}) => {
            const orderItem = {order_id: orderSave.id, item_id: productOrder.productId, price: productOrder.price, quantity: productOrder.quantity}
            this.orderItemRepository.save(orderItem);
        });
         
        return orderSave;    
      }

    async findAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    async update(id: number, user: Order): Promise<void> {
        await this.ordersRepository.update(id, user);
    }

    findOne(id: number): Promise<Order> {
        return this.ordersRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.ordersRepository.delete(id);
    }
}
