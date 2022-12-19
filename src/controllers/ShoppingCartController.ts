import e, { Request, Response } from "express";
import { ProductDTO } from "../domain/dto/ProductDTO";


class ShoppingCartController{

    private items:ProductDTO[];
    private totalValue: number = 0;

    constructor(){
     this.items = []
       
    }
    
    addProduct(request:Request<{},{}, ProductDTO>, response: Response ) {
        const productToAdd: ProductDTO =  new ProductDTO();
        const {id,description,price,stock} = request.body;
        Object.assign(productToAdd,{
            id,
            description,
            price,
            stock
        })
      
        this.items.push(productToAdd);
       
        this.totalValue += productToAdd.price;
        return response.status(200).json(productToAdd).send();
    }

    removeProduct(request: Request, response: Response){
        const {id} = request.params;
        console.log(id)
        const productToRemove = this.items.find((product) => product.id == id);
        console.log(productToRemove)
        if(!productToRemove)
            throw new Error("Not Found");
        this.items.splice(this.items.indexOf(productToRemove),1);
        this.totalValue  -= productToRemove.price;
        return response.status(204).send();
    }

    showItems(request:Request, response: Response){
        
        return response.status(200).json(this.items);
    }

    getTotalValue(request: Request, response: Response){
        return response.status(200).json(this.totalValue).send();
    }
}
export {ShoppingCartController}


