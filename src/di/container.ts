import { PrismaClient } from '@prisma/client'
import {container} from 'tsyringe'
import "./product"
import "./customer"
import "./shoppingCart"
container.register<PrismaClient>("PrismaClient", {
    
    useValue: new PrismaClient(),

});

