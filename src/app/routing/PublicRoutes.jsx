import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

import Login from "../pages/PaginasPublicas/Login";
import Home from"../pages/PaginasPublicas/Home";

export const PublicRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path="/" component={Login}/>
            </Switch>
        </>
    )
};
