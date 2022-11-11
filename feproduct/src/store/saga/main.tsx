import {put, call} from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postProduct(actions: any) {
    const { fd } = actions;
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    let urlLogin = 'v1/product/post';
    try {
        const response:Promise<any> =  yield axios.post(enviroment.local + urlLogin, fd,config);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
export function* putProduct(actions: any) {
    const { fd } = actions;
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    let urlLogin = 'v1/product/put';
    try {
        const response:Promise<any> =  yield axios.put(enviroment.local + urlLogin, fd,config);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
export function* getDetailProduct(actions: any){
    let urlLogin = `v1/product/getdetail?id=${actions.id}`;
    try {
        const response:Promise<any> =  yield axios.get(enviroment.local + urlLogin);
        yield put(Actions.PostProduct("post success",true))
        // yield put(Actions.detailproduct(response));
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
