import React from 'react';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import { Equipment } from 'graphql-types';

import { EquipmentGroup } from './EquipmentGroup';

interface Props {
    items: Equipment[];
}

export function EquipmentGroups({ items }: Props): JSX.Element {
    const groups = groupBy(sortBy(items, 'name'), item => item.name[0]);

    return (
        <div className="equipment-groups">
            {Object.keys(groups).map(key => (
                <EquipmentGroup
                    key={key}
                    letter={key}
                    items={groups[key]}
                />
            ))}
        </div>
    );
}
