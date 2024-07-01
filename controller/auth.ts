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
          const token = jwt.sign(result.dataValues, secretKey!)
          res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            domain: 'https://event-garden.vercel.app'
        });
          res.json(token);
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
        const token = jwt.sign(user.dataValues, secretKey!)
          res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            domain: 'https://event-garden.vercel.app'
        });
          res.json(token);
      }
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
 } 

 
export {signUp, signIn};