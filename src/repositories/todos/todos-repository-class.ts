import { Todo } from 'src/dtos/todo';

export abstract class TodosRepositoryClass {
  abstract create(todo: Todo, userId: string): Promise<void>;
  abstract list(userId: string): Promise<Todo[]>;
  abstract updateDescription(id: string, description: string): Promise<void>;
  abstract updateDone(id: string, done: boolean): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
