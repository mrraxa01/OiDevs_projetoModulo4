import { request, response, Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validationMiddleware } from "../middlewares/Validation";
import { createProductValidations, productIdValidation, updateProductValidations } from "../validators/ProductValidators";

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.listAll);
productsRoutes.get("/:id", productController.findById)
productsRoutes.post("/",createProductValidations,validationMiddleware, productController.create);
productsRoutes.put("/:id", updateProductValidations, validationMiddleware, productController.update)
productsRoutes.delete("/:id", productIdValidation, validationMiddleware, productController.delete)


export {productsRoutes}