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
    fetchDataOption: () => void
}
const ModalUpdateOption:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas,fetchDataOption}) => {
    let ditpatch = useDispatch();
    const [putOption, setPutOption] = useState({
        size: "" as string,
        type: '' as string,
        price: 1 as number,
        quantity: 1 as number,
        product_id:  1 as number,
        created_at:  "" as string,
        updated_at: "" as string,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.putOption(dataModalUpdate[0].id,
            putOption.size,putOption.type,putOption.price,putOption.quantity
            ,putOption.product_id,putOption.created_at,putOption.updated_at);
        ditpatch(actions);
        fetchDataOption();
        notify(titlePost)
    }
    const deleteValue = (event:any) => {
        event.preventDefault();
        let actions = action.deleteOption(dataModalUpdate[0].id);
        ditpatch(actions);
        fetchDataOption();
        notify(titlePost)
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPutOption({...putOption, [event.target.name]: newValue});
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
                        <TextField id="filled-basic" name="size" label="size" variant="outlined"
                                   defaultValue={dataModalUpdate[0].size}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="type" label="type" variant="outlined"
                                   defaultValue={dataModalUpdate[0].type}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="price" label="price" variant="outlined"
                                   defaultValue={dataModalUpdate[0].price}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="quantity" label="quantity" variant="outlined"
                                   defaultValue={dataModalUpdate[0].quantity}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="product_id" label="product_id" variant="outlined"
                                   defaultValue={dataModalUpdate[0].product_id}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].created_at}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].updated_at}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <Button variant="contained" onClick={(event) => ClickValue(event)}>Update</Button>
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

export default ModalUpdateOption;
