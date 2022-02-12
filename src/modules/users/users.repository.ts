import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {}
