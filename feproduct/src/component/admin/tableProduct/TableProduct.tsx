import * as React from 'react';
import "./tableProduct.scss";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import {Button,TextField,Box,Modal,TableRow,TableHead,TableContainer,TableCell,TableBody,Table,Paper} from '@mui/material';
import {columns} from "./columns";

let style:any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function TableProduct() {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [totalpage, setTotalPage] = useState(0 as any);
    const [open, setOpen] = React.useState(false);
    const [clickValue, setClickValue] = useState(false);
    const [clickValueProductName, setclickValueProductName] = useState(false);
    const [indexs, setIndexsChange] = useState() as any;
    const [indexsProductName, setIndexsChangeProductName] = useState() as any;
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataProduct = async () => {
        let apiPagination = `product/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickValue = (index:number) => {
        setClickValue(true);
        setIndexsChange(index);
    };
    const handleCloseClickValue = () => {
        setClickValue(false);
    };
    const handleClickValueProductName = (index:number) => {
        setclickValueProductName(true);
        setIndexsChangeProductName(index);
    };
    const handleClickProductClose = () => {
        setclickValueProductName(false);
    };
    useEffect(() => {
        fetchDataProduct();
    }, [])
    return (
        <div className="TableProduct">
            <Paper sx={{width: '100%'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={12}>
                                    <h3>Control Product</h3>
                                </TableCell>
                                <TableCell align="right" colSpan={12}>
                                    <Button onClick={handleOpen}>Thêm Phần Tử</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="parent-modal-title"
                                        aria-describedby="parent-modal-description"
                                    >
                                        <Box sx={{...style}}>
                                            <h2 id="parent-modal-title">Add Product</h2>
                                            <Box
                                                component="form"
                                                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="filled-basic" label="id" variant="outlined" />
                                                <TextField id="filled-basic" label="Product Name" variant="outlined" />
                                                <TextField id="filled-basic" label="Image" variant="outlined" />
                                                <TextField id="filled-basic" label="description" variant="outlined" />
                                                <TextField id="filled-basic" label="id_category" variant="outlined" />
                                                <TextField id="filled-basic" label="create_at" variant="outlined" />
                                                <TextField id="filled-basic" label="update_at" variant="outlined" />
                                                <Button variant="contained">Add</Button>
                                            </Box>
                                        </Box>
                                    </Modal>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column: any) => (
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
                                dataPagination.map((res: any, index: number) => {
                                    return <TableRow hover role="checkbox" tabIndex={-1} key={res.id}>
                                        <TableCell key={index} align={res.align} onClick={()=>handleClickValue(index)} >
                                            {clickValue && indexs === index ? <TextField id="filled-basic" label="create_at" variant="filled" onClick={()=>handleCloseClickValue()} value={res.id}  /> : res.id}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}  onClick={()=>handleClickValueProductName(index)}>
                                            {clickValueProductName && indexsProductName === index ? <TextField id="filled-basic" label="create_at" variant="filled" onClick={()=>handleClickProductClose()} value={res.description}  /> : res.description}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.create_at}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.id_catergory_product}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.image}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.product_name}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.update_at}
                                        </TableCell>

                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[10, 25, 100]}*/}
                {/*    component="div"*/}
                {/*    count={totalpage.length}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    page={page}*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}
            </Paper>
        </div>
    );
}
