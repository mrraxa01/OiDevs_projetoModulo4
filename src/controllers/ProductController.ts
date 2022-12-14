import { Request, Response } from "express";
import { ProductDTO } from "../domain/dto/ProductDTO";
import { CreateProducts } from "../useCases/products/CreateProducts";
import { ListProducts } from "../useCases/products/ListProducts";
import { container } from "tsyringe";
import { UpdateProduct } from "../useCases/products/UpdateProduct";
import { FindById } from "../useCases/products/FindById";
import { DeleteProduct } from "../useCases/products/DeleteProduct";


class ProductController{
    
    async listAll(request: Request, response: Response): Promise<Response>{
        const useCase = container.resolve(ListProducts)
        const products = await useCase.handle();
       return response.json(products);


    }

    async findById(request: Request<{id:string}>, response: Response){
        const {id} = request.params;
        const userCase = container.resolve(FindById);
        const product = await userCase.handle(id);
        return response.status(200).json(product).send();

    }
    // Request<{route params},{response body},{parametro generico}>, abaixo vamos ignorar os 2 primeiros,
    // e selecionar apenas o DTO
    async create(request: Request<{}, {}, ProductDTO>, response: Response): Promise<Response>{
        const useCase = container.resolve(CreateProducts);
        const productToSave = request.body;
        const product = await useCase.handle(productToSave);
        return response.status(201).json(product).send();
    }

    async update(request: Request<{id:string},{}, Omit<ProductDTO, "id">>, response: Response){
        const useCase = container.resolve(UpdateProduct);
        const{ id } = request.params;
        
        const productToUpdate = request.body;
        const productUpdated = await useCase.handle({
            id: id,
            ... productToUpdate
        });
        return response.status(200).json(productUpdated).send();
    }

    async delete(request: Request<{id: string}>, response: Response){
        const useCase = container.resolve(DeleteProduct);
        const {id} = request.params;
        const result = await useCase.handle(id);
        return response.status(204).json(result);
    }
}
export {ProductController}