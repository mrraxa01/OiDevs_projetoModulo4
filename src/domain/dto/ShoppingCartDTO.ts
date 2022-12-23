
import { Product } from "@prisma/client";

export class ShoppingCartDTO{
     id: string;
     product: Product;
     qtd: number
    
    
}