import { Router } from "express";
import { ShoppingCartController } from "../controllers/ShoppingCartController";
//import { addProduct, getTotalValue, removeProduct, showItems } from "../controllers/ShoppingCartController";


const shoppingCartRoutes = Router();
const shoppingCarController = new ShoppingCartController();

shoppingCartRoutes.post("/", shoppingCarController.addProduct.bind(shoppingCarController) ) ;   
shoppingCartRoutes.delete("/:id", shoppingCarController.removeProduct.bind(shoppingCarController));
shoppingCartRoutes.get("/", shoppingCarController.showItems.bind(shoppingCarController));
shoppingCartRoutes.get("/totalValue", shoppingCarController.getTotalValue.bind(shoppingCarController));

export {shoppingCartRoutes}

