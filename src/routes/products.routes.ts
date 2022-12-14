import { request, response, Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validationMiddleware } from "../middlewares/Validation";
import { createProductValidations } from "../validators/ProductValidators";

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.listAll);
productsRoutes.post("/",createProductValidations,validationMiddleware, productController.create);


export {productsRoutes}