import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../../repositories/ICustormerRepository";

@injectable()
export class DeleteCustomer {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICostumerRepository
    ){}

    async handle(id:string):Promise<string>{

        if(!await this.checkIfCustomerExist(id)) throw new Error("Not Found!");

        await this.customerRepository.delete(id);

        return "Delete Success!"
    }

    private async checkIfCustomerExist(id: string): Promise<boolean>{
        const existingCustomer = await this.customerRepository.findById(id);
        const productCustomer = !!existingCustomer;
        return productCustomer;
    }
}