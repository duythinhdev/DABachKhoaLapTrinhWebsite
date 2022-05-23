import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {mobile, laptop,table} from "../response";
import "./ProductBought.scss";
import Cart from "../../../asset/Cart/120_34491_corsair_t3_rush_charcoal__1_.jpg";
import * as Actions from "../../../store/action/index"; 
import { useSelector,RootStateOrAny,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const  ProductBought = ()  => {
    let cartOfUser = useSelector((state:RootStateOrAny) => state.dataUser.cart);
    console.log("cartOfUser",cartOfUser);
    let dispatch = useDispatch();
    const removeCart = () => {
        let actions =  Actions.removeCartUser();
        dispatch(actions);
    }
    const removeDetailCart = (id:number) => {
        let actions =  Actions.removeDetailCartUser(id);
        dispatch(actions);
    }
    const increaseDetailCart = (id:number,calculation:string) => {
        let actions =  Actions.increaseProductCart(id,calculation);
        dispatch(actions);
    }
    // useEffect(()=> {
    //     let actions =  Actions.resetList();
    //     dispatch(actions);
    // },[])
    return (
       <div className="ContainerCart">
           {
           cartOfUser?.length === 0 ? <h1>Có 0 sản phẩm trong giỏ hàng</h1> : <div className="itemyoucart">
             <div className="itemyoucart__title">
                <h1>Giỏ hàng của bạn</h1>
                <span>Liên hệ nhân viên trước khi chuyển tiền mua hàng.</span>
                <span>Để đặt hàng, quý khách vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các thông tin dưới đây:</span>
             </div>
             <div className="itemyoucart__removecart">
                <button onClick={removeCart}  className="btn-cart-red">Xóa Khỏi giỏ hàng</button>
             </div>
             {cartOfUser?.map((res:any,index:number)=> {
                 return <div className="itemyoucart__detail" key={index}>
                            <div className="itemyoucart__detail--img">
                                <img src={ res?.images && res?.images[0]?.url} />
                                <div>
                                    <DeleteIcon className="icon__delete" onClick={() => {removeDetailCart(index)}} />
                                </div>
                            </div>
                            <div className="itemyoucart__detail--name">
                                <div className="Product">
                                    <span className="Product__name">{res.Product_name}</span>
                                    <span className="Product__id">{res?.options && res?.options[0]?.code}</span>
                                    <span className="Product__Insurance">Bảo hành: 24 Tháng</span>
                                </div>
                            </div>
                            <div className="itemyoucart__detail--price">
                                <del className="price__reduction">{res?.options && res?.options[0]?.price}</del>
                                <span className="price__real">{res?.options && res?.options[0]?.price}</span>
                                <span className="price__sum">Tổng: {res?.totalAmount}</span>
                                <div className="price__count">
                                    <a className="price__minus" onClick={() => {increaseDetailCart(index,"minus")}}>-</a>
                                    <input className="price__value" value={res?.quantityCart}  />
                                    <a className="price__add" onClick={() => {increaseDetailCart(index,"plus")}}>+</a>
                                </div>
                            </div>
                        </div>
             })}
             <div className="itemyoucart__button">
                 <button className="btn-cart-red">Đặt Hàng</button>
                 <button className="btn-cart-orange">Mua Trả Góp</button>
             </div>
           </div>
           }

           <div className="itemorder">

           </div>
       </div>
    );
}

export default ProductBought;
