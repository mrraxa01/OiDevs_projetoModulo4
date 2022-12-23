import { inject, injectable } from "tsyringe";
import { Customer } from "@prisma/client";
import { ICostumerRepository } from "../../repositories/ICustormerRepository";

@injectable()
export class FindById {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICostumerRepository
    ){}

    async handle(id: string):Promise<Customer>{

        const customer = await this.customerRepository.findById(id);
        if(!customer) throw new Error("Customer not found!")
        return customer;
    }
}