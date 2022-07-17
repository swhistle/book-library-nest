import { config as dotenvConfig } from 'dotenv';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { IUser, IUserWithToken } from '../interfaces/user.interface';
import { User, UserDocument } from '../schemas/user.schema';

dotenvConfig();

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async validateUser(userData: IUser): Promise<IUserWithToken> {
        const {email, password} = userData;
        const user = await this.userModel.findOne({email: email});

        if (!user) {
            throw new BadRequestException('User with this combination of email and password has not found');
        }

        if (!user.validatePassword(password)) {
            throw new BadRequestException('User with this combination of email and password has not found');
        }

        const token = jwt.sign({id: user._id, email: email}, process.env.JWT_SECRET);

        return {
            email,
            token
        };
    }
}
