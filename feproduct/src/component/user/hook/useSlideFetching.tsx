
import React,{useState} from 'react';

export default function useSlideFetching(Slider: number) {
    const [slideIndex, setSlideIndex] = useState(1) as any | number ;
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;
    const [isShowModal,setIsShowModal] = useState(false) as any | Boolean;
    const enableSeeMore = () => {
      setSeeMore(true)
    }
    const disableSeeMore = () => {
        setSeeMore(false)
    }
    const showModalPd = () => {
        setIsShowModal(true)
    }
    const hideModalPd = () => {
        setIsShowModal(false)
    }
    const nextSlide = () => {
        if (slideIndex !== Slider) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === Slider) {
          setSlideIndex(1);
        }
        console.log("nextSlide", slideIndex);
      };
    
      const prevSlide = () => {
        if (slideIndex !== 1) {
          setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
          setSlideIndex(Slider);
        }
        console.log("prevSlide", slideIndex);
      };
  
    return { 
      slideIndex,setSlideIndex,
      nextSlide,prevSlide,
      seeMore,setSeeMore,
      isShowModal,setIsShowModal,
      enableSeeMore, disableSeeMore,
      showModalPd, hideModalPd
    };
  };