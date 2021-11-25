import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./TableReview.scss";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import ModalAddReview from "../TableReview/modalAddReview/modalAddReview";
import ModalUpdateReview from "../TableReview/modalUpdateReview/ModalUpdateReview";
import Checkbox from '@mui/material/Checkbox';
import {columnsReview} from "../NameColumsTable/NameColumnsTable";
import ListTableReview from "../TableReview/listTableReview/ListTableReview";
import ListColumnNames from "../TableReview/ListColumnNames/ListColumnNames";


export default function TableReview() {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [modalUpdate, setModalUpdate] = useState(false) as any;
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    let fetchDataReview = async () => {
        let apiPagination = `v1/review/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataReview();
    }, [])
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const updateData = async (id: number ) => {
        let apiGetDetail = `v1/review/getdetail?id=${id}`;
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
                                    <h3>Control Review</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <ModalAddReview fetchDataReview={fetchDataReview}/>
                            </TableRow>
                            <TableRow>
                                {columnsReview.map((column: any) => (
                                    <ListColumnNames column={column}/>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                dataPagination?.map((res: any, index: number) => {
                                    return <ListTableReview indexs={index} res={res} updateData={()=>updateData(res.id)}/>
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
                    modalUpdate && <ModalUpdateReview dataModalUpdate={dataModalUpdate}
                                                      modalUpdate={modalUpdate}
                                                      closeUpdateDatas={closeUpdateData}
                                                      fetchDataReview={fetchDataReview}
                    />
                }
            </Paper>
        </div>
    );
}
