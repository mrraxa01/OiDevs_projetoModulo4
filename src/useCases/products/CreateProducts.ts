import { Prisma, PrismaClient } from "@prisma/client";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../repositories/implementations/ProductRepository";


export class CreateProducts{
    private productRepository =  new ProductRepository();
    constructor(){}

    async handle(product: ProductDTO):Promise<Product>{
       
       const productCreated =  this.productRepository.create(product);
        

        return productCreated;
        
    }
}