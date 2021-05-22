import React from 'react';

interface Props {
    children: React.ReactNode;
    onSubmit?(): void;
}

export function Form({
    children,
    onSubmit = () => {},
}: Props): JSX.Element {
    return (
        <form
            className="form"
            onSubmit={event => {
                event.preventDefault();
                onSubmit();
            }}
        >
            {children}
        </form>
    );
}
