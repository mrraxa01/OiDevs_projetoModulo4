import { Request, Response } from "express";
import { ProductDTO } from "../domain/dto/ProductDTO";
import { CreateProducts } from "../useCases/products/CreateProducts";
import { ListProducts } from "../useCases/products/ListProducts";
import { container } from "tsyringe";


class ProductController{
    
    async listAllProducts(request: Request, response: Response): Promise<Response>{
        const useCase = container.resolve(ListProducts)
        const products = await useCase.handle();
        console.log(products);
        return response.json(products);


    }

    async createProduct(request: Request, response: Response): Promise<Response>{
        const useCase = container.resolve(CreateProducts);
        const {description, price, stock} = request.body;
            
        const product = await useCase.handle(new ProductDTO(description, parseFloat(price), parseInt(stock)));
        return response.status(201).json(product).send();
    }
}
export {ProductController}