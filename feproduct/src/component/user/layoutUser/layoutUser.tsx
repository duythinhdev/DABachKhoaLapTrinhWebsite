import React,{useState,useEffect} from 'react';
import "./layoutUser.scss";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Slider from "../slider/slider";
import Categories from "../categories/categories";
import Products from "../Products/Products";
import ProductsSamSung from "../Products/productSamsung";
import Productslg from "../Products/Productlg";
import Newsletter from "../Newletter/Newletter";
import Footer from "../footer/footer";
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

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
        let apiPagination1 = `v1/categoryproduct/getall`;
        let categories:any = [];
        await axios.get(enviroment.local + apiPagination1)
            .then( async (res: AxiosResponse<any>) => {
                res.data.response.data.forEach( async (item:any)=>{
                    let apiPagination = `v1/categoryproduct/getaboutproduct?pagenumber=${state.page}&pagesize=${state.rowsPerPage}&idcategory=${item.id}`;
                    await axios.get(enviroment.local + apiPagination)
                        .then( async (resCategory: AxiosResponse<any>) => {
                             item.product = await resCategory.data.response.data
                            await categories.push(item)
                            console.log("item.product",item.product);
                        }).catch(err => console.log(err));
                })
                await setDataPagination(categories); 
            }).catch(err => console.log(err));
        console.log("categories",categories)
    }
    useEffect(()=>{
        fetchDataProduct();
    },[])
    return (
        <div className="">
            <Announcement />
            <Navbar />
            <CategoryProduct />
            <CategoryProducts />
            {/* <Slider /> */}
            {/* <Categories /> */}
            {/* <Products  dataPagination={dataPagination} /> */}
            {/* <ProductsSamSung
             />
            <Productslg
             /> */}
            <Newsletter />
            <Footer />
        </div >
    );
}

export default LayoutUser;
