import { IsNotEmpty, Length } from 'class-validator';

export class Todo {
  @IsNotEmpty()
  @Length(3, 540)
  description: string;
}
