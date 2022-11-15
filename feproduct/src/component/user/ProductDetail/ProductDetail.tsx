import React from 'react';
import "../ProductDetail/ProductDetail.scss";
// import { motion } from  'framer-motion/dist/framer-motion'
import {useRef, useEffect, useState} from "react";

import image from "../../../asset/newsoffer/120_7828_dell_ultrasharp_u2422h_thumb4.jpg";
import NoAvatar from "../../../asset/newsoffer/noavatar.jpg";
import ModalComment from "./ModalComment/ModalComment";
// import ImageProductDetail from "./ProductDetailImage";
import ProductDetailsView from "./ProductDetailsView/ProductDetailsView";
import {TabName} from "./constants";
import BodyProductList from "./BodyProductList";
import useQueryLocation from "../hook/useQueryLocation";
import {Options} from "../../../types/productType";
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import * as Actions from "../../../store/action/productdetail";
import {getDetail, getOptionProductDetail} from "../../../store/selector/productDetailSelector";
import {Unsubscribe} from "redux";
import {RootStore} from "../../../store/store";


type nameTitle = {
    id: number,
    Name: string;
}
const TabNames: Array<nameTitle> = [
    {id: 0, Name: TabName.ProductDetails.ProductSimilar},
    {id: 1, Name: TabName.ProductDetails.ProductBrand},
    {id: 2, Name: TabName.ProductDetails.ProductInvolve},
];

interface TypeState {
    isComment?: boolean | undefined;
    isSeeMore?: boolean | undefined;
    id: number | undefined;
}

const ProductDetail = () => {
    const query = useQueryLocation();
    const idProduct: string | null = query.get("idproduct");
    const dispatch = useDispatch();
    const detail = useSelector(getDetail);
    const options = useSelector(getOptionProductDetail);

    // console.log("detail", detail);
    // console.log("options", options);

    const [nameTitle, setNameTitle] = useState<nameTitle>() as any;
    const [item, setItem] = useState({}) as any | Object | undefined;
    const [option, setOption] = useState<Options | any>();

    const [state, setState] = useState<TypeState>({
        isComment: false,
        isSeeMore: false,
        id: 0,
    });

    const clickShowContentComment = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setState((pre) => ({...pre, isComment: true}));
    }
    const clickHideContentComment = (): void => {
        setState((pre) => ({...pre, isComment: false}));
    }
    const clickShowMore = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setState((pre) => ({...pre, isSeeMore: !state?.isSeeMore}));
    }
    const HandleClick = (res: any, index: number): void => {
        setState((pre) => ({...pre, id: res?.id}));
        setNameTitle(res?.Name)
    }

    useEffect(() => {
        setNameTitle(TabName.ProductDetails.ProductSimilar);
    }, [TabNames])
    useEffect(() => {
        dispatch(Actions.detailProduct(idProduct));
    }, [idProduct])
    useEffect(() => {
        const storeSub$: Unsubscribe = RootStore.subscribe(() => {
            const {type, payload} = RootStore.getState().lastAction;
            switch (type) {
                case Actions.GET_DETAIL_PRODUCT_SUCCESS:
                    break;
                case Actions.GET_DETAIL_PRODUCT_FAIL:
                    break;
            }
        });
        return () => {
            storeSub$();
        };
    }, []);

    return (
        <section className="Container__ProductDetail">
            <ProductDetailsView
                item={detail}
                option={options}
            />

            <div className="whitenews">
                <div className="whitenews__productdetail">
                    <div className="whitenews__productdetail--title">
                        <h3>MÔ TẢ SẢN PHẨM</h3>
                    </div>
                    <div className="whitenews__productdetail--content">
                        <p>
                            {item.description}
                            <span className={state.isSeeMore ? "read-more-text--show" : "read-more-text"}>
                        Chăm Sóc Toàn Diện Cho Đôi Mắt
                        Bạn sẽ luôn yên tâm đôi mắt của mình luôn được bảo vệ khi sử dụng trên chiếc màn hình này với công nghệ bảo vệ mắt tiên tiến giúp giảm thiểu tình trạng mỏi mắt khi dùng trong thời gian dài. Công nghệ Flicker Free loại bỏ tình trạng nhấp nháy khó chịu thường thấy trên màn hình, trong khi chế độ Eye Saver giảm thiểu tác hại của ánh sáng xanh.
                            </span></p>
                        <div className="productdetail__btn">
                            <button className="read-more-btn"
                                    onClick={(event: any) => clickShowMore(event)}>{state.isSeeMore ? "Rút Gọn..." : "Xem Thêm..."}</button>
                        </div>
                    </div>
                </div>
                <div className="whitenews__involve">
                    <div className="whitenews__involve--titleoffer">
                        <h3>TIN TỨC LIÊN QUAN</h3>
                    </div>
                    <div className="whitenews__involve--content">
                        <div className="involve__img">
                            <img src={image}/>
                        </div>
                        <div className="involve__content">
                            <span>Dell Ultrasharp U2422H Nhìn Em Là Anh Quất Liền</span>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whitenewscomment">
                <div className="whitenewscomment__title">
                    <h3>HỎI ĐÁP</h3>
                </div>
                <div className="whitenewscomment__content">
                    <div className="whitenewscomment__content--img">
                        <img src={NoAvatar}/>
                    </div>
                    <div className="whitenewscomment__content--text">
                        <textarea placeholder="Nội Dung"
                                  onClick={(event: any) => clickShowContentComment(event)}></textarea>
                    </div>
                    {state.isComment && <ModalComment clickHideContentComment={clickHideContentComment}/>}
                </div>
            </div>
            <div className="whiteProductList">
                <div className="whiteProductList__title">
                    {
                        TabNames?.map((item: any, index: number) => {
                            return <h3 className="product__similar"
                                       style={{
                                           borderBottom: state.id === item?.id ? "4px solid #546ce8" : "",
                                           color: state.id === item?.id ? "#546ce8" : "",
                                           cursor: state.id === item?.id ? "pointer" : ""
                                       }}
                                       key={index}
                                // onMouseOver={()=>mouseTransition(index)}
                                       onClick={() => HandleClick(item, index)}>
                                {item?.Name}
                            </h3>
                        })
                    }
                </div>
                <BodyProductList tab={nameTitle}/>
            </div>
        </section>
    );
}

export default ProductDetail;