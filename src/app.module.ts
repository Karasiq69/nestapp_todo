import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Todo],
      synchronize: true,
      logging: ['query', 'error'],
      logger: 'advanced-console',
    }),
    TodoModule,
  ],
})
export class AppModule {}
