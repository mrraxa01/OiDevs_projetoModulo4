import { Router } from "express";
import { customersRoutes } from "./customers.routes";
import { productsRoutes } from "./products.routes";

const routes = Router();


routes.use("/products", productsRoutes);
routes.use("/customers", customersRoutes);

export { routes}