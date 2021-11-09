import { Field, ID, ObjectType } from '@nestjs/graphql';
import { initNewDate } from 'src/extensions/datetime';
import {
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class BaseObjectEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id!: string;

  @CreateDateColumn({ name: 'CREATED_AT', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'UPDATED_AT', type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'DELETED_AT', nullable: true, type: 'timestamp' })
  deletedAt!: Date;

  @BeforeInsert()
  async setCreatedAt(): Promise<void> {
    this.createdAt = initNewDate();
  }
}
