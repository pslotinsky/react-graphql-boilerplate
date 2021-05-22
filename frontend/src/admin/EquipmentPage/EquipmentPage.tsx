import React from 'react';
import { Equipment, NewEquipmentDto } from 'graphql-types';

import { Card, CardSection, CardTitle } from '@common/Card';
import { EquipmentForm } from './EquipmentForm';
import { EquipmentGroups } from './EquipmentGroups';

interface Props {
    items?: Equipment[];
    addEquipment(options?: NewEquipmentDto): void;
}

export function EquipmentPage({
    items = [],
    addEquipment,
}: Props): JSX.Element {
    return (
        <div className="equipment-page">
            <Card>
                <CardSection>
                    <CardTitle>Добавить оборудование</CardTitle>
                    <EquipmentForm onSubmit={addEquipment} />
                </CardSection>

                {items.length > 0
                    ? (
                        <CardSection>
                            <CardTitle>Список оборудования</CardTitle>
                            <EquipmentGroups items={items} />
                        </CardSection>
                    )
                    : undefined
                }
            </Card>
        </div>
    );
}
