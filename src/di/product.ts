import { container } from "tsyringe";
import { ProductRepository } from "../repositories/implementations/ProductRepository";
import { IProductRepository } from "../repositories/IProductRepository";
import { CreateProducts } from "../useCases/products/CreateProducts";
import { ListProducts } from "../useCases/products/ListProducts";

//repositories
container.register<IProductRepository>("ProductRepository", ProductRepository);

//Usecases
container.register("ListProductsUserCase", ListProducts);
container.register("CreateProductUserCase", CreateProducts);