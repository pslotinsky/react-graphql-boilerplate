import React, { ReactNode } from 'react';

import './Card.scss';

interface Props {
    children: ReactNode;
}

export function CardSection({
    children,
}: Props): JSX.Element {
    return (
        <div className="card__section">
            {children}
        </div>
    );
}
