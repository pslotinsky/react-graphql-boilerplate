import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Admin } from '@admin';

import './App.scss';

function App(): JSX.Element {
    return (
        <div className="app">
            <Router>
                <Route exact path="/">
                    <Redirect to="/admin" />
                </Route>
                <Switch>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
