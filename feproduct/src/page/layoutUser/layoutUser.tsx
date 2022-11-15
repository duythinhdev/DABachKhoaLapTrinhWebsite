import React, {useEffect, useCallback} from 'react';
import "./layoutUser.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import SliderProduct from "../../component/user/SliderProduct/SliderProduct";
import CategoryProducts from "../../component/user/CategoryProducts/CategoryProducts";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";
import {tsCategoryProduct} from "../../types/productType";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/action/product";
import {getProduct, loading} from "../../store/selector/productSelector";
import {CircularProgress} from '@mui/material';
import styled from 'styled-components';

export const Spinner = styled(CircularProgress)`
  color: #d61b22;
`;

const LayoutUser = React.memo(() => {
    const dispatch = useDispatch();
    const product = useSelector(getProduct);
    const loadings = useSelector(loading);
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        dispatch(Actions.product());
    }, [stableDispatch])

    return (
        <div className="ContainerApp">
            <Announcement/>
            <Navbar/>
            <SliderProduct/>
            {
                loadings ?
                    <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                        <Spinner/>
                    </div> :
                    product?.map((res: tsCategoryProduct, index: number) => {
                        return <CategoryProducts response={res} indexs={index}/>
                    })
            }
            <Newsletter/>
            <NewsFeeds/>
            <Footer/>
        </div>
    );
})

export default LayoutUser;
