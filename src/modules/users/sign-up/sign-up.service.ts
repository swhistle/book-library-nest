import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class SignUpService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async signUp(user: IUser): Promise<User> {
        console.log('signUpService signUp user', user);
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
