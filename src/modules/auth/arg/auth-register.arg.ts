import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AuthRegisterArgs {
  @Field()
  username?: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}

@InputType()
export class AuthLoginArgs {
  @Field()
  username?: string;

  @Field()
  email?: string;

  @Field()
  password: string;
}
