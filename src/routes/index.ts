import { Router } from "express";
import { customersRoutes } from "./customers.routes";
import { productsRoutes } from "./products.routes";
import { shoppingCartRoutes } from "./shoppingCart.routes";

const routes = Router();


routes.use("/products", productsRoutes);
routes.use("/customers", customersRoutes);
routes.use("/cart", shoppingCartRoutes);

export { routes}