import React, {FC, useState} from 'react';
import {TableCell, TableRow, TextField} from "@mui/material";

interface dataProduct  {
    indexKey:number,
    response:any
}
const ListData:FC<dataProduct> = ({indexKey,response}) => {
    const [clickValue, setClickValue] = useState(false);
    const [clickValueProductName, setclickValueProductName] = useState(false);
    const [indexss, setIndexssChange] = useState() as any;
    const [indexsProductName, setIndexsChangeProductName] = useState() as any;
    const handleClickValue = (indexKey:number) => {
        setClickValue(true);
        setIndexssChange(indexKey);
    };
    const handleCloseClickValue = () => {
        setClickValue(false);
    };
    const handleClickValueProductName = (indexKey:number) => {
        setclickValueProductName(true);
        setIndexsChangeProductName(indexKey);
    };
    const handleClickProductClose = () => {
        setclickValueProductName(false);
    };
    return (
        <>
            <TableCell key={indexKey} align={response.align} onClick={()=>handleClickValue(indexKey)} >
                {clickValue && indexss === indexKey ? <TextField id="filled-basic" label="create_at" variant="filled" onClick={()=>handleCloseClickValue()} value={response.id}  /> : response.id}
            </TableCell>
            <TableCell key={indexKey} align={response.align}  onClick={()=>handleClickValueProductName(indexKey)}>
                {clickValueProductName && indexsProductName === indexKey ? <TextField id="filled-basic" label="create_at" variant="filled" onClick={()=>handleClickProductClose()} value={response.description}  /> : response.description}
            </TableCell>
            <TableCell key={indexKey} align={response.align}>
                {response.create_at}
            </TableCell>
            <TableCell key={indexKey} align={response.align}>
                {response.id_catergory_product}
            </TableCell>
            <TableCell key={indexKey} align={response.align}>
                {response.image}
            </TableCell>
            <TableCell key={indexKey} align={response.align}>
                {response.product_name}
            </TableCell>
            <TableCell key={indexKey} align={response.align}>
                {response.update_at}
            </TableCell>
        </>
    );
}

export default ListData;
