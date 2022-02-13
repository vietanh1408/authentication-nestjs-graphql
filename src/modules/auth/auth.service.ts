import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ShowError } from 'src/extensions/error';
import { UsersService } from '../users/users.service';
import { AuthLoginArgs, AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthResultDTO } from './dto/auth.dto';
import jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isValidatePassword = await bcrypt.compare(pass, user.password);
    if (user && isValidatePassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(input: AuthRegisterArgs): Promise<AuthResultDTO> {
    try {
      const { email, password, username } = input || {};

      const checkEmail = await this.usersService.checkExistEmail(email);
      const checkUsername = await this.usersService.checkExistUsername(
        username,
      );

      if (checkEmail) {
        ShowError('Email đã tồn tại');
      }
      if (checkUsername) {
        ShowError('Tên đăng nhập đã tồn tại');
      }

      // has password
      const salt = await bcrypt.genSalt();

      const hashedPassword = await bcrypt.hash(password, salt);

      // create user
      const user = await this.usersService.create({
        username,
        email,
        password: hashedPassword,
      });

      // create access token
      // const accessToken = await this.createAccessToken(
      //   user.id,
      //   'SECRET_TOKEN_12314123',
      // );

      return {
        access_token: '',
      };
    } catch (e) {
      ShowError(e.message);
    }
  }

  async login(input: AuthLoginArgs): Promise<AuthResultDTO> {
    try {
      const { email, password, username } = input || {};

      console.log('email....', email);

      if (email) {
        const checkEmail = await this.usersService.checkExistEmail(email);
        if (!checkEmail) {
          ShowError('Email không tồn tại');
        }
      }
      if (username) {
        const checkUsername = await this.usersService.checkExistUsername(
          username,
        );

        if (!checkUsername) {
          ShowError('Tên đăng nhập không tồn tại');
        }
      }

      return {
        access_token: 'token',
      };
    } catch (e) {
      ShowError(e.message);
    }
  }

  async createAccessToken(id: string, secretToken: string): Promise<string> {
    try {
      return await jwt.sign({ userId: id }, secretToken, { expiresIn: '90d' });
    } catch (e) {
      ShowError(e.message);
    }
  }
}
