import { NextFunction, Request, Response } from "express";

interface IApiError{
    errorCode: string;
    message: string;
}

export default function ApiError (
    err: Error, 
    request: Request, 
    response: Response, 
    next: NextFunction){
    
      const id = request.params;
        
        
        return response.json("Ocorreu um erro! Erros:" + err.message + id  )
}
