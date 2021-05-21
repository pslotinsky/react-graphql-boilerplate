import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewTodoDto {
    @Field()
    text: string;

    @Field()
    isDone: boolean;
}
