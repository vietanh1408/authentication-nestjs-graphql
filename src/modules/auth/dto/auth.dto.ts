import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthDTO {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
