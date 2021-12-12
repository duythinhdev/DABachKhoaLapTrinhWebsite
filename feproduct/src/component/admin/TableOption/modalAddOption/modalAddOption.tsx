import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from '@mui/lab/DateTimePicker';
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
interface FormInputs {
    size: string;
    Types: string,
    price: number,
    quantity: number,
    created_at: string,
    product_id: number,
}
interface propsOption {
    fetchDataOption: () => void
}
const ModalAddOption:React.FC<propsOption> = ({fetchDataOption}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [postOption, setPostOption] = useState({
        size: '' as string,
        Types: '' as string,
        price: 0 as number,
        quantity: 0 as number,
        product_id: 0 as number,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const ClickValue = (data:any) => {
        let actions = action.postOption(postOption.size,postOption.Types,postOption.price,postOption.quantity,postOption.product_id);
        ditpatch(actions);
        notify(titlePost);
        fetchDataOption();
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostOption({...postOption, [event.target.name]: newValue});
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
                    <h2 id="parent-modal-title">Add Option</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="id" label="id" variant="outlined" disabled />
                        <TextField id="filled-basic"  label="Size" variant="outlined"
                                   {...register("size", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <ErrorMessage
                            errors={errors}
                            name="size"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" label="type" variant="outlined"
                                   {...register("Types", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="Types"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  label="price" variant="outlined"
                                   {...register("price", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="price"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" label="quantity" variant="outlined"
                                   {...register("quantity", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="quantity"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" label="product_id" variant="outlined"
                                   {...register("product_id", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="product_id"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" name="created_at" label="created_at" variant="outlined"/>
                        <TextField id="filled-basic" name="updated_at" label="updated_at" variant="outlined"/>
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

export default ModalAddOption;
