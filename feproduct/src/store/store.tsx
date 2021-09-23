import App from "../App";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import mainReducer from "./redux/body";
const sagaMiddleware: any = createSagaMiddleware();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    main: mainReducer
});
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run(watchLogin);
// sagaMiddleware.run(watchTodoTask);
export const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
