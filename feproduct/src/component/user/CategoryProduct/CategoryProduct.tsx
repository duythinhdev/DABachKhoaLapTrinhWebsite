import React,{useState,useEffect,useRef} from 'react';
import "./CategoryProduct.scss";
import Laptop from "../../../asset/cat_29cbb25a2308bdc8faaaf9e7b989cc1f.png";
import MayIn from "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import LinhKienMayTinh from  "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import ManHinhMayTinh from  "../../../asset/cat_5804bb2ce092a894cf86a82c17affb54.png";
// import { Slide } from  'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider from "../../../images";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ImageDiscountA from "../../../asset/sliderUser/01_Mar1dad4b99b92a3a8025dce33eaa689a25.png";
import ImageDiscountB from "../../../asset/sliderUser/01_Marc37767f7c68aa9a5447627450f01fb90.png";



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
    const [slideIndex, setSlideIndex] = useState(1) as any | number ;
    const nextSlide = () => {
        if (slideIndex !== Slider.length) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === Slider.length) {
          setSlideIndex(1);
        }
        console.log("slideIndex", slideIndex);
      };
    
      const prevSlide = () => {
        if (slideIndex !== 1) {
          setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
          setSlideIndex(Slider.length);
        }
        console.log("slideIndex", slideIndex);
      };
    
      const moveDot = (index: number) => {
        setSlideIndex(index);
      };
    //   const interval = useRef(null);
    //   const timeout = useRef(null) as MutableRefObject<null> | any;
    //   useEffect(()=> {
    //     timeout.current = setTimeout(() => {
    //             setSlideIndex(Math.round(Math.random() * Slider.length))
    //     }, 5000);
    //     return () => {
    //         clearTimeout(timeout.current);
    //       }
    //   },[slideIndex])
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
                {
                    Slider.map((res,index)=>{
                      return   <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                      >
                        <img src={res} />;
                      </div>
                    })
                }
                 <button className="btn-slide next" onClick={nextSlide}>
                    <SkipNextIcon />
                </button>
                <button className="btn-slide prev" onClick={prevSlide}>
                    <SkipPreviousIcon />
                </button>
                <div className="container-dots">
                    {Array.from({ length: Slider.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                    ))}
                </div>
            </div>
            <div className='header-menu-holder__discount'>
                 <div className="header-menu-holder__discount--A">
                        <img src={ImageDiscountA} />
                 </div>
                 <div className="header-menu-holder__discount--A">
                        <img src={ImageDiscountB} />
                </div>
            </div>
            <div className='header-menu-holder__space2'>

            </div>
        </div>
    )
}

export default CategoryProduct;