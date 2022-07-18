import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SignUpModule } from './sign-up/sign-up.module';

@Module({
  imports: [
    AuthModule,
    SignUpModule,
  ]
})
export class UsersModule {}
