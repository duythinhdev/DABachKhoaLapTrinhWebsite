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
import ModalUpdateOption from "../TableOption/modalUpdateOption/ModalUpdateOption";

const TableOption = () => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [modalUpdate, setModalUpdate] = useState(false) as any;
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = async (event: any, newPage: any) => {
        await setPage(newPage);
        await fetchDataOption();
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataOption = async () => {
        let apiPagination = `v1/option/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
                console.log("res",res)
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataOption();
    }, [])
    const updateData = async (id: number ) => {
        let apiGetDetail = `v1/option/getdetail?id=${id}`;
        await axios.get(enviroment.local + apiGetDetail)
            .then((res: AxiosResponse<any>) => {
                setDataModalUpdate(res.data.response.data)
            }).catch(err => console.log(err));
        console.log("",dataModalUpdate);
        await setModalUpdate(true);
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
                                    <h3>Control Option</h3>
                                </TableCell>
                            </TableRow>
                            <ModalAddOption
                                    fetchDataOption={fetchDataOption}
                            />
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
                                return      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell  align={res.align}>
                                        {res.id}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        {res.size}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        {res.type}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        { res.price}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        {res.quantity}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        {res.product_id}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)} >
                                        {res.updated_at}
                                    </TableCell>
                                    <TableCell  align={res.align} onClick={()=>updateData(res.id)}>
                                        {res.created_at}
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
                    modalUpdate && <ModalUpdateOption dataModalUpdate={dataModalUpdate}
                                                      modalUpdate={modalUpdate}
                                                      closeUpdateDatas={closeUpdateData}
                                                      fetchDataOption={fetchDataOption}
                    />
                }
            </Paper>
        </div>
    );
}
export default TableOption;
