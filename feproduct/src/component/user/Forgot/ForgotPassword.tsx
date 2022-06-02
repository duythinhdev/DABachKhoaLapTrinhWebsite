import React,{useState} from 'react';
import "./ForgotPassword.scss";
import * as Actions from "../../../store/action/index";
import {toast, ToastContainer} from "react-toastify";
import { useSelector,RootStateOrAny,useDispatch } from 'react-redux';

const  ForgotPassword = () => {
  let dispatch =  useDispatch();
  const [state,setState] = useState({
    email: ""
  });
  const changeValue = (event: React.ChangeEvent<{ name: string, value: unknown}>) => {
    setState({...state, [event.target.name]: event.target.value});
 }
 let {statusForgot,titleforgot} = useSelector((state: RootStateOrAny) => state.login);   
 const notify = (titleforgot: string) => toast(titleforgot);
 const postData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(Actions.forgotPassword(state.email));
    await notify(titleforgot);
 }
  return (
    <div className="Container-ForgotPassword">
        <div className="itemForgot">
            <h1>Bạn quên mật khẩu vào tài khoản?</h1>           
        </div>
        <div>
        <p>Vui lòng nhập địa chỉ email đã đăng ký với chúng tôi để tạo mật khẩu mới. Chúng tôi sẽ gửi 1 email vào địa chỉ email cung cấp và yêu cầu xác minh trước khi có thể tạo mật khẩu mới</p>
        </div>
        <div className="itemEnterAddress">
          <span>Nhập địa chỉ email đăng ký</span>
          <form className="itemEnterAddress__formTakePassword" onSubmit={postData} >
             <input name="email" onChange={changeValue} />
             <button>Lấy mật khẩu </button>
          </form>
        </div>
        {statusForgot && <ToastContainer/>}
    </div>
  )
}
export default ForgotPassword;