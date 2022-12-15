import 'reflect-metadata'
import './di/container'
import 'express-async-errors';
import express from 'express'
import ApiError from './middlewares/ApiError';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

import { routes } from './routes';
const server = express();
const port = process.env.PORT ?? 3333;

server.use(express.json());
server.use(routes);
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
server.use(ApiError);
server.listen(port, ()=>{
    console.log(`Server is running in port ${port}!`);
});
