import React,{} from 'react';
import "./App.scss";
import './index.css';
import Routing from "./router/router";
import RoutingAdmin from "./router/routerAdmin";

const App = () => {
    return (
        <div className="App">
            <Routing  />
            <RoutingAdmin  />
        </div>
    );
}

export default App;
