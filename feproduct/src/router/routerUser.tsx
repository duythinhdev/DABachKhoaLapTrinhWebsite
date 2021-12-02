import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {lazy, Suspense} from "react";
const login = React.lazy(() => import("../component/user/login/login"));
const register = React.lazy(() => import("../component/user/register/Register"));
const layoutUser = React.lazy(() => import("../component/user/layoutUser/layoutUser"));
const News = React.lazy(() => import("../component/user/layoutNews/layoutNews"));
const layoutCart = React.lazy(() => import("../component/user/layoutCart/layoutCart"));
const layoutBought = React.lazy(() => import("../component/user/layoutBought/layoutBought"));
const Notfoundpage = React.lazy(() => import("../component/NotFound/NotFound"));
const routes: Array<any> = [
    {
        path: "/user",
        component: layoutUser,
        // child: [
        //     {
        //         path: "/user/login",
        //         component: login
        //     },
        //     {
        //         path: "/user/register",
        //         component: register
        //     },
        //     {
        //         path: "/user/news",
        //         component: News
        //     }
        //     ,
        //     {
        //         path: "/user/cart",
        //         component: layoutCart
        //     }
        //     ,
        //     {
        //         path: "/user/bought",
        //         component: layoutBought
        //     }
        // ]
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
    ,
    {
        path: "/bought",
        component: layoutBought
    },
    // {
    //     component: Notfoundpage,
    // },
]
const RoutingUser = () => {
    let isLoginAdmin = useSelector((state: any) => state.login.isLoginAdmin)
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
                                    render={(props) => {
                                        return  <route.component {...props} routes={route.child}/>
                                    }}
                                />
                            }
                        )}
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
export default RoutingUser;
