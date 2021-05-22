import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { NewEquipmentDto } from 'graphql-types';

import { Input } from '@common/Input';
import { Form, FormSection } from '@common/Form';

interface Props {
    onSubmit(data: NewEquipmentDto): void;
}

export function EquipmentForm({
    onSubmit,
}: Props): JSX.Element {
    const [name, setName] = useState('');
    const [count, setCount] = useState('');

    return (
        <Form
            onSubmit={() => onSubmit({
                id: nanoid(),
                count: Number(count),
                name,
            })}
        >
            <FormSection>
                <Input
                    name="name"
                    label="Название оборудования"
                    placeholder="Введите название оборудования"
                    value={name}
                    onChange={setName}
                />
            </FormSection>
            <FormSection>
                <Input
                    name="count"
                    label="Количество"
                    placeholder="Введите количество"
                    value={count}
                    onChange={setCount}
                />
            </FormSection>
            <button type="submit">Добавить</button>
        </Form>
    );
}
