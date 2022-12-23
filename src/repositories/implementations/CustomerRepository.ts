import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import { CustomerDTO } from "../../domain/dto/CustomerDTO";
import { Customer } from "@prisma/client";
import { ICostumerRepository } from "../ICustormerRepository";

@injectable()
class CustomerRepository implements ICostumerRepository{
    constructor(        
    @inject("PrismaClient")
    private readonly prisma: PrismaClient){}
 
   async create(customer: Omit<CustomerDTO,"id">): Promise<Customer> {

    const customerCreated = await this.prisma.customer.create({
        data: {
           id: v4(),         
            ... customer
        }
    });
        return customerCreated;


    }
  async  listAll(): Promise<Customer[]> {
      
        const allCustomers = await this.prisma.customer.findMany();
        return allCustomers;
    }

   async findById(id: string): Promise<Customer | null> {
        
        return await this.prisma.customer.findFirst({
            where: {
               id: id,
            },
         });

    }

   async update(customer: Customer): Promise<Customer> {
        
        const updateCustomer = await this.prisma.customer.update({
            data: customer,
            where:{
                id: customer.id
            }
        }
        );
        return updateCustomer;
    }

    async delete(id: string): Promise<void> {

        await this.prisma.customer.delete({
            where:{
                id: id,
            },
        });

    }


}
export {CustomerRepository}