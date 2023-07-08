import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
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

  async create(@Body() authDto: AuthDto): Promise<User> {
    const user = await this.authService.findOne(authDto.email, authDto.password);

    if(!user) {
      throw new HttpException('email lub hasło nipoprawne', HttpStatus.UNAUTHORIZED)
    }

    return user;
  }

}
