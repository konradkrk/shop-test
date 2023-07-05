import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/product/enties/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  @ManyToMany(() => Order, (order) => order.id)
  order_id: number;

  @Column('int') // klucz obcy
  @ManyToMany(() => Product, (product) => product.id)
  item_id: number;

  @Column('int')
  price: number;

  @Column('int')
  quantity: number;
}
