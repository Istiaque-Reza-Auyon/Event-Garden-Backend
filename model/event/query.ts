import { start } from "repl";
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

const updateEventQuery = async (event:IEvent) => {
    const targetEvent = await Event.findOne({ where: {
    id : event.id
    }
})
    if (targetEvent!= null) {
        targetEvent.name = event.name || targetEvent.name,
        targetEvent.organizationId = event.organizationId || targetEvent.organizationId,
        targetEvent.startDate = event.startDate || targetEvent.startDate,
        targetEvent.endDate = event.endDate || targetEvent.endDate,
        targetEvent.venue = event.venue || targetEvent.venue,
        targetEvent.poster =  event.poster || targetEvent.poster,
        targetEvent.live = event.live || targetEvent.live

        targetEvent.save();

        return targetEvent;
    } else {
        return null;
    }
}

export {createEventQuery, updateEventQuery};