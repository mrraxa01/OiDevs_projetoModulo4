import { Product, ShoppingCart } from "@prisma/client"

interface IShoppingCartRepository{

    create(shoppingCartId:string, customerId:string, totalValue:number):Promise<ShoppingCart>;
    listAll():Promise<ShoppingCart[]>;
    findByCustomer(customerId:string):Promise<ShoppingCart[]|null>;

}
export {IShoppingCartRepository}