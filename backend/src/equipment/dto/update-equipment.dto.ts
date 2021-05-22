import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateEquipmentDto {

    @Field({ nullable: true })
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    count?: number;

}
