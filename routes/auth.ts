import express from "express";
import {signUp, signIn} from "../controller/auth";


const routerAuth = express.Router();

routerAuth.post("/sign-up", signUp);

routerAuth.post("/sign-in", signIn);

export default routerAuth;