import React, {useReducer} from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import * as actions from "../../../../store/action/index";

interface propsDataOption {
    response:any,
    index:number
}
const ListDataOption: React.FC<propsDataOption> = ({response,index}) => {
    const [state,setState] =  useReducer((state: any, newState: any) => ({...state, ...newState}), {
        size: false as boolean,
        type: false as boolean,
        price: false as boolean,
        quantity: false as boolean,
        product_id: false as boolean,
        updated_at: false as boolean,
        created_at: false as boolean,
        indexImage: 1 as number,
        indexSize: 1 as number,
        indexType: 1 as number,
        indexPrice: 1 as number,
        indexQuantity: 1 as number,
        indexProduct_id: 1 as number,
        product_nameValue: '' as string,
        sizeValue: '' as any,
        typeValue: '' as any,
        priceValue: '' as any,
        quantityValue: '' as any,
        product_idValue: '' as any,
        create_atValue: '',
        update_atValue: '',
    });
    let dispatch = useDispatch();
    const putValueoption = (event: MouseEvent) => {
        event.preventDefault();
    }
    const clickChangeValueOption = () => {

    }
    const ChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    const submitChange = (index:number) : void => {
        console.log("local",state.sizeValue)
        let action:any  = actions.putOption(index,state.sizeValue,state.typeValue,state.priceValue,state.quantityValue,state.product_idValue);
        dispatch(action);
    }
    const clickValueSize =  (index:number) => {
        setState({...state,size:true,indexSize:index})
        console.log(state.size,state.indexSize)
    }
    const clickValueType =  (index:number) => {
        setState({...state,type:true,indexType:index})
    }
    const clickValuePrice =  (index:number) => {
        setState({...state,price:true,indexPrice:index})
    }
    const clickValueQuantity =  (index:number) => {
        setState({...state,quantity:true,indexQuantity:index})
    }
    const clickValueProductId =  (index:number) => {
        setState({...state,product_id:true,indexProduct_id:index})
    }
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell  align={response.align}>
                {response.id}
            </TableCell>
            <TableCell  align={response.align} onClick={()=>clickValueSize(index)}>
                {state.size && state.indexSize === index ?
                    <TextField id="filled-basic" label="size"
                               name='sizeValue'
                               variant="filled"
                               onChange={(event: any) => ChangeValue(event)}
                                // onClick={() => handleClickProductClose(index)}
                               onKeyDown={() => submitChange(response.id)}
                               defaultValue={response.size}/> : response.size}
            </TableCell>
            <TableCell  align={response.align} onClick={()=>clickValueType(index)}>
                {state.type && state.indexType === index ?
                    <TextField id="filled-basic" label="size"
                               name='typeValue'
                               variant="filled"
                               onChange={(event: any) => ChangeValue(event)}
                        // onClick={() => handleClickProductClose(index)}
                               onKeyDown={() => submitChange(response.id)}
                               defaultValue={response.type}/> : response.type}
            </TableCell>
            <TableCell  align={response.align} onClick={()=>clickValuePrice(index)}>
                {state.price && state.indexPrice === index ?
                    <TextField id="filled-basic" label="size"
                               name='priceValue'
                               variant="filled"
                               onChange={(event: any) => ChangeValue(event)}
                        // onClick={() => handleClickProductClose(index)}
                               onKeyDown={() => submitChange(response.id)}
                               defaultValue={response.price}/> : response.price}
            </TableCell>
            <TableCell  align={response.align} onClick={()=>clickValueQuantity(index)}>
                {state.quantity && state.indexQuantity === index ?
                    <TextField id="filled-basic" label="size"
                               name='quantityValue'
                               variant="filled"
                               onChange={(event: any) => ChangeValue(event)}
                        // onClick={() => handleClickProductClose(index)}
                               onKeyDown={() => submitChange(response.id)}
                               defaultValue={response.quantity}/> : response.quantity}
            </TableCell>
            <TableCell  align={response.align} onClick={()=>clickValueProductId(index)}>
                {state.product_id && state.indexProduct_id === index ?
                    <TextField id="filled-basic" label="size"
                               name='product_idValue'
                               variant="filled"
                               onChange={(event: any) => ChangeValue(event)}
                        // onClick={() => handleClickProductClose(index)}
                               onKeyDown={() => submitChange(response.id)}
                               defaultValue={response.product_id}/> : response.product_id}
            </TableCell>
            <TableCell  align={response.align}>
                {response.updated_at}
            </TableCell>
            <TableCell  align={response.align}>
                {response.created_at}
            </TableCell>
        </TableRow>
    );
}

export default ListDataOption;
