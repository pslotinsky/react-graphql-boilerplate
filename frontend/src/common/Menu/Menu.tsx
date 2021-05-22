import React from 'react';

import { MenuNavigation } from './MenuNavigation';
import { MenuProfile } from './MenuProfile';

import './Menu.scss';

export function Menu(): JSX.Element {
    return (
        <div className="menu">
            <div className="menu__profile">
                <MenuProfile />
            </div>
            <div className="menu__navigation">
                <MenuNavigation />
            </div>
        </div>
    );
}
