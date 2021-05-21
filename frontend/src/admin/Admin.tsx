import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import './Admin.scss';

import { Menu } from './common/Menu';
import { EquipmentPage } from './EquipmentPage';
import { UniversityPage } from './UniversityPage';

export function Admin(): JSX.Element {
    const match = useRouteMatch();

    return (
        <div className="admin">
            <div className="admin__menu">
                <Menu />
            </div>
            <div className="admin__content">
                <Switch>
                    <Route exact path={match.path}>
                        <Redirect to={`${match.path}/university`} />
                    </Route>
                    <Route path={`${match.path}/equipment`}>
                        <EquipmentPage />
                    </Route>
                    <Route path={`${match.path}/university`}>
                        <UniversityPage />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
