import { ShowError } from 'src/extensions/error';
import { CreateUser } from './arg/create-user.arg';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(condition: Partial<UserDTO>): Promise<User> {
    console.log('condition....,', condition);
    const user = await this.usersRepository.findOne({
      where: {
        ...condition,
      },
      loadEagerRelations: false,
    });

    return user;
  }

  async create(input: CreateUser): Promise<User> {
    console.log('input...', input);
    const newUser = await this.usersRepository.save(
      this.usersRepository.create({ ...input }),
    );
    console.log('user...', newUser);
    return newUser;
  }

  async checkExistEmail(email: string): Promise<boolean> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          email,
        },
        loadEagerRelations: false,
      });

      return !!user;
    } catch (e) {
      ShowError(e.message);
    }
  }

  async checkExistUsername(username: string): Promise<boolean> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          username,
        },
        loadEagerRelations: false,
      });

      return !!user;
    } catch (e) {
      ShowError(e.message);
    }
  }
}
