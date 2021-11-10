import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
const ModalAddNews: React.FC<propsData> = ({fetchDataComment}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const [postReview, setPostReview] = useState({
        count_start: 1 as number,
        content: '' as string,
        user_id: 1 as number,
        product_id: 1 as number,
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.postReview(postReview.count_start,postReview.content,postReview.user_id,postReview.product_id);
        ditpatch(actions);
        notify(titlePost)
        fetchDataComment();
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostReview({...postReview, [event.target.name]: newValue});
    }
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue:any) => {
        setValue(newValue);
    };
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
                    <h2 id="parent-modal-title">Thêm Comment</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="" label="id" variant="outlined" disabled />
                        <TextField id="filled-basic" name="count_start" label="count_start" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="content" label="content" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="user_id" label="user_id" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="user_id" label="product_id" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" variant="outlined" type="date" />
                        <TextField id="filled-basic" name="updated_at" variant="outlined" type="date" />
                        <Button variant="contained" onClick={(event) => ClickValue(event)}>Add</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>
    );
}

export default ModalAddNews;
