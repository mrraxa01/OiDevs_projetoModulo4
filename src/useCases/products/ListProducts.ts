import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../repositories/implementations/ProductRepository";

export class ListProducts{
    private productRepository = new ProductRepository();
    constructor(){}

    async handle():Promise<Product[]>{
        const all = this.productRepository.listAll();
        return all;
    }

}