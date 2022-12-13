import { request, response, Router } from "express";
import { ProductController } from "../controllers/ProductController";

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.listAllProducts);
productsRoutes.post("/", productController.createProduct);


export {productsRoutes}