import express from "express";
import {createEvent, createOrganization, updateEvent, findOneOrganization, findAllOrganizations, createTicket, findAllTickets,findId } from "../controller/organizer";
import { authMiddleware } from '../middlewares/auth';


const routerOrganizer = express.Router();


routerOrganizer.post("/admin/organization/create", authMiddleware, createOrganization);
routerOrganizer.get("/admin/organization/find/all/:orgId", findOneOrganization);
routerOrganizer.get("/admin/organization/find/all", authMiddleware, findAllOrganizations);
routerOrganizer.post("/admin/event/create/:orgId", createEvent);
routerOrganizer.post("/admin/event/update/:eventId", updateEvent);
routerOrganizer.post("/admin/event/ticket/create/:eventId", createTicket);
routerOrganizer.get("/admin/ticket/findAll/:eventId", findAllTickets);
routerOrganizer.get("/find/id", authMiddleware, findId);
export default routerOrganizer;