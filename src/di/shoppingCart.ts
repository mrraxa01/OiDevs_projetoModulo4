import { container } from "tsyringe";
import { ShoppingCartItemsRepository } from "../repositories/implementations/ShoppingCartItemsRepository";

import { ShoppingCartRepository } from "../repositories/implementations/ShoppingCartRepository";
import { IShoppingCartRepository } from "../repositories/IShoppingCartRepository";
import {IShoppingCartItemsRepository} from "../repositories/IShoppingCartItemsRepository"

//container.register<ICostumerRepository>("CustomerRepository", CustomerRepository);

container.register<IShoppingCartRepository>("ShoppingCartRepository", ShoppingCartRepository);
container.register<IShoppingCartItemsRepository>("ShoppingCartItemsRepository", ShoppingCartItemsRepository)