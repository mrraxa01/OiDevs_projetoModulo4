import { Product } from "./Product";
import { Customer } from "./Customers";

class ShoppingCarts{

    private id: string;
    private customer?: Customer;
    private products?: Product[];

}
export {ShoppingCarts}