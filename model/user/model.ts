import { DataTypes, Model, Optional } from 'sequelize';
import { Organization } from '../organization/model';
import db from '../../db';


//defining user model

interface IUser {
    id?: number;
    email: string;
    password: string;
    userId: string;
    firstName: string;
    lastName: string;
    profilePic?: string;
    gender: "male" | "female" | "others";
}


interface UserCreationAttributes extends Optional<IUser, 'id'> {};

interface UserInstance extends Model<IUser, UserCreationAttributes>,IUser {
    createdAt?: Date;
    updatedAt?: Date;
}


const User = db.define<UserInstance>('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
    },
    profilePic: {
        type: DataTypes.STRING,
    }
})

Organization.belongsTo(User, { foreignKey: 'adminId' })
User.hasMany(Organization, {foreignKey: 'adminId'})



  export {User, IUser};