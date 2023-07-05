import { OrderItem } from 'src/order/enties/order-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('int')
  price: number;

  @Column('text')
  description: string;

  @Column('int')
  quantity: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.id)
  orderItem: OrderItem[]
}
