import { ShoppingCartItems } from "@prisma/client";

interface IShoppingCartItemsRepository{
    create(shoppingCartId: string, productId: string, qtd: number, unitValue: number):Promise<ShoppingCartItems>;
}
export { IShoppingCartItemsRepository}