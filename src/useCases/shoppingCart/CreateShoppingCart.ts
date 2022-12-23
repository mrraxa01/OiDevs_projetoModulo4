import { prisma, ShoppingCart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import { IShoppingCartItemsRepository } from "../../repositories/IShoppingCartItemsRepository";
import { IShoppingCartRepository } from "../../repositories/IShoppingCartRepository";
import { IRequestCart } from "./cartInterfaces/IRequestCart";


@injectable()
export class CreateShoppingCart{

constructor(
    @inject("ShoppingCartRepository")
    private shoppingCartRepository: IShoppingCartRepository,
    @inject("ShoppingCartItemsRepository")
    private shoppingCartItemsRepository: IShoppingCartItemsRepository
){}

async handle({idCustomer,items, totalValue}:IRequestCart):Promise<ShoppingCart>{
    //totalValue,unitValue,qtd, idProducts

    const idShoppingCart = v4();

    const shoppingCart = await this.shoppingCartRepository.create(
        idShoppingCart, idCustomer, totalValue 
    );
    if(!shoppingCart)
        throw new Error("Fail create cart!");
    
    for(let item of items){
        this.shoppingCartItemsRepository.create(
            idShoppingCart,
            item.product.id,
            item.qtd,
            item.product.price);
    }

    return shoppingCart;


}




}

