import { Injectable } from '@nestjs/common';

import { Equipment } from './models/equipment.model';
import { NewEquipmentDto } from './dto/new-equipment.dto';

let items: Equipment[] = [];

@Injectable()
export class EquipmentService {

    public async create(data: NewEquipmentDto): Promise<Equipment> {
        const item = new Equipment();
        Object.assign(item, data);

        if (!(await this.findOneById(item.id))) {
            items.push(item);
        }

        return item;
    }

    public async update(id: string, data: Partial<NewEquipmentDto>): Promise<boolean> {
        const item = await this.findOneById(id);

        Object.assign(item, data);

        return true;
    }

    public async findOneById(id: string): Promise<Equipment> {
        return items.find(item => item.id === id);
    }

    public async findAll(): Promise<Equipment[]> {
        return items;
    }

    public async remove(id: string): Promise<boolean> {
        const item = await this.findOneById(id);

        if (item) {
            items = items.filter(item => item.id !== id);
        }

        return !!item;
    }

}
