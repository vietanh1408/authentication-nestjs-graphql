import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthService } from './auth.service';
import { AuthDTO, AuthResultDTO } from './dto/auth.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResultDTO)
  register(@Args('input') input: AuthRegisterArgs): Promise<AuthResultDTO> {
    return this.authService.register(input);
  }

  @Mutation(() => AuthResultDTO)
  login(@Args('input') input: AuthRegisterArgs): Promise<AuthResultDTO> {
    return this.authService.register(input);
  }
}
