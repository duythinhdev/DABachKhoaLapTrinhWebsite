import React,{useEffect,useState,BaseSyntheticEvent} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { changePassword } from "../../../../types/hookForm";
import {useForm} from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,RootStateOrAny,useDispatch } from 'react-redux';
import * as Actions from "../../../../store/action/index";

export default function InForUserChangePassword() {
    const [value, setValue] = useState<changePassword>({
        passwordOld: '',
        confirmPwd: "",
        passwordNew: "",
    });
    let dispatch = useDispatch();
    const formSchema = Yup.object().shape({
        passwordOld: Yup.string()
          .required('Mật Khẩu Cần Phải nhập')
          .min(6, 'Mật khẩu phải dài hơn 6 ký tự'),
        passwordNew: Yup.string()
          .required('Nhập lại Mật Khẩu Cần Phải nhập'),
        confirmPwd: Yup.string().required('Họ Và Tên Cần Phải nhập')
        .oneOf([Yup.ref('passwordNew')], 'Mật khẩu Không trùng'),
      })
    let { isChangePassword,nameChangePassword } = useSelector((state: RootStateOrAny) => state.login); 
    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const changeValue = (event:  React.ChangeEvent<{ name: string, value: unknown}>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = (nameChangePassword: string) => {
        toast(nameChangePassword);
    } 
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined,event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let action = Actions.changePasswordUser(value.passwordOld,value.passwordNew)
        await dispatch(action);
        await notify(nameChangePassword);
    }
    return (
        <div className="flex flex-col">
                    <div><h1>Thay đổi mật khẩu</h1></div>
                <table   style={{borderCollapse: "collapse", width:"100%",padding:"5px" }} >
                    <tr  className="p-2">
                        <td>
                            Mật khẩu hiện tại
                        </td>
                        <td  className="p-2">
                        <input  placeholder="Mật khẩu hiện tại" type="password"
                                        {...register('passwordOld')}
                                        name="passwordOld"
                                        className={`form-control ${errors.passwordOld ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                                <div className="invalid-feedback">{errors.passwordOld?.message}</div>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            Mật khẩu mới
                        </td>
                        <td  className="p-2">
                        <input  placeholder="Mật khẩu mới" type="password"
                                        {...register('passwordNew')}
                                        name="passwordNew"
                                        className={`form-control ${errors.passwordNew ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                                <div className="invalid-feedback">{errors.passwordNew?.message}</div>
                        </td>
                    </tr>
                    <tr  >
                        <td>
                            Nhập lại mật khẩu
                        </td>
                        <td  className="p-2" >
                        <input  placeholder="Nhập lại mật khẩu" type="password"
                                        {...register('confirmPwd')}
                                        name="confirmPwd"
                                        className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                                <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                        </td>
                    </tr>
                    
                </table>
                <button  onClick={handleSubmit((data: any,event: any) => clickValue(data,event))}>Thay Đổi</button>
                {isChangePassword && <ToastContainer/>}
        </div>
    )
}