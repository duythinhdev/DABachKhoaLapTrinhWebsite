import React, {BaseSyntheticEvent, ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { makeStyles, createStyles, createMuiTheme } from '@material-ui/core/styles';
import axios from "axios";
import * as actions from "../../../../store/action";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
let style: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
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
interface props {
    fetchDataProduct: () => void,
}
interface addData {
    product_name: string,
    image: any,
    description: string,
    id_category: any,
}
const ModalAddProduct:React.FC<props> = ({fetchDataProduct}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [postProduct, setPostProduct] = useState({
        product_name: '' as string,
        image: '' as any,
        description: '' as string,
        id_category: '' as any,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostProduct({...postProduct, [event.target.name]: newValue});
    }
    const {register, formState: {errors}, handleSubmit} = useForm<addData>({
        criteriaMode: "all"
    });
    function handleChange(e:any) {
        let url:any = e.target.files[0];
        setPostProduct({...postProduct, image: url});
    }
    const ClickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined) => {
        let fd = new FormData();
        fd.append('image', postProduct.image);
        fd.append('product_name', postProduct.product_name);
        fd.append('description', postProduct.description);
        fd.append('id_category', postProduct.id_category);
        let actions = action.dataProduct(fd);
        ditpatch(actions);
        notify(titlePost)
        fetchDataProduct();
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    return (
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
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic"
                                   name="" label="id"
                                   variant="outlined" disabled />

                        <TextField
                            id="filled-basic"
                            label="Product Name"
                            variant="outlined"
                            {...register("product_name", {
                                required: "This is required.",
                                maxLength: {
                                    value: 30,
                                    message: "This input exceed maxLength."
                                }
                            })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="product_name"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField
                            className="imageProduct"
                            id="outlined-full-width"
                            label="Image Upload"
                            style={{ margin: 8 }}
                            type="file"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField id="filled-basic"    label="description"  variant="outlined"
                                   {...register("description", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="description"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  label="id_category" variant="outlined"
                                   {...register("id_category", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="id_category"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" name="cteated_at"  variant="outlined" type="date"  />
                        <TextField id="filled-basic" name="update_at"  variant="outlined" type="date" />
                        <Button variant="contained" onClick={handleSubmit((data: any) => ClickValue(data))}>Add</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>
    );
}

export default ModalAddProduct;
