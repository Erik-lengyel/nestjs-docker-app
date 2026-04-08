import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: any): Promise<Product> {
    // Створюємо екземпляр через об'єкт, щоб уникнути плутанини з масивами
    const product = this.productRepo.create({
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock || 0,
      category: data.categoryId ? { id: data.categoryId } : null,
    } as Product); 
    
    return this.productRepo.save(product);
  }

  async update(id: number, data: any): Promise<Product> {
    const product = await this.findOne(id);
    
    if (data.categoryId) {
      product.category = { id: data.categoryId } as any;
      delete data.categoryId;
    }
    
    Object.assign(product, data);
    return this.productRepo.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepo.remove(product);
  }
}