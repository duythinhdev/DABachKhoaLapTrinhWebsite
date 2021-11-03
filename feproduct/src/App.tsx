import React from 'react';
import "./App.css"
import {routing} from "./router/router";
const App = () => {
    return (
        <div className="App">
            {routing}
        </div>
    );
}

export default App;
