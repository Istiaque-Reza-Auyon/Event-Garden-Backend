import jwt from 'jsonwebtoken';

import { Request,Response } from "express";
import { createUser, signInUser } from "../model/user/query";

const signUp = async (req: Request, res: Response) => {
    const user  = req.body;
    try {
        await createUser(user);
        res.status(200).send('User created successfully');
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
      if (user == null) res.json('no user found');
      else {
        res.json(jwt.sign(user.dataValues, secretKey));
      }
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
 } 

 
export {signUp, signIn};