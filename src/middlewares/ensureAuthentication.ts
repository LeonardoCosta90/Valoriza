

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    //receber o Token
    const authToken = request.headers.authorization;

    //validar se Token esta preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    //validar Token

    //separando a strong por espaço
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "8632edbe06e0f5c0809e6eadc7dd1247") as IPayload;
        
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }

    //recuperar info do user

}