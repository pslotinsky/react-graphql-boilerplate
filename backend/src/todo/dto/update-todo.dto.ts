import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateTodoDto {
    @Field({ nullable: true })
    @IsOptional()
    text?: string;

    @Field({ nullable: true })
    @IsOptional()
    isDone?: boolean;
}
