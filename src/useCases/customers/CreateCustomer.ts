import { inject, injectable } from "tsyringe";
import { CustomerDTO } from "../../domain/dto/CustomerDTO";
import { Customer } from "@prisma/client";
import { ICostumerRepository } from "../../repositories/ICustormerRepository";

@injectable()
export class CreateCustumer{

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICostumerRepository
    ){}

    async handle(customer:CustomerDTO):Promise<Customer>{

        const customerCreated = await this.customerRepository.create(customer);

        return customerCreated;

    }
}