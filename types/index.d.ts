
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewEquipmentDto {
    id: string;
    name: string;
    count: number;
}

export interface UpdateEquipmentDto {
    name?: string;
    count?: number;
}

export interface Equipment {
    id: string;
    name: string;
    count: number;
}

export interface IQuery {
    equipment(id: string): Equipment | Promise<Equipment>;
    equipments(): Equipment[] | Promise<Equipment[]>;
}

export interface IMutation {
    addEquipment(data: NewEquipmentDto): Equipment | Promise<Equipment>;
    updateEquipment(data: UpdateEquipmentDto, id: string): boolean | Promise<boolean>;
    removeEquipment(id: string): boolean | Promise<boolean>;
}
