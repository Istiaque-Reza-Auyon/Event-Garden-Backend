import { JwtPayload } from 'jsonwebtoken';
import { Request,Response } from "express";
import { findAllEventsQuery,findOneEventQuery, } from "../model/event/query";
import { checkOutUserQuery, findAllAttendeesQuery } from '../model/attendee/query';
import { findEventSpecificTicketsQuery } from '../model/ticket/query';
import { IAttendee } from '../model/attendee/model';
import { ticketDestructuring} from '../utils';
import { findUserByIdQuery } from '../model/user/query';

const findUserById = async (req:Request, res:Response) => {
    try {
        const userId = Number(req.params.userId);
        const user = await findUserByIdQuery(userId);
        res.status(200).json(user);
    } catch(e:any) {
        console.error('Error finding user:', e.message);
        res.status(500).json(null);
    }
}


const findAllEvents = async (req:Request, res:Response) => {
    try{
        const events = await findAllEventsQuery(req.query);
        res.status(200).json(events);
    } catch(e:any) {
        console.error('Error finding all events:', e.message);
        res.status(500).json(null);
    }
}

const findOneEvent = async (req:Request, res:Response) => {
    try{
        const eventId = Number(req.params.eventId)
        const event:any = await findOneEventQuery(eventId);
        const attendeeCount = await findAllAttendeesQuery(eventId);
        const tickets:any = await findEventSpecificTicketsQuery(eventId);
        const totalRevenue = await tickets.reduce(((total:any,each:any) => total + each.price),0);
        const totalTicketsSold = tickets.length;
        const users = await tickets.map((ticket:any)=> {return {name:ticket?.firstName + ' ' + ticket?.lastName, price:ticket?.price, orderId:ticket?.id, createdAt:ticket?.createdAt}})
        event.dataValues.attendeeCount = attendeeCount.length;
        event.dataValues.totalRevenue = totalRevenue;
        event.dataValues.totalTicketsSold = totalTicketsSold;
        event.dataValues.users = users;
        res.status(200).json(event);
    } catch(e:any) {
        console.error('Error creating user:', e);
        res.status(500).json(null);
    }
}

const checkOutUser = async (req:Request, res:Response) => {    
    const user:JwtPayload = req.body.user;
    const tickets = req.body;
    const input:IAttendee[] = ticketDestructuring(tickets,user);
    try {
        const createdAttendeeRecord = await checkOutUserQuery(input);
        res.status(200).json(createdAttendeeRecord);
    } catch (e:any) {
        console.error('Chekout unsuccessful:', e.message);
        res.status(500).json(null);
    }
}

export {findAllEvents, findOneEvent, checkOutUser, findUserById}