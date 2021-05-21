import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
    @Field(type => ID)
    id: number;

    @Field()
    text: string;

    @Field()
    isDone: boolean;
}
