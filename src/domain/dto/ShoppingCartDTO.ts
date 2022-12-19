import { Customer } from "../entities/Customers";
import { Product } from "../entities/Product";

export class ShoppingCartDTO{
    private id: string;
    private customer: Customer;
    private products: Product[];


}