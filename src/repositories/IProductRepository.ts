import { ProductDTO } from "../domain/dto/ProductDTO";
import { Product } from "@prisma/client";

interface IProductRepository{
    create(product:ProductDTO):Promise<Product>;
    listAll():Promise<Product[]>;
    findById(id:string):Promise<Product|null>;
    update(product:Product):Promise<Product>;
    delete(id:string): Promise<void>;
}
export {IProductRepository}