import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import ContainerAdmin from "../component/admin/body/containerAdmin";
import Login from "../component/admin/login/login";
import BodyAdmin from "../component/admin/bodyAdmin/bodyAdmin";
import BodyAdminProduct from "../component/admin/bodyAdminProduct/bodyAdminProduct";

const routes: Array<any> = [
    {
        path: "/",
        component: Login,
        exact: true,
    },
    {
        path: "/body",
        component: ContainerAdmin,
        routes: [
            {
                path: "/body/user",
                component: BodyAdmin
            },
            {
                path: "/body/product",
                component: BodyAdminProduct
            }
        ]
    },
]
export const routing = <Router>
    <div>
        <Switch>
            {routes.map((route, index) => {
                return  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    render={props => (
                        <route.component {...props} routes={route.routes} />
                    )}
                />}
            )}
        </Switch>
    </div>
</Router>
