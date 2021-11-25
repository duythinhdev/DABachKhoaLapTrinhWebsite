import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from '@mui/lab/DateTimePicker';
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
interface dataUpdate  {
    dataModalUpdate:any,
    modalUpdate:boolean,
    closeUpdateDatas: () => void,
    fetchDataReview: () => void
}
const ModalUpdateReview:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas,fetchDataReview}) => {
    let ditpatch = useDispatch();
    const [putReview, setPutReview] = useState({
        count_start: 1 as number,
        content: '' as string,
        user_id: 1 as number,
        product_id: 1 as number,
        created_at: '' as any,
        updated_at: '' as any,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.updateReview(dataModalUpdate[0].id,putReview.count_start,putReview.content,putReview.user_id,putReview.product_id,putReview.created_at,putReview.updated_at);
        ditpatch(actions);
        fetchDataReview();
        notify(titlePost)
    }
    const deleteValue = (event:any) => {
        event.preventDefault();
        let actions = action.deleteReview(dataModalUpdate[0].id);
        ditpatch(actions);
        fetchDataReview();
        notify(titlePost)
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPutReview({...putReview, [event.target.name]: newValue});
    }
    return (
        <TableCell align="right" colSpan={12}>
            <Modal
                open={modalUpdate}
                onClose={closeUpdateDatas}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{...style}}>
                    <h2 id="parent-modal-title">Update Review</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="" label="id" variant="outlined" defaultValue={dataModalUpdate[0].id} disabled />
                        <TextField id="filled-basic" name="count_start" label="count_start" variant="outlined"
                                   defaultValue={dataModalUpdate[0].count_start}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="content" label="content" variant="outlined"
                                   defaultValue={dataModalUpdate[0].content}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="user_id" label="user_id" variant="outlined"
                                   defaultValue={dataModalUpdate[0].user_id}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="product_id" label="product_id" variant="outlined"
                                   defaultValue={dataModalUpdate[0].product_id}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].created_at}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].updated_at}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <Button variant="contained" onClick={(event) => ClickValue(event)}>Add</Button>
                        <Button variant="contained" onClick={(event) => deleteValue(event)}>Delete</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>

            );
}

export default ModalUpdateReview;
