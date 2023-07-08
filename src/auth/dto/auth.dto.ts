import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    nullable: false,
    example: 'ilona@najlepszaKobietaNaSwiecie.com',
    type: 'string',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    minLength: 1,
    maxLength: 20,
    example: 'tajne haslo',
    required: true,
  })
  password: string;
}