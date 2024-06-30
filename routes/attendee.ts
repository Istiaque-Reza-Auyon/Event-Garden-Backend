import express from "express";
import { findAllEvents,findOneEvent } from "../controller/attendee";
import { checkOutUser, findUserById } from "../controller/attendee";
import { authMiddleware } from '../middlewares/auth';
import { updateProPic } from "../controller/attendee";



const routerAttendee = express.Router();

routerAttendee.get('/explore', findAllEvents);
routerAttendee.get('/event/:eventId', findOneEvent);
routerAttendee.post('/checkout', authMiddleware, checkOutUser);
routerAttendee.get('/profile/:userId',authMiddleware, findUserById);
routerAttendee.put('/update/user/pic', updateProPic);



export default routerAttendee;