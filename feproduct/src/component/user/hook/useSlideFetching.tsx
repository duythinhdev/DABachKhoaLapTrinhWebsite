
import React,{useState,useCallback} from 'react';

export default function useSlideFetching(Slider: number) {
    const [slideIndex, setSlideIndex] = useState(1) as any | number ;
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;
    const [isShowModal,setIsShowModal] = useState(false) as any | Boolean;
    const enableSeeMore = useCallback(() => {
      setSeeMore(true)
    },[seeMore])
    const disableSeeMore = useCallback(() => {
        setSeeMore(false)
    },[seeMore])
    const showModalPd = useCallback(() => {
        setIsShowModal(true)
    },[isShowModal])
    const hideModalPd =  useCallback(() => {
        setIsShowModal(false)
    },[isShowModal])
    const nextSlide = useCallback(() => {
        if (slideIndex !== Slider) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === Slider) {
          setSlideIndex(1);
        }
      },[slideIndex]);
    
      const prevSlide = useCallback(() => {
        if (slideIndex !== 1) {
          setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
          setSlideIndex(Slider);
        }
      },[slideIndex]);
  
    return { 
      slideIndex,setSlideIndex,
      nextSlide,prevSlide,
      seeMore,setSeeMore,
      isShowModal,setIsShowModal,
      enableSeeMore, disableSeeMore,
      showModalPd, hideModalPd
    };
  };