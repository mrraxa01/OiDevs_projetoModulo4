import { inject, injectable } from "tsyringe";
import { CustomerDTO } from "../../domain/dto/CustomerDTO";
import { ProductDTO } from "../../domain/dto/ProductDTO";
import { Customer } from "../../domain/entities/Customers";
import { ICostumerRepository } from "../../repositories/ICustormerRepository";

@injectable()
export class UpdateCustomer{

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICostumerRepository
    ){}

    async handle(customer: CustomerDTO):Promise<Customer>{
        if(!await this.checkIfCustomerExist(customer.id)) throw new Error ("Not Found!")
        const updateCustomer = await this.customerRepository.update(customer);
        return updateCustomer;

    }

    private async checkIfCustomerExist(id: string): Promise<boolean>{
        const existingCustomer = await this.customerRepository.findById(id);
        const productCustomer = !!existingCustomer;
        return productCustomer;
    }
    
}