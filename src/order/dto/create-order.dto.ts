import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { Product } from 'src/product/enties/product.entity';
import { OrderStatus } from '../enums/order.enum';

export class CreateOrderDto {

  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    type: Number,
    required: true,
  })
  user_id: number;

  @IsNotEmpty()
  @Min(3)
  @Max(255)
  @IsString()
  @ApiProperty({
    example: 'nowe',
    name: 'status',
    enum: OrderStatus,
    required: true,
  })
  status: OrderStatus;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    example: '455',
    type: Number,
    description: 'Cena w groszach np 455 to 4.55',
    nullable: false,
  })
  total: number;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    type: 'array',
    required: true,
    example: [{productId: 2, price: 2345, quantity: 3}, {productId: 1, price: 2345, quantity: 3}],
    description: 'Pamiętaj musisz podać tablicę obiektów. W tablicy mają się znaleźć obiekty z productId, price oraz ilośćią {productId: 2, price: 234, quantity: 1}  ',
  })
  productList: {productId: number, price: number, quantity: number}[];

}

// id: number;
// name: string;
// price: number;
// description: string;
// quantity: number;

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