import React,{useState} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';


const listProduct:Array<any> = [
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
    },
]

const CategoryProducts  = () =>  {
    const [hoverDetail,setHoverDetail] =  useState(false as boolean);
    const [indexDetail,setIndexDetail] = useState(1 as number);
    const moveDetail = async (index: number)  => {
      console.log("index",index)
      await  setHoverDetail(true);
      await  setIndexDetail(index);
    }
    const moveDetailOver = () : void => {
        setHoverDetail(false);
    }
    return (
        <div className='p-container'>
            <div className='box-center'>
                <div className='box-center__title'>
                        <div className='box-center__title'>
                            <div className='box-center__titleProductSpeed'>
                                    <h3>Top Sản Phẩm Bán Chạy</h3>
                            </div>
                        </div>
                </div>
                <div className='box-center__content'>
                    <div className='box-center__content--product'>
                        {
                            listProduct.map((res:any,index:number)=> {
                              return  <div className='product--detail' >
                                    <div className='product--detail__img' onMouseOver={(index:any)=>moveDetail(index)} onMouseOut={()=>moveDetailOver()} >
                                        <div>
                                        {
                                            hoverDetail && indexDetail == index && <HoverDetailProduct />
                                        }
                                        </div>
                                    </div>
                                <div className='product--detail__Code'>
                                        {res.code}
                                </div>
                                <div className='product--detail__Name'>
                                        {res.Name}
                                </div>
                                <div className='product--detail__pricePromotion'>
                                        {res.Promotion}
                                </div>
                                <div className='product--detail__price'>
                                        {res.Price}
                                </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='box-center__content--product'>
                        {
                            listProduct.map((res:any,index:number)=> {
                              return  <div className='product--detail'>
                                    <div className='product--detail__img'>
                                    
                                </div>
                                <div className='product--detail__Code'>
                                        {res.code}
                                </div>
                                <div className='product--detail__Name'>
                                        {res.Name}
                                </div>
                                <div className='product--detail__pricePromotion'>
                                        {res.Promotion}
                                </div>
                                <div className='product--detail__price'>
                                        {res.Price}
                                </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='box-center__seeMore'>
                            <a  className="button__seemore"><Link to="/topproduct">xem tất cả sản phẩm</Link></a>
                </div>
            </div>
        </div>
    );
}

export default CategoryProducts;