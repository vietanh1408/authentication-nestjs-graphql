import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  username: string;

  @Column()
  age: number;

  @Column()
  password: string;
}
