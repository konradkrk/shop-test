import { Module } from '@nestjs/common';
import { UsersController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  controllers: [UsersController],
})
export class AuthModule {}
