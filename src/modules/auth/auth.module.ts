import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UsersModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
