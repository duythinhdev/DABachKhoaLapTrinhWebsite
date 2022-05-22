import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index"; 

interface  getNews { 
    type: "NEWS_USER",
    data: any
}
export function* getNewsUser() {
    let url = 'ctnews/get';
    try {
        const response: getNews = yield axios.get(enviroment.localNode + url );
        yield put(Actions.dataNewsUser(response.data.data));
    } catch (error) {
        console.log("error",error);
    }
}