import React,{useState,useEffect} from 'react';
import "./layoutUser.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Slider from "../../component/user/slider/slider";
import Categories from "../../component/user/categories/categories";
import Products from "../../component/user/Products/Products";
import ProductsSamSung from "../../component/user/Products/productSamsung";
import Productslg from "../../component/user/Products/Productlg";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import CategoryProduct from "../../component/user/SliderProduct/SliderProduct";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../enviroment/enviroment";
import CategoryProducts from "../../component/user/CategoryProducts/CategoryProducts";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";

const arrayCategory = {
    categoryLG: 1,
    categorySamSung: 2,
    categoryDell: 4,
}
const LayoutUser = () => {
    const [state, setState] = useState({
        page: 1 as any,
        rowsPerPage: 10 as any,
        // dataPagination: [] as any,
        dataPaginationSamsung: [] as Array<any>
    });
    const [dataPagination,setDataPagination] = useState([]) as Array<any>;
    let fetchDataProduct = async () => {
        let apiCategoryProduct = `of?categoryProductId=6246b87d8b27c4245837281d`;
        axios.get(enviroment.localNode + apiCategoryProduct);
        
        // let categories:any = [];
        // await axios.get(enviroment.local + apiPagination1)
        //     .then( async (res: AxiosResponse<any>) => {
        //         res.data.response.data.forEach( async (item:any)=>{
        //             let apiPagination = `v1/categoryproduct/getaboutproduct?pagenumber=${state.page}&pagesize=${state.rowsPerPage}&idcategory=${item.id}`;
        //             await axios.get(enviroment.local + apiPagination)
        //                 .then( async (resCategory: AxiosResponse<any>) => {
        //                      item.product = await resCategory.data.response.data
        //                     await categories.push(item)
        //                     console.log("item.product",item.product);
        //                 }).catch(err => console.log(err));
        //         })
        //         await setDataPagination(categories); 
        //     }).catch(err => console.log(err));
        // console.log("categories",categories)
    }
    useEffect(()=>{
    },[])
    return (
        
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <CategoryProduct />
            <CategoryProducts />
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div >
    );
}

export default LayoutUser;
