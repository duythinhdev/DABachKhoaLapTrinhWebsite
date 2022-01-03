import styled from "styled-components";
import React, {BaseSyntheticEvent, useState} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {Container, Wrapper, Title, Form, Input, Agreement, Button} from "./RegisterCss";
import * as actions from "../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {TableCell} from "@mui/material";
import {useHistory} from "react-router-dom";
import "./Register.scss";
interface FormInputs {
    name: string;
    fullname: string,
    username: string,
    password: string,
    phone: string,
    confirmpassword: string,
}

const Register = () => {
    const [value, setValue] = useState({
        name: '',
        fullname: '',
        username: '',
        password: '',
        phone: '',
        confirmpassword: '',
    }) as any;
    let dispatch = useDispatch();
    let history = useHistory();
    let titleSignUp = useSelector((state: any) => state.login.titleSignup);
    let statusSignUp = useSelector((state: any) => state.login.StatusSignup);
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    const changeValue = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined) => {
        let action = actions.signup(value.name, value.fullname, value.username, value.password, value.phone);
        await dispatch(action);
        notify(titleSignUp)
    }
    if (statusSignUp) {
        history.push("/user");
    }
    const notify = (titlePost: String) => toast(titlePost);
    return (
        <div className="Container">
            <div className="Wrapper">
                <div className="Title">CREATE AN ACCOUNT</div>
                    <form  className="Form" onSubmit={handleSubmit((data: any) => clickValue(data))}>
                        <input  className="Input"  placeholder="name"
                            {...register("name", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <input className="Input"  placeholder="fullname"
                            {...register("fullname", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="fullname"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <input className="Input"  placeholder="username"
                            {...register("username", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <input className="Input"  placeholder="phone"
                            {...register("phone", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="phone"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <input className="Input"  placeholder="password"
                            type="password"
                            {...register("password", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <input className="Input"  placeholder="confirmpassword"
                            type="password"
                            {...register("confirmpassword", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                            onChange={(event) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="confirmpassword"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <div className="Agreement">
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </div>
                        <button className="Button" onClick={handleSubmit((data: any) => clickValue(data))}>CREATE</button>
                    </form>
            </div>
            <>
                {statusSignUp && <ToastContainer/>}
            </>
        </div>
    );
};

export default Register;
