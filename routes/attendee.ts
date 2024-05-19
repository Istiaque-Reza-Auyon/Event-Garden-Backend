import express from "express";
import { findAllEvents,findOneEvent } from "../controller/attendee";
import { checkOutUser } from "../controller/attendee";


const routerAttendee = express.Router();

routerAttendee.get('/explore', findAllEvents);
routerAttendee.get('/event/:eventId', findOneEvent);
routerAttendee.post('/checkout', checkOutUser);

export default routerAttendee;