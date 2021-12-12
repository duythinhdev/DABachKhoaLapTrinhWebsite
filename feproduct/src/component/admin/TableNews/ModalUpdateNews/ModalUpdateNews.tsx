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
interface dataUpdate  {
    dataModalUpdate:any,
    modalUpdate:boolean,
    closeUpdateDatas: () => void
}
const ModalUpdateNews:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas}) => {
    let ditpatch = useDispatch();
    const [postReview, setPostReview] = useState({
        new_id: 1 as number,
        title: '' as string,
        user_id: 1 as number,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);

    const updateValue = (event:any) => {
        event.preventDefault();
        let actions = action.updateNews(dataModalUpdate[0].id,postReview.new_id,postReview.title,postReview.user_id);
        ditpatch(actions);
        notify(titlePost)
    }
    const deleteValue = (event:any) => {
        event.preventDefault();
        let actions = action.deleteNews(dataModalUpdate[0].id);
        ditpatch(actions);
        notify(titlePost)
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostReview({...postReview, [event.target.name]: newValue});
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
                        <TextField id="filled-basic" name="id" label="id" variant="outlined"
                                   defaultValue={dataModalUpdate[0].id} disabled />
                        <TextField id="filled-basic" name="user_id" label="user_id" variant="outlined"
                                   defaultValue={dataModalUpdate[0].user_id}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="title" label="title" variant="outlined"
                                   defaultValue={dataModalUpdate[0].title}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="is_show" label="is_show" variant="outlined"
                                   defaultValue={dataModalUpdate[0].is_show}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.created_at}/>
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.updated_at}/>
                        <Button variant="contained" onClick={(event) => updateValue(event)}>Update</Button>
                        <Button variant="contained" onClick={(event) => deleteValue(event)}>Delete News</Button>
                    </Box>
                </Box>
            </Modal>
            <>
                {statusPost && <ToastContainer />}
            </>
        </TableCell>

    );
}

export default ModalUpdateNews;
