import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


interface propsTableReview {
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListDataUser:React.FC<propsTableReview> = ({indexs,res,updateData}) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={indexs}>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.permission === 3 ? "Admin" : 'User' }
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.full_name}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.address}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.name}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.phone}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.username}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.password}
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
export default ListDataUser;
