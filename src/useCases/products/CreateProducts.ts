import { Prisma, PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { IProductRepository } from "../../repositories/IProductRepository";


@injectable()
export class CreateProducts{
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){}

    async handle(product: ProductDTO):Promise<Product>{
       
       const productCreated = await this.productRepository.create(product);
        

        return productCreated;
        
    }
}