import React,{useState, useEffect} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';
import TopProduct from "../../../asset/TopProduct/250_34178_large_7cafaa8dedb3d130.jpg";
import { enviroment } from "../../../enviroment/enviroment";


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
    indexs: number,
    response: any
}
const CategoryProducts: React.FC<props>  = React.memo(({indexs,response}) =>  {
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
                                    <h4 key={indexs}>{response?.name}</h4>
                        </div>
                </div>
    
                <div className='box-center__content'>
                    <div className='box-center__content--product'>
                        {
                            response?.product.map((res:any,index:number)=> {
                              return  <div className='product--detail' >
                                    <div className='product--detail__img' onMouseMove={()=>moveDetail(index)} onMouseLeave={()=>moveDetailOver()} >
                                        <img src={res.productImage[0]}/>
                                    </div>
                                <div className='product--detail__Code'>
                                    <span> {res._id}</span>
                                </div>
                                <div className='product--detail__Name'>
                                       <Link to="/system/productdetail"  className="detailName__link"><span>{res.Product_name}</span></Link> 
                                </div>
                                <div className='product--detail__pricePromotion'>
                                        <del>{res.options[0]?.price}</del>
                                </div>
                                <div className='product--detail__price'>
                                        {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} 
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
                    <Link to={`/system/topproduct?idctproduct=${response?._id}`}  className="button__seemore" ><span>xem tất cả sản phẩm</span></Link>
                </div>
            </div>
        </div>
    );
})

export default CategoryProducts;