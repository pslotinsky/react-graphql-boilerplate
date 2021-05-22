import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Equipment } from 'graphql-types';

import { EquipmentPage } from './EquipmentPage';

const GET_EQUIPMENT = gql`
    query GetEquipment {
        equipments {
            id
            name
            count
        }
    }
`;

const ADD_EQUIPMENT = gql`
    mutation AddEquipment($dto: NewEquipmentDto!) {
        addEquipment(data: $dto) {
            id
            name
            count
        }
    }
`;

export function EquipmentPageContainer(): JSX.Element {
    const { data } = useQuery<{ equipments: Equipment[] }>(GET_EQUIPMENT, {
        fetchPolicy: 'cache-and-network',
    });
    const [addEquipment] = useMutation(ADD_EQUIPMENT, {
        refetchQueries: [{ query: GET_EQUIPMENT }],
    });

    return (
        <EquipmentPage
            items={data?.equipments}
            addEquipment={dto => addEquipment({ variables: { dto } })}
        />
    );
}
