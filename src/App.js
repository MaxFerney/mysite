// import logo from './logo.svg';
import './App.scss';
import Home from './pages/landing.js';
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

//IMPORT REACT ROUTER DOM NEXT BISH
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
function App() {
    return (
        <Router history={customHistory}>
            <Switch>
                <Route
                    path="/"
                    exact>
                    <Home/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
