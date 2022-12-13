import { Request, Response } from "express";
import { productsRoutes } from "../routes/products.routes";
import { ProductDTO } from "../domain/dto/ProductDTO";
import { Product } from "../domain/entities/Product";

import { CreateProducts } from "../useCases/products/CreateProducts";
import { ListProducts } from "../useCases/products/ListProducts";


class ProductController{
    
    async listAllProducts(request: Request, response: Response): Promise<Response>{
        const listProducts = new ListProducts();
        const products = await listProducts.handle();
        console.log(products);
        return response.json(products);


    }

    async createProduct(request: Request, response: Response): Promise<Response>{
        const createProduct = new CreateProducts();
        const {description, price, stock} = request.body;
            
        const product = await createProduct.handle(new ProductDTO(description, parseFloat(price), parseInt(stock)));
        return response.status(201).json(product).send();
    }
}
export {ProductController}