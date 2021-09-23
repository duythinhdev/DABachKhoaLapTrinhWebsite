import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Body from "../component/body/body";


const routes: Array<any> = [
    {
        path: "/body",
        component: Body,
        exact: true,
    },
]
export const routing = <Router>
    <div>
        <Switch>
            {routes.map((route, index) => {
                return    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />}
            )}
        </Switch>
    </div>
</Router>
