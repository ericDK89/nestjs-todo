import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaUserService } from 'src/repositories/users/prisma/prisma-user.service';

@Controller('users')
export class UserController {
  constructor(private prismaUserService: PrismaUserService) {}

  @Post()
  createUser(@Body() user: User) {
    const { name } = user;
    this.prismaUserService.create({ name });
  }

  @Get(':id')
  listUser(@Param('id') id: string) {
    return this.prismaUserService.list(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    const { name } = user;
    return this.prismaUserService.update(id, name);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.prismaUserService.delete(id);
  }
}
