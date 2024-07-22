import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { PrivateRoute } from "../pages/PrivateRoute";
import Perfil from "../pages/PaginasPrivadas/Perfil";
import Documento from "../pages/PaginasPrivadas/Documento";
import PageNotFound from "../pages/PaginasPublicas/PageNotFound";

export const PrivateRoutes = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path='/perfil' component={Perfil}/>
                <PrivateRoute path='/documento' component={Documento}/>
            </Switch>
        </>
    )
};
