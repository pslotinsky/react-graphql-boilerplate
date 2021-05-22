import React, { ReactNode } from 'react';

import './Card.scss';

interface Props {
    children: ReactNode;
}

export function Card({
    children,
}: Props): JSX.Element {
    return (
        <div className="card">
            {children}
        </div>
    );
}
