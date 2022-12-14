import { container } from "tsyringe";
import { ProductRepository } from "../repositories/implementations/ProductRepository";
import { IProductRepository } from "../repositories/IProductRepository";
import { CreateProducts } from "../useCases/products/CreateProducts";
import { DeleteProduct } from "../useCases/products/DeleteProduct";
import { FindById } from "../useCases/products/FindById";
import { ListProducts } from "../useCases/products/ListProducts";
import { UpdateProduct } from "../useCases/products/UpdateProduct";


//repositories
container.register<IProductRepository>("ProductRepository", ProductRepository);
container.register("DeleteProduct", DeleteProduct)


//useCases 
/* container.register("ListProductsUserCase", ListProducts);
container.register("CreateProductUserCase", CreateProducts);
container.register("FindByIdUserCase", FindById);
container.register("UpdadeProducsUseCase", UpdateProduct);
 */