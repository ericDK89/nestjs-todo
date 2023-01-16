import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './prisma.service';
import { PrismaTodoService } from './repositories/todos/prisma/prisma-todos.service';
import { PrismaUserService } from './repositories/users/prisma/prisma-user.service';

@Module({
  imports: [],
  controllers: [UserController, TodoController],
  providers: [PrismaService, PrismaUserService, PrismaTodoService],
})
export class AppModule {}
