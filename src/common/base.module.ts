import { UsersModule } from 'src/modules/users/users.module';
import { AuthModule } from 'src/modules/auth/auth.module';

export const BaseModule = [UsersModule, AuthModule];
