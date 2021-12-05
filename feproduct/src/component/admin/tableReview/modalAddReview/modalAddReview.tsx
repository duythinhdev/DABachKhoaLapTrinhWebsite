import React, {BaseSyntheticEvent, ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


interface propsData {
    fetchDataReview: () => void
}
interface FormInputs {
    count_start: string;
    content: string,
    user_id: string,
    product_id: string,
    created_at: string,
    updated_at: string,
}

const ModalAddReview:React.FC<propsData> = ({fetchDataReview}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const [postReview, setPostReview] = useState({
        count_start: 1 as number,
        content: '' as string,
        user_id: 1 as number,
        product_id: 1 as number,
        created_at: "" as any,
        updated_at: "" as any,
    });
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostReview({...postReview, [event.target.name]: newValue});
    }
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined) => {
        let actions = action.postReview(postReview.count_start,postReview.content,postReview.user_id,postReview.product_id);
        ditpatch(actions);
        notify(titlePost)
        fetchDataReview();
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
                    <h2 id="parent-modal-title">Add Review</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="" label="id" variant="outlined" disabled />
                        <TextField id="filled-basic" label="count_start" variant="outlined"
                                   {...register("count_start", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="count_start"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  label="content" variant="outlined"
                                   {...register("content", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="content"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  label="user_id" variant="outlined"
                                   {...register("user_id", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="user_id"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  label="product_id" variant="outlined"
                                   {...register("product_id", {
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
                            name="product_id"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" variant="outlined" type="date"
                                   {...register("created_at", {
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
                            name="created_at"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"
                                   {...register("updated_at", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   variant="outlined" type="date"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} 
                                   />
                        <ErrorMessage
                            errors={errors}
                            name="updated_at"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <Button variant="contained" onClick={handleSubmit((data: any) => clickValue(data))}>Add</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>
    );
}

export default ModalAddReview;
