import { inject, injectable } from "tsyringe";
import { Product } from "@prisma/client"
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class ListProducts{
     
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){}

    async handle():Promise<Product[]>{
        const all = await this.productRepository.listAll();
        return all;
    }

}