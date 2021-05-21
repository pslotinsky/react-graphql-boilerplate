import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import './MenuNavigation.scss';

export function MenuNavigation(): JSX.Element {
    const match = useRouteMatch();

    return (
        <nav className="menu-navigation">
            <NavLink
                className="menu-navigation__item"
                activeClassName="menu-navigation__item_selected"
                to={`${match.path}/equipment`}
            >
                Оборудование
            </NavLink>
            <NavLink
                className="menu-navigation__item"
                activeClassName="menu-navigation__item_selected"
                to={`${match.path}/university`}
            >
                Университет
            </NavLink>
        </nav>
    );
}
