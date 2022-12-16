import React, { useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import "./logins.scss";
import "../../../page/layoutUser/layoutUser.scss";
import 'react-toastify/dist/ReactToastify.css';
import {RootStore} from "../../../store/store";
import {Unsubscribe} from 'redux';
import {useForm} from "react-hook-form";
import Register from "../Registers/Register";
import * as ActionLogin from "../../../store/action/auth";
import _ from "lodash";
import { loginLoading } from "../../../store/selector/loginsSelector";
import {Spinner} from "../../spinner/spinner";


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


interface login {
    userNames?: string | any ;
    userName?: string | any ;
    password: string;
}
const LoginUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let {handleSubmit, register, getValues, setValue} = useForm();
    const Loading = useSelector(loginLoading);

    const [typeLogin, setTypeLogin] = useState(typeLogins.LOGIN_USERNAME_TYPE);
    const [userName, setUserName] = useState() as any;
    const [state, setState] = useState({
        loadingRegister: false
    });
    const [isError,setIsError] = useState<boolean>(false);
    const [message,setMessage] = useState<string>("");

    const handleSwitchUserName = () => {
        setTypeLogin(typeLogins.LOGIN_USERNAME_TYPE);
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
                return <><div className="item-form__username">
                        <input
                            {...register('userNames')}
                            name="userNames"
                            type='text'
                            placeholder="Nhập email"
                            onClick={handleSwitchUserName}
                        />
                    </div>
                    <div className="item-form__username">
                        <input 
                             {...register('password')} 
                             name="password" 
                             type='password' 
                             placeholder="Nhập password"
                        />
                    </div></>;
        }
    }
    const handleSwitchLogin = (userName: string) => {
        if (typeLogin === typeLogins.LOGIN_USERNAME_TYPE && !_.isEmpty(userName)) {
            setTypeLogin(typeLogins.LOGIN_PASSWORD_TYPE);
        }
    }
    const handleLogin = (data: any) => {
        let {userName,userNames,password} = data;
        handleSwitchLogin(userName);
        if(typeLogin === typeLogins.LOGIN_PASSWORD_TYPE){
            dispatch(ActionLogin.login(userNames,password));
        }
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
                case ActionLogin.LOGIN_SUCCESS:
                    history.push("/user");
                    dispatch(ActionLogin.getDetailUser());
                    break;
                case ActionLogin.LOGIN_FAIL:
                    setIsError(true);
                    setMessage("Bạn đăng nhập không thành công");
                    break;
            }
        });
        return () => {
            storeSub$();
        };
    }, []);
    useEffect(() => {
        setValue('userName', userName);
        setValue('userNames', userName);
    }, [userName, typeLogin]);

    return (
        <>
            <div className="row wrapper-login">
                <div className="col-xs-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <div className="item-bg">
                        <div>
                            {isError && <div>{message}</div>}
                        </div>
                        <div className="item-title">
                            Đăng nhập vào Tiki
                        </div>
                        <form className="item-form"
                              onSubmit={handleSubmit(data => {
                                  handleLogin(data)
                              },(errors)=> { console.log("errors",errors)})}
                              id="formName"
                        >
                            {renderLogin()}
                            <div className="item-form__btn">
                                <><button type="submit"  form="formName">{buttonName[typeLogin]}</button></>
                            </div>
                            <div style={{marginTop: "10px"}}>
                                <span>Hoặc</span>
                            </div>
                            <div className="item-form__btn-google">
                                <button>Tiếp tục với google</button>
                            </div>
                            <div className="item-form__btn-facebook">
                                <button>Tiếp tục với Facebook</button>
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
            {/*<ToastContainer />*/}
        </>
    );
};

export default LoginUser;
