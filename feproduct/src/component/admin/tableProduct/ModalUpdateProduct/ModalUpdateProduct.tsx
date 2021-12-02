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
    fetchDataProduct: () => void
}
const ModalUpdateProduct:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas,fetchDataProduct}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [postProduct, setPostProduct] = useState({
        content: '' as string,
        id: 1 as number,
        product_name: '' as string,
        image: '' as string,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProdhuctPost);

    const ClickValue = (event:any) => {
        event.preventDefault();
        let fd = new FormData();
        // fd.append('id',postProduct.id)
        fd.append('image', postProduct.image);
        fd.append('product_name', postProduct.product_name);
        fd.append('content', postProduct.content);
        let actions = action.putDataProduct(fd);
        ditpatch(actions);
        notify(titlePost)
        fetchDataProduct();
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostProduct({...postProduct, [event.target.name]: newValue});
    }
    const deleteValue = (event: any) => {
        event.preventDefault();
    }
    function handleChange(e:any) {
        let url:any = e.target.files[0];
        setPostProduct({...postProduct, image: url});
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
                    <h2 id="parent-modal-title">Update Product</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="id" label="id" variant="outlined" defaultValue={dataModalUpdate.id} disabled />
                        <TextField id="filled-basic" name="product_name" label="product_name" variant="outlined"
                                   defaultValue={dataModalUpdate.Product_name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="content" label="content" variant="outlined"
                                   defaultValue={dataModalUpdate.description}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)} />
                        <TextField id="filled-basic" name="image" label="image" variant="outlined"
                                   defaultValue={dataModalUpdate.image}
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
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.created_at}/>
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate.updated_at}/>
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

export default ModalUpdateProduct;
