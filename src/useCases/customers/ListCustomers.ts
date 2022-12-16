import { inject, injectable } from "tsyringe";
import { Customer } from "../../domain/entities/Customers";
import { ICostumerRepository } from "../../repositories/ICustormerRepository";

@injectable()
export class ListCustomers{

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICostumerRepository
    ){}

    async handle():Promise<Customer[]>{

        const allProducts = await this.customerRepository.listAll();
        return allProducts;

    }
}