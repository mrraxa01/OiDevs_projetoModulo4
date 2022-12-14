import { Request, Response } from "express";
import { ProductDTO } from "../domain/dto/ProductDTO";
import { CreateProducts } from "../useCases/products/CreateProducts";
import { ListProducts } from "../useCases/products/ListProducts";
import { container } from "tsyringe";


class ProductController{
    
    async listAll(request: Request, response: Response): Promise<Response>{
        const useCase = container.resolve(ListProducts)
        const products = await useCase.handle();
       return response.json(products);


    }
    // Request<{route params},{response body},{parametro generico}>, abaixo vamos ignorar os 2 primeiros,
    // e selecionar apenas o DTO
    async create(request: Request<{}, {}, ProductDTO>, response: Response): Promise<Response>{
        const useCase = container.resolve(CreateProducts);
        const productToSave = request.body;
        const product = await useCase.handle(productToSave);
        return response.status(201).json(product).send();
    }
}
export {ProductController}