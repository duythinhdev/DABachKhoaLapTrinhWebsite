import {put, call,select,all, takeLatest,StrictEffect, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/productdetail";
import { configResponses } from "../../store/share/Request";
import {ProductDetailHttp} from "../service/ProductDetailHttp";

interface detail {
    id: string | null;
}

let API_MAIN = enviroment.localNode;
const service: any = new ProductDetailHttp(API_MAIN);
export function* detailProduct(actions: detail): any {
    const response = yield call(service.detail, actions?.id);
    const data = yield configResponses(response);
    console.log("data",data);
    try {
        yield put(Actions.detailProductSuccess(data,data?.options[0]));
    }
    catch (error: any) {
        yield put(Actions.detailProductFailed(error));
    }
}