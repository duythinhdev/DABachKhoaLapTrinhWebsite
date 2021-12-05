import * as React from 'react';
import  {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow} from '@mui/material';
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import {useEffect, useState} from "react";
import { columnsNameTableComment } from "../NameColumsTable/NameColumnsTable";
import Checkbox from "@mui/material/Checkbox";
import ModalAddComment from "./ModalAddComment/modalAddComment";
import ModalUpdateComment from "../TableComment/ModalUpdateComment/ModalUpdateComment";
import ListTableComment from "./ListTableComment/ListTableComment";

export default function TableComment() {
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
        let apiPagination = `v1/comment/getall?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
                console.log("res", res)
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataComment();
    }, [])
    const updateData = async (id: any) => {
        let apiGetDetail = `v1/comment/getdetail?id=${id}`;
        await axios.get(enviroment.local + apiGetDetail)
            .then((res: AxiosResponse<any>) => {
                console.log("res",res);
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
                                    <h3>Control Comment</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                   <ModalAddComment fetchDataComment={fetchDataComment} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columnsNameTableComment.map((column: any) => (
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
                            {
                                dataPagination?.map((res: any, index: number) => {
                                    return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.user_id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.new_id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res.id)}>
                                            {res.content}
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
                    modalUpdate && <ModalUpdateComment dataModalUpdate={dataModalUpdate}
                                                      modalUpdate={modalUpdate}
                                                      closeUpdateDatas={closeUpdateData}
                    />
                }
            </Paper>
        </div>
    );
}
