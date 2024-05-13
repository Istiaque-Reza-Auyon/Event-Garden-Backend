import { Request,Response } from "express";
import { createEventQuery, updateEventQuery } from "../model/event/query";
import { createOrganizationQuery } from "../model/organization/query";

const createEvent = async (req: Request, res:Response) => {
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

const updateEvent = async(req: Request, res:Response) => {
    const eventUpdate = req.body;
    eventUpdate.id = Number(req.params.eventId);
    try {
       const result =  await updateEventQuery(eventUpdate);
       if (result) res.status(200).send('Event updated successfully');
    } catch(e) {
        console.error('Error cregatin user:', e);
        res.status(500).send('Error updating event');
    }
}

export {createEvent, createOrganization, updateEvent}