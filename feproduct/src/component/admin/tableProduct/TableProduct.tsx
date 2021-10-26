import * as React from 'react';
import "./tableProduct.scss";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
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
    FormControl
} from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {columns} from "./columns";
import ModalAddProduct from "./modalAddProduct/modalAddProduct";
// import ListData from "./lisdataproduct/listData";


export default function TableProduct() {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [totalpage, setTotalPage] = useState(0 as any);
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let fetchDataProduct = async () => {
        let apiPagination = `v1/product/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setTotalPage(res.data.response.totalpage[0].total)
                setRowsPerPage(rowsPerPage);
                setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProduct();
    }, [])
    const [clickValue, setClickValue] = useState(false);
    const [clickValueProductName, setclickValueProductName] = useState(false);
    const [indexsCreate_at, setindexsCreate_at] = useState() as any;
    const [indexsProductName, setIndexsChangeProductName] = useState() as any;
    const [selectedDate, handleDateChange] = useState(new Date());

    const ClickCreate_at = (indexKey: number) => {
        setClickValue(true);
        setindexsCreate_at(indexKey);
    };
    const CloseClickCreate_at = () => {
        setClickValue(false);
    };
    const handleClickValueProductName = (indexKey: number) => {
        setclickValueProductName(true);
        setIndexsChangeProductName(indexKey);
    };
    const handleClickProductClose = () => {
        setclickValueProductName(false);
    };
    const [valueTableProduct, setValueTableProduct] = useState({
        product_name: '' as string,
        image: '' as string,
        description: '' as string,
        id_category: '' as any,
        create_at: '',
        update_at: '',
    });
    const ChangeValueProduct = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValueTableProduct({...valueTableProduct, [event.target.name]: event.target.value})
    }
    const submitChange  = async (index:number) => {
        let id = index;
        let body = {
            product_name: valueTableProduct.product_name,
            image: valueTableProduct.image,
            description: valueTableProduct.description,
            id_category: valueTableProduct.id_category,
            create_at: valueTableProduct.create_at,
            update_at: valueTableProduct.update_at,
        }
        try {
          const data =  await axios.put(enviroment.local + 'v1/product/put/' + `${id}`,body);
          console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }
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
                            <ModalAddProduct/>
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
                                    return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell key={index} align={res.align}>
                                                {res.id}
                                            </TableCell>
                                            <TableCell key={index} align={res.align}>
                                                {res.product_name}
                                            </TableCell>
                                            <TableCell key={index} align={res.align}>
                                                {res.image}
                                            </TableCell>
                                            <TableCell key={index} align={res.align}
                                                       onClick={() => handleClickValueProductName(index)}>
                                                {clickValueProductName && indexsProductName === index ?
                                                    <TextField id="filled-basic" label="description" name='description'
                                                               variant="filled"
                                                               onChange={(event: any) => ChangeValueProduct(event)}
                                                               onClick={() => handleClickProductClose()}
                                                               onKeyDown={()=>submitChange(res.id)}
                                                               defaultValue={res.description}/> : res.description}
                                            </TableCell>
                                            <TableCell key={index} align={res.align}
                                                       onClick={() => ClickCreate_at(index)}>
                                                {clickValue && indexsCreate_at === index ? <DateTimePicker
                                                    label="Date&Time picker"
                                                    value={res.create_at}
                                                    onChange={(event: any) => ChangeValueProduct(event)}
                                                    renderInput={(params) => <TextField {...params} />}
                                                /> : res.create_at}
                                            </TableCell>
                                            <TableCell key={index} align={res.align}>
                                                {res.update_at}
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
