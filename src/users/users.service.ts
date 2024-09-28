import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.create.dto';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_SERVICE') private rabbitClient: ClientProxy,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel(dto);
    const newUser = await user.save();

    this.rabbitClient.emit('user_created', newUser);

    return newUser;
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
