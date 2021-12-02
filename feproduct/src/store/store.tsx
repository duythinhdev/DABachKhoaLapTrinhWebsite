import App from "../App";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import optionMainReducer from "../store/redux/optionAdmin";
import mainReducer from "../store/redux/body";
import LoginReducer from "../store/redux/login";
import userAdminReducer from "../store/redux/UserAdmin";
import dataUserReducer from "../store/redux/dataUser";
import {
    watchLoginAdmin,
    watchProductAdmin,
    watchUserAdmin,
    watchOptionAdmin,
    watchReviewAdmin,
    watchCommentAdmin
    ,watchCategoryAdmin,
    watchNewsAdmin
} from "../store/saga/index";

const sagaMiddleware: any = createSagaMiddleware();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    main: mainReducer,
    login: LoginReducer,
    userAdmin: userAdminReducer,
    option: optionMainReducer,
    dataUser: dataUserReducer
});
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchLoginAdmin);
sagaMiddleware.run(watchProductAdmin);
sagaMiddleware.run(watchUserAdmin);
sagaMiddleware.run(watchOptionAdmin);
sagaMiddleware.run(watchReviewAdmin);
sagaMiddleware.run(watchCommentAdmin);
sagaMiddleware.run(watchCategoryAdmin);
sagaMiddleware.run(watchNewsAdmin);
export const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
