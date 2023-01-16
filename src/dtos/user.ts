import { IsNotEmpty, Length } from 'class-validator';

export class User {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;
}
