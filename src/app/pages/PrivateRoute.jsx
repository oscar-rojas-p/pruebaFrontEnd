import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";


export const PrivateRoute = ({component: Component, rest}) => {
    
    return (
        <Route exact {...rest}>
            <Component></Component>
        </Route>
    )
};
