import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { Module } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { User } from './users.entity';
import { UserRepository } from './users.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UsersResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User, UserRepository])],
      services: [UsersService],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: User,
          ServiceClass: UsersService,
          pagingStrategy: PagingStrategies.OFFSET,
          enableAggregate: true,
        },
      ],
    }),
  ],
  exports: [UsersService],
})
export class UsersModule {}
