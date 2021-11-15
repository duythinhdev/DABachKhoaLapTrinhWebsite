import React, {ChangeEventHandler, useReducer, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DeleteIcon from "@mui/icons-material/Delete";
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
    closeUpdateDatas: () => void
}
const ModalUpdateUser:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas}) => {
    let ditpatch = useDispatch();
    const [clickValue, setClickValue] = useReducer((state: any, newState: any) => ({...state, ...newState}), {
        count_start: 1 as number,
        content: '' as string,
        user_id: 1 as number,
        product_id: 1 as number,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.postReview(clickValue.count_start,clickValue.content,clickValue.user_id,clickValue.product_id);
        ditpatch(actions);
        notify(titlePost)
    }
    const deleteValue = async (event:any) => {
        event.preventDefault();
        let actions =  action.deleteCategory(dataModalUpdate.id);
        ditpatch(actions);
        notify(titlePost);
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setClickValue({...clickValue, [event.target.name]: newValue});
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
                        <TextField id="filled-basic"
                                   name="id"
                                   label="id"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.id} disabled />
                        <TextField id="filled-basic"
                                   name="permission"
                                   label="permission"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.permission}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="content"
                                   label="content"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.full_name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="address"
                                   label="address"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.address}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="name"
                                   label="name"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="name"
                                   label="name"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.phone}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="username"
                                   label="username"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.username}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic"
                                   name="password"
                                   label="password"
                                   variant="outlined"
                                   defaultValue={dataModalUpdate.password}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.created_at}/>
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.updated_at}/>
                        <Button variant="contained" onClick={(event) => ClickValue(event)}>Update</Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={(event) => deleteValue(event)}>delete</Button>

                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>

    );
}

export default ModalUpdateUser;
