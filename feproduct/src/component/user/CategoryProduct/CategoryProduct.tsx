import React,{useState,useEffect} from 'react';
import "./CategoryProduct.scss";
import Laptop from "../../../asset/cat_29cbb25a2308bdc8faaaf9e7b989cc1f.png";
import MayIn from "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import LinhKienMayTinh from  "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import ManHinhMayTinh from  "../../../asset/cat_5804bb2ce092a894cf86a82c17affb54.png";
// import { Slide } from  'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Asus from "../../../asset/sliderUser/12_Novd1c4d43154d2e3a531a0d265a3f274b2.jpg";
import Rtx from  "../../../asset/sliderUser/21_Deca04496114ad5355c7b1b4c0752b62f53.jpg";
import Intel from "../../../asset/sliderUser/27_Jan62b922e43d88aa7913a887d30e396eab.jpg";
import  Predator from "../../../asset/sliderUser/29_Janfab52e4d00e0fc1f810aa6740ba1ac9e.jpg";
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
const slideImages = [
    {
      url: 'images/slide_2.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'images/slide_3.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'Slide 3'
    },
  ];
  

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
                {/* <Slide>
                {slideImages.map((slideImage:any, index:number)=> (
                    <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                        <span>{slideImage.caption}</span>
                    </div>
                    </div>
                ))} 
                </Slide> */}
            </div>
            <div className='header-menu-holder__discount'>

            </div>
            <div className='header-menu-holder__space2'>

            </div>
        </div>
    )
}

export default CategoryProduct;