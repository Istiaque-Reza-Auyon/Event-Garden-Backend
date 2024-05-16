import jwt from 'jsonwebtoken';

import { Request,Response } from "express";
import { createUser, signInUser,emailExistsOrNot } from "../model/user/query";

const signUp = async (req: Request, res: Response) => {
    const user  = req.body;
    console.log('email:', user.email);
    const secretKey = 'This_is_the_secret_key';
    try {
        const validation = await emailExistsOrNot(user);
        if (validation) res.json('email already exists')
       else {
        const result = await createUser(user);
        if (!result) res.json('error');
        else {
          res.json(jwt.sign(result.dataValues.password, secretKey));
        }}
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
}

 const signIn = async (req: Request, res: Response) => {
    const signee = req.body;
    const secretKey = 'This_is_the_secret_key';
    try {
      const user =   await signInUser(signee);
      if (user == null) res.json(null);
      else {
        res.json(jwt.sign(user.dataValues.password, secretKey));
      }
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
 } 

 
export {signUp, signIn};