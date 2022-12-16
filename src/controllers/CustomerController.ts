import { request, Request, response, Response } from "express";
import { container } from "tsyringe";
import { CustomerDTO } from "../domain/dto/CustomerDTO";
import { Customer } from "../domain/entities/Customers";
import { CreateCustumer } from "../useCases/customers/CreateCustomer";
import { DeleteCustomer } from "../useCases/customers/DeleteCustomer";
import { FindById } from "../useCases/customers/FindById";
import { ListCustomers } from "../useCases/customers/ListCustomers";
import { UpdateCustomer } from "../useCases/customers/UpdateCustomer";

class CustomerController{

    async listAll(request: Request, response: Response ):Promise<Response>{
        const useCase = container.resolve(ListCustomers);
        const customers = await useCase.handle();

        return response.status(200).json(customers).send();
    }

    async findById(request: Request<{id:string}>, response: Response):Promise<Response>{
        const {id} = request.params;
        const useCase = container.resolve(FindById);
        const customer = await useCase.handle(id);
        return response.status(200).json(customer).send();
    }

    async create (request: Request<{},{}, CustomerDTO>, response: Response):Promise<Response>{
            const useCase = container.resolve(CreateCustumer);
            const customerToSave = request.body;
            const customer = await useCase.handle(customerToSave);

        return response.status(201).json(customer).send();
    }

    async update(request: Request<{id: string},{}, Omit<CustomerDTO, "id">>, response: Response):Promise<Response>{

        const useCase = container.resolve(UpdateCustomer);
        const {id} = request.params;
        const customerToUpdate = request.body;
        const customerUpdated = await useCase.handle({
            id:id,
            ... customerToUpdate
        });
        return response.status(200).json(customerUpdated).send();
    }

    async delete(request: Request<{id: string}>, response: Response):Promise<Response>{
        const useCase = container.resolve(DeleteCustomer);
        const {id} = request.params;
        const result = await useCase.handle(id);
        return response.status(204).json("Delete Success!");
    }

}
export {CustomerController}