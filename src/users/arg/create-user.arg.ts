import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUser {
  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => Float, { nullable: true })
  age: number;
}
