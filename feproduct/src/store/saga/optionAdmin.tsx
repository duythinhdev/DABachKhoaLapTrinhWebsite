import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postOption(actions: any) {
    let body = {
        size: actions.size,
        Types: actions.Types,
        price: actions.price,
        quantity: actions.quantity,
        product_id: actions.product_id,
    }
    let urlLogin = 'v1/option/post';
    try {
        const response: Promise<any> = yield axios.post(enviroment.locals + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}

export function* putOption(actions: any) {
    let id = actions.id
    let body = {
        size: actions.size,
        Types: actions.Types,
        price: actions.price,
        quantity: actions.quantity,
        product_id: actions.product_id,
    }
    let urlLogin = `v1/option/put/${id}`;
    try {
        const response: Promise<any> = yield axios.put(enviroment.locals + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.statusOption("post fail", false))
    }
}
