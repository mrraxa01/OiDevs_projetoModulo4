import { inject, injectable } from "tsyringe";
import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class FindById{
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){}

    async handle(id: string):Promise<Product> {
        const product = await this.productRepository.findById(id);
        if(!product)
            throw new Error("Not Found");
        return product;
    }
}