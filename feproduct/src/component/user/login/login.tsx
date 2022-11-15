import React, {BaseSyntheticEvent, useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import "./logins.scss";
import "../../../page/layoutUser/layoutUser.scss";
import 'react-toastify/dist/ReactToastify.css';
import {RootStore} from "../../../store/store";
import {Unsubscribe} from 'redux';
import {useForm} from "react-hook-form";
import Register from "../Registers/Register";

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
    let {handleSubmit, register, getValues, setValue} = useForm();

    const [typeLogin, setTypeLogin] = useState(typeLogins.LOGIN_USERNAME_TYPE);
    const [userName, setUserName] = useState() as any;
    const [state, setState] = useState({
        loadingRegister: false
    });

    const handleSwitchUserName = () => {
        setTypeLogin(typeLogins.LOGIN_USERNAME_TYPE);
    }
    const handleSwitchLogin = () => {
        if (typeLogin === typeLogins.LOGIN_USERNAME_TYPE) {
            setTypeLogin(typeLogins.LOGIN_PASSWORD_TYPE);
        }
    }
    const handleChangeUsername = (event: any) => {
        setUserName(event.target.value);
    }
    const renderLogin = () => {
        switch (typeLogin) {
            case typeLogins.LOGIN_USERNAME_TYPE:
                return <div className="item-form__username">
                    <input
                        {...register('userName')}
                        name="userName"
                        placeholder="Nhập email"
                        onChange={handleChangeUsername}
                    />
                </div>;
            case typeLogins.LOGIN_PASSWORD_TYPE:
                return <>
                    <div className="item-form__username">
                        <input
                            {...register('userNames')}
                            name="userNames"
                            type='text'
                            placeholder="Nhập email"
                            onClick={handleSwitchUserName}
                        />
                    </div>
                    <div className="item-form__username">
                        <input {...register('password')} name="password" type='password' placeholder="Nhập password"/>
                    </div>
                </>;
        }
    }
    const handleLogin = (data: any) => {
        handleSwitchLogin();
    }
    const handleShowRegister = () => {
        setState({...state, loadingRegister: true});
    }

    useEffect(() => {
        renderLogin();
    }, [typeLogin])
    useEffect(() => {
        const storeSub$: Unsubscribe = RootStore.subscribe(() => {
            const {type, payload} = RootStore.getState().lastAction;
            switch (type) {
            }
        });
        return () => {
            storeSub$();
        };
    }, []);
    useEffect(() => {
        setValue('userName', userName);
        setValue('userNames', userName);
    }, [userName, typeLogin])

    return (
        <>
            <div className="row wrapper-login">
                <div className="col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <div className="item-bg">
                        <div className="item-title">
                            Đăng nhập vào Tiki
                        </div>
                        <form className="item-form"
                              onSubmit={handleSubmit(data => {
                                  handleLogin(data)
                              })}
                        >
                            {renderLogin()}
                            <div className="item-form__btn">
                                <button type="submit">{buttonName[typeLogin]}</button>
                            </div>
                            <div style={{marginTop: "10px"}}>
                                <span>Hoặc</span>
                            </div>
                            <div className="item-form__btn-google">
                                <button onClick={handleSwitchLogin}>Tiếp tục với google</button>
                            </div>
                            <div className="item-form__btn-facebook">
                                <button onClick={handleSwitchLogin}>Tiếp tục với Facebook</button>
                            </div>
                        </form>
                        <div className="item-form__btn">
                            <button onClick={handleShowRegister}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                state.loadingRegister &&
                    <Register openModal={state.loadingRegister}
                              handleClose={() => {setState({...state, loadingRegister: false})}}
                    />
            }
        </>
    );
};

export default LoginUser;
