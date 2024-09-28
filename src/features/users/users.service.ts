import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shema';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel(dto);
    return user.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
