import { Request,Response } from "express";
import { createEventQuery, updateEventQuery } from "../model/event/query";
import { createTicketQuery } from "../model/ticket/query";
import { createOrganizationQuery, findOneOrganizationQuery, findAllOrganizationsQuery } from "../model/organization/query";



//Controller for creating an event for an organization
const createEvent = async (req: Request, res:Response) => {
    console.log('here');
    const event = req.body ;
    event.organizationId = Number(req.params.orgId);
    try {
        await createEventQuery(event);
        res.status(200).send('event created successfully');
    } catch (e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
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
    const organization = req.body ;
    try {
        await createOrganizationQuery(organization);
        res.status(200).send('organization created successfully');
    } catch (e) {
        console.error('Error cregatin user:', e);
        res.status(500).send('Error creating organization');
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
    try {
        console.log('Inside find all organizations')
        const organizations = await findAllOrganizationsQuery();
        res.status(200).send(organizations);
    } catch (e) {
        console.error('Error cregatin user:', e);
        res.status(500).send('Error finding all organizations');
    }
}



//Controller for creating ticket
const createTicket = async (req: Request, res:Response) => {
    const ticket = req.body ;
    ticket.eventId = Number(req.params.eventId);
    try {
        await createTicketQuery(ticket);
        res.status(200).send('ticket created successfully');
    } catch (e) {
        console.error('Error creating user:', e);
        res.status(500).send('Internal Server Error');
    }
}

export {createEvent, createOrganization, updateEvent,findOneOrganization, findAllOrganizations, createTicket}