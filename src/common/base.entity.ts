import { Field, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { BaseObjectEntity } from './baseObject.entity';

@ObjectType()
export class BaseEntity extends BaseObjectEntity {
  @Field(() => String, { nullable: true })
  @Column({ name: 'CREATED_BY', nullable: true, default: null })
  createdBy?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'UPDATED_BY', nullable: true, default: null })
  updatedBy?: string;
}
