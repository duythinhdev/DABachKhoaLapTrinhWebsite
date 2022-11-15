import React, {BaseSyntheticEvent, useState, useEffect} from "react";
import "./ProductBought.scss";
import * as Actions from "../../../store/action/index";
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {Product} from "../../../types/productType";
import {ProductCart} from "../../../types/hookForm";
import {toast} from "react-toastify";
import ListProductBought from "../ProductBought/ListProductBought/ListProductBought";
import FormCartBought from "../ProductBought/formCartBought/FormCartBought";


const ProductBought = () => {
    let {cart, totalMoney} = useSelector((state: RootStateOrAny) => state.dataUser);
    let dispatch = useDispatch();
    const removeAllCart = () => {
        let actions = Actions.removeAllCartUser();
        dispatch(actions);
    }
    const removeDetailCart = (id: number) => {
        let actions = Actions.removeDetailCartUser(id);
        dispatch(actions);
    }
    const increaseMinusDetailCart = (id: number, calculation: string) => {
        let actions = Actions.increaseMinusCart(id, calculation);
        dispatch(actions);
    }
    useEffect(() => {
        let actions = Actions.loadTotalMoney();
        dispatch(actions);
    }, [cart, totalMoney])
    const [value, setValue] = useState<ProductCart>({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        address: '',
        city: '',
        Note: "",
        company: "",
        addressCompany: "",
        bank: "",
        isLoadToast: false
    });
    const changeValue = (event: React.ChangeEvent<{ name: string, value: unknown }>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = (titleLogin: string) => {
        toast(titleLogin);
    }
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {fullName, phoneNumber, address, gender, city, email, Note} = value;
        console.log("value", value.fullName, value.phoneNumber, value.address, value.gender, value.city, value.email,);
        await setValue({...value, isLoadToast: true});
        await notify("Người dùng cần phải login mới đặt hàng được");
        let actions = Actions.postOrder(fullName, phoneNumber, address, gender, city, email, cart, totalMoney, Note);
        await dispatch(actions);
    }
    return (
        <div className="ContainerCart p-12">
            {
                cart?.length === 0 ? <h1>Có 0 sản phẩm trong giỏ hàng</h1> : <div className="itemyoucart">
                    <div className="itemyoucart__title">
                        <h1>Giỏ hàng của bạn</h1>
                        <span>Liên hệ nhân viên trước khi chuyển tiền mua hàng.</span>
                        <span>Để đặt hàng, quý khách vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các thông tin dưới đây:</span>
                    </div>
                    <div className="itemyoucart__removecart">
                        <button onClick={removeAllCart} className="btn-cart-red">Xóa Khỏi giỏ hàng</button>
                    </div>
                    {cart?.map((res: Product, index: number) => {
                        return <ListProductBought res={res}
                                                  index={index}
                                                  increaseMinusDetailCart={(index: number, calculation: string) => increaseMinusDetailCart(index, calculation)}
                                                  removeDetailCart={(index: number) => removeDetailCart(index)}/>
                    })}
                    <div className="itemyoucart__total">
                        <div className="itemyoucart__total--promotion">
                            <div className="name_promotion">
                                <span>Mã giảm giả / Quà tặng</span>
                            </div>
                            <div className="write__promotion">
                                <input placeholder="Nhập mã giảm giá"/>
                                <button>Áp dụng</button>
                            </div>
                        </div>
                        <div className="itemyoucart__total--totalMoney">
                            <span>Phí vận chuyển: 0 đ</span>
                            <span>Phí thu hộ: 0 đ</span>
                            <span
                                className="name_totalMoney">Tổng cộng: {totalMoney && totalMoney.toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND'
                            })} </span>
                            <span>Giảm giá: 0 đ</span>
                            <span
                                className="name_totalMoney">Thanh toán: {totalMoney && totalMoney.toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND'
                            })} </span>
                            <span><b>In báo giá</b>  <b>Tải file excel</b></span>
                        </div>
                    </div>
                    <div className="itemyoucart__button">
                        <button className="btn-cart-red">Đặt Hàng</button>
                        <button className="btn-cart-orange">Mua Trả Góp</button>
                    </div>
                </div>
            }
            {

                cart?.length === 0 ? <h1>Có 0 sản phẩm trong giỏ hàng</h1> :
                    <FormCartBought
                        changeValue={(event: React.ChangeEvent<{ name: string, value: unknown }>) => changeValue(event)}
                        clickValue={(data: any, event: any) => clickValue(data, event)}
                        isLoadToast={value.isLoadToast}
                    />
            }
        </div>
    );
}

export default ProductBought;
