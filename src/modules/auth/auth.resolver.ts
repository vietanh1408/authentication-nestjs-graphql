import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthLoginArgs, AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthService } from './auth.service';
import { AuthDTO, AuthResultDTO } from './dto/auth.dto';
import { GqLAuthGuard } from './gql-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResultDTO)
  register(@Args('input') input: AuthRegisterArgs): Promise<AuthResultDTO> {
    return this.authService.register(input);
  }

  @Mutation(() => AuthResultDTO)
  @UseGuards(GqLAuthGuard)
  login(@Args('input') input: AuthLoginArgs): Promise<AuthResultDTO> {
    return this.authService.login(input);
  }
}
