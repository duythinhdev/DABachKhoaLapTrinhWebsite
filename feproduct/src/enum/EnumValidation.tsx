import * as Yup from 'yup';
export enum nameValidation {
    PASSWORD_NEED_REQUIRED = 'Mật Khẩu Cần Phải nhập',
    PASSWORD_MUST_BE_LONGER_THAN_6_CHARACTERS = 'Mật khẩu phải dài hơn 6 ký tự',
    ENTER_EMAIL_REQUIRED = 'Email Cần Phải nhập',
    RE_ENTER_PASSWORD_REQUIRED = 'Nhập lại Mật Khẩu Cần Phải nhập',
    PASSWORD_DO_NOT_MATCH = 'Mật khẩu Không trùng',
    FULLNAME_NEED_REQUIRED = 'Họ Và Tên cần Phải nhập',
    CITY_NEED_REQUIRED = 'Thành phố cần phải nhâp',
    ADDRESS_NEED_REQUIRED = 'Địa chỉ cần phải nhập',
    PHONENUMBER_NEED_REQUIRED = 'Số điện thoại Cần Phải nhập',
    GENDER_NEED_REQUIRED = 'Chọn Gender Cần Phải nhập',
    NOTE_NEED_REQUIRED = 'Ghi Chú Cần Phải nhập'
}

export enum HookFormType  {
    LOGIN = 'login',
    REGISTER = 'register',
    CART = 'cart',
    CHANGE_PASSWORD = 'changepassword',
}

export const defaultValueValidation = {
    YUP_STRING: Yup.string(),
    SIX_CHARACTER: 6,
    STR_PASSWORD: "password",
    STR_PASSWORD_NEW: 'passwordNew',
}
