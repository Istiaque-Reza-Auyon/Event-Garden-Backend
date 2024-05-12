import { Event,IEvent } from "./model";

const createEventQuery = (event:IEvent) => Event.create ({
    name: event.name,
    organizationId: event.organizationId,
    startDate: event.startDate,
    endDate: event.endDate,
    venue: event.venue,
    poster: event.poster,
    live: event.live
})

export {createEventQuery};