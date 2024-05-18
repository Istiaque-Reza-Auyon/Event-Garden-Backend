import { DataTypes, Model, Optional } from 'sequelize';
import db from '../../db';


//defining user model

interface ITicket {
    id: number;
    name: string;
    price: number;
    quantity: number;
    startTime: Date;
    eventId: number;
}


interface TicketCreationAttributes extends Optional<ITicket, 'id'> {};

interface TicketInstance extends Model<ITicket, TicketCreationAttributes>,ITicket {
    createdAt?: Date;
    updatedAt?: Date;
}


const Ticket = db.define<TicketInstance>('ticket', {
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    startTime: {
        type: DataTypes.DATE,
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


  export {Ticket, ITicket};