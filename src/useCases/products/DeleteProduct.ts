import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class DeleteProduct{
    constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
){}
    
    async handle(id: string):Promise<string>{
      
       if(!await this.checkIfProductExist(id))
            throw new Error("Not found") 
        
        await this.productRepository.delete(id);   

        return "Delete Success!"
    }


    private async checkIfProductExist(id: string): Promise<boolean>{
        const existingProduct = await this.productRepository.findById(id);
        const productExist = !!existingProduct;
        return productExist;
    }
}