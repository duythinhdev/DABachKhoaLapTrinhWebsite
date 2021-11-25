import React, {Suspense, useEffect} from 'react';
import "./App.css"
import RoutingUser from "./router/routerUser";
import Routing from "./router/router";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../src/store/action/index";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
const App = () => {
    return (
        <div className="App">
            <Routing  />
            <RoutingUser  />
        </div>
    );
}

export default App;
