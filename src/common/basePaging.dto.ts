import { FilterableField } from '@nestjs-query/query-graphql';
import { Int, ObjectType } from '@nestjs/graphql';

@ObjectType('BasePagingDTO')
export class BasePagingDTO {
  @FilterableField(() => Int, { nullable: true, defaultValue: 0 })
  totalCount: number;
}
