import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base.dto';

@ObjectType()
export class UserDTO extends BaseDTO {
  @Field(() => String)
  username: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;
}
