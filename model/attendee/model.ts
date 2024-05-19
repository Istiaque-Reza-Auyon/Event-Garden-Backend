import { DataTypes, Model, Optional } from 'sequelize';
import db from '../../db';
import { Ticket } from '../ticket/model';
import { Event } from '../event/model';
import { User } from '../user/model';

//defining user model

interface IAttendee {
    id: number;
    eventId: number;
    userId: number;
    refund: boolean;
    ticketId: number;
    scanned: boolean;
}


interface AttendeeCreationAttributes extends Optional<IAttendee, 'id'> {};

interface EventInstance extends Model<IAttendee, AttendeeCreationAttributes>,IAttendee {
    createdAt?: Date;
    updatedAt?: Date;
}


const Attendee = db.define<EventInstance>('attendee', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    eventId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    refund: {
        type: DataTypes.BOOLEAN,
    },
    ticketId: {
        type: DataTypes.INTEGER,
    },
    scanned: {
        type: DataTypes.BOOLEAN,
    }
})

Attendee.belongsTo(Ticket)
Ticket.hasMany(Attendee)

Attendee.belongsTo(Event)
Event.hasMany(Attendee)

Attendee.belongsTo(User)
User.hasMany(Attendee)

export {Attendee, IAttendee};