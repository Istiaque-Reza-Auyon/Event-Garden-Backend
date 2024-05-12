import express from "express";
import {createEvent, createOrganization} from "../controller/organizer";


const routerOrganizer = express.Router();

routerOrganizer.post("/admin/:orgId/create-event", createEvent);
routerOrganizer.post("/admin/create-organization", createOrganization);
export default routerOrganizer;