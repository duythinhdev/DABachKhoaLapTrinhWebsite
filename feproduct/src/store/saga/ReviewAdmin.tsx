import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postReview(actions: any) {
    const {count_start, content, product_id, user_id} = actions;
    let body = {
        count_start: count_start,
        content: content,
        product_id: product_id,
        user_id: user_id,
    }
    let urlLogin = 'v1/review/post';
    try {
        const response: Promise<any> = yield axios.post(enviroment.locals + urlLogin, body);
        yield put(Actions.PostProduct("post success", true))
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}

export function* putReview(actions: any) {
    const {id, size, Types, price, quantity, product_id} = actions;
    let body = {
        id: id,
        size: size,
        Types: Types,
        price: price,
        quantity: quantity,
        product_id: product_id,
    }
    let urlLogin = `v1/option/put/${id}`;
    try {
        const response: Promise<any> = yield axios.put(enviroment.locals + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.statusOption("post fail", false))
    }
}
