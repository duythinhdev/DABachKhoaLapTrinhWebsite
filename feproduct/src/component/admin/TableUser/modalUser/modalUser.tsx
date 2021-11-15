import React, {ChangeEventHandler, useState} from 'react';

import { Box, Button, Modal, TableCell, TableRow, TextField,Select,MenuItem,InputLabel } from "@mui/material";
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
interface props {
    fetchDataUser: () => void
}
const ModalAddUser:React.FC<props> = ({fetchDataUser}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [permission,setPermission] = useState( "" as any);
    const [postUser, setPostUser] = useState({
        id: 1 as number,
        full_name: "" as string,
        address: "" as string,
        name: "" as string,
        phone: 0 as number,
        username: "" as string,
        password: "" as string,
        created_at: "" as any,
        updated_at: "" as any,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const handleOpen = () : void => {
        setOpen(true);
    };
    const handleClose = (): void => {
        setOpen(false);
    };

    const ClickValue = (event:any): void => {
        event.preventDefault();
        let actions = action.postUser(
            permission,
            postUser.full_name,
            postUser.address,
            postUser.name,
            postUser.phone,
            postUser.username,
            postUser.password,
            postUser.created_at,
            postUser.updated_at,
        );
        ditpatch(actions);
        notify(titlePost)
        fetchDataUser();
        console.log("statusPost,",statusPost,titlePost);
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<any>): void => {
        const newValue = event.target.value;
        setPostUser({...postUser, [event.target.name]: newValue});
    }
    const changePermission = (event: any): void => {
        setPermission(event.target.value);
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
                    <h2 id="parent-modal-title">Add User</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="full_name" label="full_name" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <TextField id="filled-basic" name="address" label="address" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="name" label="name" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="phone" label="phone" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="username" label="username" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="password" label="password" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" label="created_at" variant="outlined"/>
                        <TextField id="filled-basic" name="update_at" label="update_at" variant="outlined"/>
                        <InputLabel id="demo-simple-select-label">Permission</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={permission}
                            name="permission"
                            label="Age"
                            onChange={changePermission}
                        >
                            <MenuItem value={1}>User</MenuItem>
                            <MenuItem value={2}>Leader</MenuItem>
                            <MenuItem value={3}>Admin</MenuItem>
                        </Select>
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

export default ModalAddUser;
