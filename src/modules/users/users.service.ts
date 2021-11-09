import { CreateUser } from './arg/create-user.arg';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(input: CreateUser): Promise<UserEntity> {
    console.log('input...', input);
    const newUser = await this.usersRepository.save(
      this.usersRepository.create({ ...input }),
    );
    console.log('user...', newUser);
    return newUser;
  }
}
