import * as React from 'react';
import  {
    TableRow,
    TablePagination,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Paper } from "@mui/material";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ModalAddTableCategoryProduct from "./AddTableCategoryProduct/modalAddTableCategoryProduct";
import ModalUpdateCategoryProduct from "./ModalUpdateCategoryProduct/ModalUpdateCategoryProduct";
import ListTableCategoryProduct from "./ListTableCategoryProduct/ListTableCategoryProduct";
import { columnsCategoryProduct } from "../NameColumsTable/NameColumnsTable";


export default function TableCategoryProduct() {
    const [page, setPage] = useState(1) as any | undefined;
    const [rowsPerPage, setRowsPerPage] = useState(10) as any | undefined;
    const [totalpage, setTotalPage] =  useState(1) as any | undefined;
    const [dataPagination, setDataPagination] = useState([]as Array<any>);
    const [modalUpdate, setModalUpdate] = useState(false as boolean);
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = async (event:any, newPage:any) => {
        await setPage(newPage);
        fetchDataCategoryProduct();
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataCategoryProduct = async () => {
        let apiPagination = `v1/categoryproduct/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total);
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataCategoryProduct();
    }, [page])
    const updateData = async (id: number) => {
        let apiGetDetail = `v1/categoryproduct/getdetail?id=${id}`;
        await axios.get(enviroment.local + apiGetDetail)
            .then((res: AxiosResponse<any>) => {
                console.log("response",res)
                setDataModalUpdate(res.data.response.data)
            }).catch(err => console.log(err));
        await setModalUpdate(true);
        console.log("",dataModalUpdate);
    }
    const closeUpdateData = () => {
        setModalUpdate(false);
    }
    return (
        <div className="TableReview">
            <Paper sx={{width: '100%'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control Category Product</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <ModalAddTableCategoryProduct fetchDataCategoryProduct={fetchDataCategoryProduct} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columnsCategoryProduct?.map((column: any) => (
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
                        <TableBody>
                            {dataPagination?.map((res:any,index:number) => {
                                return         <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                        {res.id}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                        {res.name}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                        {res.created_at}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                        {res.updated_at}
                                    </TableCell>
                                </TableRow>
                            })}
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
                    modalUpdate && <ModalUpdateCategoryProduct
                                                       dataModalUpdate={dataModalUpdate}
                                                       modalUpdate={modalUpdate}
                                                       closeUpdateDatas={closeUpdateData}
                                                       fetchDataCategoryProduct={fetchDataCategoryProduct}
                    />
                }
            </Paper>
        </div>
    );
}
