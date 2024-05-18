import { Ticket,ITicket } from "./model";


const createTicketQuery = (ticket:ITicket) => Ticket.create ({
    id: ticket.id,
    name: ticket.name,
    price: ticket.price,
    quantity: ticket.quantity,
    startTime: ticket.startTime,
    eventId: ticket.eventId
})

export {createTicketQuery};