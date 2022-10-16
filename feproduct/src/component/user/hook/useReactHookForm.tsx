import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import {reGister, FormInputsLogin, ProductCart, changePassword} from "../../../types/hookForm";
import {nameValidation, HookFormType, defaultValueValidation} from "../../../enum/EnumValidation";

export default function useReactHookForm(status: string | null = null) {
    var formSchema: any;
    switch (status) {
        case HookFormType.LOGIN:
            formSchema = Yup.object<Record<keyof FormInputsLogin, Yup.AnySchema>>().shape({
                password: defaultValueValidation.YUP_STRING.required(nameValidation.PASSWORD_NEED_REQUIRED)
                    .min(defaultValueValidation.SIX_CHARACTER, nameValidation.PASSWORD_MUST_BE_LONGER_THAN_6_CHARACTERS),
                email: defaultValueValidation.YUP_STRING.email().required(nameValidation.ENTER_EMAIL_REQUIRED),
            })
            break;
        case HookFormType.REGISTER:
            formSchema = Yup.object<Record<keyof reGister, Yup.AnySchema>>().shape({
                password: defaultValueValidation.YUP_STRING
                    .required(nameValidation.PASSWORD_NEED_REQUIRED)
                    .min(defaultValueValidation.SIX_CHARACTER,nameValidation.PASSWORD_MUST_BE_LONGER_THAN_6_CHARACTERS),
                confirmPwd: defaultValueValidation.YUP_STRING
                    .required(nameValidation.RE_ENTER_PASSWORD_REQUIRED)
                    .oneOf([Yup.ref(defaultValueValidation.STR_PASSWORD)],nameValidation.PASSWORD_DO_NOT_MATCH),
                fullName: defaultValueValidation.YUP_STRING.required(nameValidation.FULLNAME_NEED_REQUIRED),
                email: defaultValueValidation.YUP_STRING.email().required(nameValidation.ENTER_EMAIL_REQUIRED),
                gender: defaultValueValidation.YUP_STRING,
                city: defaultValueValidation.YUP_STRING.required(nameValidation.CITY_NEED_REQUIRED),
                address: defaultValueValidation.YUP_STRING.required(nameValidation.ADDRESS_NEED_REQUIRED),
                phoneNumber: defaultValueValidation.YUP_STRING.required(nameValidation.PHONENUMBER_NEED_REQUIRED),
            })
            break;
        case HookFormType.CART:
            formSchema = Yup.object<Record<keyof ProductCart, Yup.AnySchema>>().shape({
                fullName: defaultValueValidation.YUP_STRING.required(nameValidation.FULLNAME_NEED_REQUIRED),
                email: defaultValueValidation.YUP_STRING.email().required(nameValidation.ENTER_EMAIL_REQUIRED),
                gender: defaultValueValidation.YUP_STRING.required(nameValidation.GENDER_NEED_REQUIRED),
                bank: defaultValueValidation.YUP_STRING,
                city: defaultValueValidation.YUP_STRING.required(nameValidation.CITY_NEED_REQUIRED),
                address:defaultValueValidation.YUP_STRING.required(nameValidation.ADDRESS_NEED_REQUIRED),
                Note: defaultValueValidation.YUP_STRING.required(nameValidation.NOTE_NEED_REQUIRED),
                phoneNumber: defaultValueValidation.YUP_STRING.required(nameValidation.PHONENUMBER_NEED_REQUIRED),
            })
            break;
        case HookFormType.CHANGE_PASSWORD:
            formSchema = Yup.object<Record<keyof changePassword, Yup.AnySchema>>().shape({
                passwordOld: defaultValueValidation.YUP_STRING
                    .required(nameValidation.PASSWORD_NEED_REQUIRED)
                    .min(defaultValueValidation.SIX_CHARACTER, nameValidation.PASSWORD_MUST_BE_LONGER_THAN_6_CHARACTERS),
                passwordNew: defaultValueValidation.YUP_STRING
                    .required(nameValidation.RE_ENTER_PASSWORD_REQUIRED),
                confirmPwd: defaultValueValidation.YUP_STRING.required(nameValidation.FULLNAME_NEED_REQUIRED)
                    .oneOf([Yup.ref(defaultValueValidation.STR_PASSWORD_NEW)], nameValidation.PASSWORD_DO_NOT_MATCH),
            })
            break;
    }
    const formOptions = {resolver: yupResolver(formSchema)};
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState
    return {register, errors, handleSubmit}
}
