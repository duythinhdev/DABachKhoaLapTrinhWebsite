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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

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
    let {register, errors, handleSubmit} = useReactHookForm("login")
    let {titleLogin, isLoginUser} = useSelector((state: RootStateOrAny) => state.login);
    const notify = (titleLogin: string) => {
        toast(titleLogin);
    }
    let redirect = null;
    const clickValue = async (data: FormInputsLogin, event: React.FormEvent<HTMLFormElement>) => {
        const {email, password} = data;
        let action = actions.loginAppUser(email, password);
        await dispatch(action);
        await notify(titleLogin);
    }
    const [values, setValues] = React.useState<any>({
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    useEffect(() => {
        if (isLoginUser) {
            redirect = history.push("/user");
        }
    }, [isLoginUser])
    return (
        <div className={`Container-Login container d-flex flex-column  align-items-center`}>
            <div>
                <div className="container d-flex justify-content-start align-items-start form-control">
                    <span>Đăng Nhập</span>
                </div>
                <div className="d-flex flex-row container ">
                    <div className="row">
                        <form onSubmit={handleSubmit((data: any, event: any) => clickValue(data, event))}
                              className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-control">
                            <div>
                                <span>Thông tin khách hàng đăng nhập hệ thống</span>
                            </div>
                            <div className="d-flex  flex-column">
                                <div className="d-flex justify-content-start">
                                    <span>Email đăng nhập</span>
                                </div>
                                <div>
                                    <input
                                        {...register('email')}
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start">
                                <div className="d-flex justify-content-start">
                                    <span className='namePassword'>Mật khẩu</span>
                                </div>
                                <FormControl sx={{m: 1}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        {...register('password')}
                                        name="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    {/*<input*/}
                                    {/*    {...register('password')}*/}
                                    {/*    name="password"*/}
                                    {/*    // type={PasswordInputType}*/}
                                    {/*    className={`form-control ${errors.password ? 'is-invalid' : ''}`}*/}
                                    {/*/>*/}
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                    {/*<span className='iconPassword' >{ToggleIcon }</span>*/}
                                </FormControl>
                            </div>
                            <div className="d-flex flex-column justify-content-center mt-2">
                                <button type="submit" className="btn btn-primary">Đăng Nhập</button>
                                <Link to="/system/forgot"><span>Quên mật khẩu </span></Link>
                            </div>
                        </form>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-control">
                            <div>
                                <span>Bạn chưa là thành viên</span>
                            </div>
                            <div>
                                <span>Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng hơn.</span>
                            </div>
                            <div>
                                <Link to="/system/register"><span>Đăng ký tài khoản. </span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {redirect}
            {isLoginUser && <ToastContainer/>}
        </div>

        // <Grid className="Container-Login">
        //     <Grid container>
        //         <div  className="title" >
        //         </div>
        //         <Grid className="Wrapper" item xs={12} md={12} lg={12}>
        //             <div  className="Wrapper__login">
        //                 <span>Đăng Nhập</span>
        //             </div>
        //             {/* <div className="Title">SIGN IN</div> */}
        //             <div  className="Wrapper__Form">
        //                 <form className="Wrapper__Form--login"  onSubmit={handleSubmit((data:any,event:any) => clickValue(data,event))}>
        //                     <div className="Form__login--title">
        //                         <span>Thông tin khách hàng đăng nhập hệ thống</span>
        //                     </div>
        //                     <div  className="Form__login--email">
        //                         <span>Email đăng nhập</span>
        //                         <div  className="loginemail__input">
        //                             <input
        //                                 {...register('email')}
        //                                 name="email"
        //                                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        //                             />
        //                             <div className="invalid-feedback">{errors.email?.message}</div>
        //                         </div>
        //                     </div>
        //                     <div className="Form__login--password">
        //                         <span className='namePassword'>Mật khẩu</span>
        //                         <div  className="loginemail__input">
        //                             <input
        //                                 {...register('password')}
        //                                 name="password"
        //                                 type={PasswordInputType}
        //                                 className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        //                             />
        //                             <div className="invalid-feedback">{errors.password?.message}</div>
        //                             <span className='iconPassword' >{ToggleIcon }</span>
        //                         </div>
        //                     </div>
        //                     <div className="Form__login--forgot">
        //                         <button>Đăng Nhập</button>
        //                         <Link to="/system/forgot"><span>Quên mật khẩu </span></Link>
        //                     </div>
        //                 </form>
        //                 <div className="Wrapper__Form--signUp">
        //                     <div className="Form__signUp--member">
        //                         <span>Bạn chưa là thành viên</span>
        //                     </div>
        //                     <div  className="Form__signUp--membermany">
        //                         <span>Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng hơn.</span>
        //                     </div>
        //                     <div className="Form__signUp--account">
        //                         <Link to="/system/register"><span>Đăng ký tài khoản. </span></Link>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //         </Grid>
        //     </Grid>
        //     {redirect}
        //     {isLoginUser && <ToastContainer />}
        // </Grid>
    );
};

export default LoginUser;
