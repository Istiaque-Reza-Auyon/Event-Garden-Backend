import { IAttendee } from "./model/attendee/model";
import { ITicketIncoming } from "./interfaces";
import { JwtPayload } from 'jsonwebtoken';
import { ITicket } from "./model/ticket/model";


    

    const ticketDestructuring = (tickets:ITicketIncoming[], user:JwtPayload) => {
        const output:any = [];
        tickets?.map ((ticket:ITicketIncoming) =>  { 
            Array(ticket.quantity)
            .fill({eventId: ticket.eventId, userId: user.id, ticketId: ticket.id, scanned: false, refund: false}).forEach(i => output.push(i))
        });
        return output;
    }


    export {ticketDestructuring}