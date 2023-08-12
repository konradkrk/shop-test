import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Order } from 'src/order/enties/order.entity';
import { OneToMany } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    nullable: false,
    example: 'ilona@najlepszaKobietaNaSwiecie.com',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    type: 'string',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Ilona',
    minLength: 1,
    maxLength: 20,
    required: true,
  })
  firstName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Sejbuk',
    nullable: true,
    minLength: 1,
    maxLength: 20,
  })
  lastName: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  @ApiProperty({
    minLength: 1,
    maxLength: 20,
    required: true,
  })
  password: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  @ApiProperty({
    minLength: 1,
    maxLength: 20,
    required: true,
  })
  confirmPassword: string;
}


// nullable?: boolean;
// discriminator?: DiscriminatorObject;
// readOnly?: boolean;
// writeOnly?: boolean;
// xml?: XmlObject;
// externalDocs?: ExternalDocumentationObject;
// example?: any;
// examples?: any[] | Record<string, any>;
// deprecated?: boolean;
// type?: string;
// allOf?: (SchemaObject | ReferenceObject)[];
// oneOf?: (SchemaObject | ReferenceObject)[];
// anyOf?: (SchemaObject | ReferenceObject)[];
// not?: SchemaObject | ReferenceObject;
// items?: SchemaObject | ReferenceObject;
// properties?: Record<string, SchemaObject | ReferenceObject>;
// additionalProperties?: SchemaObject | ReferenceObject | boolean;
// patternProperties?: SchemaObject | ReferenceObject | any;
// description?: string;
// format?: string;
// default?: any;
// title?: string;
// multipleOf?: number;
// maximum?: number;
// exclusiveMaximum?: boolean;
// minimum?: number;
// exclusiveMinimum?: boolean;
// maxLength?: number;
// minLength?: number;
// pattern?: string;
// maxItems?: number;
// minItems?: number;
// uniqueItems?: boolean;
// maxProperties?: number;
// minProperties?: number;
// required?: string[];
// enum?: any[];