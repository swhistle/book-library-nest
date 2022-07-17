import { config as dotenvConfig } from 'dotenv';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../../modules/users/auth/auth.service';

dotenvConfig();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        });
    }

    public async validate(payload: any) {
        const user = await this.authService.validateUser({email: payload.email, password: payload.password});

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}