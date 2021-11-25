import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postNews(actions: any) {
    let body = {
        new_id: actions.new_id,
        content:  actions.content,
        user_id:  actions.user_id
    }
    let urlLogin = 'v1/news/post';
    try {
        const response: Promise<any> = yield axios.post(enviroment.local + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}
export function* putNews(actions: any) {
    let id = actions.id;
    let body = {
        new_id: actions.new_id,
        content:  actions.content,
        user_id:  actions.user_id
    }
    let urlLogin =  `v1/news/put${id}`;
    try {
        const response: Promise<any> = yield axios.post(enviroment.local + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}

export function* deleteNews(actions: any) {
    let id = actions.id;
    let urlLogin = `v1/news/delete${id}`;
    try {
        const response: Promise<any> = yield axios.post(enviroment.local + urlLogin);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}
