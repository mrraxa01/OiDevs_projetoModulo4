import { parse } from "uuid";

export class ProductDTO{
id: string;
description: string;
price: number;
stock: number;

constructor(description: string, price: number, stock: number){
    this.description = description;
    this.price = price;
    this.stock = stock;
}
}