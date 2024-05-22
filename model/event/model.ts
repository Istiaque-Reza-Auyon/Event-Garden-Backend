import { DataTypes, Model, Optional } from 'sequelize';
import db from '../../db';
import { Ticket } from '../ticket/model';
import { User } from '../user/model';

//defining user model

interface IEvent {
    id?: number;
    name: string;
    organizationId: number;
    startDate: Date;
    endDate: Date;
    venue: string;
    poster: string;
    zone: string;
    latitude: number;
    longitude: number;
    live: boolean;
    description: string;
}


interface EventCreationAttributes extends Optional<IEvent, 'id'> {};

interface EventInstance extends Model<IEvent, EventCreationAttributes>,IEvent {
    createdAt?: Date;
    updatedAt?: Date;
}


const Event = db.define<EventInstance>('event', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    startDate: {
        type: DataTypes.DATE,
    },
    endDate: {
        type: DataTypes.DATE,
    },
    venue: {
        type: DataTypes.STRING,
    },
    poster: {
        type: DataTypes.STRING,
    },
    zone: {
        type: DataTypes.STRING,
    },
    latitude: {
        type: DataTypes.FLOAT,
    },
    longitude: {
        type: DataTypes.FLOAT,
    },
    live : {
        type: DataTypes.BOOLEAN,
    },
    description: {
        type: DataTypes.STRING,
    }
})

Ticket.belongsTo(Event)
Event.hasMany(Ticket)



  export {Event, IEvent};