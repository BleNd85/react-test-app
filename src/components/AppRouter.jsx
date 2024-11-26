import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./router";
import {AuthContext} from "../context/idex";
import Loader from "./UI/loader/Loader";

export default function AppRouter() {
    const {isAuth, isAuthLoading} = useContext(AuthContext);
    if (isAuthLoading) {
        return (
            <Loader/>
        )
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                />)}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                />)}
            </Routes>)

}