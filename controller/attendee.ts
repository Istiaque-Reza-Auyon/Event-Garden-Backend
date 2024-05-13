import { Request,Response } from "express";
import { findAllEventsQuery,findOneEventQuery } from "../model/event/query";

const findAllEvents = async (req:Request, res:Response) => {
    try{
        const events = await findAllEventsQuery(req.query);
        res.status(200).send(events);
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Error fetching all events');
    }
}

const findOneEvent = async (req:Request, res:Response) => {
    try{
        const eventId = Number(req.params.eventId)
        const event = await findOneEventQuery(eventId);
        res.status(200).send(event);
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).send('Error fetching one event');
    }
}

export {findAllEvents, findOneEvent}