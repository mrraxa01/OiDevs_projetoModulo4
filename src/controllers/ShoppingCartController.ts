import e, { Request, Response } from "express";
import { ProductDTO } from "../domain/dto/ProductDTO";

//let items:ProductDTO[] =[];

class ShoppingCartController{

    private items:ProductDTO[]=[];
    private totalValue: number = 0;

    constructor(){
        this.items = []
        //items = []
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
       // this.items = [] 
        this.items.push(productToAdd);
        //items.push(productToAdd);
        this.totalValue += productToAdd.price;
        return response.status(200).json(productToAdd).send();
    }
}
export {ShoppingCartController}



    
/*    const  items: ProductDTO[] = [];
   let totalValue: number = 0;

  

    export async function addProduct(request:Request<{},{},ProductDTO>, response:Response) {
        const productToAdd = request.body;
        items.push(productToAdd);
        totalValue = totalValue + productToAdd.price;
        return response.status(200).json(productToAdd);   
   }

   export async function removeProduct(request:Request, response:Response) {
        const {id}= request.params;
        const productToRemove = items.find((product) => product.id == id);
        if(!productToRemove)
            throw new Error("Not Found")
        items.splice(items.indexOf(productToRemove),1);
        totalValue -= productToRemove.price;
        return response.status(204).send();
        
   }


    export async function getTotalValue(request:Request, response:Response){

        return response.status(200).json(totalValue);
    }

    export async function showItems(request:Request, response:Response) {
        return response.status(200).json(items);
    }
   
    export async function checkout(request:Request, response:Response){

    } */
   


