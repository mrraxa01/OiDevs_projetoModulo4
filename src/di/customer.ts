import { container } from "tsyringe";
import { ICostumerRepository } from "../repositories/ICustormerRepository";
import { CustomerRepository } from "../repositories/implementations/CustomerRepository";

container.register<ICostumerRepository>("CustomerRepository", CustomerRepository);