import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { User } from '../users/users.entity';
import { UsersModule } from '../users/users.module';
import { UserRepository } from '../users/users.repository';
import { UsersService } from '../users/users.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
@Module({
  providers: [AuthService, UsersService, AuthResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([User, UserRepository]),
        UsersModule,
      ],
      services: [AuthService, UsersService],
      resolvers: [
        {
          DTOClass: AuthDTO,
          ServiceClass: AuthService,
          pagingStrategy: PagingStrategies.OFFSET,
          enableAggregate: true,
        },
      ],
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
