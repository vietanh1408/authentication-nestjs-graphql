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

  async login(input: AuthLoginArgs): Promise<any> {
    try {
      const { email, password, username } = input || {};

      const checkEmail = await this.usersService.checkExistEmail(email);
      const checkUsername = await this.usersService.checkExistUsername(
        username,
      );

      if (!checkEmail) {
        ShowError('Email không tồn tại');
      }

      if (!checkUsername) {
        ShowError('Tên đăng nhập không tồn tại');
      }
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
