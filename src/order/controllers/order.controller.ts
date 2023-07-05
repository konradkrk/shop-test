import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { Order } from '../enties/order.entity';
import { ApiOperation } from '@nestjs/swagger';
import { CreateOrderDto } from '../dto/create-order.dto';
import { ProductService } from 'src/product/services/product.service';
import { Product } from 'src/product/enties/product.entity';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService, private readonly productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'Pobieranie zamowień', description: '', tags: ['Order'] })
    findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Pobieranie zamowienia', description: '', tags: ['Order'] })
    find(@Param('id', ParseIntPipe) id: number): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Dodawanie nowego zawowienia', description: '', tags: ['Order'] })
    async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        const ids = createOrderDto.productList.map((value) => value.productId);
        const products = await this.productService.findByIds(ids);

        let sum = 0;

        await products.forEach((product: Product) => {
            const index = createOrderDto.productList.findIndex((value) => value.productId = product.id);
            sum = createOrderDto.productList[index].quantity * product.price;
        })

        if(sum !== createOrderDto.total) {
            throw new HttpException('Suma zamówienia jest różna niż suma wszystkich produktów', HttpStatus.BAD_REQUEST);
        }


        return this.orderService.create(createOrderDto);
    }
}
