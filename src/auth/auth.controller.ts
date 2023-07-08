import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { User } from './../users/user.entity';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('login')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Logowanie', description: '', tags: ['Auth'] })

  create(@Body() authDto: AuthDto): Promise<User> {
    return this.authService.findOne(authDto.email, authDto.password);
  }

}
