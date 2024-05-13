import express from "express";
import { findAllEvents,findOneEvent } from "../controller/attendee";


const routerAttendee = express.Router();

routerAttendee.get('/explore', findAllEvents);
routerAttendee.get('/event/:eventId', findOneEvent);

export default routerAttendee;