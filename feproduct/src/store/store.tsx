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
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "../store/redux/newsUser";
import productDetailReducer from "../store/redux/productdetail";
import { PersistGate } from "redux-persist/integration/react";

import {
    watchLoginAdmin,
    watchProductAdmin,
    watchOptionAdmin,
    watchNewsUser,
    watchOrderUser,
    watchDetailProduct
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

const rootReducer = combineReducers({
    main: mainReducer,
    login: LoginReducer,
    userAdmin: userAdminReducer,
    option: optionMainReducer,
    dataUser: dataUserReducer,
    newsUser: newsReducer,
    productDetail:  productDetailReducer,
});
const persistReducers = persistReducer(persistConfig,rootReducer);

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

export const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}  >
            <App />
        </PersistGate>
    </Provider>
);
