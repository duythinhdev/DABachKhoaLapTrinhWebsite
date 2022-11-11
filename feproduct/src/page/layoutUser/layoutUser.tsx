import React,{useEffect,useCallback} from 'react';
import "./layoutUser.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import SliderProduct from "../../component/user/SliderProduct/SliderProduct";
import { enviroment } from "../../enviroment/enviroment";
import CategoryProducts from "../../component/user/CategoryProducts/CategoryProducts";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";
import useFetchingData from "../../component/user/TopProduct/useFetchingData";
import { tsCategoryProduct } from "../../types/productType";
import { useDispatch,useSelector } from "react-redux";
import * as Actions from "../../store/action/product";
import { getProduct } from "../../store/selector/productSelector";

const LayoutUser = React.memo(() => {
    const dispatch = useDispatch();
    const product = useSelector(getProduct);
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        dispatch(Actions.product());
    },[stableDispatch])

    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <SliderProduct />
            {
                product?.map((res: tsCategoryProduct,index:number) => {
                    return <CategoryProducts response={res}  indexs={index}/> 
                })
            }
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div >
    );
})

export default LayoutUser;
