import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Delete, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ApiOperation } from '@nestjs/swagger';
import { Product } from '../enties/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'Pobieranie produktów', description: '', tags: ['Product'] })
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Pobieranie produktu', description: '', tags: ['Product'] })
    find(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Dodawanie nowego produktu', description: '', tags: ['Product'] })
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update nowego produktu', description: '', tags: ['Product'] })
    async update(@Param('id', ParseIntPipe) id: number, @Body() createProductDto: CreateProductDto): Promise<void> {
  
      const product = await this.productService.findOne(id);
  
      if(!product) {
        throw new HttpException('Nie znaleziono produktu', HttpStatus.NOT_FOUND);
      }
  
      return this.productService.update(id, {...product, ...createProductDto});
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Usuowanie produktu', description: '', tags: ['Product'] })
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.productService.remove(id);
    }
}
