import React, {useState,Dispatch,SetStateAction} from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";

interface listCategoryProduct{
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListTableCategoryProduct:React.FC<listCategoryProduct>  = ({indexs,res,updateData}) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={indexs}>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.name}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.created_at}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.updated_at}
            </TableCell>
        </TableRow>
    );
}

export default ListTableCategoryProduct;
