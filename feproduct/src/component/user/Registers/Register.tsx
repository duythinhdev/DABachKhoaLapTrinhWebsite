import React, {useCallback, useEffect, useState, useRef} from 'react';
import "./styles.scss";
import {useForm, Controller} from "react-hook-form";
import {Modal} from 'antd';
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {provinces} from '../../../store/selector/provincesSelector';
import {Select} from 'antd';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from "moment";
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import {StyledRadio} from "../StyleRadio/StyleRadio";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import * as Actions from "../../../store/action/provinces";
import * as ActionLogin from "../../../store/action/auth";
import {Unsubscribe} from "redux";
import {RootStore} from "../../../store/store";
import {toast, ToastContainer} from "react-toastify";


interface props {
    openModal?: boolean;
    handleClose?: () => void;
}

const GENDER_MALE = "1"
const GENDER_FEMALE = "0"
const DEFAULT_FORMAT_DATE =  'DD/MM/YYYY';

const {Option} = Select;
const Register: React.FC<props> = ({openModal, handleClose}) => {
    let {handleSubmit, setValue, watch, control, formState: { errors }} = useForm();
    let dispatch = useDispatch();
    let list = useSelector(provinces);
    const passwordRef = useRef({});
    passwordRef.current = watch('password', '');

    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [state, setState] = useState({
        selectIcProvinces: false,
        selectIcDistrict: false,
        selectIcWard: false
    });
    const [values, setValues] = useState({
        provinces: "",
        districts: "",
        wards: ""
    });

    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        dispatch(Actions.getLocation());
    }, [stableDispatch])
    useEffect(() => {
        setProvince(list);
    }, [province])
    useEffect(()=> {
        const provinces: any | never = province?.find((p: any) => {
            return p?.provinces_code === values?.provinces
        })
        setDistrict(provinces?.districts)
    },[values.provinces])
    useEffect(()=> {
        const districts: any | never = district?.find((d: any) => {
            return d?.district_code === values?.districts
        })
        setWard(districts?.wards)
    },[values?.districts])
    // useEffect(() => {
    //     const storeSub$: Unsubscribe = RootStore.subscribe(() => {
    //         const {type, payload} = RootStore.getState().lastAction;
    //         switch (type) {
    //             case ActionLogin.REGISTER_SUCCESS:
    //                 toast(payload);
    //                 break;
    //             case ActionLogin.REGISTER_FAIL:
    //                 toast("Đăng ký tài khoản thất bại vui lòng đăng ký lại");
    //                 break;
    //         }
    //     });
    //     return () => {
    //         storeSub$();
    //     };
    // }, []);

    const handleChangeProvinces = (selected: any) => {
        setValues((pre) => ({...pre, provinces: selected }))
    }
    const handleChangeDistrict = (selected: any) => {
        setValues((pre) => ({...pre, districts: selected }))
    }
    const handleChangeWard = (selected: any) => {
        setValues((pre) => ({...pre, wards: selected }))
    }
    const handleRegister = (data: any) => {
        dispatch(ActionLogin.register({
            username: data?.username,
            full_name: data?.full_name,
            permission: 1,
            is_active: 1,
            address: data?.address,
            gender: data?.gender === '0' ? 0 : 1,
            phone_number: data?.phone,
            provinces: values?.provinces,
            ward: values?.wards,
            district: values?.districts,
            birthDay: data?.birthDay,
            password: data?.password
        }));
    }

    return (
        <Modal
            className="wrapper-register row"
            destroyOnClose={true}
            visible={openModal}
            onOk={undefined}
            onCancel={handleClose}
        >
            <div className="col-xs-12 col-md-12 col-lg-12">
                <div className="title">
                    <h3 className="title__register"> Đăng ký tiki</h3>
                </div>
                <form
                    onSubmit={handleSubmit(data => {
                    handleRegister(data)
                },(errors)=> { console.log("errors",errors)})}>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                pattern:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Tên tài khoản "
                                variant="filled"
                                fullWidth
                                type="email"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                            )}
                        />
                        {errors?.username && (
                            <span className="text-error">
                            {errors?.username.type === 'required'
                                ? 'Vui lòng nhập tên tài khoản'
                                : errors?.username?.message}
                            </span>
                        )}
                        {errors?.username && (
                            <span className="text-error">
                            {errors?.username.type === 'pattern'
                                ? 'Tài khoản chưa đúng định dạng'
                                : errors?.username?.message}
                            </span>
                        )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="full_name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,                    
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Họ và tên"
                                variant="filled"
                                fullWidth
                                type="text"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                            )}
                        />
                        {errors?.full_name && (
                          <span className="text-error">
                            {errors?.full_name.type === 'required'
                                ? 'Vui lòng nhập Họ và tên'
                                : errors?.full_name?.message}
                          </span>
                        )}
                        {errors?.full_name && (
                           <span className="text-error">
                                {errors?.full_name.type === 'pattern'
                                    ? 'Tên tài khoản chưa đúng định dạng'
                                    : errors?.full_name?.message}
                           </span>
                       )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,                    
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="số điện thoại"
                                variant="filled"
                                fullWidth
                                type="text"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                            )}
                        />
                        {errors?.phone && (
                          <span className="text-error">
                            {errors?.phone.type === 'required'
                                ? 'Vui lòng nhập số điện thoại'
                                : errors?.phone?.message}
                          </span>
                        )}
                        {errors?.phone && (
                           <span className="text-error">
                                {errors?.phone.type === 'pattern'
                                    ? 'Số điện thoại chưa đúng định dạng'
                                    : errors?.phone?.message}
                           </span>
                       )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,           
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Nhập mật khẩu"
                                variant="filled"
                                fullWidth
                                type="password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                            )}
                        />
                        {errors?.password && (
                          <span className="text-error">
                            {errors?.password.type === 'required'
                                ? 'Vui lòng nhập số mật khẩu'
                                : errors?.password?.message}
                          </span>
                        )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="repassword"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                validate: value =>
                                value === passwordRef.current ||  'Mật khẩu và mật khẩu xác nhận không đúng vui lòng nhập lại'             
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Nhập lại mật khẩu"
                                variant="filled"
                                fullWidth
                                type="password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                            )}
                        />
                          {errors?.password && (
                          <span className="text-error">
                                {errors?.password.type === 'required'
                                    ? 'Vui lòng nhập lại mật khẩu'
                                    : errors?.password?.message
                                }
                          </span>
                        )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Controller
                                control={control}
                                name="birthDay"
                                rules={{required: true}}
                                render={({field: {onChange, value}}) => (
                                    <DateTimePicker
                                        label="Năm sinh"
                                        value={value}
                                        renderInput={(props) => <TextField {...props} />}
                                        minDate={moment().add(-100, 'years')}
                                        maxDate={moment().add(5, 'years')}
                                        inputFormat={DEFAULT_FORMAT_DATE}
                                        // format={DEFAULT_FORMAT_DATE}
                                        // placeholder="Chọn ngày tháng"
                                        onChange={(date: any, dateStr: any) => {
                                            moment(date).isValid() && onChange(date?.toISOString());
                                            // setValue(
                                            //     'birthDay',
                                            //     moment(date).format('YYYY-MM-DD'),
                                            // );
                                        }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        {errors?.birthDay && (
                            <span className="text-error">
                                {errors?.birthDay.type === 'required'
                                    ? 'Vui lòng chọn ngày'
                                    : errors?.password?.message
                                }
                          </span>
                        )}
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Select
                            className="container-dropdown"
                            suffixIcon={
                                state?.selectIcProvinces ? (
                                    <KeyboardArrowUpIcon className=""/>
                                ) : (
                                    <KeyboardArrowDownIcon className=""/>
                                )
                            }
                            style={{
                                width: 200,
                                color: '#000000',
                                fontWeight: 'bold',
                            }}
                            onChange={handleChangeProvinces}
                            value={values?.provinces}
                            onDropdownVisibleChange={(value: boolean) =>
                                setState({...state, selectIcProvinces: value})
                            }
                        >
                            {province?.map((res: any, index: number) => {
                                return (
                                    <Option value={res?.provinces_code} key={index}>
                                        {res.provinces_name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Select
                            className="container-dropdown"
                            suffixIcon={
                                state?.selectIcDistrict ? (
                                    <KeyboardArrowUpIcon className=""/>
                                ) : (
                                    <KeyboardArrowDownIcon className=""/>
                                )
                            }
                            style={{
                                width: 200,
                                color: '#000000',
                                fontWeight: 'bold',
                            }}
                            onChange={handleChangeDistrict}
                            value={values?.districts}
                            onDropdownVisibleChange={(value: boolean) =>
                                setState({...state, selectIcDistrict: value})
                            }
                        >
                            {district?.map((res: any, index: number) => {
                                return (
                                    <Option value={res?.district_code} key={index}>
                                        {res?.district_name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Select
                            className="container-dropdown"
                            suffixIcon={
                                state?.selectIcWard ? (
                                    <KeyboardArrowUpIcon className=""/>
                                ) : (
                                    <KeyboardArrowDownIcon className=""/>
                                )
                            }
                            style={{
                                width: 200,
                                color: '#000000',
                                fontWeight: 'bold',
                            }}
                            onChange={handleChangeWard}
                            value={values?.wards}
                            onDropdownVisibleChange={(value: boolean) =>
                                setState({...state, selectIcWard: value})
                            }
                        >
                            {ward?.map((res: any, index: number) => {
                                return (
                                    <Option value={res?.ward_code} key={index}>
                                        {res?.ward_name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Controller
                            control={control}
                            name="gender"
                            // defaultValue={
                            //     informationUser?.gender_code === 1 ? '1' : '0'
                            // }
                            // key={informationUser?.gender_code}
                            rules={{required: true}}
                            render={({field: {onChange, value}}) => (
                                <RadioGroup
                                    className={'wrapper-profile__radioBtn'}
                                    onChange={(e, value) => {
                                        onChange(Number.parseInt(value));
                                        setValue('gender', value);
                                    }}
                                    value={value}
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={<StyledRadio color="primary"/>}
                                        label="Nam"
                                        checked={
                                            value === GENDER_MALE
                                        }
                                    />
                                    <FormControlLabel
                                        value="0"
                                        control={<StyledRadio color="primary"/>}
                                        label="Nữ"
                                        checked={
                                            value === GENDER_FEMALE
                                        }
                                    />
                                </RadioGroup>
                            )}
                        />
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="Địa chỉ"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                        {errors?.address && (
                            <span className="text-error">
                                {errors?.address.type === 'required'
                                    ? 'Vui lòng nhập địa chỉ'
                                    : errors?.address?.message
                                }
                          </span>
                        )}
                    </div>
                    <div className="btn__register">
                        <button type="submit"  onSubmit={handleSubmit(data => {
                    handleRegister(data)
                })} >Đăng ký</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </Modal>
    );
}

export default Register;