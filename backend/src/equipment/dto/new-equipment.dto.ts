import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class NewEquipmentDto {

    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    count: number;

}
