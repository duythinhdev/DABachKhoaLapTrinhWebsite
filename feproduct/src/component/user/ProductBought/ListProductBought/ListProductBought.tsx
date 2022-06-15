import React,{useMemo} from 'react';
import { Product } from "../../../../types/productType";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { propsListProductBought } from "../../../../types/cartTypes";

const  ListProductBought:React.FC<propsListProductBought> = React.memo(({res, index, increaseMinusDetailCart, removeDetailCart}) => {
    return <div className="itemyoucart__detail" key={index}>
                <div className="itemyoucart__detail--img">
                    <img src={ res?.images && res?.images[0]?.url} />
                    <div>
                        <DeleteIcon className="icon__delete" onClick={() => {removeDetailCart(index)}} />
                    </div>
                </div>
                <div className="itemyoucart__detail--name">
                    <div className="Product">
                        <span ><Link to={`/system/productdetail?idproduct=${res?._id}`} className="Product__name" >{res?.Product_name}</Link></span>
                        <span className="Product__id">{res?.options && res?.options[0]?.code}</span>
                        <span className="Product__Insurance">Bảo hành: 24 Tháng</span>
                    </div>
                </div>
                <div className="itemyoucart__detail--price">
                    <del className="price__reduction">{res?.options && res?.options[0]?.price}</del>
                    <span className="price__real">{res?.options && res?.options[0]?.price}</span>
                    <span className="price__sum">Tổng: {res?.totalAmount}</span>
                    <div className="price__count">
                        <a className="price__minus" onClick={() => {increaseMinusDetailCart(index,"minus")}}>-</a>
                        <input className="price__value" value={res?.quantityItems}  />
                        <a className="price__add" onClick={() => {increaseMinusDetailCart(index,"plus")}}>+</a>
                    </div>
                </div>
         </div>
})

export default ListProductBought;