import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
})
export class AuthModule {}
