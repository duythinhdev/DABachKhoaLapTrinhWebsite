import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postCategoryProduct(actions: any) {
    let body = {
        name: actions.name,
    }
    let urlLogin = 'v1/categoryproduct/post';
    try {
        const response: Promise<any> = yield axios.post(enviroment.local + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}
export function* putCategoryProduct(actions: any) {
    let id = actions.id
    let body = {
        name: actions.name,
    }
    let urlCategory = `v1/categoryproduct/put/${id}`;
    try {
        const response: Promise<any> = yield axios.put(enviroment.local + urlCategory, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}
export function* deleteCategoryProduct(actions: any) {
    let id = actions.id
    let urlCategory = `v1/categoryproduct/delete/${id}`;
    try {
        const response: Promise<any> = yield axios.delete(enviroment.local + urlCategory);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}

