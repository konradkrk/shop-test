import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusUserDto } from './dto/status-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Dodawanie nowego uzytkowniak', description: '', tags: ['User'] })
  // @ApiResponse({
  //     status: 201,
  //     description: 'Reason Code is Saved Successfully.'
  // })  
  // @ApiResponse({
  //   status: 403,
  //   description: 'Forbiden'
  // })  
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    if(createUserDto.password !== createUserDto.confirmPassword) {
      throw new HttpException('Hasla sie rozniz', HttpStatus.FORBIDDEN);
    }

    return this.usersService.create(createUserDto);
  }

  @Patch('activate-user/:id')
  @ApiOperation({ summary: 'Aktywowanie uzytkownika', description: '', tags: ['User'] })
  async activate(@Param('id', ParseIntPipe) id: number, @Body() statusUserDto: StatusUserDto): Promise<void> {
    let user = await this.usersService.findOne(id);

    user.isActive = statusUserDto.activate
    return this.usersService.changeStatus(id, user);
  }

  @Get()
  @ApiOperation({ summary: 'Pobieranie wszystkich uzytkownikow', description: '', tags: ['User'] })
  findAll(): Promise<User[]> {
    console.log('get');
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobieranie uzytkowniak o podanym id', description: '', tags: ['User'] })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuowanie uzytkowniak', description: '', tags: ['User'] })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
