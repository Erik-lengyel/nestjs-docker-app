import { AddIsActiveToProducts1775669171373 } from './migrations/1775669171373-AddIsActiveToProducts';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

// Імпорти сутностей (для налаштування TypeORM)
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';

// Імпорти функціональних модулів
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module'; // Твій новий модуль

import { CreateTables1700000000001 } from './migrations/1700000000001-CreateTables';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Category, Product],
      synchronize: false,
      migrationsRun: true,
      migrations: [CreateTables1700000000001,
        AddIsActiveToProducts1775669171373
      ],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: { 
            host: process.env.REDIS_HOST || 'redis', 
            port: 6379 
          },
        }),
      }),
    }),
    CategoriesModule,
    ProductsModule, // <--- Додано тут
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}