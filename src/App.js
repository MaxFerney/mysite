// import logo from './logo.svg';
import './App.scss';

//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch,
    useHistory,
    useLocation,
    withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

//Pages
import Home from './pages/landing.js';
import ErrorPage from './pages/errorPage.js';

function App() {
    return (
        <Router history={customHistory}>
            <Switch>
                <Route
                    path="/"
                    exact>
                    <Home/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
