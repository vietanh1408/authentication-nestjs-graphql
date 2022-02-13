import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { secretToken } from 'src/constants/environment';
import { INVALID_TOKEN } from 'src/constants/error';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    if (!ctx.headers.authorization) {
      return false;
    }

    ctx.user = await this.verifyToken(ctx.headers.authorization);
    return true;
  }

  async verifyToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException(INVALID_TOKEN, HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    try {
      return await jwt.verify(token, secretToken);
    } catch (e) {
      throw new HttpException(INVALID_TOKEN, HttpStatus.UNAUTHORIZED);
    }
  }
}
