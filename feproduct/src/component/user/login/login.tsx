import React, { BaseSyntheticEvent, useState,useEffect } from "react";
import styled from "styled-components";
import { mobile,table } from "../response";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as actions from "../../../store/action";
import { useSelector,RootStateOrAny,useDispatch } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../../spinner/spinner.jsx";
import { useHistory, Redirect } from "react-router-dom";
import "./Login.scss";
import "../../../page/LayoutUser/LayoutUser.scss"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import usePasswordToggle  from "./usePasswordToggle";
import { FormInputsLogin } from "../../../types/hookForm"
const LoginUser = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Mật Khẩu Cần Phải nhập')
          .min(6, 'Mật khẩu phải dài hơn 6 ký tự'),
        email:  Yup.string().email().required('Email Cần Phải nhập'),
      })
    let dispatch = useDispatch();
    let history = useHistory();
    let { titleLogin,isLoginUser } = useSelector((state: RootStateOrAny) => state.login); 
    const [PasswordInputType,ToggleIcon] = usePasswordToggle() as  any | undefined;
    const [value, setValue] = useState<FormInputsLogin>({
        email: '',
        password: '',
    });
    // const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
    //     criteriaMode: "all"
    // });
    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState
    const changeValue = (event: React.ChangeEvent<{ name: string, value: unknown}>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = (titleLogin: string) => {
        toast(titleLogin);
    } 
    let redirect = null;
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined,event: React.FormEvent<HTMLFormElement>) => {
        let action = actions.loginAppUser(value.email,value.password);
        await dispatch(action);
        await notify(titleLogin);
    }
    useEffect(()=>{
      if(isLoginUser){
            redirect = history.push("/user");
      }
    },[isLoginUser])
    return (
        <div className="Container-Login">
            <div  className="title">
        
            </div>

            <div className="Wrapper">
                <div  className="Wrapper__login">
                    <span>Đăng Nhập</span>
                </div>
                {/* <div className="Title">SIGN IN</div> */}
                <div  className="Wrapper__Form" onSubmit={handleSubmit((data:any,event:any) => clickValue(data,event))}>
                    <form className="Wrapper__Form--login">
                        <div className="Form__login--title">
                            <span>Thông tin khách hàng đăng nhập hệ thống</span>
                        </div>
                        <div  className="Form__login--email">
                            <span>Email đăng nhập</span>
                            <div  className="loginemail__input">
                                <input 
                                    {...register('email')}
                                    name="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(event) => changeValue(event)}
                                />
                                 <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                        </div>
                        <div className="Form__login--password">
                            <span className='namePassword'>Mật khẩu</span>
                            <div  className="loginemail__input">
                                <input 
                                    {...register('password')} 
                                    name="password"
                                    type={PasswordInputType}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    onChange={(event) => changeValue(event)}
                                />
                                  <div className="invalid-feedback">{errors.password?.message}</div>
                                <span className='iconPassword' >{ToggleIcon }</span>
                            </div>
                        </div>
                        <div className="Form__login--forgot">
                            <button>Đăng Nhập</button>
                            <Link to="/system/forgot"><span>Quên mật khẩu </span></Link>
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
                            <Link to="/system/register"><span>Đăng ký tài khoản. </span></Link>
                        </div>
                    </div>
                </div>
   
            </div>
            {redirect}
            {isLoginUser && <ToastContainer />}
        </div>
    );
};

export default LoginUser;
