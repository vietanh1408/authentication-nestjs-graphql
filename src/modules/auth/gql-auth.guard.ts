import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

Injectable();
export class GqLAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    console.log('run...................');
    const ctx = GqlExecutionContext.create(context);
    console.log('ctx...................', ctx);
    const request = ctx.getContext();
    console.log('request...................1', request);
    request.body = ctx.getArgs().loginUserInput;
    console.log('request...................2', request);

    return request;
  }
}
