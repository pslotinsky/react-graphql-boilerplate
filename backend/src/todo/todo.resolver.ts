import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';
import { NewTodoDto } from './dto/new-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Resolver(of => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Query(returns => Todo)
    public async todo(@Args('id') id: number): Promise<Todo> {
        const recipe = await this.todoService.findOneById(id);
        if (!recipe) {
            throw new NotFoundException(id);
        }
        return recipe;
    }

    @Query(returns => [Todo])
    public async todos(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Mutation(returns => Todo)
    public async addTodo(
        @Args('newTodo') newTodo: NewTodoDto,
    ): Promise<Todo> {
        return this.todoService.create(newTodo);
    }

    @Mutation(returns => Boolean)
    public async updateTodo(
        @Args('id') id: number,
        @Args('updatedTodoData') updatedTodoData: UpdateTodoDto,
    ): Promise<Boolean> {
        return this.todoService.update(id, updatedTodoData);
    }

    @Mutation(returns => Boolean)
    public async removeTodo(@Args('id') id: number) {
        return this.todoService.remove(id);
    }
}