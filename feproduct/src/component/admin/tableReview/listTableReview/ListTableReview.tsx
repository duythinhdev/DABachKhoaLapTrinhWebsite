import React from 'react';
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";


interface propsTableReview {
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListTableReview:React.FC<propsTableReview> = ({indexs,res,updateData}) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={indexs}>
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                    inputProps={{
                        'aria-label': 'select all desserts',
                    }}
                />
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.count_start}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.product_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.content}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.user_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.created_at}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)} >
                {res.updated_at}
            </TableCell>
        </TableRow>
    );
}

export default ListTableReview;
