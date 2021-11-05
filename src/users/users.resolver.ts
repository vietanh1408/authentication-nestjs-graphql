import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser } from './arg/create-user.arg';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UserDTO])
  users(): Promise<UserDTO[]> {
    return this.usersService.findAll();
  }

  @Query(() => UserDTO)
  user(@Args('id') id: string): Promise<UserDTO> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => UserDTO)
  create(
    @Args('input', { type: () => CreateUser }) input: CreateUser,
  ): Promise<UserDTO> {
    return this.usersService.create(input);
  }
}
