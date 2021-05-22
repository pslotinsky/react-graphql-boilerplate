import React from 'react';

import './Form.scss';

interface Props {
    children: React.ReactNode;
}

export function FormSection({
    children,
}: Props): JSX.Element {
    return <div className="form__section">{children}</div>;
}
