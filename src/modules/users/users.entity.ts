import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('USERS')
@ObjectType('Users')
export class User extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ name: 'USER_NAME', nullable: true, default: null, unique: true })
  username: string;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'AGE', nullable: true, default: null })
  age: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'PASSWORD', nullable: true, default: null })
  @Exclude()
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'EMAIL', nullable: true, default: null, unique: true })
  email: string;

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
