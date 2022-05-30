import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {lazy, Suspense} from "react";
import Spinner from "../component/spinner/spinner.jsx";
import {
    TotalInterface,
    layoutUser,
    ListAdmin,
    newAdmin,
} from "./index";

export const Routes: Array<any> = [
    // {
    //     path: "/loginadmin",
    //     component: LoginAmin,
    // },
    {
        path: "/user",
        component: layoutUser,
    },
    {
        path: "/system/:id",
        component: TotalInterface
    },
    // {
    //     path: "/news",
    //     component: News
    // },
    // {
    //     path: "/home",
    //     component: HomeAdmin,
    // },
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
                <Suspense fallback={<p>Loading...</p>}>
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

