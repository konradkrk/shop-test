import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../enums/order.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  @ManyToOne(() => User, (user) => user.id)
  user_id: number;

  @Column()
  status: OrderStatus;

  @Column('int')
  total: number;

  @Column('int')
  created_at: number;

  @Column({ default: null })
  modified_at: string;
}
