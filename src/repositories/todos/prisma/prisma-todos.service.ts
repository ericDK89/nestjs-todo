import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Todo } from 'src/dtos/todo';
import { TodosRepositoryClass } from '../todos-repository-class';

const prisma = new PrismaClient();

@Injectable()
export class PrismaTodoService implements TodosRepositoryClass {
  async create(todo: Todo, userId: string): Promise<void> {
    const { description } = todo;

    await prisma.todos.create({
      data: {
        description,
        done: false,
        userId,
      },
    });
  }

  async list(userId: string): Promise<Todo[]> {
    const todo = await prisma.todos.findMany({
      where: {
        userId,
      },
    });

    return todo;
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await prisma.todos.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });
  }

  async updateDone(id: string): Promise<void> {
    const todo = await prisma.todos.findUnique({
      where: {
        id,
      },
    });

    const isDone = todo.done;

    await prisma.todos.update({
      where: {
        id,
      },
      data: {
        done: !isDone,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.todos.delete({
      where: {
        id,
      },
    });
  }
}
