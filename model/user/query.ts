import {User,IUser} from "../user/model";

const createUser = (user:IUser) => User.create ({
    email: user.email,
    password: user.password,
    userId: user.userId,
    gender: user.gender
})

const signInUser = (user: IUser) => User.findOne({
     where: {
        email: user.email,
        password: user.password
    }
})

export  {createUser, signInUser}