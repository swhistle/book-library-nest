import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '../../../common/pipes/Validation/validation.pipe';
import { UserCredentialsDto } from '../dto/user.dto';

@Controller('api/users/signin')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    async signIn(@Body() user: UserCredentialsDto) {
        return this.authService.validateUser(user);
    }
}
