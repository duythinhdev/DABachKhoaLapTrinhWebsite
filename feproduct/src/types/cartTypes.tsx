import React,{BaseSyntheticEvent} from 'react';
import { Product } from "./productType";

export type propsFormCartBougth = {
    changeValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    clickValue: (data: BaseSyntheticEvent<object, any, any> | undefined | any,
        event: React.FormEvent<HTMLFormElement | any>   | React.FormHTMLAttributes<HTMLFormElement> | React.FormEventHandler<HTMLFormElement> ) => void,
    isLoadToast: Boolean

}
export type propsListProductBought = {
    res: Product,
    index: number,
    increaseMinusDetailCart: (index: number,calculation: string) => void,
    removeDetailCart: (index:number) => void
}
export type html = {
    type: string,
    name: string,
    placeholder: string,
    text?: string,
    error: any,
}
export interface propsInput {
    formData: Array<html | any>,
    changeValue:  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    typeHtml: string | null | undefined,
    register: any
}