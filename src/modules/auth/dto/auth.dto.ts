import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base.dto';
import { User } from 'src/modules/users/users.entity';

@ObjectType()
export class AuthDTO extends BaseDTO {
  @Field(() => ID)
  id: string;
  s;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class AuthResultDTO {
  @Field(() => String, { nullable: true })
  access_token?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}
