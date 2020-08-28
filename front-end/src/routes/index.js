import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from "../Pages/Main";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </BrowserRouter>
)

export default Routes
