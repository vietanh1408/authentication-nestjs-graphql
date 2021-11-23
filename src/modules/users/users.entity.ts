import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
@ObjectType('Users')
export class UserEntity extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ name: 'USER_NAME' })
  username: string;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'AGE' })
  age: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'PASSWORD' })
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'EMAIL' })
  email: string;
}
