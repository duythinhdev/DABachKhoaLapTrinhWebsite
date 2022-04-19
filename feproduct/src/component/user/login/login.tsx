import React, {BaseSyntheticEvent, useState} from "react";
import styled from "styled-components";
import {mobile,table} from "../response";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import * as actions from "../../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import Spinner from "../../spinner/spinner";
import {useHistory, Redirect} from "react-router-dom";
import "./login.scss";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Newsletter from "../Newletter/Newletter";
import NewsFeeds from "../NewsFeed/NewsFeed";
import Footer from "../footer/footer";
import "../../../page/LayoutUser/LayoutUser.scss";
import { RootStateOrAny} from "react-redux";

interface FormInputs {
    passwords: string;
    email: string
}
const LoginUser = () => {
    let dispatch = useDispatch();
    let titleSignUp = useSelector((state: RootStateOrAny) => state.login.titleSignup);
    let statusSignUp = useSelector((state: RootStateOrAny) => state.login.StatusSignup);
    let history = useHistory();
    const [value, setValue] = useState({
        email: '',
        passwords: '',
    }) as any | string;
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    const changeValue = (event: React.ChangeEvent<{ name: string, value: unknown}>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = (titlePost: String) => toast(titlePost);
    let redirect = null;
    let isLoginUser = useSelector((state: RootStateOrAny) => state.login.isLoginUser);
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined) => {
        let action = actions.loginAppUser(value.email,value.passwords);
        await dispatch(action);
        await notify(titleSignUp);
    }
    if(isLoginUser)
    {
        redirect = <Redirect  to="/user" />
    }
    return (
        <div className="ContainerApp">
        <Announcement />
        <Navbar />
        <div className="Container-Login">
            <div  className="title">
        
            </div>

            <div className="Wrapper">
                <div  className="Wrapper__login">
                    <span>Đăng Nhập</span>
                </div>
                {/* <div className="Title">SIGN IN</div> */}
                <div  className="Wrapper__Form" onSubmit={handleSubmit((data: any) => clickValue(data))}>
                    <form className="Wrapper__Form--login">
                        <div className="Form__login--title">
                            <span>Thông tin khách hàng đăng nhập hệ thống</span>
                        </div>
                        <div  className="Form__login--email">
                            <span>Email đăng nhập</span>
                            <input />
                        </div>
                        <div className="Form__login--password">
                            <span>Mật khẩu</span>
                            <input />
                        </div>
                        <div className="Form__login--forgot">
                            <button>Đăng Nhập</button>
                            <span>Quên mật khẩu </span>
                        </div>
                    </form>
                    <div className="Wrapper__Form--signUp">
                        <div className="Form__signUp--member">
                        <span>Bạn chưa là thành viên</span>
                        </div>
                        <div  className="Form__signUp--membermany">
                            <span>Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng hơn.</span>
                        </div>
                        <div className="Form__signUp--account">
                            <span>Đăng ký tài khoản. </span>
                        </div>
                    </div>
                    {/* <input className="Input" placeholder="email"
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
                    <input  
                            className="Input" 
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
                    <button className="Button">LOGIN</button>
                    <div>DO NOT YOU REMEMBER THE PASSWORD?</div>
                    <div>CREATE A NEW ACCOUNT</div> */}
                </div>
   
            </div>
            <>
                {statusSignUp && <ToastContainer/>}
                {statusSignUp && <Spinner />}
            </>
            {redirect}
        </div>
        <Newsletter />
        <NewsFeeds />
        <Footer />
        </div>
    );
};

export default LoginUser;
