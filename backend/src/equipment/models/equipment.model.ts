import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Equipment {

    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    count: number;

}
