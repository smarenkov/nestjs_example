import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.create.dto';
import { User } from 'src/shemas/user.shema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('create')
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
