import React,{useState,useEffect} from 'react';
import "./CategoryProduct.scss";
import Laptop from "../../../asset/cat_29cbb25a2308bdc8faaaf9e7b989cc1f.png";
import MayIn from "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import LinhKienMayTinh from  "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import ManHinhMayTinh from  "../../../asset/cat_5804bb2ce092a894cf86a82c17affb54.png";
const data = [
    {
        name: "Laptop - Máy tính xách tay",
        img : Laptop,
        categoryLaptop: [
            {

            }
        ]
    },
    {
        name: "Máy tính - Máy chủ",
        img : MayIn,
    },
    {
        name: "Máy in - TB văn phòng",
        img : LinhKienMayTinh,
    },
    {
        name: "Linh kiện máy tính",
        img : ManHinhMayTinh,
    },
    {
        name: "Gaming Gear",
        img : MayIn,
    },
    {
        name: "Microsoft Surface",
        img : MayIn,
    },
    {
        name: "TB lưu trữ, nghe nhìn",
        img : MayIn,
    },
    {
        name: "Apple",
        img : MayIn,
    },
    {
        name: "Thiết bị mạng",
        img : MayIn,
    },
    {
        name: "Camera",
        img : MayIn,
    },
    {
        name: "Cooling, Tản Nhiệt",
        img : MayIn,
    },
    {
        name: "Phụ kiện laptop, PC, khác",
        img : ManHinhMayTinh,
    },
    {
        name: "Nhà Thông Minh - Smart Home",
        img : MayIn,
    },
    {
        name: "Buồng chơi game giả lập",
        img : MayIn,
    },
    {
        name: "Camera",
        img : MayIn,
    },
    
]

const CategoryProduct = ()  => {
    return (
        <div className='header-menu-holder'>
            <div className='header-menu-holder__space1'>

            </div>
            <div className='header-menu-holder__category'>
                {
                    data.map((res:any,index:number) => {
                       return <div className='header-menu-category'>
                        <div className='header-menu-category__img'>
                                <img src={res.img} width="45px"/>
                        </div>
                        <div>
                            <span className='header-menu-category__'>{res.name}</span>
                        </div>
                    </div>
                    })
                }
    
            </div>
            <div className='header-menu-holder__slide'>

            </div>
            <div className='header-menu-holder__discount'>

            </div>
            <div className='header-menu-holder__space2'>

            </div>
        </div>
    )
}

export default CategoryProduct;