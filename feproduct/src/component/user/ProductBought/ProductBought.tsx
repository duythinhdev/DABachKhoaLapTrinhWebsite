import React from 'react';
import styled from "styled-components";
import {mobile, laptop,table} from "../response";
import "./ProductBought.scss";
import Cart from "../../../asset/Cart/120_34491_corsair_t3_rush_charcoal__1_.jpg";

const  ProductBought = ()  => {
    return (
       <div className="ContainerCart">
           <div className="itemyoucart">
             <div className="itemyoucart__title">
                <h1>Giỏ hàng của bạn</h1>
                <span>Liên hệ nhân viên trước khi chuyển tiền mua hàng.</span>
                <span>Để đặt hàng, quý khách vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các thông tin dưới đây:</span>
             </div>
             <div className="itemyoucart__detail">
                <div className="itemyoucart__detail--img">
                    <img src={Cart} />
                </div>
                <div className="itemyoucart__detail--name">
                    <div className="Product">
                        <span className="Product__name">Ghế game Corsair T3 RUSH Charcoal</span>
                        <span className="Product__id">Mã sản phẩm: GHED0345</span>
                        <span className="Product__Insurance">Bảo hành: 24 Tháng</span>
                    </div>
                </div>
                <div className="itemyoucart__detail--price">
                    <del className="price__reduction">5.999.000 đ</del>
                    <span className="price__real">5.999.000 đ</span>
                    <span className="price__sum">Tổng: 5.499.000đ đ</span>
                    <div className="price__count">
                        <a className="price__minus">-</a>
                        <input className="price__value" />
                        <a className="price__add">+</a>
                    </div>
                </div>
             </div>
             <div className="itemyoucart__button">
                 <button className="btn-cart-red">Đặt Hàng</button>
                 <button className="btn-cart-orange">Mua Trả Góp</button>
             </div>
           </div>
           <div className="itemorder">

           </div>
       </div>
    );
}

export default ProductBought;
