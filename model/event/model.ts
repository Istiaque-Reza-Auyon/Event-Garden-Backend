import { DataTypes, Model, Optional } from 'sequelize';
import db from '../../db';


//defining user model

interface IEvent {
    id: number;
    name: string;
    organizationId: number;
    startDate: Date;
    endDate: Date;
    venue: string;
    poster: string;
    live: boolean;
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
        type: DataTypes.STRING,
        allowNull: false
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
    live : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

  export {Event, IEvent};