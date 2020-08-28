import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from 'react-router-dom'

import history from "./history";

import Main from "../Pages/Main";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/home" component={Main} />
        </Switch>
    </ConnectedRouter>
)

export default Routes
