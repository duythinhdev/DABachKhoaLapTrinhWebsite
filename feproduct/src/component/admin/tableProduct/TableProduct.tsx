import * as React from 'react';
import "./tableProduct.scss";
import {useEffect, useState, useReducer} from "react";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";
import { makeStyles, createStyles, createMuiTheme } from '@material-ui/core/styles';

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
    TablePagination
} from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import ModalAddProduct from "./modalAddProduct/modalAddProduct";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { columnsNamesTableProducts } from "../NameColumsTable/NameColumnsTable";




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
    formImage : {
        boxShadow: '0 0 10px' ,
        backgroundColor: 'white',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        // border-radius:'15px 15px 15px 15px',
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
    const [clickValue, setClickValue] = useReducer((state: any, newState: any) => ({...state, ...newState}), {
        image: false as boolean,
        product_name: false as boolean,
        description: false as boolean,
        id_category: false as boolean,
        created_at: false as boolean,
        indexImage: 1 as number,
        indexProduct_name: 1 as number,
        indexDescription: 1 as number,
        indexId_category: 1 as number,
        indexCreated_at: 1 as number,
        product_nameValue: '' as string,
        imageValue: '' as string,
        descriptionValue: '' as string,
        id_categoryValue: '' as any,
        create_atValue: '',
        update_atValue: '',
        file: '' as string
    });
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dataPagination, setDataPagination] = useState([]) as any;
    const [totalpage, setTotalPage] = useState(1) as any;
    const handleChangePage =  async (event: any, newPage: any) => {
        await setPage(newPage);
        await fetchDataProduct();
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(1);
    };
    let fetchDataProduct = async () => {
        let apiPagination = `v1/product/get?pagenumber=${page}&pagesize=${rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                 setTotalPage(res.data.response.totalpage[0].total)
                 setDataPagination(res.data.response.data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProduct();
    }, [page && rowsPerPage])

    const ClickImage = (indexKey: number) => {
        setClickValue({...clickValue, image: true, indexImage: indexKey});
    };
    const CloseClickImage = () => {
        setClickValue({...clickValue, image: false});
    };
    const ClickCreated = (indexKey: number) => {
        setClickValue({...clickValue, created_at: true, indexCreated_at: indexKey});
    };
    const CloseClickCreated = () => {
        setClickValue({...clickValue, created_at: false});
    };
    const handleClickValueProductName = (indexKey: number) => {
        setClickValue({...clickValue, product_name: true, indexProduct_name: indexKey});
    };
    const handleClickValueDescription = (indexKey: number) => {
        setClickValue({...clickValue, description: true, indexDescription: indexKey});
    };
    const handleClickProductClose = (indexKey: number) => {
        setClickValue({...clickValue, product_name: false, indexDescription: indexKey});
    };
    const handleClickValueImage = (indexKey: number) => {
        setClickValue({...clickValue, image: true, indexImage: indexKey});
    };
    const ChangeValueProduct = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setClickValue({...clickValue, [event.target.name]: event.target.value})
    }
    const submitChange = async (index: number) => {
        let id = index;
        let body = {
            product_name: clickValue.product_nameValue,
            image: clickValue.imageValue,
            description: clickValue.descriptionValue,
            id_category: clickValue.id_categoryValue,
            create_at: clickValue.create_atValue,
            update_at: clickValue.update_atValue,
        }
        try {
            const data = await axios.put(enviroment.local + 'v1/product/put/' + `${id}`, body);
            console.log("data",data)
        } catch (e) {
            console.log(e)
        }
    }

    function handleChange(e:any) {
        let url:any = URL.createObjectURL(e.target.files[0]);
        setClickValue({...clickValue, file: url});
        console.log(url)
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
                            <ModalAddProduct />
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
                                dataPagination?.map((res: any, index: number) => {
                                    return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell  align={res.align}>
                                            {res.id}
                                        </TableCell>
                                        <TableCell  align={res.align}
                                                   onClick={() => handleClickValueProductName(index)}>
                                            {clickValue.product_name && clickValue.indexProduct_name === index ?
                                                <TextField id="filled-basic" label="product_name"
                                                           name='product_nameValue'
                                                           variant="filled"
                                                           onChange={(event: any) => ChangeValueProduct(event)}
                                                    // onClick={() => handleClickProductClose(index)}
                                                           onKeyDown={() => submitChange(res.id)}
                                                           defaultValue={res.Product_name}/> : res.Product_name}
                                        </TableCell>
                                        <TableCell  align={res.align}  onClick={() => handleClickValueImage(index)}>
                                            {clickValue.image && clickValue.indexImage === index ?
                                                <TextField
                                                    id="outlined-full-width"
                                                    label="Image Upload"
                                                    style={{ margin: 8 }}
                                                    name="upload-photo"
                                                    type="file"
                                                    fullWidth
                                                    margin="normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                    onChange={ handleChange}
                                                /> : res.image}
                                            {
                                                clickValue.file.length > 0 && clickValue.image && clickValue.indexImage === index  ?

                                                <Card className={classes.paperRoot}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            alt="Contemplative Reptile"
                                                            height="140"
                                                            image={clickValue.file}
                                                            title="Contemplative Reptile"
                                                        />
                                                    </CardActionArea>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {/*{text}*/}
                                                        </Typography>
                                                    </CardContent>
                                                </Card> : ''
                                            }
                                        </TableCell>
                                        <TableCell  align={res.align}
                                                   onClick={() => handleClickValueDescription(index)}>
                                            {clickValue.description && clickValue.indexDescription === index ?
                                                <TextField id="filled-basic" label="description" name='descriptionValue'
                                                           variant="filled"
                                                           onChange={(event: any) => ChangeValueProduct(event)}
                                                           onClick={() => handleClickProductClose(index)}
                                                           onKeyDown={() => submitChange(res.id)}
                                                           defaultValue={res.description}/> : res.description}
                                        </TableCell>
                                        <TableCell align={res.align}
                                                   onClick={() => ClickCreated(index)}>
                                            {clickValue.created_at && clickValue.indexCreated_at === index ?
                                                <DateTimePicker
                                                    label="Date&Time picker"
                                                    value={res.create_at}
                                                    onChange={(event: any) => ChangeValueProduct(event)}
                                                    renderInput={(params) => <TextField {...params} />}
                                                /> : res.created_at}
                                        </TableCell>
                                        <TableCell key={index} align={res.align}>
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
                    rowsPerPageOptions={[1,10, 25, 100]}
                    component="div"
                    count={totalpage}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
export default TableProduct;
