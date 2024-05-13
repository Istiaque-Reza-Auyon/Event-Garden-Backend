import express from "express";
import {createEvent, createOrganization, updateEvent} from "../controller/organizer";


const routerOrganizer = express.Router();

routerOrganizer.post("/admin/:orgId/create-event", createEvent);
routerOrganizer.post("/admin/create-organization", createOrganization);
routerOrganizer.post("/admin/:eventId/update-event", updateEvent);
export default routerOrganizer;