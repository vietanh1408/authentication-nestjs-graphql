import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthLoginArgs, AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthService } from './auth.service';
import { AuthResultDTO } from './dto/auth.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Mutation(() => AuthResultDTO)
  register(@Args('input') input: AuthRegisterArgs): Promise<AuthResultDTO> {
    return this.authService.register(input);
  }

  @Mutation(() => AuthResultDTO)
  login(@Args('input') input: AuthLoginArgs): Promise<AuthResultDTO> {
    return this.authService.login(input);
  }
}
