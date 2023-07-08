import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql74.lh.pl',
      port: 3306,
      username: 'serwer128975_testy',
      password: 'Konrad1!',
      database: 'serwer128975_testy',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    OrderModule,
    ProductModule,
    AuthModule
  ],
})
export class AppModule {}