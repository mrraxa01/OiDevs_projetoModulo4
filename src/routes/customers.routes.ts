import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";

const customersRoutes = Router();
const customerController = new CustomerController();

customersRoutes.get("/", customerController.listAll);
customersRoutes.get("/:id", customerController.findById);
customersRoutes.post("/", customerController.create);
customersRoutes.put("/:id", customerController.update)
customersRoutes.delete("/:id", customerController.delete);

export {customersRoutes}