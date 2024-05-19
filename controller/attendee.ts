import jwt, { JwtPayload } from 'jsonwebtoken';

import { Request,Response } from "express";
import { findAllEventsQuery,findOneEventQuery } from "../model/event/query";
import { checkOutUserQuery } from '../model/attendee/query';
import { IAttendee } from '../model/attendee/model';

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

const checkOutUser = async (req:Request, res:Response) => {
    const secretKey = 'This_is_the_secret_key';
    let user:JwtPayload;
    jwt.verify(req.cookies.token,secretKey, (err: any, decoded: any) => {
        if(err) {
            res.json(null);
        } else {
            user = decoded;
        }
    });
    const tickets = req.body;
    const input = tickets?.map ((ticket:IAttendee) => {return {eventId: ticket.eventId, userId: user.id, ticketId: ticket.id}})
    try {
        const createdAttendeeRecord = await checkOutUserQuery(input);
        res.status(200).json('created');
    } catch (e) {
        console.error('Chekout unsuccessful:', e);
        res.status(500).json(null);
    }
}

export {findAllEvents, findOneEvent, checkOutUser}