import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Equipment } from './models/equipment.model';
import { EquipmentService } from './equipment.service';
import { NewEquipmentDto } from './dto/new-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Resolver(of => Equipment)
export class EquipmentResolver {

    constructor(private readonly service: EquipmentService) {}

    @Query(returns => Equipment)
    public async equipment(@Args('id') id: string): Promise<Equipment> {
        const result = await this.service.findOneById(id);
        if (!result) {
            throw new NotFoundException(id);
        }
        return result;
    }

    @Query(returns => [Equipment])
    public async equipments(): Promise<Equipment[]> {
        return this.service.findAll();
    }

    @Mutation(returns => Equipment)
    public async addEquipment(
        @Args('data') data: NewEquipmentDto,
    ): Promise<Equipment> {
        return this.service.create(data);
    }

    @Mutation(returns => Boolean)
    public async updateEquipment(
        @Args('id') id: string,
        @Args('data') data: UpdateEquipmentDto,
    ): Promise<Boolean> {
        return this.service.update(id, data);
    }

    @Mutation(returns => Boolean)
    public async removeEquipment(@Args('id') id: string) {
        return this.service.remove(id);
    }

}
