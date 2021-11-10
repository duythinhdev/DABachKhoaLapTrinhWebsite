import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ModalAddTableCategoryProduct from "./AddTableCategoryProduct/modalAddTableCategoryProduct";
import ModalUpdateCategoryProduct from "./ModalUpdateCategoryProduct/ModalUpdateCategoryProduct";
import ListTableCategoryProduct from "./ListTableCategoryProduct/ListTableCategoryProduct";
// import "./TableOptionOrder.scss";

const columns: any = [
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },
    {
        id: 'Name',
        label: 'Name',
        minWidth: 100
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100,
    },
];

export default function TableCategoryProduct() {
    const [page, setPage] = useState(1) as any | undefined;
    const [rowsPerPage, setRowsPerPage] = useState(10) as any | undefined;
    const [totalpage, setTotalPage] =  useState(1) as any | undefined;
    const [dataPagination, setDataPagination] = useState([]as Array<any>);
    const [modalUpdate, setModalUpdate] = useState(false as boolean);
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = async (event:any, newPage:any) => {
        await setPage(newPage);
        await fetchDataCategoryProduct(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataCategoryProduct = async () => {
        let apiPagination = `v1/categoryproduct/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
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
                                {columns?.map((column: any) => (
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
                                return <ListTableCategoryProduct  res={res} indexs={index} updateData={updateData}  />
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
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
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
