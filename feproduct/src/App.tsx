import React, {Suspense, useEffect} from 'react';
import "./App.css"
import RoutingUser from "./router/routerUser";
import Routing from "./router/router";
const App = () => {
    return (
        <div className="App">
            <Routing  />
            {/* <RoutingUser  /> */}
        </div>
    );
}

export default App;
