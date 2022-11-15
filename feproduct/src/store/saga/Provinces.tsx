import {put, call} from "redux-saga/effects";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/provinces";
import { configResponses } from "../../store/share/Request";
import {ProvincesHttp} from "../service/ProvincesHttp";

const API_MAIN = enviroment.localNode;
const service: any = new ProvincesHttp(API_MAIN);
export function* getAllProvinces(): any {
    const response = yield call(service.list);
    const result = yield configResponses(response);
    console.log("result",result);
    try {
        yield put(Actions.getLocationSuccess(result));
    }
    catch (error: any) {
        yield put(Actions.getLocationFailed(error));
    }
}