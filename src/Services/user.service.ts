import { Injectable } from '@nestjs/common';
import { CreateUser } from 'src/Controllers/user.controller';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async postUsers(body: CreateUser) {
    const { name } = body;
    await this.prisma.user.create({
      data: {
        name,
      },
    });
  }

  getUsers() {
    return this.prisma.user.findMany();
  }
}
