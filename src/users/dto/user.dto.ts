import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => Int)
  age: number;
}
