import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base.dto';

@ObjectType()
export class AuthDTO extends BaseDTO {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class AuthResultDTO {
  @Field(() => String, { nullable: true })
  access_token?: string;
}
