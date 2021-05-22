import React from 'react';
import { Equipment } from 'graphql-types';

import './EquipmentGroups.scss';

interface Props {
    letter: string;
    items: Equipment[];
}

export function EquipmentGroup({
    letter,
    items,
}: Props): JSX.Element {
    return (
        <div className="equipment-group">
            <div className="equipment-group__letter">
                {letter}
            </div>
            <div className="equipment-group__list">
                {items.map(({ id, name, count }) => (
                    <div key={id} className="equipment-group__item">
                        {name} {count}
                    </div>
                ))}
            </div>
        </div>
    );
}
