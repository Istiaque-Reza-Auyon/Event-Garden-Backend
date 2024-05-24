import { Ticket,ITicket } from "./model";
import { Attendee } from "../attendee/model";
import { User } from "../user/model";
import { group } from "console";


const createTicketQuery = (ticket:ITicket) => Ticket.create ({
    id: ticket.id,
    name: ticket.name,
    price: ticket.price,
    quantity: ticket.quantity,
    startTime: ticket.startTime,
    eventId: ticket.eventId
})

const findAllTicketsQuery = (eventId:number) => Ticket.findAll({where: {eventId: eventId},},);

const findEventSpecificTicketsQuery = (eventId:number) =>  Attendee.findAll({include: [{
      model: Ticket,
    },
    {
      model: User,  
    }],
    where: {eventId: eventId},
    attributes: ['ticket.price', 'user.firstName', 'user.lastName','user.id','ticket.createdAt','user.profilePic', ],
    raw:true},
    );

export {createTicketQuery, findAllTicketsQuery,findEventSpecificTicketsQuery};