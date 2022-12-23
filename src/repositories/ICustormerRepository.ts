import { CustomerDTO } from "../domain/dto/CustomerDTO";
import { Customer } from "@prisma/client";

interface ICostumerRepository{
    create(customer:CustomerDTO):Promise<Customer>;
    listAll():Promise<Customer[]>;
    findById(id:string):Promise<Customer|null>;
    update(customer:Customer):Promise<Customer>;
    delete(id:string): Promise<void>;
}
export {ICostumerRepository}