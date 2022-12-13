import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../IProductRepository";

const prisma = new PrismaClient();

class ProductRepository implements IProductRepository {

    async create(product: ProductDTO): Promise<Product> {
       const productCreated = await prisma.product.create({
        data: {
            id: v4(),
            ... product,
            },
       }); 
       return productCreated;
    }

    async listAll(): Promise<Product[]> {
       const allProducts = await prisma.product.findMany();
       return allProducts;
    }
}
export {ProductRepository}