import React, {useEffect, useState} from 'react';
import "./producDetail.scss";
import {useDispatch, useSelector} from "react-redux";
import {enviroment} from "../../../enviroment/enviroment";
import ModalBuyProduct from "./moDalBuyProduct/ModalBuyProduct";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios, {AxiosResponse} from "axios";
let dataProduct = [
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    }
]


function ProductDetail() {
    let dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    let datadetails = useSelector((res:any) =>{ return res.dataUser.dataDetailProduct});
    let token  = JSON.parse(localStorage.getItem('tokenUser') as any | string);
    let textData:any = null;
    const clickNotLogin = () => {
        if(token)
        {
            textData = 'Người dùng  mới mua được hàng'
        }
        else {
            textData = 'Người dùng phải đăng nhập mới mua được hàng'
        }
        notify();
    }
    const notify = () => toast(textData);
    const  fetchDataCategory = async () => {
        var  apiPagination = '';
        if(datadetails){
             apiPagination = `v1/categoryproduct/getaboutproduct?pagenumber=${page}&pagesize=${rowsPerPage}&idcategory=${datadetails[0].id_catergory_product}`;
        }
        else {
            apiPagination = `v1/categoryproduct/getaboutproduct?pagenumber=${page}&pagesize=${rowsPerPage}`;
        }
         axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
     
            }).catch(err => console.log(err));
    }
    useEffect(()=>{
        fetchDataCategory();
    },[])
    return (
        <div className="Container">
            <div className="ItemDetail">
                <div className="ItemDetailImage">
                    <div className="ItemDetailImageOne">
                        {
                            datadetails ?  <img src={enviroment.local + '/' + datadetails[0]?.image}  /> : ''
                        }
                    </div>
                    <div className="ItemDetailImageTwo">
                    </div>
                </div>
                        <div className="ItemDetailImagPrice">
                            <div className="ItemDetailImageTitle">
                                <h3>{datadetails ?  datadetails[0]?.Product_name : ''}</h3>
                            </div>
                            <hr/>
                            <div className="ItemDetailImageTitlePrice">
                                <h3>{datadetails ? datadetails[0]?.price : ''}</h3>
                            </div>
                            <div className="ItemDetailImageProduct">
                                <h3>{datadetails ? datadetails[0]?.description : ''}</h3>
                            </div>
                            <div className="ItemDetailImagebuttonBuy">
                                <button onClick={()=>clickNotLogin()} >Mua hàng</button>
                            </div>
                        </div>
            </div>
            <div className="ItemRecommand">
                <div className="ItemRecommandTitle">
                    <h3>Sản Phẩm tương tự</h3>
                </div>
                <div className="ItemRecommandProductDetail">
                    {
                        dataProduct?.map((res:any,index:number) => {
                            return <div className="ItemRecommandProductAll">
                                <div className="ItemRecommandProductAll--img">
                                </div>
                                <div className="ItemRecommandProductAll--title">
                                    {res.name}
                                </div>
                                <div className="ItemRecommandProductAll--price">
                                    {res.price}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="ItemInAll">
                <div className="ItemInformation">
                    <div className="ItemInformationTitle">
                        Mô Tả Sản Phẩm
                    </div>
                    <div className="ItemInformationContent">
                        <div className="ItemInformationFromDetail">
                            <span>
                                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                v
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                            </span>
                            <span>
                                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                v
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ItemInforReview">
                <div className="ItemInforReviewTitle">
                    <h3>Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
                </div>
                <div  className="ItemInforReviewContentStar">
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                </div>

            </div>
                <ToastContainer />
        </div>
    );
}

export default ProductDetail;
