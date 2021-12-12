import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postComment(actions: any) {
    let body = {
        new_id: actions.new_id,
        content: actions.content,
        user_id: actions.user_id
    }
    let urlLogin = 'v1/comment/post';
    try {
        const response: Promise<any> = yield axios.post(enviroment.local + urlLogin, body);
        console.log("response", response);
    } catch (error) {
        put(Actions.PostProduct("post fail", false))
    }
}
