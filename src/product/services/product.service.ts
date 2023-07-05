import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../enties/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}
    
    create(createProductDto: CreateProductDto): Promise<Product> {
        const product = new Product();
        product.name = createProductDto.name;
        product.description = createProductDto.description;
        product.price = createProductDto.price;
        product.quantity = createProductDto.quantity;
    
        return this.productRepository.save(product);
      }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async update(id: number, user: Product): Promise<void> {
        await this.productRepository.update(id, user);
      }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }

    async findByIds(id: number[]): Promise<Product[]> {
        return await this.productRepository.createQueryBuilder('product')
            .where("product.id IN (:id)", { id: id })
            .getMany();
    }
    
}
