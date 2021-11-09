import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthDTO)
  register(@Args('input') input: AuthRegisterArgs): Promise<any> {
    return this.authService.register(input);
  }
}
