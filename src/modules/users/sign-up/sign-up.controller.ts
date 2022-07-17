import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { ValidationPipe } from '../../../common/pipes/Validation/validation.pipe';
import { UserDto } from '../dto/user.dto';

@Controller('api/users/signup')
export class SignUpController {
    constructor(private readonly signUpService: SignUpService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    async signUp(@Body() createUser: UserDto) {
        return this.signUpService.signUp(createUser);
    }
}
