import React, {ChangeEventHandler, useEffect, useState, BaseSyntheticEvent} from 'react';
import "./login.scss";
import * as actions from '../../../store/action/index';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';

interface FormInputs {
    passwords: string;
    email: string
}

const Login = () => {
    const [value, setValue] = useState({
        email: '',
        passwords: '',
    }) as any;
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    let dispatch = useDispatch();
    let history = useHistory();
    let isLoginAdmin: boolean = useSelector((state: any) => {
        return state.login.isLoginAdmin
    });
    let token =  localStorage.getItem("token") || '{}'
    const clickValue = async ( data: BaseSyntheticEvent<object, any, any> | undefined)   => {
        // event.preventDefault();
        let action: any = actions.loginAppAdmin(value.email, value.passwords);
        await dispatch(action);
    }
    const changeValue = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    return (
        <div className="backgroundLogin">
            <form className="formlogin" onSubmit={handleSubmit((data: any) => clickValue(data))}>
                <div style={{color: "black"}}>
                    <h3>Login Admin</h3>
                </div>
                <div className="formlogin__username">
                    <input
                        placeholder="Tên Tài Khoản"
                        type="email"
                        {...register("email", {
                            required: "This is required.",
                            maxLength: {
                                value: 30,
                                message: "This input exceed maxLength."
                            }
                        })}
                        onChange={(event) => changeValue(event)}
                    />
                </div>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({messages}) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                />
                <div className="formlogin__password">
                    <input
                        // name="password"
                        placeholder="Mật Khẩu"
                        type="password"
                        {...register("passwords", {
                            required: "This is required.",
                            maxLength: {
                                value: 10,
                                message: "This input exceed maxLength."
                            }
                        })}
                        onChange={(event) => changeValue(event)}
                    />
                </div>
                <ErrorMessage
                    errors={errors}
                    name="passwords"
                    render={({messages}) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                />
                <div className="formlogin__submit">
                    <button>Đăng Nhập</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
