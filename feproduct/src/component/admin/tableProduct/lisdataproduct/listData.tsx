import React from 'react';
import {TableCell, TableRow} from "@mui/material";


interface listComment{
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListDataProduct:React.FC<listComment>  = ({indexs,res,updateData}) => {
    function handleChange(e: any) {
        let url: any = URL.createObjectURL(e.target.files[0]);
    }
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={indexs}>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.Product_name}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.image}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.description}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.created_at}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.updated_at}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.updated_at}
            </TableCell>
            <TableCell key={indexs} align={res.align}>
                {res.id_catergory_product}
            </TableCell>
        </TableRow>
    );
}

export default ListDataProduct;
