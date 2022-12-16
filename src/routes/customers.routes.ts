import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { validationMiddleware } from "../middlewares/Validation";
import { createCustomerValidations, customerIdValidation, updateCustomerValidations } from "../validators/CustomersValidators";

const customersRoutes = Router();
const customerController = new CustomerController();

customersRoutes.get("/", customerController.listAll);
customersRoutes.get("/:id", customerIdValidation, validationMiddleware,  customerController.findById);
customersRoutes.post("/", createCustomerValidations, validationMiddleware,customerController.create);
customersRoutes.put("/:id", updateCustomerValidations,validationMiddleware,customerController.update)
customersRoutes.delete("/:id", customerIdValidation, validationMiddleware,customerController.delete);

export {customersRoutes}