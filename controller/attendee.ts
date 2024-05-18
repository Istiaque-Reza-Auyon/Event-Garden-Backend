import { Request,Response } from "express";
import { findAllEventsQuery,findOneEventQuery } from "../model/event/query";

const findAllEvents = async (req:Request, res:Response) => {
    try{
        const events = await findAllEventsQuery(req.query);
        res.status(200).json(events);
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}

const findOneEvent = async (req:Request, res:Response) => {
    try{
        const eventId = Number(req.params.eventId)
        const event = await findOneEventQuery(eventId);
        res.status(200).json(event);
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}

export {findAllEvents, findOneEvent}