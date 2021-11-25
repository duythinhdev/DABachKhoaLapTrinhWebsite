import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";
import {Key} from "react";
import {Value} from "@material-ui/lab";

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
