import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty} from 'class-validator';

export class StatusUserDto {
  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    example: 'true',
    required: true,
  })
  activate: boolean;
}