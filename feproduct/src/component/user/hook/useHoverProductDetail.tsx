import React, {useState,useCallback} from 'react';

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