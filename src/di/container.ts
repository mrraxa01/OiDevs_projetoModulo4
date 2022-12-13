import { PrismaClient } from '@prisma/client'
import {container} from 'tsyringe'
import "./product"

container.register<PrismaClient>("PrismaClient", {
    useValue: new PrismaClient(),

});

