import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {lazy, Suspense} from "react";

const ContainerAdmin = React.lazy(() => import("../component/admin/body/containerAdmin"));
const LoginAmin = React.lazy(() => import("../component/admin/login/login"));
const BodyAdminProduct = React.lazy(() => import("../component/admin/bodyAdminProduct/bodyAdminProduct"));
const BodyAdminUser = React.lazy(() => import("../component/admin/bodyAdminUser/bodyAdmin"));
const BodyAdminReview = React.lazy(() => import("../component/admin/bodyAdminReview/bodyAdminReview"));
const BodyAdminOption = React.lazy(() => import("../component/admin/bodyAdminOption/bodyAdminOption"));
const BodyAdminOptionOrder = React.lazy(() => import("../component/admin/bodyAdminOptionOrder/bodyAdminOptionOrder"));
const BodyAdminOrder = React.lazy(() => import("../component/admin/bodyAdminOder/bodyAdminOrder"));
const login = React.lazy(() => import("../component/user/login/login"));
const register = React.lazy(() => import("../component/user/register/Register"));
const layoutUser = React.lazy(() => import("../component/user/layoutUser/layoutUser"));
const News = React.lazy(() => import("../component/user/layoutNews/layoutNews"));
const layoutCart = React.lazy(() => import("../component/user/layoutCart/layoutCart"));
const layoutBought = React.lazy(() => import("../component/user/layoutBought/layoutBought"));

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
]
const Routing = () => {
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

