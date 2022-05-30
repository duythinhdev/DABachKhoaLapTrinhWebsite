import React,{useState, useEffect,lazy, Suspense,useCallback} from 'react';
import "./TopProduct.scss";
import useFetchingTopProduct from "../TopProduct/useFetchingData";
import {
    useLocation
  } from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";
import ReactPaginate from 'react-paginate';
import useQueryLocation from "../hook/useQueryLocation";
import { Link } from 'react-router-dom';
import { Product,fetchComments } from "../../../types/productType";
import useHoverProductDetail from "../hook/useHoverProductDetail";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";


const TopProduct = () => {
    let query = useQueryLocation();
    let idctProduct = query.get("idctproduct");
    let nameCtProducts = query.get("nameCtProduct");
    console.log("nameCtProducts",nameCtProducts);
    const LIMIT = 10;
    let linkCtProduct = enviroment.localNode + `ctproduct/of?categoryProductId=${idctProduct}&pagenumber=1&pagesize=${LIMIT}`;
    // let { data,totalpage } = useFetchingTopProduct(ctProduct);
    let [items,setItems] = useState<Array<Product>>([]);
    let [totalItems, setTotalItems] = useState<number | undefined | any >();
  
    const fetchComments = useCallback(async (currentPage: number) => {
        const res =  await axios.get<fetchComments>(enviroment.localNode + `ctproduct/of?categoryProductId=${idctProduct}&pagenumber=${currentPage}&pagesize=${LIMIT}`)
        return res.data.data
    }, []);
    useEffect(()=> {
        let fetchDataProduct = async () => {
            await axios.get<fetchComments>(linkCtProduct).then((res) => {
              if(res.data.totalPage) {
                setTotalItems(Math.ceil(res.data.totalPage / LIMIT));
              }
              setItems(res.data.data)
            });
         }
        fetchDataProduct();
    },[LIMIT])
    const handlePageClick = async (selectedItem: {selected: number} ) => {
        // console.log(data);

        let currentPage = selectedItem.selected + 1;
    
        const commentsFormServer = await fetchComments(currentPage);
    
        setItems(commentsFormServer);
    };
    let [ conditionIndex,setConditionIndex] = useState(0) as number | undefined | any;
    let { isHoverDetail,indexProductDetail,moveDetail,moveDetailOver } = useHoverProductDetail();
    return (
            <div className='containter__TopProduct'>
                <div className='name__TopProduct'>
                    <a>Home  </a> {nameCtProducts ? ">" : ''}
                    <span>{nameCtProducts}</span>
                </div>
                <div className='title__TopProduct'>
                    <div className='title__TopProduct--name'>
                        <span>BỘ LỌC</span>
                    </div>
                    <div className='title__TopProduct--filter'>
                        <div className='TopProduct--filter__Brand'>
                        
                        </div>
                        <div className='TopProduct--filter__About'>
                    
                        </div>
                    </div>
                </div>
            <div className='content__TopProduct'>
                <div className='content__TopProduct--title'>
                
                </div>
                <div className='content__TopProduct--container flex-box'>
                    {
                      items?.map((res: Product,index:number) => {
                        // setConditionIndex(index);
                          return  <div className='product__item' key={index} >
                                    <div className='product__item--img'>
                                        <img src={res.images[0].url} onMouseOver={()=>moveDetail(index)} onMouseLeave={()=>moveDetailOver()} />
                                    </div>
                                    <div className='product__item--code'>
                                            {res._id}
                                    </div>
                                    <div className='product__item--name'>
                                          <Link className='linknameProduct'
                                           to={`/system/productdetail?idproduct=${res?._id}`}> 
                                                {res.Product_name}
                                           </Link>  
                                    </div>
                                    <div className='product__item--pricemotion'>
                                            {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </div>
                                    <div className='product__item--price'>
                                            {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </div>
                                    <div className='product__item--motion'>
                                            <span>1 Khuyến Mãi</span>
                                    </div>
                                    <div className='product__item--compare'>
                                            <span>So Sanh</span>
                                    </div>
                                    {
                                        isHoverDetail && indexProductDetail === index ? <HoverDetailProduct response={res} isCtProduct={false} /> : ''
                                    }
                                </div>
                        })
                    }
                </div>
                <div className='content__TopProduct--pagination'>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={totalItems}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
                </div>
            </div>
            </div>
    );
}

export default TopProduct;