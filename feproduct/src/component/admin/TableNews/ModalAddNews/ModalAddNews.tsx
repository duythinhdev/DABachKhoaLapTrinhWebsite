import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    fetchDataComment: () => void
}

interface addData {
    new_id: string,
    title: string,
    user_id: string,
}

const ModalAddNews: React.FC<propsData> = ({fetchDataComment}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    let statusPost: boolean = useSelector((state: any) => state.main.status);
    let titlePost: string = useSelector((state: any) => state.main.titleProductPost);
    const [postReview, setPostReview] = useState({
        new_id: 1 as number,
        title: '' as string,
        user_id: 1 as number,
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const {register, formState: {errors}, handleSubmit} = useForm<addData>({
        criteriaMode: "all"
    });
    const ClickValue = (data:any) => {
        let actions = action.postNews(postReview.new_id, postReview.title, postReview.user_id);
        ditpatch(actions);
        notify(titlePost)
        fetchDataComment();
    }
    const notify = (titlePost: String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostReview({...postReview, [event.target.name]: newValue});
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
                    <h2 id="parent-modal-title">Thêm News</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="" label="id" variant="outlined" disabled/>
                        <TextField id="filled-basic" label="new_id"
                                   variant="outlined"
                                   {...register("new_id", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="new_id"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" label="title" variant="outlined"
                                   {...register("title", {
                                       required: "This is required.",
                                       maxLength: {
                                           value: 30,
                                           message: "This input exceed maxLength."
                                       }
                                   })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="title"
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
                        <TextField id="filled-basic" name="created_at" variant="outlined" type="date"/>
                        <TextField id="filled-basic" name="updated_at" variant="outlined" type="date"/>
                        <Button variant="contained" onClick={handleSubmit((data: any) => ClickValue(data))}>Add</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer/>}
            </>
        </TableCell>
    );
}

export default ModalAddNews;
