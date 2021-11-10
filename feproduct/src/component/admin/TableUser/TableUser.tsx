import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./TableUser.scss";
import ModalAddUser from "../TableUser/modalUser/modalUser";
import { columnsTableUser } from "../NameColumsTable/NameColumnsTable";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
export default function TableUser() {
    const [page, setPage] = useState(1) as any | undefined;
    const [rowsPerPage, setRowsPerPage] = useState(10) as any | undefined;
    const [totalpage, setTotalPage] =  useState(1) as any | undefined;
    const [dataPagination, setDataPagination] = useState([]as Array<any>);
    const [modalUpdate, setModalUpdate] = useState(false as boolean);
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = (event:any, newPage:any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataCategoryProduct = async () => {
        let apiPagination = `v1/user/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
                console.log("res", res)
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataCategoryProduct();
    }, [])
    const updateData = async (res: any) => {
        await setModalUpdate(true);
        await setDataModalUpdate(res);
    }
    const closeUpdateData = () => {
        setModalUpdate(false);
    }
    return (
        <div className="TableProduct">
            <Paper sx={{ width: '90%' }} >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control user</h3>
                                </TableCell>
                            </TableRow>
                            <ModalAddUser />
                            <TableRow>
                                {columnsTableUser?.map((column:any) => (
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
                                dataPagination?.map((res:any,index: number)=> {
                                  return  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
