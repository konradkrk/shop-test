import { Order } from 'src/order/enties/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column('int')
  created_at: number;

  @Column({ default: null })
  modified_at: number;

  @OneToMany(() => Order, (order) => order.id)
  order: Order[]
}
