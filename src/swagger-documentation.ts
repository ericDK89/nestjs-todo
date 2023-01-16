import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('Todo')
  .setDescription('The user/todos API description')
  .setVersion('1.0')
  .addTag('Todos', 'An API to create users and todos')
  .build();
