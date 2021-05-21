import { Injectable } from '@nestjs/common';

import { Todo } from './models/todo.model';
import { NewTodoDto } from './dto/new-todo.dto';

let items: Todo[] = [];

@Injectable()
export class TodoService {

    public async create({ text, isDone }: NewTodoDto): Promise<Todo> {
        const todo = new Todo();
        todo.id = items.length + 1;
        todo.text = text;
        todo.isDone = isDone;

        items.push(todo);

        return todo;
    }

    public async update(id: number, { text, isDone }: Partial<NewTodoDto>): Promise<boolean> {
        const todo = await this.findOneById(id);
        let isUpdated = false;

        if (todo && text) {
            todo.text = text;
            isUpdated = true;
        }

        if (todo && isDone) {
            todo.isDone = isDone;
            isUpdated = true;
        }

        return isUpdated;
    }

    public async findOneById(id: number): Promise<Todo> {
        return items.find(item => item.id === id);
    }

    public async findAll(): Promise<Todo[]> {
        return items;
    }

    public async remove(id: number): Promise<boolean> {
        const item = await this.findOneById(id);

        if (item) {
            items = items.filter(item => item.id !== id);
        }

        return !!item;
    }

}
