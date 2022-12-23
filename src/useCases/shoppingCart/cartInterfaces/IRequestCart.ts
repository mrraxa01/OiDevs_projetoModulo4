import { ShoppingCartDTO } from "../../../domain/dto/ShoppingCartDTO";

export interface IRequestCart{

    idCustomer: string,
    items: ShoppingCartDTO[]
    totalValue: number
}