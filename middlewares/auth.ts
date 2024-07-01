import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const secretKey = process.env.SECRET_KEY!;
    if (req.headers.token) {
        jwt.verify(req.headers.token as string, secretKey, (err: any, decoded: any) => {
            if (err) {
                console.error(err)
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