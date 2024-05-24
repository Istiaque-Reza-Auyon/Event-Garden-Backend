import { DataTypes, Model, Optional } from 'sequelize';
import { Event } from '../event/model';
import db from '../../db';
import { User } from '../user/model';


//defining user model

interface IOrganization {
    id?: number;
    name: string;
    adminId: number;
    country: string
    bioGraphy: string;
    instaUsername: string;
    twitterUsername: string;
    linkedInUrl: string;
    websiteUrl: string;
    customLinks: string;
    poster: string;
}


interface OrganizationCreationAttributes extends Optional<IOrganization, 'id'> {};

interface OrganizationInstance extends Model<IOrganization, OrganizationCreationAttributes>,IOrganization {
    createdAt?: Date;
    updatedAt?: Date;
}


const Organization = db.define<OrganizationInstance>('organization', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bioGraphy: {
        type: DataTypes.STRING,
    },
    instaUsername: {
        type: DataTypes.STRING,
    },
    twitterUsername: {
        type: DataTypes.STRING,
    },
    linkedInUrl: {
        type: DataTypes.STRING,
    },
    websiteUrl: {
        type: DataTypes.STRING,
    },
    customLinks: {
        type: DataTypes.STRING,
    }, 
    poster: {
        type: DataTypes.STRING,
    },
})

Event.belongsTo(Organization, { foreignKey: 'organizationId' })
Organization.hasMany(Event, { foreignKey: 'organizationId' })

// User.hasMany(Event)


  export {Organization, IOrganization};