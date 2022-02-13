import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUser } from './arg/create-user.arg';
import { UserDTO } from './dto/user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UserDTO])
  @UseGuards(new AuthGuard())
  users(@Context('user') user: User): Promise<UserDTO[]> {
    console.log('user....', user);
    return this.usersService.findAll();
  }

  @Query(() => UserDTO)
  user(@Args('id') id: string): Promise<UserDTO> {
    return this.usersService.findOne({ id });
  }

  @Mutation(() => UserDTO)
  create(
    @Args('input', { type: () => CreateUser }) input: CreateUser,
  ): Promise<UserDTO> {
    return this.usersService.create(input);
  }
}
