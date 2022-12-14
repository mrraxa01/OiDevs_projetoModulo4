import 'reflect-metadata'
import './di/container'
import 'express-async-errors';
import express from 'express'
import ApiError from './middlewares/ApiError';

import { routes } from './routes';
const server = express();
const port = process.env.PORT ?? 3333;

server.use(express.json());
server.use(routes);
server.use(ApiError);
server.listen(port, ()=>{
    console.log(`Server is running in port ${port}!`);
});
