import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { SortEnum } from 'src/constants/enum';

@InputType()
export class SortFieldDTO {
  @Field(() => String, { nullable: true })
  field?: string;

  @Field(() => SortEnum, { nullable: true })
  direction?: SortEnum;
}

@InputType()
export class PagingFieldDTO {
  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;
}

@ArgsType()
export class BaseQueryArgs {
  @Field(() => SortFieldDTO, { nullable: true })
  sorting?: SortFieldDTO;

  @Field(() => PagingFieldDTO, { nullable: true })
  paging?: PagingFieldDTO;
}

export class JsonData {
  @Field(() => Boolean, { defaultValue: false })
  isError: boolean;

  @Field(() => JSON, { defaultValue: null })
  data: any;

  @Field(() => String, { defaultValue: null })
  message: string;
}
