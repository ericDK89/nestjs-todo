import { User } from 'src/dtos/user';

export abstract class UserRepositoryClass {
  abstract create(todo: User): Promise<void>;
  abstract list(id: string): Promise<User>;
  abstract update(id: string, name: string): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
