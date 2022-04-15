import React, {BaseSyntheticEvent, useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Register.scss";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Newsletter from "../Newletter/Newletter";
import NewsFeeds from "../NewsFeed/NewsFeed";
import Footer from "../footer/footer";
import "../../../page/layoutUser/layoutUser.scss";
import * as actions from "../../../store/action/index";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'

// interface FormInputs {
//     fullname: string,
//     email: string,
//     password: string,
//     phone: string,
//     confirmPwd: string
// }

const Register = () => {
    const [value, setValue] = useState({
        fullName: '' as string,
        confirmPwd: '' as string,
        email: '' as string,
        password: '' as string,
        phoneNumber: '' as string,
        gender: '' as string,
        address: '' as string,
        city: '' as string
    });
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Mật Khẩu Cần Phải nhập')
          .min(3, 'Mật khẩu phải dài hơn 3 ký tự'),
        confirmPwd: Yup.string()
          .required('Nhập lại Mật Khẩu Cần Phải nhập')
          .oneOf([Yup.ref('password')], 'Mật khẩu Không trùng'),
        fullName: Yup.string().required('Họ Và Tên Cần Phải nhập'),
        email:  Yup.string().email().required('Email Cần Phải nhập'),
        gender: Yup.bool()
        .oneOf([true], 'Giới Tính Cần Phải nhập'),
        city:  Yup.string().required('Thành phố Cần Phải nhập'),
        address:  Yup.string().required('Địa chỉ Cần Phải nhập'),
        phoneNumber: Yup.string().required('Số điện thoại Cần Phải nhập'),
      })
    let dispatch = useDispatch();
    let history = useHistory();
    // let titleSignUp = useSelector((state: any) => state.login.titleSignup);
    // let statusSignUp = useSelector((state: any) => state.login.StatusSignup);
    // const {register, formState: {errors}, handleSubmit,watch} = useForm<FormInputs>({
    //     criteriaMode: "all"
    // })
    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState
    const changeValue = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value});
        console.log("event", value)
    }
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined,event: any) => {
        // let action = actions.signup(value.fullname, value.username, value.password, value.phone);
        // await dispatch(action);
        event.preventDefault();
    }
    // const notify = (notifyPassword: String) => toast(notifyPassword);
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
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
                                        className={`form-control email ${errors.email ? 'is-invalid' : ''}`}
                                  
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
                                <input {...register('confirmPwd')}  type="password" placeholder="Nhập lại Mật khẩu"
                                   className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
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
                                <input type="radio"  value="0" 
                                     {...register('gender')} id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                     onChange={(event) => changeValue(event)}
                                />
                                <label>Nam</label>
                                <div className="invalid-feedback">{errors.genderMale?.message}</div>
                                <input type="radio"  value="1" 
                                     {...register('gender')} id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
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
                                <select id="City" 
                                    {...register('city')} className={`form-check-select ${errors.city ? 'is-invalid' : ''}`}
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
                                     {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`}
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
                                     {...register('phoneNumber')} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
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
                    {/* {statusSignUp && <ToastContainer/>} */}
                </>
            </div>
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div>
    );
};

export default Register;
