import { Router } from "express";
import { ShoppingCartController } from "../controllers/ShoppingCartController";
//import { addProduct, getTotalValue, removeProduct, showItems } from "../controllers/ShoppingCartController";


const shoppingCartRoutes = Router();
const shoppingCarController = new ShoppingCartController();


shoppingCartRoutes.post("/", shoppingCarController.addProduct)


export {shoppingCartRoutes}