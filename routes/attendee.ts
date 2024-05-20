import express from "express";
import { findAllEvents,findOneEvent } from "../controller/attendee";
import { checkOutUser } from "../controller/attendee";
import { authMiddleware } from '../middlewares/auth';


const routerAttendee = express.Router();

routerAttendee.get('/explore', findAllEvents);
routerAttendee.get('/event/:eventId', findOneEvent);
routerAttendee.post('/checkout', authMiddleware, checkOutUser);

export default routerAttendee;