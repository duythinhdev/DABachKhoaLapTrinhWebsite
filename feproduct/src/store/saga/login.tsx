import {put, call,delay,select } from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";
import { signUps,login,forgot,typeStatus,changePassword } from "../../types/loginSagaType";
import {createAxios}  from "../../enviroment/axiosApp";
import * as selectors from './selector';

export function* logoutSaga(action:any) {
    yield call([localStorage, 'removeItem'], 'tokenAdmin');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield put(Actions.authSuccess(null,false));
    yield put(Actions.logoutSucceed())
}
export function* loginApp(actions: any) : any {
    const { username, password } = actions;
    let body = {
        email: username,
        password: password
    }
    let urlLogin = 'v1/user/loginadmin';
    try {
        const response:any =  yield axios.post(enviroment.local + urlLogin, body);
        if(response.data.response.status === 200)
        {
            yield put(Actions.authSuccess(response.data.response.data.token,true));
            yield localStorage.setItem("tokenAdmin",JSON.stringify(response.data.response.data.token));
            yield alert("success");
        } else if(response.data.response.status === 108) {
            alert("fail");
            yield put(Actions.authSuccess(null,false));
        }
    }
    catch (e) {
        yield put(Actions.authSuccess("",false));
        yield alert("user errorr");
    }
}

export function* signUpUser(actions: signUps)
{
    const { fullName,email,password,phone,address,city,gender } = actions;
    let body = {
        full_name: fullName,
        email: email,
        address: address,
        password: password,
        phone_number: phone,
        city: city,
        gender: gender
    }
    let urlSignUp = 'user/signups';
    try {
        let  response: signUps  = yield axios.post(enviroment.localNode + urlSignUp, body);
        console.log("status",response);
        switch(response.status)
        {
            case 201: 
                yield put(Actions.authUser({},true,"đăng ký thành viên thành công"))
            break;
            // case 409:
            //     yield put(Actions.statusSignup("Bạn Đã Đăng ký trùng Email",true))
            // break;
        }
      
    }
    catch (e) {
        console.log(e);
        yield put(Actions.statusSignup("Bạn Đã Đăng ký thành Viên Thất Bại "  + e,true))
    }
}
export function* logoutUserSaga() {
    // yield call([localStorage, 'removeItem'], 'accessToken');
    let login: login = yield select(selectors.getLogin)
    let urlLogout = 'user/logout';
    let axiosJWT  = createAxios(login,null,Actions.authUser);
    const response: login  = yield axiosJWT.post(enviroment.localNode + urlLogout);
    console.log("response",response);
    switch(response.status)
    {
        case 200: 
            // yield localStorage.setItem("accessToken",JSON.stringify(response.data.accessToken));
            yield put(Actions.authUser({},false,""))
            yield put(Actions.logoutStatusUser(true,"user logout"))
        break;
        case 401: 
            yield put(Actions.logoutStatusUser(true,"xác thực token thất bại"))
            yield put(Actions.authUser({},false,""));
        break;
        case 500: 
        yield put(Actions.logoutStatusUser(false,"logout thất bại"))
         break;
    }
    // yield put(Actions.authSuccessUser({},false,"user logout "));
    // yield put(Actions.logoutSucceed())
}
export function* loginUser(actions: login) {
    const { email, password } = actions;
    let body = {
        email: email,
        password: password
    }
    let urlLogin = 'user/login';
    try {
        const response: login =  yield  axios.post(enviroment.localNode + urlLogin, body);
        switch(response.status)
        {
            case 200: 
                // yield localStorage.setItem("accessToken",JSON.stringify(response.data.accessToken));
                yield put(Actions.authUser(response.data,true,"login Thành công"));
            break;
            case 108: 
                yield put(Actions.authUser({},false,"login Thất bại "));
             break;
        }
    }
    catch (e) {
        yield put(Actions.authUser({},false,"login Thất bại "));
        // yield localStorage.clear();
    }
}
export function* forgotPasswordUser(actions: forgot) {
    const { email } = actions;
    let body = {
        email: email
    }
    let urlLogin = 'user/forgot';
    yield  axios.post(enviroment.localNode + urlLogin, body).then((res: any)=> {
        if(res.info){
             put(Actions.forgotPasswordStatus(true,"forgot Thành Công"));
        }
    }).catch(error =>  put(Actions.forgotPasswordStatus(false,"forgot thất bại")));
}
export function* changePasswordUser(actions: changePassword){
    let { passwordOld,passwordNew } = actions;
    let body = {
        passwordOld: passwordOld,
        passwordNews: passwordNew,
    }
    let login: login = yield select(selectors.getLogin)
    let urlChange = 'user/change';
    let axiosJWT  = createAxios(login,null,Actions.authUser);
    const response: login  = yield axiosJWT.post(enviroment.localNode + urlChange,body);
    console.log("response",response);
    switch(response.status)
    {
        case 200: 
            // yield localStorage.setItem("accessToken",JSON.stringify(response.data.accessToken));
            yield put(Actions.changePasswordStatus(true,"thay đổi password thành công "))
            yield put(Actions.authUser({},false,""))
        break;
        case 401: 
            yield put(Actions.changePasswordStatus(true,"xác thực token thất bại"));
        break;
        case 500: 
            yield put(Actions.changePasswordStatus(true,"thay đổi password thất bại"));
        break;
    }
}