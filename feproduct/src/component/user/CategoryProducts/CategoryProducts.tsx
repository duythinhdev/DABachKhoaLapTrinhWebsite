import React,{useState, useEffect} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';
import TopProduct from "../../../asset/TopProduct/250_34178_large_7cafaa8dedb3d130.jpg";


const listProduct:Array<any> = [
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
    {
        code: "Mã SP : TBAS0009",
        Name: "ASUS ROG Rapture GT-AC5300 (Gaming Router) AC5300 WTFast",
        Promotion: "10.990.000 đ",
        Price: "4.900.000 đ",
        img: TopProduct
    },
]
interface props {
    name: Array<any>,
    indexs: number,
    id: number
}
const CategoryProducts: React.FC<props>  = ({name,indexs,id}) =>  {
    console.log("id",id);
    const [hoverDetail,setHoverDetail] =  useState(false as boolean);
    const [indexDetail,setIndexDetail] = useState(1 as number);
    const moveDetail = async (index: number)   => {
      await  setHoverDetail(true);
      await  setIndexDetail(index);
    }
    const moveDetailOver = () : void => {
        setHoverDetail(false);
    }
    useEffect(()=> {

    },[])
    return (
        <div className='p-container' key={indexs}>
            <div className='box-center'>
                <div className='box-center__title'>
                        <div className='box-center__title--ProductSpeed'>
                                    <h4 key={indexs}>{name}</h4>
                        </div>
                </div>
    
                <div className='box-center__content'>
                    <div className='box-center__content--product'>
                        {
                            listProduct.map((res:any,index:number)=> {
                              return  <div className='product--detail' >
                                    <div className='product--detail__img' onMouseMove={()=>moveDetail(index)} onMouseLeave={()=>moveDetailOver()} >
                                        <img src={res.img}/>
                                    </div>
                                <div className='product--detail__Code'>
                                    <span> {res.code}</span>
                                </div>
                                <div className='product--detail__Name'>
                                       <Link to="/cart"  className="detailName__link"><span>{res.Name}</span></Link> 
                                </div>
                                <div className='product--detail__pricePromotion'>
                                        <del>{res.Promotion}</del>
                                </div>
                                <div className='product--detail__price'>
                                        {res.Price}
                                </div>
                                </div>
                            })
                        }
                        {
                            hoverDetail && indexDetail  && <HoverDetailProduct />
                        }
                    </div>
                </div>
                <div className='box-center__seeMore'>
                            <Link to="/topproduct"  className="button__seemore" ><span>xem tất cả sản phẩm</span></Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryProducts;