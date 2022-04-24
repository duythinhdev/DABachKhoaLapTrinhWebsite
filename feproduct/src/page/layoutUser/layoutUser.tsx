import React,{useState,useEffect} from 'react';
import "./LayoutUser.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import SliderProduct from "../../component/user/SliderProduct/SliderProduct";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../enviroment/enviroment";
import CategoryProducts from "../../component/user/CategoryProducts/CategoryProducts";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";

const LayoutUser = () => {
    const [state, setState] = useState({
        page: 1 as any,
    });
    const [dataCategoryProduct,setDataCategoryProduct] = useState([]) as Array<any>;
    let fetchDataProduct = async () => {
       let ctProduct = "ctproduct/get";
       await axios.get(enviroment.localNode + ctProduct).then((res: any) => {
            setDataCategoryProduct(res.data.data)
       });
    }
    useEffect(()=>{
        fetchDataProduct();
    },[])
    return (
        
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <SliderProduct />
            {
               dataCategoryProduct?.map((res: any,index:number) => {
                    return <CategoryProducts response={res}  indexs={index}/> 
                })
            }
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div >
    );
}

export default LayoutUser;
