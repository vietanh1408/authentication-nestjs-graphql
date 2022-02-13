import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { secretToken } from 'src/constants/environment';
import {
  DUPLICATE_EMAIL,
  DUPLICATE_USERNAME,
  NOT_EXIST_USER_NAME,
  INVALID_PASSWORD,
} from 'src/constants/error';
import { ShowError } from 'src/extensions/error';
import { UsersService } from '../users/users.service';
import { AuthLoginArgs, AuthRegisterArgs } from './arg/auth-register.arg';
import { AuthResultDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ username });
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
        ShowError(DUPLICATE_EMAIL);
      }
      if (checkUsername) {
        ShowError(DUPLICATE_USERNAME);
      }

      // has password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      // create user
      const user = await this.usersService.create({
        username,
        email,
        password: hashedPassword,
      });

      const { password: pass, ...res } = user || {};

      // create access token
      const accessToken = await this.createAccessToken(
        { id: user.id, username: user.username },
        secretToken,
      );

      return {
        access_token: accessToken,
      };
    } catch (e) {
      ShowError(e.message);
    }
  }

  async login(input: AuthLoginArgs): Promise<AuthResultDTO> {
    try {
      const { password, username } = input || {};

      const user = await this.usersService.findOne({ username });

      if (!user) {
        ShowError(NOT_EXIST_USER_NAME);
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        ShowError(INVALID_PASSWORD);
      }

      const accessToken = await this.createAccessToken(
        { id: user.id, username: user.username },
        secretToken,
      );

      return {
        access_token: accessToken,
      };
    } catch (e) {
      ShowError(e.message);
    }
  }

  async createAccessToken(
    { id, username }: { id: string; username: string },
    secretToken: string,
  ): Promise<string> {
    try {
      return await jwt.sign({ userId: id, username }, secretToken, {
        expiresIn: '30d',
      });
    } catch (e) {
      ShowError(e.message);
    }
  }
}
