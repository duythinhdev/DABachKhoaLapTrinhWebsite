import React from 'react';
import TableCell from "@mui/material/TableCell";

interface propsName
{
    column: any
}
const ListColumnNames:React.FC<propsName> = ({column}) => {
    return (
        <TableCell
            key={column.id}
            align={column.align}
            style={{top: 57, minWidth: column.minWidth}}
        >
            {column.label}
        </TableCell>
    );
}

export default ListColumnNames;
