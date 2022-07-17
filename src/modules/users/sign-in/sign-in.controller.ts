import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { ValidationPipe } from '../../../common/pipes/Validation/validation.pipe';
import { UserCredentialsDto } from '../dto/user.dto';

@Controller('api/users/signin')
export class SignInController {
    constructor(private readonly signInService: SignInService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    async signIn(@Body() user: UserCredentialsDto) {
        return this.signInService.signIn(user);
    }
}
