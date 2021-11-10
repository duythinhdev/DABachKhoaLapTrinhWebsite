import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";


interface listComment{
    indexs: number,
    res: any,
    updateData: (res: Array<any>) => void,
}
const ListTableComment:React.FC<listComment>  = ({indexs,res,updateData}) => {
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
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.user_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.new_id}
            </TableCell>
            <TableCell align={res.align} onClick={() => updateData(res)}>
                {res.content}
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

export default ListTableComment;
