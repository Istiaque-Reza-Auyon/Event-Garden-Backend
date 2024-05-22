import { Organization } from "../organization/model";
import {User,IUser} from "../user/model";

const createUser = (user:IUser) => User.create ({
    email: user.email,
    password: user.password,
    userId: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender
})

const findUserByIdQuery = (id:number) =>  User.findOne({
    where:{
        id: id
    }
})

const emailExistsOrNot = (user: IUser) => User.findOne({
    where: {
        email: user.email
    }
})

const signInUser = (user: IUser) => User.findOne({
     where: {
        email: user.email,
        password: user.password
    }
})

export  {createUser, signInUser, emailExistsOrNot,findUserByIdQuery}