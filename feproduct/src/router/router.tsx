import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {
    TotalInterface,
    layoutUser,
    ListAdmin,
    newAdmin,
    InforUser,
} from "./index";

const Routing = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/user" exact component={layoutUser} />
                        <Route path="/system/:id" component={TotalInterface} />
                        <Route path="/informationuser/:id" component={InforUser} />
                        <Route path="/users" component={ListAdmin} />
                        <Route path="/users/new" component={newAdmin} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
    }
export default Routing;



