import React, {useState, useEffect, lazy, Suspense, useCallback} from 'react';
import "./TopProduct.scss";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ReactPaginate from 'react-paginate';
import useQueryLocation from "../hook/useQueryLocation";
import {Link} from 'react-router-dom';
import {Product, fetchComments} from "../../../types/productType";
import useHoverProductDetail from "../hook/useHoverProductDetail";
import HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import ItemTopProduct from "./ItemTopProduct/ItemTopProduct";

const LIMIT = 10;
const TopProduct = () => {
    let query = useQueryLocation();
    let idctProduct = query.get("idctproduct");
    let nameCtProducts = query.get("nameCtProduct");
    let linkCtProduct = enviroment.localNode + `ctproduct/of?categoryProductId=${idctProduct}&pagenumber=1&pagesize=${LIMIT}`;
    // let { data,totalpage } = useFetchingTopProduct(ctProduct);
    let [items, setItems] = useState<Array<Product>>([]);
    let [totalItems, setTotalItems] = useState<number | undefined | any>();

    const fetchComments = useCallback(async (currentPage: number) => {
        const res = await axios.get<fetchComments>(enviroment.localNode + `ctproduct/of?categoryProductId=${idctProduct}&pagenumber=${currentPage}&pagesize=${LIMIT}`)
        return res.data.data
    }, []);
    useEffect(() => {
        let fetchDataProduct = async () => {
            await axios.get<fetchComments>(linkCtProduct).then((res) => {
                if (res.data.totalPage) {
                    setTotalItems(Math.ceil(res.data.totalPage / LIMIT));
                }
                setItems(res.data.data)
            });
        }
        fetchDataProduct();
    }, [LIMIT,items,totalItems])
    const handlePageClick = async (selectedItem: { selected: number }) => {
        // console.log(data);

        let currentPage = selectedItem.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setItems(commentsFormServer);
    };
    let {isHoverDetail, indexProductDetail, moveDetail, moveDetailOver} = useHoverProductDetail();
    return (
        <div className='containter__TopProduct'>
            <div className='name__TopProduct'>
                <a>Home </a> {nameCtProducts ? ">" : ''}
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
                <div className='content__TopProduct--container'>
                    {
                        items?.map((res: Product, index: number) => {
                            // setConditionIndex(index);
                            return <ItemTopProduct
                                res={res}
                                index={index}
                                moveDetail={() => moveDetail(index)}
                                moveDetailOver={moveDetailOver}
                                isHoverDetail={isHoverDetail}
                            />
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