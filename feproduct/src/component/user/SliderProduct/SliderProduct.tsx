import React, {useEffect} from 'react';
import "./SliderProduct.scss";
import MicrosoftSurFace from "../../../asset/cat_29cbb25a2308bdc8faaaf9e7b989cc1f.png";
import Camera from "../../../asset/cat_253ba2e2e09d924162a97aabca93b45d.jpg";
import LinhKienMayTinh from "../../../asset/cat_cf48adbcc24dd52850830b617fdce703.png";
import PhuKienLaptopPC from "../../../asset/cat_5804bb2ce092a894cf86a82c17affb54.png";
import Laptop from "../../../asset/cat_b706c0f50035bddb63ca6e91efef7703.png";
import PC from "../../../asset/cat_a2e098b9730b13b0f4a5fa64ee45901c.png";
import MayIn from "../../../asset/cat_1073e9906b9dd89e0e453d1bc5ec4212.png";
import GamingGear from "../../../asset/cat_8a7100a2bf10de1685a042557ef4ee77.png";
import TB from "../../../asset/cat_f9fc468337e44b7e6b994b32dc8b8d44.png";
import Apple from "../../../asset/cat_30f9e3d793c6c0baffc4ea40973692d3.png";
import ThietBiM from "../../../asset/cat_80fc29d6aefc322cceb8fce7a99db34c.png";
import TanNhiet from "../../../asset/cat_30c65344cf0043629e4907d5c2120af3.png";
import NhaThongMinh from "../../../asset/cat_fe589bfcb39d41e5a87fce0ddeed3b22.png";
import BuongChoiGame from "../../../asset/cat_8e5e9a749e4965993806022c518ecf35.jpg";
import ManHinh from "../../../asset/cat_095cb4be732b3d094b1ad78b0577a33a.jpg";
import 'react-slideshow-image/dist/styles.css'
import Slider from "../../../images";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ImageDiscountA from "../../../asset/sliderUser/01_Mar1dad4b99b92a3a8025dce33eaa689a25.png";
import ImageDiscountB from "../../../asset/sliderUser/01_Marc37767f7c68aa9a5447627450f01fb90.png";
import useSlideFetching from "../hook/useSlideFetching";


const data = [
    {
        name: "Laptop - Máy tính xách tay",
        img: Laptop,
        categoryLaptop: [
            {}
        ]
    },
    {
        name: "Máy tính - Máy chủ",
        img: PC,
    },
    {
        name: "Máy in - TB văn phòng",
        img: MayIn,
    },
    {
        name: "Linh kiện máy tính",
        img: LinhKienMayTinh,
    },
    {
        name: "Gaming Gear",
        img: GamingGear,
    },
    {
        name: "Microsoft Surface",
        img: MicrosoftSurFace,
    },
    {
        name: "TB lưu trữ, nghe nhìn",
        img: TB,
    },
    {
        name: "Apple",
        img: Apple,
    },
    {
        name: "Thiết bị mạng",
        img: ThietBiM,
    },
    {
        name: "Camera",
        img: Camera,
    },
    {
        name: "Cooling, Tản Nhiệt",
        img: TanNhiet,
    },
    {
        name: "Phụ kiện laptop, PC, khác",
        img: PhuKienLaptopPC,
    },
    {
        name: "Nhà Thông Minh - Smart Home",
        img: NhaThongMinh,
    },
    {
        name: "Buồng chơi game giả lập",
        img: BuongChoiGame,
    },
    {
        name: "Màn  Hình Máy Tính",
        img: ManHinh,
    },

]


const CategoryProduct = () => {
    let {slideIndex, setSlideIndex, nextSlide, prevSlide} = useSlideFetching(Slider.length);

    const moveDot = (index: number) => {
        setSlideIndex(index);
    };

    useEffect(() => {
        const setIntervalCount = setInterval(() => {
            if (slideIndex === Slider.length) {
                setSlideIndex(1);
            }
            setSlideIndex(Math.round(Math.random() * Slider.length));
        }, 2000);
        return () => clearInterval(setIntervalCount);
    })
    return (
        <div className='header-menu-holder'>
            <div className='header-menu-holder__space1'>

            </div>
            <div className='header-menu-holder__category'>
                {
                    data.map((res: any, index: number) => {
                        return <div className='header-menu-category'>
                            <div className='header-menu-category__img'>
                                <img src={res.img} alt="1" />
                            </div>
                            <div className='header-menu-category__Name'>
                                <span>{res.name}</span>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className='header-menu-holder__slide'>
                {
                    Slider.map((res, index) => {
                        return <div
                            key={index}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img src={res} alt="3"/>;
                        </div>
                    })
                }
                <button className="btn-slide next" onClick={nextSlide}>
                    <SkipNextIcon/>
                </button>
                <button className="btn-slide prev" onClick={prevSlide}>
                    <SkipPreviousIcon/>
                </button>
                <div className="container-dots">
                    {Array.from({length: Slider.length}).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
            <div className='header-menu-holder__discount'>
                <div className="header-menu-holder__discount--A">
                    <img src={ImageDiscountA}/>
                </div>
                <div className="header-menu-holder__discount--A">
                    <img src={ImageDiscountB}/>
                </div>
            </div>
            <div className='header-menu-holder__space2'>

            </div>
        </div>
    )
}

export default CategoryProduct;