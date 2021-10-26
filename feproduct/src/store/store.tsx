import App from "../App";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import mainReducer from "./redux/body";
import LoginReducer from "./redux/login";
import { watchLogin,watchProduct } from "../store/saga/index";
const sagaMiddleware: any = createSagaMiddleware();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    main: mainReducer,
    login: LoginReducer
});
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchProduct);
export const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
