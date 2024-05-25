import { Attendee, IAttendee } from "./model";


const checkOutUserQuery = async (attendee:IAttendee[]) => {
  return  Attendee.bulkCreate (attendee);
}

const findAllAttendeesQuery = async (eventId: number) => Attendee.findAll({
    where: eventId?{eventId: eventId} : {},
     attributes: ['id'],
     raw: true,
   })


export {checkOutUserQuery, findAllAttendeesQuery}