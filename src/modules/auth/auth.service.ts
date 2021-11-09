import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthRegisterArgs } from './arg/auth-register.arg';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // async validateUser(username: string, password: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);

  //   if (user && user.password === password) {
  //     const { password, ...rest } = user;
  //     return rest;
  //   }

  //   return null;
  // }

  async register(input: AuthRegisterArgs): Promise<any> {
    const newUser = await this.usersService.create(input);
    console.log('new User....', newUser);
    return newUser;
  }
}
