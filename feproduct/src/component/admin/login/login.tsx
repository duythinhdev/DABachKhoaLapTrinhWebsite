import React, {ChangeEventHandler, useEffect, useState} from 'react';
import "./login.scss";
import * as actions from '../../../store/action/index';
import {useDispatch, useSelector} from "react-redux";
import { useHistory,Redirect  } from "react-router-dom";
const Login = ()  => {
    const [value,setValue] = useState({
        username: '',
        password: '',
    }) as any;
    let dispatch = useDispatch();
    let history = useHistory();
    let isLoginAdmin:any = useSelector((state:any) =>{ return state.login.isLoginAdmin});
    const clickValue = (event: any) => {
        event.preventDefault();
        let action: any = actions.loginAppAdmin(value.username, value.password);
        dispatch(action);
        let token = JSON.parse(localStorage.getItem("token") || '{}');
    }
    const changeValue = (event: any) => {
        setValue({...value,[event.target.name]: event.target.value});
    }
    useEffect(()=>{
        if(isLoginAdmin)
        {
            console.log("isLoginAdmin",isLoginAdmin)
            history.push("/body");
        }
    }, [])
    return (
        <div className="backgroundLogin">
            <form className="formlogin" onSubmit={(event)=>clickValue(event)}>
                    <div style={{color: "black"}}>
                        <h3>Login Admin</h3>
                    </div>
                    <div className="formlogin__username">
                        <input placeholder="Tên Tài Khoản" type="text" name="username" onChange={(event)=>changeValue(event)}  />
                    </div>
                    <div className="formlogin__password">
                        <input  placeholder="Mật Khẩu"  type="password"  name="password" onChange={(event)=>changeValue(event)} />
                    </div>
                    <div className="formlogin__submit">
                        <button>Đăng Nhập</button>
                    </div>
            </form>
        </div>
    );
}

export default Login;
