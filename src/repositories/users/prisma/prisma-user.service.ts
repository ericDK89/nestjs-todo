import { Injectable } from '@nestjs/common';
import { User } from 'src/dtos/user';
import { PrismaService } from 'src/prisma.service';
import { UserRepositoryClass } from '../user-repository-class';

@Injectable()
export class PrismaUserService implements UserRepositoryClass {
  constructor(private prisma: PrismaService) {}

  async create(todo: User): Promise<void> {
    const { name } = todo;

    await this.prisma.user.create({
      data: {
        name,
      },
    });
  }

  async list(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, name: string): Promise<void> {
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
