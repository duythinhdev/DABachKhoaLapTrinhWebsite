import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {lazy, Suspense} from "react";
import { ContainerAdmin,
    LoginAmin,
    BodyAdminProduct,
    BodyAdminUser,
    BodyAdminReview,
    BodyAdminOption,
    BodyAdminOptionOrder,
    BodyAdminOrder,
    login,
    register,
    layoutUser,
    News,
    layoutCart,
    layoutBought,
    AllTopProduct,
    ProductBrand
} from "./index";

const routes: Array<any> = [
    {
        path: "/loginadmin",
        component: LoginAmin,
    },
    {
        path: "/admin",
        component: ContainerAdmin,
        routes: [
            {
                path: "/admin/user",
                component: BodyAdminUser
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
        path: "/cart"    ,
        component: layoutCart
    }
    ,
    {
        path: "/bought",
        component: layoutBought
    },
    {
        path: "/topproduct",
        component: AllTopProduct
    },
    {
        path: "/productbrand",
        component: ProductBrand
    }
]
const Routing = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={<p>Loading</p>}>
                    <Switch>
                        {routes.map((route, index) => {
                                return <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                    // render={(props) => {
                                    //     return isLoginAdmin ? <route.component {...props} routes={route.routes}/> :
                                    //         <Redirect to="/loginadmin"/>
                                    // }}
                                />
                            }
                        )}
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
export default Routing;

