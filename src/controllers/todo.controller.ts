import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from 'src/dtos/todo';
import { PrismaTodoService } from 'src/repositories/todos/prisma/prisma-todos.service';

@Controller('todos')
export class TodoController {
  constructor(private prismaTodoService: PrismaTodoService) {}

  @Post(':userId')
  createTodo(@Body() todo: Todo, @Param('userId') userId: string) {
    const { description } = todo;
    this.prismaTodoService.create({ description }, userId);
  }

  @Get(':userId')
  listTodos(@Param('userId') userId: string) {
    return this.prismaTodoService.list(userId);
  }

  @Patch(':id')
  updateDescriptionTodo(@Param('id') id: string, @Body() todo: Todo) {
    const { description } = todo;
    this.prismaTodoService.updateDescription(id, description);
  }

  @Patch('done/:id')
  updatedDoneTodo(@Param('id') id: string) {
    this.prismaTodoService.updateDone(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    this.prismaTodoService.delete(id);
  }
}
