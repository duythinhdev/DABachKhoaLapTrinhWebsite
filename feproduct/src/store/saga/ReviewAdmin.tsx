import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";
// import axiosAppAdmin from "../../enviroment/axiosAppAdmin";

export function* postReview(actions: any) {
    // const {count_start, content, product_id, user_id,created_at,updated_at} = actions;
    // let body = {
    //     count_start: count_start,
    //     content: content,
    //     product_id: product_id,
    //     user_id: user_id,
    // }
    // let urlLogin = 'v1/review/post';
    // try {
    //     const response: Promise<any> = yield axiosAppAdmin.post(enviroment.local + urlLogin, body);
    //     yield put(Actions.PostProduct("post success", true))
    // } catch (error) {
    //     put(Actions.PostProduct("post fail", false))
    // }
}

export function* putReview(actions: any) {
    // const {id,count_start, content, product_id, user_id,created_at,updated_at} = actions;
    // let body = {
    //     count_start: count_start,
    //     content: content,
    //     product_id: product_id,
    //     user_id: user_id,
    //     created_at: created_at,
    //     updated_at: updated_at,
    // }
    // let urlLogin = `v1/review/update/${id}`;
    // try {
    //     const response: Promise<any> = yield axiosAppAdmin.put(enviroment.local + urlLogin, body);
    //     yield put(Actions.PostProduct("update success", true))
    //     console.log("response", response);
    // } catch (error) {
    //     // put(Actions.statusOption("post fail", false))
    // }
}
export function* deleteReview(actions: any) {
    // const {id} = actions;
    // let urlLogin = `v1/review/delete/${id}`;
    // try {
    //     const response: Promise<any> = yield axiosAppAdmin.delete(enviroment.local + urlLogin);
    //     yield put(Actions.PostProduct("delete success", true))
    //     console.log("response", response);
    // } catch (error) {
    //     // put(Actions.statusOption("post fail", false))
    // }
}
