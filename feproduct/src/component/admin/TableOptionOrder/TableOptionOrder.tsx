import * as React from 'react';
import {
    Button,
    TextField,
    Box,
    Modal,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Paper,
    FormControl,
    TablePagination,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Card
} from '@mui/material';
import "./TableOptionOrder.scss";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import { columnsOptionOrder } from "../NameColumsTable/NameColumnsTable";

export default function TableOptionOrder() {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [modalUpdate, setModalUpdate] = useState(false) as any;
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;

    const handleChangePage = async (event: any, newPage: any) => {
        await setPage(newPage);
        await fetchDataComment();
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataComment = async () => {
        let apiPagination = `v1/oderoption/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataComment();
    }, [])
    const updateData = async (res: any) => {
        await setModalUpdate(true);
        await setDataModalUpdate(res);
    }
    const closeUpdateData = () => {
        setModalUpdate(false);
    }
    return (
        <div className="TableReview">
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control Option Order</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columnsOptionOrder?.map((column:any) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                dataPagination?.map((res:any,index:number) => {
                                 return   <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            { res.option_id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.order_id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.total}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.quantity}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.created_at}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.updated_at}
                                        </TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={totalpage}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
