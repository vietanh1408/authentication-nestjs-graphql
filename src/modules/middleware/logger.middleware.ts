import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...', req.header('Authorization'));
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      // console.log('Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục....');
    }

    try {
      next();
    } catch (err) {
      throw err;
    }
  }
}
