import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IUser, IUserPublicData } from '../interfaces/user.interface';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class SignUpService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async signUp(user: IUser): Promise<IUserPublicData> {
        const {email, password, firstName, lastName} = user;

        try {
            const newUser = new this.userModel({email, firstName, lastName});
            newUser.setPassword(password);

            await newUser.save();

            return {
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            };
        } catch (e) {
            throw new BadRequestException(e);
        }

    }
}