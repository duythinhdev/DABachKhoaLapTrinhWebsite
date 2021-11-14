import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import ContainerAdmin from "../component/admin/body/containerAdmin";
import Login from "../component/admin/login/login";
import BodyAdmin from "../component/admin/bodyAdminUser/bodyAdmin";
import BodyAdminProduct from "../component/admin/bodyAdminProduct/bodyAdminProduct";
import BodyAdminReview from "../component/admin/bodyAdminReview/bodyAdminReview";
import BodyAdminOption from "../component/admin/bodyAdminOption/bodyAdminOption";
import BodyAdminOptionOrder from "../component/admin/bodyAdminOptionOrder/bodyAdminOptionOrder";
import BodyAdminOrder from "../component/admin/bodyAdminOder/bodyAdminOrder";
const login = React.lazy(() => import("../component/user/login/login"));
const register = React.lazy(() => import("../component/user/register/Register"));
const layoutUser = React.lazy(() => import("../component/user/layoutUser/layoutUser"));
const News = React.lazy(() => import("../component/user/layoutNews/layoutNews"));
const layoutCart = React.lazy(() => import("../component/user/layoutCart/layoutCart"));


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
            },
            {
                path: "/admin/optionorder",
                component: BodyAdminOptionOrder
            },
            {
                path: "/admin/order",
                component: BodyAdminOptionOrder
            },
            {
                path: "/admin/order",
                component: BodyAdminOrder
            },
        ]
    },
    {
        path: "/user",
        component: layoutUser,
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/register",
        component: register
    },
    {
        path: "/news",
        component: News
    }
    ,
    {
        path: "/cart",
        component: layoutCart
    }
]
export const routing = <Router>
    <div>
        <React.Suspense fallback={<p>Loading</p>}>
            <Switch>
                {routes.map((route, index) => {
                        return <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                            render={props => {
                                return token ? <route.component {...props} routes={route.routes}/> :
                                    <Redirect to="/loginadmin"/>
                            }

                            }
                        />
                    }
                )}
            </Switch>
        </React.Suspense>
    </div>
</Router>
