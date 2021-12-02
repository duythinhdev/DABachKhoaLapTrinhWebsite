import React from 'react';
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";


interface propsTableReview {
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListTableReview: React.FC<propsTableReview> = ({indexs,res,updateData}) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={indexs}>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.count_start }
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.product_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.product_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.user_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.created_at}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res.id)}>
                {res.updated_at}
            </TableCell>
        </TableRow>
    );
}

export default ListTableReview;
