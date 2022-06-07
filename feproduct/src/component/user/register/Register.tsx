import React, {BaseSyntheticEvent, useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Register.scss";
import * as actions from "../../../store/action/index";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootStateOrAny} from "react-redux";
import { reGister } from "../../../types/hookForm";
import useReactHookForm from "../hook/useReactHookForm"

const Register = () => {
    const [value, setValue] = useState<reGister>({
        fullName: '',
        confirmPwd: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
        address: '',
        city: '',
    });
    let { register,errors,handleSubmit } = useReactHookForm("register")
    let dispatch = useDispatch();
    let {titleLogin,isLoginUser} = useSelector((state: RootStateOrAny) => state.login);   
    const changeValue = (event:  React.ChangeEvent<{ name: string, value: unknown}>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = () => toast(titleLogin);
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined,event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {fullName,password,phoneNumber,address,gender,city,email } = value;
        let action = actions.signup(fullName,email, password, phoneNumber, address,city,gender);
        await dispatch(action);
        await notify();
    }
    return (
            <div className="ContainerRegister">
                <div className="Wrapper">
                    <div  className="Wrapper__register">
                        <span>Đăng ký</span>
                    </div>
                    <form  className="Wrapper__form"  onSubmit={handleSubmit((data: any,event:any) => clickValue(data,event))}>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Địa chỉ Email</span>
                            </div>
                            <div className="Form__input">
                                <input  placeholder="email" type="email"
                                        {...register('email')}
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                                <b style={{color: "#ff0000" }}>*</b>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Mật Khẩu </span>
                            </div>
                            <div className="Form__input">
                                <input   placeholder="Mật khẩu"  type="password"
                                       {...register('password')}
                                       name="password"
                                       className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                       onChange={(event) => changeValue(event)}
                                />
                                <b style={{color: "#ff0000" }}>*</b>
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Nhập lại mật khẩu</span>
                            </div>
                            <div className="Form__input"> 
                                <input {...register('confirmPwd')} 
                                   name="confirmPwd"
                                   type="password" placeholder="Nhập lại Mật khẩu"
                                   className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                   onChange={(event) => changeValue(event)}
                                />
                                <b style={{color: "#ff0000" }}>*</b>
                                <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Họ Và Tên</span>
                            </div>
                            <div className="Form__input">
                                <input placeholder="Họ Và Tên"  type="text"
                                        {...register('fullName')} 
                                        name="fullName"
                                        className={`form-control fullName  ${errors.fullName ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                         />
                                <b style={{color: "#ff0000" }}>*</b>
                                <div className="invalid-feedback">{errors.fullName?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Giới Tính</span>
                            </div>
                            <div className="Form__radio">
                                <input type="radio"  value="Male" 
                                     {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                     name="gender"
                                     onChange={(event) => changeValue(event)}
                                />
                                <label>Nam</label>
                                <div className="invalid-feedback">{errors.gender?.message}</div>
                                <input type="radio"  value="FeMale" 
                                     {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                     name="gender"
                                     onChange={(event) => changeValue(event)}
                                />
                                <label>Nữ</label>
                                <div className="invalid-feedback">{errors.gender?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Tinh/Tp</span>
                            </div>
                            <div className="Form__select">
                                <select
                                    {...register('city')}
                                    name="city"
                                    className={`form-check-input ${errors.city ? 'is-invalid' : ''}`}
                                    onChange={(event) => changeValue(event)}
                                >
                                    <option value="0"></option>
                                    <option value="1">Hà Nội</option>
                                    <option value="2">Sài Gòn</option>
                                    <option value="3">Đà Nẵng</option>
                                    <option value="4">Cẩn Thơ</option>
                                </select>
                                <div className="invalid-feedback">{errors.city?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Địa chỉ nhận hàng</span>
                            </div>
                            <div className="Form__input">
                                <input 
                                     {...register('address')} 
                                     name="address"
                                     className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                     onChange={(event) => changeValue(event)}
                                />
                                 <div className="invalid-feedback">{errors.address?.message}</div>
                            </div>
                        </div>
                        <div className="Form">
                            <div className="Form__title">
                                <span>Điện thoại di động</span>
                            </div>
                            <div className="Form__input">
                                <input 
                                     {...register('phoneNumber')}
                                     name="phoneNumber"
                                     className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                     onChange={(event) => changeValue(event)}
                                />
                                    <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
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
                                <button onClick={handleSubmit((data: any,event: any) => clickValue(data,event))}>Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
                <>
                    {isLoginUser && <ToastContainer/>}
                </>
            </div>
    );
};

export default Register;
