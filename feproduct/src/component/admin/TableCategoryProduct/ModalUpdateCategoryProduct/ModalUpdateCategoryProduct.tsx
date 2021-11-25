import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    closeUpdateDatas: () => void
    fetchDataCategoryProduct: () => void
}
const ModalUpdateCategoryProduct:React.FC<dataUpdate> = ({dataModalUpdate,modalUpdate,closeUpdateDatas,fetchDataCategoryProduct}) => {
    let ditpatch = useDispatch();
    const [putCategoryProduct, setPutCategoryProduct] = useState({
        nameCategory: '' as string
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.putCategory(dataModalUpdate.id,putCategoryProduct.nameCategory);
        ditpatch(actions);
        notify(titlePost);
        fetchDataCategoryProduct();
    }
    const deleteValue = async (event:any) => {
        event.preventDefault();
        let actions =  action.deleteCategory(dataModalUpdate.id);
        ditpatch(actions);
        notify(titlePost);
        fetchDataCategoryProduct();
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPutCategoryProduct({...putCategoryProduct, [event.target.name]: newValue});
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
                                   defaultValue={dataModalUpdate[0].id} disabled />
                        <TextField id="filled-basic" name="nameCategory" label="nameCategory" variant="outlined"
                                   defaultValue={dataModalUpdate[0].name}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="created_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].created_at}/>
                        <TextField id="filled-basic" name="updated_at" type="date" variant="outlined"  defaultValue={dataModalUpdate[0].updated_at}/>
                        <Button variant="contained" onClick={(event) => ClickValue(event)}>Update Category</Button>
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

export default ModalUpdateCategoryProduct;
