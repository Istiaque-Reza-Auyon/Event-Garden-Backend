import jwt from 'jsonwebtoken';
import { Request,Response, NextFunction } from "express";
import { findUserByIdQuery } from '../model/user/query';


const authMiddleware = (req:Request, res:Response, next:NextFunction) =>  {
    const secretKey = 'This_is_the_secret_key';
    if (req.cookies) {jwt.verify(req.cookies.token,secretKey, (err: any, decoded: any) => {
        
    if(err) {
        console.log(err)
        res.json('error parsing jwt')
    } else {
        req.body.user = decoded;
        next();
    }
});}

else {
    res.json('unauthorized');
}
}

const profileAuthMiddleware = async (req:Request, res:Response, next:NextFunction) =>  {
    const user = await findUserByIdQuery(Number(req.params.userId));
    const secretKey = user?.email?user.email:'not-found';
    console.log(secretKey)
    if (req.cookies) {jwt.verify(req.cookies.token,secretKey, (err: any, decoded: any) => {
        
    if(err) {
        console.log(err)
        res.json('error parsing jwt')
    } else {
        req.body.user = decoded;
        next();
    }
});}

else {
    res.json('unauthorized');
}
}

export {authMiddleware, profileAuthMiddleware}