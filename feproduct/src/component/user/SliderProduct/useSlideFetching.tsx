
import React,{useState, useEffect} from 'react';
import Slider from "../../../images";

export default (Slider: number) => {
    const [slideIndex, setSlideIndex] = useState(1) as any | number ;
    const nextSlide = () => {
        if (slideIndex !== Slider) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === Slider) {
          setSlideIndex(1);
        }
        console.log("slideIndex", slideIndex);
      };
    
      const prevSlide = () => {
        if (slideIndex !== 1) {
          setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
          setSlideIndex(Slider);
        }
        console.log("slideIndex", slideIndex);
      };
  
    return { slideIndex,setSlideIndex,nextSlide,prevSlide };
  };