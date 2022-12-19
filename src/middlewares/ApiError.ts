import { NextFunction, Request, Response } from "express";

interface IApiError{
    errorCode: string;
    message: string;
}

interface IRelatedError{
  name: string;
  message: string;
  stack: string;
}

export default function ApiError (
    err: Error, 
    request: Request, 
    response: Response, 
    next: NextFunction){
    
      const id = request.params;
        
        
        return response.json("Ocorreu um erro! Erro(s)" + err.message  + err.name + err.stack )
}
