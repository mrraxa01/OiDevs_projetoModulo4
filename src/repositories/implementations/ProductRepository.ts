import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Product } from "../../domain/entities/Product";
import { productIdValidation } from "../../validators/ProductValidators";
import { IProductRepository } from "../IProductRepository";

//const prisma = new PrismaClient();

@injectable()
class ProductRepository implements IProductRepository {

   constructor(
      @inject("PrismaClient")
      private readonly prisma: PrismaClient
   ){}

    async create(product: Omit<ProductDTO, "id"> ): Promise<Product> {
       const productCreated = await this.prisma.product.create({
        data: {
            id: v4(),
            ... product,
            },
       }); 
       return productCreated;
    }

    async listAll(): Promise<Product[]> {
       const allProducts = await this.prisma.product.findMany();
       return allProducts;
    }

   async findById(id: string): Promise<Product | null> {
      return await this.prisma.product.findFirst({
         where: {
            id: id,
         },
      });  
   }

   async update(product: Product): Promise<Product> {
      const updatedProduct = await this.prisma.product.update({
         data: product,
         where: {
            id: product.id
         },
      });
      return updatedProduct;
   }

   
   async delete(id: string): Promise<void> {
     
      await this.prisma.product.delete({
         where:{
            id:id
         }
      });
   }


}
export {ProductRepository}