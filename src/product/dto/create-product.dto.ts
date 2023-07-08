import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsOptional()
  @ApiProperty({
    example: 1,
    required: false,
  })
  id?: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @IsString()
  @ApiProperty({
    example: 'Super produkt',
    minLength: 3,
    maxLength: 255,
    required: true,
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    example: 455,
    description: 'Cena w groszach np 455 to 4.55',
    nullable: false,
  })
  price: number;
  

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @IsString()
  @ApiProperty({
    example: 'Opis produktu',
    minLength: 3,
    maxLength: 255,
    required: true,
  })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    example: 5,
    description: 'Ilość w magazynie',
    nullable: false,
  })
  quantity: number;
}