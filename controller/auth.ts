import jwt from 'jsonwebtoken';

import { Request,Response } from "express";
import { createUser, signInUser,emailExistsOrNot } from "../model/user/query";

const signUp = async (req: Request, res: Response) => {
    const user  = req.body;
    const secretKey = process.env.SECRET_KEY;
    
    try {
        const validation = await emailExistsOrNot(user);
        if (validation) res.json('email already exists')
       else {
        const result = await createUser(user);
        if (!result) res.json('error');
        else {
          res.json(jwt.sign(result.dataValues, secretKey!));
        }}
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
}

 const signIn = async (req: Request, res: Response) => {
    const signee = req.body;
    const secretKey = process.env.SECRET_KEY;
    try {
      const user =   await signInUser(signee);
      if (user == null) res.json(null);
      else {
        res.json(jwt.sign(user.dataValues, secretKey!));
      }
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
 } 

 
export {signUp, signIn};