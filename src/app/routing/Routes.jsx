import React from "react";

import {
    Redirect,
    Route,
    Switch,
    useLocation,
} from "react-router-dom/cjs/react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Routes = () => {
    return (
        <>
            <PublicRoutes></PublicRoutes>
            <PrivateRoutes></PrivateRoutes>
        </>
    )
};
