import React, {Suspense, useEffect} from 'react';
import "./App.scss";
import './index.css';
import Routing from "./router/router";
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./page/homeAdmin/Home";
import list from "./page/ListAdmin/ListAdmin";
import Single from "./page/SingleAdmin/Single";
import New from "./component/adminNew/new/New";
import { RootStateOrAny} from "react-redux";

const App = () => {
    const darkMode = useSelector((state: RootStateOrAny) => { return  state.main.darkMode });
    let news: any = <New inputs={userInputs} title="Add New User" />;
    let single: any =  <Single />;
    return (
        <div className="App">
            <Routing  />
            <div className={darkMode ? "app dark" : "app"}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                                <Route path="/home"  component={Home} />
                                <Route path="/users"  component={list}> 
                                        <Route  component={list} />
                                        <Route path="/users/:userId" component={single} />
                                        <Route
                                                path="/users/new"
                                                component={news}
                                            />
                                </Route>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
