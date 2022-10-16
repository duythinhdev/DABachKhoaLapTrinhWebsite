import React, {BaseSyntheticEvent, useState, useEffect} from "react";
import * as actions from "../../../store/action";
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {toast, ToastContainer} from "react-toastify";
import Spinner from "../../spinner/spinner.jsx";
import {useHistory} from "react-router-dom";
import "./login.scss";
import "../../../page/layoutUser/layoutUser.scss";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import usePasswordToggle from "./usePasswordToggle";
import {FormInputsLogin} from "../../../types/hookForm";
import useReactHookForm from "../hook/useReactHookForm"
import {Grid, Card} from '@mui/material';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import { HookFormType } from "../../../enum/EnumValidation";
import { nameLogin } from "../../../enum/EnumLogin";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerLogin: {
            marginTop: "140px",
        }
    }),
);
const LoginUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const classes = useStyles();
    let {register, errors, handleSubmit} = useReactHookForm(HookFormType.LOGIN)
    let {titleLogin, isLoginUser} = useSelector((state: RootStateOrAny) => state.login);
    const [PasswordInputType,ToggleIcon] = usePasswordToggle() as  any | undefined;
    const notify = (titleLogin: string) => {
        toast(titleLogin);
    }
    let redirect = null;
    const clickValue = async (data: FormInputsLogin, event: React.FormEvent<HTMLFormElement>) => {
        const {email, password} = data;
        let action = actions.loginAppUser({email, password});
        await dispatch(action);
        await notify(titleLogin);
    }
    const [values, setValues] = React.useState<any>({
        showPassword: false,
    });
    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };
    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    // };
    useEffect(() => {
        if (isLoginUser) {
            redirect = history.push(nameLogin.LINK_USER);
        }
    }, [isLoginUser])
    return (
        <div className="Container-Login">
            <Grid container>
                <div  className="title" >
                </div>
                <Grid className="Wrapper" item xs={12} md={12} lg={12}>
                    <div  className="Wrapper__login">
                        <span>Đăng Nhập</span>
                    </div>
                    {/* <div className="Title">SIGN IN</div> */}
                    <div  className="Wrapper__Form">
                        <form className="Wrapper__Form--login"  onSubmit={handleSubmit((data:any,event:any) => clickValue(data,event))}>
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
        
                </Grid>
            </Grid>
            {redirect}
            {isLoginUser && <ToastContainer />}
        </div>
    );
};

export default LoginUser;
