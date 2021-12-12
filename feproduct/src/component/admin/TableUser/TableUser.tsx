import * as React from 'react';
import { Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow } from "@mui/material";
import "./TableUser.scss";
import ModalAddUser from "../TableUser/modalUser/modalUser";
import { columnsTableUser } from "../NameColumsTable/NameColumnsTable";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ModalUpdateUser from "./modalUpdateUser/ModalUpdateUser";


const TableUser = () =>  {
    const [page, setPage] = useState(1) as any | undefined;
    const [rowsPerPage, setRowsPerPage] = useState(10) as any | undefined;
    const [totalpage, setTotalPage] =  useState(1) as any | undefined;
    const [dataPagination, setDataPagination] = useState([]as Array<any>);
    const [modalUpdate, setModalUpdate] = useState(false) as any;
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = (event:any, newPage:any) => {
        setPage(newPage);
        fetchDataUser();
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataUser = async () => {
        let apiPagination = `v1/user/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
                setTotalPage(res.data.response.totalpage[0].total)
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataUser();
    }, [])
    const updateData = async (id: number) => {
        let apiGetDetail = `v1/user/getdetail?id=${id}`;
        await axios.get(enviroment.local + apiGetDetail)
            .then((res: AxiosResponse<any>) => {
                console.log("res",res)
                setDataModalUpdate(res.data.response.data)
            }).catch(err => console.log(err));
        await setModalUpdate(true);
    }
    const closeUpdateData = () => {
        setModalUpdate(false);
    }
    return (
        <div className="TableProduct">
            <Paper sx={{ width: '86%' }} >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control user</h3>
                                </TableCell>
                            </TableRow>
                            <ModalAddUser  fetchDataUser={fetchDataUser} />
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

                                    return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.permission  == 1 ? "Admin" : 'user'}
                                            {res.permission  == 2 ? "Leader" : ''}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.full_name}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.address}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.name}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.phone}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.username}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.password}
                                        </TableCell>
                                          <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                              {res.is_active ? "Active" : "don't Active" }
                                          </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.created_at}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
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
                {
                    modalUpdate && <ModalUpdateUser dataModalUpdate={dataModalUpdate}
                                                    fetchDataUser={fetchDataUser}
                                                             modalUpdate={modalUpdate}
                                                             closeUpdateDatas={closeUpdateData}
                    />
                }
            </Paper>
        </div>
    );
}
export default TableUser;
