import { PrismaClient } from '@prisma/client'
import {container} from 'tsyringe'
import "./product"
import "./customer"

container.register<PrismaClient>("PrismaClient", {
    
    useValue: new PrismaClient(),

});

