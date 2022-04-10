import React, {Suspense, useEffect} from 'react';
import "./App.scss"
import Routing from "./router/router";
import { useSelector } from "react-redux"
import { BrowserRouter,Route, Switch  } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "../../feproduct/src/page/homeAdmin/Home";
import list from "../../feproduct/src/page/ListAdmin/ListAdmin";
import Single from "../../feproduct/src/page/SingleAdmin/Single";
import New from "./component/adminNew/new/New";
const App = () => {
    const darkMode = useSelector((state:any) => { return  state.main.darkMode });
    let news: any = <New inputs={userInputs} title="Add New User" />;
    let single: any =  <Single />;
    return (
        <div className="App">
            <Routing  />
            <div className={darkMode ? "app dark" : "app"}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home">
                                <Route path="/home"  component={Home} />
                                <Route path="users"  component={list}> 
                                    <Route  component={list} />
                                    <Route path=":userId" component={single} />
                                    <Route
                                        path="new"
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
