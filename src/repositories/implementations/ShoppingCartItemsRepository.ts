import { PrismaClient, ShoppingCartItems } from "@prisma/client";
import { inject } from "tsyringe";


class ShoppingCartItemsRepository implements ShoppingCartItemsRepository{

    constructor(
        @inject("PrismaClient")
        private readonly prisma: PrismaClient
     ){}
    
     async create(shoppingCartId: string, productId: string, qtd: number, unitValue: number):Promise<ShoppingCartItems>{

        const shoppingCartItems = await this.prisma.shoppingCartItems.create({
            data: {
                shoppingCartId,
                productId,
                qtd,
                unitValue

            }
        });

        return shoppingCartItems;

     }

}
export { ShoppingCartItemsRepository}