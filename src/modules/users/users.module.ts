import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
