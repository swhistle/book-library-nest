export interface IUser {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

export interface IUserPublicData {
    email: string;
    firstName: string;
    lastName: string;
}

export interface IUserWithToken {
    email: string;
    access_token: string;
}