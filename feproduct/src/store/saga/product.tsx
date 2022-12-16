// @ts-ignore
import {put, call} from "redux-saga/effects";
import { configResponses } from "../../store/share/Request";
import { ProductHttp } from "../service/ProductHttp";
import * as actions from "../action/product";
// @ts-ignore
import {enviroment} from "../../enviroment/enviroment";

const LINK_API: string = enviroment.localNode;
const services: any = new ProductHttp(LINK_API);

export function* product(): any {
    const response = yield call(services.list);
    try {
        const result = yield configResponses(response);
        yield put(actions.productSuccess(result?.data));
    }
    catch (error: any) {
        yield put(actions.productFailed(error));
    }
}