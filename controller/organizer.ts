import { Request,Response } from "express";
import { createEventQuery } from "../model/event/query";
import { createOrganizationQuery } from "../model/organization/query";

const createEvent = async (req: Request, res:Response) => {
    const event = req.body ;
    event.organizationId = req.params.orgId;
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
        res.status(500).send('Error cregating organization');
    }
}


export {createEvent, createOrganization}