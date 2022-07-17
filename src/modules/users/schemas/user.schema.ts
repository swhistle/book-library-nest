import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as crypto from 'crypto';

@Schema()
export class User {
    @Prop({ required: true})
    public email: string;

    @Prop({ required: true})
    public salt: string;

    @Prop({ required: true})
    public passwordHashed: string;

    @Prop({ required: true})
    public firstName: string;

    @Prop({ required: true})
    public lastName: string;

    setPassword: Function;
    validatePassword: Function;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.setPassword =  function (password: string): void {
    // Creating a unique salt for a particular user
    this.salt = crypto.randomBytes(16).toString('hex');

    // Hashing user's salt and password with 1000 iterations,
    this.passwordHashed = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha256').toString('hex');
}

UserSchema.methods.validatePassword = function (password: string): boolean {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha256').toString('hex');
    return this.passwordHashed === hash;
};