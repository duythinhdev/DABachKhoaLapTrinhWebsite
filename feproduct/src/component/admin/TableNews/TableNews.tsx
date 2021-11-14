import * as React from 'react';
import { Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow } from "@mui/material";
import "./TableNews.scss";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import {useEffect, useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import ModalAddNews from "./ModalAddNews/ModalAddNews";
import { columnsTableNews } from "../NameColumsTable/NameColumnsTable"
import ModalUpdateNews from "./ModalUpdateNews/ModalUpdateNews";


export default function TableNews() {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [totalpage, setTotalPage] = useState(1) as any;
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [modalUpdate, setModalUpdate] = useState(false) as any;
    const [dataModalUpdate, setDataModalUpdate] = useState([]) as Array<any>;
    const handleChangePage = (event:any, newPage:any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataComment = async () => {
        let apiPagination = `v1/news/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.locals + apiPagination)
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
                                    <h3>Control News</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <ModalAddNews fetchDataComment={fetchDataComment} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columnsTableNews?.map((column:any) => (
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
                            {dataPagination?.map((res:any,index:number) => {
                               return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            // indeterminate={numSelected > 0 && numSelected < rowCount}
                                            // checked={rowCount > 0 && numSelected === rowCount}
                                            // onChange={onSelectAllClick}
                                            inputProps={{
                                                'aria-label': 'select all desserts',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
                                        {res.id}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
                                        {res.title}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
                                        {res.is_show}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
                                        {res.user_id}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
                                        {res.created_at}
                                    </TableCell>
                                    <TableCell align={res.align} onClick={() => updateData(res)}>
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
                    modalUpdate && <ModalUpdateNews dataModalUpdate={dataModalUpdate}
                                                       modalUpdate={modalUpdate}
                                                       closeUpdateDatas={closeUpdateData}
                    />
                }
            </Paper>
        </div>
    );
}
;
