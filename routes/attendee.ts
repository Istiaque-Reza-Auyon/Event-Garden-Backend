import express from "express";
import { findAllEvents,findOneEvent } from "../controller/attendee";
import { checkOutUser, findUserById } from "../controller/attendee";
import { authMiddleware, profileAuthMiddleware } from '../middlewares/auth';



const routerAttendee = express.Router();

routerAttendee.get('/explore', findAllEvents);
routerAttendee.get('/event/:eventId', findOneEvent);
routerAttendee.post('/checkout', authMiddleware, checkOutUser);
routerAttendee.get('/profile/:userId',authMiddleware, findUserById)


export default routerAttendee;