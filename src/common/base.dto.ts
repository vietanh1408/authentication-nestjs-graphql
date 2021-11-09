import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseObjectDTO } from './baseObject.dto';

@ObjectType('BaseDTO')
export class BaseDTO extends BaseObjectDTO {
  @FilterableField(() => String, { nullable: true })
  createdBy?: string;

  @FilterableField(() => String, { nullable: true })
  updatedBy?: string;
}
