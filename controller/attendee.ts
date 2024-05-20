import { JwtPayload } from 'jsonwebtoken';
import { Request,Response } from "express";
import { findAllEventsQuery,findOneEventQuery } from "../model/event/query";
import { checkOutUserQuery, findAllAttendeesQuery } from '../model/attendee/query';
import { IAttendee } from '../model/attendee/model';
import { ticketDestructuring } from '../utils';


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
        const event:any = await findOneEventQuery(eventId);
        const attendeeCount = await findAllAttendeesQuery(eventId);
        event.attendeeCount = attendeeCount.length;
        res.status(200).json(event);
    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}

const checkOutUser = async (req:Request, res:Response) => {
    
    const user:JwtPayload = req.body.user;
    const tickets = req.body;
    const input:IAttendee[] = ticketDestructuring(tickets,user);
    try {
        console.log(input);
        const createdAttendeeRecord = await checkOutUserQuery(input);
        res.status(200).json(createdAttendeeRecord);
    } catch (e) {
        console.error('Chekout unsuccessful:', e);
        res.status(500).json(null);
    }
}

export {findAllEvents, findOneEvent, checkOutUser}