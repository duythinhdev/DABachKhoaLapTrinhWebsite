import * as React from 'react';
import "./tableProduct.scss";
import {useEffect, useState, useReducer} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {
    Button,
    TextField,
    Box,
    Modal,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Paper,
    FormControl,
    TablePagination,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Card
} from '@mui/material';
import ModalAddProduct from "./modalAddProduct/modalAddProduct";
import {columnsNamesTableProducts} from "../NameColumsTable/NameColumnsTable";
import ModalUpdateComment from "../TableComment/ModalUpdateComment/ModalUpdateComment";
import ListDataProduct from "./lisdataproduct/listData";


const theme = createMuiTheme({
    spacing: 4,
});

const useStyles = makeStyles({
    root: {
        background: '#FAF3EC',
        width: 'auto',
        position: 'absolute',
        top: 'calc(50% - 240px)',
        left: 'calc(40% - 160px)',
    },
    formImage: {
        boxShadow: '0 0 10px',
        backgroundColor: 'white',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    divForm: {
        width: '90%',
    },
    image: {
        width: "90%",
        height: "35%",
        margin: "8px"
    },
    paperRoot: {
        maxWidth: 345,
    }

});
const TableProduct = () => {
    const [state, setState] = useReducer((state: any, newState: any) => ({...state, ...newState}), {
        page: 1 as any,
        rowsPerPage: 10 as any,
        dataPagination: [] as any,
        totalpage: 1 as any,
        file: '' as any,
        ModalUpdate: false as boolean,
        DataModalUpdate: [] as any,
    });
    const handleChangePage = async (event: any, newPage: any) => {
        await setState({...state, page: newPage});
        await fetchDataProduct();
    };

    const handleChangeRowsPerPage = (event: any) => {
        setState({...state, rowsPerPage: +event.target.value});
        setState({...state, page: 1});
    };
    let fetchDataProduct = async () => {
        let apiPagination = `v1/product/get?pagenumber=${state.page}&pagesize=${state.rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setState({...state, totalpage: res.data.response.totalpage[0].total})
                setState({...state, dataPagination: res.data.response.data});
            }).catch(err => console.log(err));
        console.log("123",state.dataPagination);
    }
    useEffect(() => {
        fetchDataProduct();
    }, [])


    const updateData = async (res: any) => {
        await setState({...state,ModalUpdate:true});
        await setState({...state,DataModalUpdate: res});
    }
    const closeUpdateData = () => {
        setState({...state,ModalUpdate:false});
    }
    const classes = useStyles();
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
                            </TableRow>
                            <ModalAddProduct fetchDataProduct={fetchDataProduct} />
                            <TableRow>
                                {columnsNamesTableProducts.map((column: any) => (
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
                                state.dataPagination?.map((res: any, index: number) => {
                                  return  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.id}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.Product_name}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.image}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.description}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.created_at}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.updated_at}
                                        </TableCell>
                                        <TableCell align={res.align} onClick={() => updateData(res)}>
                                            {res.updated_at}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
                                            {res.id_catergory_product}
                                        </TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[1, 10, 25, 100]}
                    component="div"
                    count={state.totalpage}
                    rowsPerPage={state.rowsPerPage}
                    page={state.page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {
                    state.ModalUpdate && <ModalUpdateComment dataModalUpdate={state.dataModalUpdate}
                                                       modalUpdate={state.ModalUpdate}
                                                       closeUpdateDatas={closeUpdateData}
                    />
                }
            </Paper>
        </div>
    );
}
export default TableProduct;
