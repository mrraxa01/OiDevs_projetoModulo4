import { inject, injectable } from "tsyringe";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Product } from "@prisma/client";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class UpdateProduct{
    constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
){}

async handle(product: ProductDTO):Promise<Product>{
    const productExist = await this.checkIfProductExist(product.id);

    if(!productExist)
        throw new Error("Not Found!");
    
    const updatedProduct = await this.productRepository.update(product);
    return updatedProduct;
}


private async checkIfProductExist(id: string): Promise<boolean>{
    const existingProduct = await this.productRepository.findById(id);
    const productExist = !!existingProduct;
    return productExist;
}
}