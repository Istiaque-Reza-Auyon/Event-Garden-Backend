
import { Event,IEvent } from "./model";
import { Ticket } from "../ticket/model";
import { Organization } from "../organization/model";
import { Attendee } from "../attendee/model";
import { Op } from '@sequelize/core';


const createEventQuery = (event:IEvent) => Event.create ({
    name: event.name,
    organizationId: event.organizationId,
    startDate: event.startDate,
    endDate: event.endDate,
    venue: event.venue,
    poster: event.poster,
    zone: event.zone,
    latitude: event.latitude,
    longitude: event.longitude,
    live: event.live,
    description: event.description
})

const updateEventQuery = async (event:IEvent) => Event.update(event,{ where: { id : event.id},},);


const findAllEventsQuery = (queryObject: any) => Ticket.findAll({
    include: [{
        model: Event,
        include: [{
            model: Organization,
            attributes: ['id','poster'],
           
        }],
        where: queryObject.zone?{zone: queryObject.zone} : {},
        attributes: ['id', 'name', 'venue', 'poster', 'startDate', 'organizationId'],   
        
    }],
    where: queryObject.price?{ 
        price: { 
            [Op.gte]: queryObject.startPrice,
            [Op.lte]: queryObject.endPrice
     }}: {},
     attributes: [],
     raw: true,
     group: ['event.id', 'event.organization.id']
   })


const findOneEventQuery = (eventId:number) => Event.findOne({ where: { id: eventId},},);



export {createEventQuery, updateEventQuery, findAllEventsQuery,findOneEventQuery};