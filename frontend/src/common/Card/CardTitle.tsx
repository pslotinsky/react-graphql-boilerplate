import React, { ReactNode } from 'react';

import './Card.scss';

interface Props {
    children: ReactNode;
}

export function CardTitle({
    children,
}: Props): JSX.Element {
    return (
        <div className="card__title">
            {children}
        </div>
    );
}
