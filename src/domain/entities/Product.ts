import {v4 as uuidV4} from "uuid"

class Product{
id: string;
description: string;
price: number;
stock: number;

constructor(){
    if(!this.id) this.id = uuidV4();
}

}
export {Product}