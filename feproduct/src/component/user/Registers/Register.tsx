import React, {useCallback, useEffect, useState} from 'react';
import "./styles.scss";
import {useForm, Controller} from "react-hook-form";
import {Modal} from 'antd';
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../../store/action/provinces";
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


interface props {
    openModal?: boolean;
    handleClose?: () => void;
}

const GENDER_MALE = "1"
const GENDER_FEMALE = "0"

const {Option} = Select;
const Register: React.FC<props> = ({openModal, handleClose}) => {
    let {handleSubmit, register, getValues, setValue, watch, control} = useForm();
    let dispatch = useDispatch();
    let list = useSelector(provinces);

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

    const handleChangeProvinces = (selected: any) => {
        const provinces: any | never = province?.find((p: any) => {
            return p?.provinces_code === selected
        })
        setDistrict(provinces?.districts)
    }
    const handleChangeDistrict = (selected: any) => {
        const districts: any | never = district?.find((d: any) => {
            return d?.district_code === selected
        })
        setWard(districts?.wards)
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
                <div>
                    <h3> Đăng ký tiki</h3>
                </div>
                <form>
                    <div style={{marginTop: "15px"}}>
                        <input/>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <input/>
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
                                        // format={DEFAULT_FORMAT_DATE}
                                        // placeholder="Chọn ngày tháng"
                                        onChange={(date: any, dateStr: any) => {
                                            moment(date).isValid() && onChange(date?.toISOString());
                                        }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
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
                            // value={values?.districts}
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
                            // onChange={handleChangeDistrict}
                            // value={}
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
                    <Controller
                        control={control}
                        name="gender"
                        // defaultValue={
                        //     informationUser?.gender_code === 1 ? '1' : '0'
                        // }
                        // key={informationUser?.gender_code}
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
                    <div style={{marginTop: "15px"}}>
                        <input/>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default Register;