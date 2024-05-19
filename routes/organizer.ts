import express from "express";
import {createEvent, createOrganization, updateEvent, findOneOrganization, findAllOrganizations, createTicket, findAllTickets} from "../controller/organizer";


const routerOrganizer = express.Router();


routerOrganizer.post("/admin/organization/create", createOrganization);
routerOrganizer.get("/admin/organization/find/:orgId", findOneOrganization);
routerOrganizer.get("/admin/organization/find/all", findAllOrganizations);
routerOrganizer.post("/admin/event/create/:orgId", createEvent);
routerOrganizer.post("/admin/event/update/:eventId", updateEvent);
routerOrganizer.post("/admin/event/ticket/create/:eventId", createTicket);
routerOrganizer.get("/admin/ticket/findAll/:eventId", findAllTickets);
export default routerOrganizer;