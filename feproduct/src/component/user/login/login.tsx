import React, {BaseSyntheticEvent, useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import "./logins.scss";
import "../../../page/layoutUser/layoutUser.scss";
import 'react-toastify/dist/ReactToastify.css';
import { RootStore } from "../../../store/store";
import { Unsubscribe } from 'redux';

enum typeLogins {
    LOGIN_USERNAME_TYPE = 'LOGIN_USERNAME_TYPE',
    LOGIN_PASSWORD_TYPE = 'LOGIN_PASSWORD_TYPE',
}
export type LoginTypeComponent =
    | 'LOGIN_USERNAME_TYPE'
    | 'LOGIN_PASSWORD_TYPE'
const buttonName: Record<LoginTypeComponent, string> = {
    LOGIN_USERNAME_TYPE: "Tiếp tục",
    LOGIN_PASSWORD_TYPE: "Đăng nhập"
}

const LoginUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    const [typeLogin, setTypeLogin] = useState(typeLogins.LOGIN_USERNAME_TYPE);
    const [userName, setUserName] = useState() as any;

    const handleSwitchUserName = () => {
        setTypeLogin(typeLogins.LOGIN_USERNAME_TYPE);
    }
    const handleSwitchLogin = () => {
        if(typeLogin === typeLogins.LOGIN_USERNAME_TYPE){
            setTypeLogin(typeLogins.LOGIN_PASSWORD_TYPE);
        }
    }
    const handleChangeUsername = (event:any) => {
        setUserName(event.target.value);
    }
    const renderLogin = () => {
        switch (typeLogin) {
            case typeLogins.LOGIN_USERNAME_TYPE:
                return <div className="item-form__username">
                             <input name="userName" placeholder="Nhập email" defaultValue={userName}  onChange={handleChangeUsername} />
                       </div>;
            case typeLogins.LOGIN_PASSWORD_TYPE:
                return <>
                        <div className="item-form__username">
                            <input name="userName" type='text' placeholder="Nhập email" defaultValue={userName} onClick={handleSwitchUserName} />
                        </div>
                        <div className="item-form__username">
                            <input name="password" type='password' placeholder="Nhập password" />
                        </div>
                       </>;
        }
    }

    useEffect(() => {
        renderLogin();
    },[typeLogin])
    useEffect(() => {
        const storeSub$: Unsubscribe = RootStore.subscribe(() => {
            const { type, payload } = RootStore.getState().lastAction;
            switch (type) {
            }
        });
        return () => {
            storeSub$();
        };
    }, []);

    return (
        <div className="row wrapper-login">
            <div className="col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                <div className="item-bg">
                    <div className="item-title">
                        Đăng nhập vào Tiki
                    </div>
                    <div className="item-form">
                        {renderLogin()}
                        <div className="item-form__btn">
                            <button onClick={handleSwitchLogin}>{buttonName[typeLogin]}</button>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <span>Hoặc</span>
                        </div>
                        <div className="item-form__btn-google">
                            <button onClick={handleSwitchLogin}>Tiếp tục với google</button>
                        </div>
                        <div className="item-form__btn-facebook" >
                            <button onClick={handleSwitchLogin}>Tiếp tục với Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;
