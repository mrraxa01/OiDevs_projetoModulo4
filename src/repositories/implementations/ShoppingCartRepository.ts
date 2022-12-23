import { PrismaClient, Product, ShoppingCart } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import { IShoppingCartRepository } from "../IShoppingCartRepository";

@injectable()
class ShoppingCartRepository implements IShoppingCartRepository{

    constructor(
        @inject("PrismaClient")
        private readonly prisma: PrismaClient
     ){}

    async create(shoppingCartId:string, customerId: string, totalValue: number): Promise<ShoppingCart> {

        const shoppingCart =  await this.prisma.shoppingCart.create({
            data: {
                id : shoppingCartId,
                customerId,
                totalValue

            },
            include:{
                items: true
            }

            
        });
        return shoppingCart;
    }
    async listAll(): Promise<ShoppingCart[]> {
        return this.prisma.shoppingCart.findMany();
    }
   async findByCustomer(customerId: string): Promise<ShoppingCart[]|null> {
        const cartsForCustomer = await this.prisma.shoppingCart.findFirst(
            {
                where: {
                    customerId : customerId,
                },
             }
        );
        if(cartsForCustomer)
             throw new Error("Not Found!")
        return cartsForCustomer;
    }
        
}
export {ShoppingCartRepository}