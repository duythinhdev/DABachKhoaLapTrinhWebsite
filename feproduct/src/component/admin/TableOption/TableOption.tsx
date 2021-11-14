import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./TableOption.scss";
import {useEffect, useState} from "react";
import ModalAddOption from "../TableOption/modalAddOption/modalAddOption";
import { columnsNameTableOption } from "../NameColumsTable/NameColumnsTable";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ListDataOption from "./ListDataOption/ListDataOption";


const TableOption = () => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    const handleChangePage = async (event: any, newPage: any) => {
        await setPage(newPage);
        await fetchDataProduct();
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataProduct = async () => {
        let apiPagination = `v1/option/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.locals + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
                console.log("res",res)
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProduct();
    }, [page])
    return (
        <div className="TableReview">
            <Paper sx={{width: '100%'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control Option</h3>
                                </TableCell>
                            </TableRow>
                            <ModalAddOption/>
                            <TableRow>
                                {columnsNameTableOption.map((column: any) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{top: 57, minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>{
                            dataPagination?.map((res: any, index: number) => {
                                return <ListDataOption  response={res} index={index}  />
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
export default TableOption;
