import { DataTypes, Model, Optional } from 'sequelize';
import db from '../../db';


//defining user model

interface IOrganization {
    id: number;
    name: string;
    adminId: number;
    bioGraphy: string;
    instaUsername: string;
    twitterUsername: string;
    linkedInUrl: string;
    websiteUrl: string;
    customLinks: string;
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
        allowNull: false
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
    }
})

  export {Organization, IOrganization};