import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { reGister,FormInputsLogin,ProductCart,changePassword } from "../../../types/hookForm";

export default function useReactHookForm(status: string | null = null) {
    var formSchema: any;
    switch(status){
        case "login":
        formSchema = Yup.object<Record<keyof FormInputsLogin, Yup.AnySchema>>().shape({
                password: Yup.string()
                  .required('Mật Khẩu Cần Phải nhập')
                  .min(6, 'Mật khẩu phải dài hơn 6 ký tự'),
                email:  Yup.string().email().required('Email Cần Phải nhập'),
              })
        break;
        case "register":
          formSchema = Yup.object<Record<keyof reGister, Yup.AnySchema>>().shape({
            password: Yup.string()
              .required('Mật Khẩu Cần Phải nhập')
              .min(6, 'Mật khẩu phải dài hơn 6 ký tự'),
            confirmPwd: Yup.string()
              .required('Nhập lại Mật Khẩu Cần Phải nhập')
              .oneOf([Yup.ref('password')], 'Mật khẩu Không trùng'),
            fullName: Yup.string().required('Họ Và Tên Cần Phải nhập'),
            email:  Yup.string().email().required('Email Cần Phải nhập'),
            gender:  Yup.string(),
            city:  Yup.string().required('Thành phố Cần Phải nhập'),
            address:  Yup.string().required('Địa chỉ Cần Phải nhập'),
            phoneNumber: Yup.string().required('Số điện thoại Cần Phải nhập'),
          })
        break;
        case "cart":
           formSchema = Yup.object<Record<keyof ProductCart, Yup.AnySchema>>().shape({
            fullName: Yup.string().required('Họ Và Tên Cần Phải nhập'),
            email:  Yup.string().email().required('Email Cần Phải nhập'),
            gender:  Yup.string().required('Chọn Gender Cần Phải nhập'),
            bank:  Yup.string(),
            city:  Yup.string().required('Thành phố Cần Phải nhập'),
            address:  Yup.string().required('Địa chỉ Cần Phải nhập'),
            Note:  Yup.string().required('Ghi Chú Cần Phải nhập'),
            phoneNumber: Yup.string().required('Số điện thoại Cần Phải nhập'),
          })
        break;
        case "changepassword":
           formSchema = Yup.object<Record<keyof changePassword, Yup.AnySchema>>().shape({
            passwordOld: Yup.string()
              .required('Mật Khẩu Cần Phải nhập')
              .min(6, 'Mật khẩu phải dài hơn 6 ký tự'),
            passwordNew: Yup.string()
              .required('Nhập lại Mật Khẩu Cần Phải nhập'),
            confirmPwd: Yup.string().required('Họ Và Tên Cần Phải nhập')
            .oneOf([Yup.ref('passwordNew')], 'Mật khẩu Không trùng'),
          })
        break;

    }
    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState
    return { register,errors,handleSubmit }
}
