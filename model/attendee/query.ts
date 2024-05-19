import { Attendee, IAttendee } from "./model";

const checkOutUserQuery = async (attendee:IAttendee[]) => {
    Attendee.bulkCreate (attendee);
}

export {checkOutUserQuery}