import { ProductDTO } from "../domain/dto/ProductDTO";
import { Product } from "../domain/entities/Product";

interface IProductRepository{
    create(product:ProductDTO):Promise<Product>;
    listAll():Promise<Product[]>;
}
export {IProductRepository}