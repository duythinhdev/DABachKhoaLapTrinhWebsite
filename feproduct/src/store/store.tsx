import App from "../App";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import optionMainReducer from "../store/redux/optionAdmin";
import mainReducer from "../store/redux/body";
import LoginReducer from "../store/redux/login";
import userAdminReducer from "../store/redux/UserAdmin";
import {
    watchLoginAdmin,
    watchProductAdmin,
    watchUserAdmin,
    watchOptionAdmin,
    watchReviewAdmin,
    watchCommentAdmin
    ,watchCategoryAdmin
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
export const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
