import {put, call} from "redux-saga/effects";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/productdetail";
import { configResponses } from "../../store/share/Request";
import {ProductDetailHttp} from "../service/ProductDetailHttp";

interface detail {
    id: string | null;
}

const API_MAIN = enviroment.localNode;
const service: any = new ProductDetailHttp(API_MAIN);
export function* detailProduct(actions: detail): any {
    const response = yield call(service.detail, actions?.id);
    const result = yield configResponses(response);
    try {
        yield put(Actions.detailProductSuccess(result?.data,result?.data?.options[0]));
    }
    catch (error: any) {
        yield put(Actions.detailProductFailed(error));
    }
}