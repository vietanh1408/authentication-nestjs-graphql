import { Field, Float, InputType } from '@nestjs/graphql';
import { BaseQueryArgs } from 'src/common/base.args';

@InputType()
export class CreateUser extends BaseQueryArgs {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Float, { nullable: true })
  age?: number;
}
