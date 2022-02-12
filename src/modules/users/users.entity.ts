import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
@ObjectType('Users')
export class User extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ name: 'USER_NAME', nullable: true, default: null })
  username: string;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'AGE', nullable: true, default: null })
  age: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'PASSWORD', nullable: true, default: null })
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'EMAIL', nullable: true, default: null })
  email: string;
}
