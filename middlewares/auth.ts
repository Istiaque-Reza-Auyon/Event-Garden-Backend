import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { findUserByIdQuery } from '../model/user/query';


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const secretKey = process.env.SECRET_KEY!;
    if (req.cookies) {
        jwt.verify(req.cookies.token, secretKey, (err: any, decoded: any) => {

            if (err) {
                console.log(err)
                res.json('error parsing jwt')
            } else {
                req.body.user = decoded;
                next();
            }
        });
    }

    else {
        res.json('unauthorized');
    }
}


export { authMiddleware }