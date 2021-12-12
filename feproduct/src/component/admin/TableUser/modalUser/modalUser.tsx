import React, {ChangeEventHandler, useState} from 'react';

import { Box, Button, Modal, TableCell, TableRow, TextField,Select,MenuItem,InputLabel } from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useForm } from "react-hook-form";
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
interface props {
    fetchDataUser: () => void
}
interface addData {
    image: string,
    full_name: any,
    address: string,
    name: string,
    phone: string,
    username: string,
    created_at: string,
    updated_at: any,
}
const ModalAddUser:React.FC<props> = ({fetchDataUser}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [permission,setPermission] = useState( "" as any);
    const [postUser, setPostUser] = useState({
        id: 1 as number,
        image: "" as string,
        full_name: "" as string,
        address: "" as string,
        name: "" as string,
        phone: 0 as any,
        username: "" as string,
        password: "" as string,
        created_at: "" as any,
        updated_at: "" as any
    });
    const {register, formState: {errors}, handleSubmit} = useForm<addData>({
        criteriaMode: "all"
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const handleOpen = () : void => {
        setOpen(true);
    };
    const handleClose = (): void => {
        setOpen(false);
    };
    const changeValue = (event: React.ChangeEvent<any>): void => {
        const newValue = event.target.value;
        setPostUser({...postUser, [event.target.name]: newValue});
    }
    const changePermission = (event: any): void => {
        setPermission(event.target.value);
    }
    function handleChange(e:any) {
        let url:any = e.target.files[0];
        setPostUser({...postUser, image: url});
    }   
    const ClickValue = async (data:any) => {
        let actions = action.postUser(permission, postUser.full_name,postUser.address,postUser.name,postUser.phone,postUser.username,postUser.password);
        await  ditpatch(actions);
        await notify(titlePost)
        await fetchDataUser();
    }
    const notify = (titlePost:String) => toast(titlePost);
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
                        <TextField id="filled-basic" 
                                {...register("full_name", {
                                required: "This is required.",
                                maxLength: {
                                    value: 500,
                                    message: "This input exceed maxLength."
                                }
                            })}
                        label="full_name" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="full_name"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" 
                                     {...register("address", {
                                        required: "This is required.",
                                        maxLength: {
                                            value: 500,
                                            message: "This input exceed maxLength."
                                        }
                                    })}
                                   label="address" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <ErrorMessage
                            errors={errors}
                            name="address"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" label="name" variant="outlined"
                                                {...register("name", {
                                                    required: "This is required.",
                                                    maxLength: {
                                                        value: 500,
                                                        message: "This input exceed maxLength."
                                                    }
                                                })}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                      <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" 
                                             {...register("phone", {
                                                required: "This is required.",
                                                maxLength: {
                                                    value: 500,
                                                    message: "This input exceed maxLength."
                                                }
                                            })}
                                   label="phone" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <ErrorMessage
                            errors={errors}
                            name="phone"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic"  
                                      {...register("username", {
                                                required: "This is required.",
                                                maxLength: {
                                                    value: 500,
                                                    message: "This input exceed maxLength."
                                                }
                                            })}
                                     label="username" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({messages}) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                            }
                        />
                        <TextField id="filled-basic" name="password" label="password" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField
                            className="imageProduct"
                            id="outlined-full-width"
                            label="Image Upload"
                            style={{ margin: 8 }}
                            type="file"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                        />
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

export default ModalAddUser;
