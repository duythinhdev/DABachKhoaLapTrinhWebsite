import {BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import React from "react";
import ContainerAdmin from "../component/admin/body/containerAdmin";
import Login from "../component/admin/login/login";
import BodyAdmin from "../component/admin/bodyAdminUser/bodyAdmin";
import BodyAdminProduct from "../component/admin/bodyAdminProduct/bodyAdminProduct";
import BodyAdminReview from "../component/admin/bodyAdminReview/bodyAdminReview";
import BodyAdminOption from "../component/admin/bodyAdminOption/bodyAdminOption";
import {useSelector} from "react-redux";


let token = localStorage.getItem("token")
const routes: Array<any> = [
    {
        path: "/loginadmin",
        component: Login,
    },
    {
        path: "/admin",
        component: ContainerAdmin,
        routes: [
            {
                path: "/admin/user",
                component: BodyAdmin
            },
            {
                path: "/admin/product",
                component: BodyAdminProduct
            },
            {
                path: "/admin/review",
                component: BodyAdminReview
            },
            {
                path: "/admin/option",
                component: BodyAdminOption
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
                    render={props => {return token ?  <route.component {...props} routes={route.routes} /> : <Redirect to="/loginadmin" />}

                    }
                />}
            )}
        </Switch>
    </div>
</Router>
