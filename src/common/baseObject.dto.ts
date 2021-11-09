import { FilterableField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseObjectDTO {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  createdAt?: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}
