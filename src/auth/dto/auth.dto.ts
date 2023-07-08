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
  @Min(1)
  @Max(20)
  @IsString()
  @ApiProperty({
    minLength: 1,
    maxLength: 20,
    required: true,
  })
  password: string;
}