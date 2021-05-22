import React from 'react';

import './Input.scss';

interface Props {
    name?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    onChange?(value: string): void;
}

export function Input({
    name,
    value,
    label,
    placeholder,
    onChange = () => {},
}: Props): JSX.Element {
    return (
        <div className="input">
            <label htmlFor={name}>
                {label}
                <input
                    className="input__input"
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={({ target }) => onChange(target.value)}
                />
            </label>
        </div>
    );
}
