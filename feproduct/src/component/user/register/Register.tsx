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
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Newsletter from "../Newletter/Newletter";
import NewsFeeds from "../NewsFeed/NewsFeed";
import Footer from "../footer/footer";
import "../../../page/layoutUser/layoutUser.scss";
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
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <div className="ContainerRegister">
                <div className="Wrapper">
                    <div  className="Wrapper__register">
                        <span>Đăng ký</span>
                    </div>
                    <form  className="Wrapper__form">
                        <div className="Form">
                            <div className="Form__title">
                                <span>Địa chỉ Email</span>
                            </div>
                            <div className="Form__input">
                                <input />
                                <b style={{color: "#ff0000" }}>*</b>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Mật Khẩu </span>
                            </div>
                            <div className="Form__input">
                                <input />
                                <b style={{color: "#ff0000" }}>*</b>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Nhập lại mật khẩu</span>
                            </div>
                            <div className="Form__input">
                                <input />
                                <b style={{color: "#ff0000" }}>*</b>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Họ Và Tên</span>
                            </div>
                            <div className="Form__input">
                                <input />
                                <b style={{color: "#ff0000" }}>*</b>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Giới Tính</span>
                            </div>
                            <div className="Form__radio">
                                <input type="radio" name="fav_language" value="Nam" />
                                <label>Nam</label>
                                <input type="radio" name="fav_language" value="Nu"  />
                                <label>Nữ</label>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Tinh/Tp</span>
                            </div>
                            <div className="Form__select">
                                <select name="City" id="cars">
                                    <option value="volvo">Hà Nội</option>
                                    <option value="saab">Sài Gòn</option>
                                    <option value="mercedes">Đà Nẵng</option>
                                    <option value="audi">Cẩn Thơ</option>
                                </select>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Địa chỉ nhận hàng</span>
                            </div>
                            <div className="Form__input">
                                <input />
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Điện thoại di động</span>
                            </div>
                            <div className="Form__input">
                                <input />
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span></span>
                            </div>
                            <div className="Form__infor">
                                <span>(*) Thông tin bắc buộc</span>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span></span>
                            </div>
                            <div className="Form__button">
                                <button>Đăng ký</button>
                            </div>
                        </div>
                    </form>
                    {/* <form  className="Form" onSubmit={handleSubmit((data: any) => clickValue(data))}>
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
                    </form> */}
                </div>
                <>
                    {statusSignUp && <ToastContainer/>}
                </>
            </div>
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div>
    );
};

export default Register;
