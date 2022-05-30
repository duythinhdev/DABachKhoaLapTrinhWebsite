import React, {useEffect, useState,useCallback} from 'react';

interface props {
  conditionIndex: number | undefined | any
}
export default function useHoverProductDetail() {
    const [isHoverDetail,setIsHoverDetail] =  useState(false as boolean);
    const [indexProductDetail,setIndexProductDetail] = useState(1 as number);
    const moveDetail =  useCallback(async(conditionIndex: number)   => {
      await  setIsHoverDetail(true);
      await  setIndexProductDetail(conditionIndex);
    },[indexProductDetail])
    const moveDetailOver = () : void => {
        setIsHoverDetail(false);
    }
    return { isHoverDetail,indexProductDetail,moveDetail,moveDetailOver }
}