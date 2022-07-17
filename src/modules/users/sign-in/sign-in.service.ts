import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { IUser, IUserWithToken } from '../interfaces/user.interface';
import { User, UserDocument } from '../schemas/user.schema';
import { JWT_SECRET } from '../../../../config';

@Injectable()
export class SignInService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async signIn(userData: IUser): Promise<IUserWithToken> {
        const {email, password} = userData;
        const user = await this.userModel.findOne({email: email});

        if (!user) {
            throw new BadRequestException('User with this combination of email and password has not found');
        }

        if (!user.validatePassword(password)) {
            throw new BadRequestException('User with this combination of email and password has not found');
        }

        const token = jwt.sign({id: user._id, email: email}, JWT_SECRET);

        return {
            email,
            token
        };
    }
}
