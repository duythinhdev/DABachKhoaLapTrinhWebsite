import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as action from "../../../../store/action";
import {toast, ToastContainer} from "react-toastify";
import {Box, Button, InputLabel, MenuItem, Modal, Select, TableCell, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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
    fetchDataUser: () => void,
}
const ModalUpdateUser:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas,fetchDataUser}) => {
    let ditpatch = useDispatch();
    const [putUser, setPutUser] = useState({
        id: 1 as number,
        permission: 1 as number,
        full_name: "" as string,
        address: "" as string,
        name: "" as string,
        phone: 0 as number,
        username: "" as string,
        password: "" as string,
        created_at: "" as any,
        updated_at: "" as any,
    });
    const [permission,setPermission] = useState( "" as any);
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const ClickValue = (event: any) => {
        event.preventDefault();
        let actions = action.putUser(putUser.id,
            permission,
            putUser.full_name,
            putUser.address,
            putUser.name,
            putUser.phone,
            putUser.username,
            putUser.password,
            putUser.created_at,
            putUser.updated_at,
        );
        ditpatch(actions);
        fetchDataUser();
        notify(titlePost)
    }
    const deleteUser = (event: any) => {
        event.preventDefault();
        let actions = action.deleteUser(putUser.id,
        );
        ditpatch(actions);
        fetchDataUser();
        notify(titlePost)
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPutUser({...putUser, [event.target.name]: newValue});
    }
    const changePermission = (event: any): void => {
        setPermission(event.target.value);
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
                        <TextField id="filled-basic" name="" label="id" variant="outlined"
                                   defaultValue={dataModalUpdate?.id} disabled />
                        <InputLabel id="demo-simple-select-standard-label">{ dataModalUpdate?.permission  }</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select"
                            value={permission}
                            name="permission"
                            label="permission"
                            onChange={changePermission}
                        >
                            <MenuItem value={1}>User</MenuItem>
                            <MenuItem value={2}>Leader</MenuItem>
                            <MenuItem value={3}>Admin</MenuItem>
                        </Select>
                        <TextField id="filled-basic" name="full_name" label="full_name" variant="outlined"
                                   defaultValue={dataModalUpdate?.full_name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="address" label="address" variant="outlined"
                                   defaultValue={dataModalUpdate?.address}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="name" label="name" variant="outlined"
                                   defaultValue={dataModalUpdate?.name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="phone" label="phone" variant="outlined"
                                   defaultValue={dataModalUpdate?.phone}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="username" label="username" variant="outlined"
                                   defaultValue={dataModalUpdate?.username}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="password" label="password" variant="outlined"
                                   defaultValue={dataModalUpdate?.password}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.created_at}/>
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.updated_at}/>
                        <Button variant="contained" onClick={(event: any) => ClickValue(event)}>Add</Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={(event: any) => deleteUser(event)}>delete</Button>
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