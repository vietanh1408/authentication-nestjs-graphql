import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthRegisterArgs {
  @Field()
  username?: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  age: number;
}
