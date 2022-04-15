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
    ProductBrand,
    HomeAdmin,
    ListAdmin,
    newAdmin
} from "./index";

export const Routes: Array<any> = [
    {
        path: "/loginadmin",
        component: LoginAmin,
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
    },
    {
        path: "/home",
        component: HomeAdmin,
    },
    {
        path: "/users",
        component: ListAdmin,
        routes: [
            {
              path: "/users/new",
              component: newAdmin
            },
          ]
    }
]
const Routing = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={<p>Loading</p>}>
                    <Switch>
                        {Routes.map((route, index) => {
                                return  <RouteWithSubRoutes key={index} {...route} />
                            }
                        )}
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
export default Routing;

export function RouteWithSubRoutes(route :any) {
    return (
      <Route
      path={route.path}
      component={route.component}
      render={props => (
        <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

