import React,{BaseSyntheticEvent} from 'react';
import { Product } from "./productType";
export type propsFormCartBougth = {
    changeValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    clickValue: (data: BaseSyntheticEvent<object, any, any> | undefined,event: React.FormEvent<HTMLFormElement>) => void,
    isLoadToast: Boolean

}
export type propsListProductBought = {
    res: Product,
    index: number,
    increaseMinusDetailCart: (index: number,calculation: string) => void,
    removeDetailCart: (index:number) => void
}