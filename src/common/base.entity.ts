import { Field, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { BaseObjectEntity } from './baseObject.entity';

@ObjectType()
export class BaseEntity extends BaseObjectEntity {
  @Field(() => String, { nullable: true })
  @Column({ name: 'CREATED_BY' })
  createdBy?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'UPDATED_BY' })
  updatedBy?: string;
}
