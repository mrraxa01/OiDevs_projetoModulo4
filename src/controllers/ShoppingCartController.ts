import  { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductDTO } from "../domain/dto/ProductDTO";
import { ShoppingCartDTO } from "../domain/dto/ShoppingCartDTO";
import { IRequestCart } from "../useCases/shoppingCart/cartInterfaces/IRequestCart";
import { CreateShoppingCart } from "../useCases/shoppingCart/CreateShoppingCart";



class ShoppingCartController{

    private items:ShoppingCartDTO[];
    private totalValue: number = 0;
    private shoppingCart: ShoppingCartDTO[];
    
    constructor(){
     this.items = []
        }
    
    addProduct(request:Request<{},{}, ProductDTO>, response: Response ) {
        const productToAdd: ProductDTO =  new ProductDTO();
        const item: ShoppingCartDTO = new ShoppingCartDTO();
        const {id,description,price,stock}  = request.body;
        let qtd = 1;
        Object.assign(productToAdd,{
            id,
            description,
            price,
            stock
        })
        console.log(id);

        if(this.items.find((item)=> item.product.id == id  ))
            qtd += 1;
        
        Object.assign(item,{
            productToAdd,
            qtd,
            totalValue: this.totalValue
            
        })
        this.items.push(item);
       
        this.totalValue += productToAdd.price;
        return response.status(200).json(productToAdd).send();
    }

    removeProduct(request: Request, response: Response){
        const {id} = request.params;
        console.log(id)
        const itemToRemove = this.items.find((item) => item.product.id == id);
        console.log(itemToRemove)
        if(!itemToRemove)
            throw new Error("Not Found");
        this.items.splice(this.items.indexOf(itemToRemove),1);
        this.totalValue  -= itemToRemove.product.price;
        return response.status(204).send();
    }

    showItems(request:Request, response: Response){
        
        return response.status(200).json(this.items);
    }

    getTotalValue(request: Request, response: Response){
        return response.status(200).json(this.totalValue).send();
    }

    async checkout(request:Request<{idCustomer: string } >, response: Response){
        const {idCustomer} = request.params;
        const userCase = container.resolve(CreateShoppingCart);
        const items = this.items
        const totalValue = this.totalValue
        const shoppingCart = await userCase.handle({idCustomer, items, totalValue });
        if(!shoppingCart)
            throw new Error("Error save the cart!")
        return response.status(201).json(shoppingCart).send();
    }

    
}
export {ShoppingCartController}


