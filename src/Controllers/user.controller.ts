import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../Services/user.service';

export interface CreateUser {
  name: string;
}

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  async postUsers(@Body() body: CreateUser) {
    return this.userService.postUsers(body);
  }
}
