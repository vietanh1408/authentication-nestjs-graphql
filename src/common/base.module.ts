import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';

export const BaseModule = [UsersModule, AuthModule];
