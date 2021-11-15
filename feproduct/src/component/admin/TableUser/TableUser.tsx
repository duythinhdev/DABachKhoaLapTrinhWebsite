import * as React from 'react';
import { Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow } from "@mui/material";
import "./TableUser.scss";
import ModalAddUser from "../TableUser/modalUser/modalUser";
import { columnsTableUser } from "../NameColumsTable/NameColumnsTable";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ListDataUser from "./listDataUser/listDataUser";
import ModalUpdateUser from "./modalUpdateUser/ModalUpdateUser";

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
    const updateData = async (res: Array<any>) => {
        await setModalUpdate(true);
        await setDataModalUpdate(res);
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
                                  return <ListDataUser res={res} index={index} updateData={updateData} />
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
                    modalUpdate && <ModalUpdateUser dataModalUpdate={dataModalUpdate}  modalUpdate={modalUpdate}  closeUpdateDatas={closeUpdateData} />
                }
            </Paper>
        </div>
    );
}
