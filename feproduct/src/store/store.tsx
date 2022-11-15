import App from "../App";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import mainReducer from "../store/redux/body";
import LoginReducer from "../store/redux/login";
import userAdminReducer from "../store/redux/UserAdmin";
import dataUserReducer from "../store/redux/dataUser";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "../store/redux/newsUser";
import productDetailReducer from "../store/redux/productdetail";
import productReducer from "./redux/product";
import {PersistGate} from "redux-persist/integration/react";
import loginsReducer from "../store/redux/logins";
import locationReducer from "../store/redux/Provinces";

import {
    watchLoginAdmin,
    watchProductAdmin,
    watchOptionAdmin,
    watchNewsUser,
    watchOrderUser,
    watchDetailProduct,
    watchProduct,
    watchLogins,
    watchProvinces
} from "../store/saga/index";

const sagaMiddleware: any = createSagaMiddleware();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: "root",
    storage
}

export function lastAction(state = null, action: any) {
    return action;
}

const rootReducer = combineReducers({
    main: mainReducer,
    login: LoginReducer,
    userAdmin: userAdminReducer,
    dataUser: dataUserReducer,
    newsUser: newsReducer,
    productDetail: productDetailReducer,
    product: productReducer,
    logins: loginsReducer,
    locations: locationReducer,
    lastAction
});
const persistReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistReducers, composeEnhancers(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store);

sagaMiddleware.run(watchLoginAdmin);
sagaMiddleware.run(watchProductAdmin);
sagaMiddleware.run(watchOptionAdmin);
sagaMiddleware.run(watchNewsUser);
sagaMiddleware.run(watchOrderUser);
sagaMiddleware.run(watchDetailProduct);
sagaMiddleware.run(watchProduct);
sagaMiddleware.run(watchLogins);
sagaMiddleware.run(watchProvinces);

export const RootStore: any = store;

export const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);
