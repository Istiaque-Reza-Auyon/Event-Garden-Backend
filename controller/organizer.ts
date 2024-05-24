import { Request,Response } from "express";
import { createEventQuery, updateEventQuery } from "../model/event/query";
import { createTicketQuery, findAllTicketsQuery } from "../model/ticket/query";
import { createOrganizationQuery, findOneOrganizationQuery, findAllOrganizationsQuery } from "../model/organization/query";
import { ITicket } from "../model/ticket/model";
import { JwtPayload } from "jsonwebtoken";



//Controller for creating an event for an organization
const createEvent = async (req: Request, res:Response) => {
    const event = req.body ;
    event.organizationId = Number(req.params.orgId);
    try {
        const createdEvent = await createEventQuery(event);
        res.status(200).json(createdEvent.id);
    } catch (e) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}


//Controller for updating an existing event of an organization
const updateEvent = async(req: Request, res:Response) => {
    const eventUpdate = req.body;
    eventUpdate.id = Number(req.params.eventId);
    try {
       await updateEventQuery(eventUpdate);
       res.status(200).send('Event updated successfully');
    } catch(e) {
        console.error('Error cregatin user:', e);
        res.status(500).send('Error updating event');
    }
}



//Controller for creating an organization for an organizer
const createOrganization = async (req: Request, res:Response) => {
    const user:JwtPayload = req.body.user;
    const organization = req.body ;
    organization.adminId = user.id;
    try {
        const data = await createOrganizationQuery(organization);
        res.status(200).json(data.id);
    } catch (e) {
        console.error('Error creating organization:', e);
        res.status(500).json(null);
    }
}


//Controller for find one organization
const findOneOrganization = async (req: Request, res:Response) => {
    const organizationId = Number(req.params.orgId);
    try {
        const organization = await findOneOrganizationQuery(organizationId);
        res.status(200).send(organization);
    } catch (e) {
        console.error('Error cregatin user:', e);
        res.status(500).send('Error finding organization');
    }
}


//Controller for finding all organizations
const findAllOrganizations = async (req:Request, res:Response) => {
    const user:JwtPayload = req.body.user;
    try {
        const organizations = await findAllOrganizationsQuery(user);
        res.status(200).json(organizations);
    } catch (e:any) {
        console.error(e.message);
        res.status(500).json('Error finding all organizations');
    }
}

//controller for finding organization specific event
// const findOrganizationSpecificEvent = async (req: Request, res:Response) => {
//     const orgId = Number(req.params.orgId);  
//     try{
//      const events = await organizationSpecificEventsQuery(orgId);
//      res.status(200).json(events);
//     } catch(e) {
//         console.error('Error finding organization specific events:', e);
//         res.status(500).json(null); 
//     }
// }



//Controller for creating ticket
const createTicket = async (req: Request, res:Response) => {
    const ticketList: any = req.body ;
    ticketList?.map((ticket:ITicket) => ticket.eventId = Number(req.params.eventId))
    try {
        await ticketList.map((ticket:ITicket) => createTicketQuery(ticket));
        res.status(200).json('ticket created successfully');
    } catch (e) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}


//controller for finding all tickets
const findAllTickets = async (req: Request, res:Response) => {
    try {
        const eventId = Number(req.params.eventId);
        const tickets = await findAllTicketsQuery(eventId);
        res.status(200).json(tickets);
    }catch (e:any) {
        console.error('Error creating user:', e.messaage);
        res.status(500).json(null);
    }
}


//controller for finding user id
const findId = async (req: Request, res: Response) => {
    try {
        const user: JwtPayload = req.body.user;
        res.status(200).json(user.id);
    } catch(e:any) {
        console.error('Error finding user:', e.messaage);
        res.status(500).json('err');
    }
}
export {createEvent, createOrganization, updateEvent,findOneOrganization, findAllOrganizations, createTicket, findAllTickets, findId}