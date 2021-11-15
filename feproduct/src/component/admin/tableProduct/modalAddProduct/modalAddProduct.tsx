import React, {ChangeEventHandler, useState} from 'react';
import {Box, Button, Modal, TableCell, TableRow, TextField} from "@mui/material";
import * as action from "../../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { makeStyles, createStyles, createMuiTheme } from '@material-ui/core/styles';
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
const theme = createMuiTheme({
    spacing: 4,
});

const useStyles = makeStyles({
    root: {
        background: '#FAF3EC',
        width: 'auto',
        position: 'absolute',
        top: 'calc(50% - 240px)',
        left: 'calc(40% - 160px)',
    },
    formImage : {
        boxShadow: '0 0 10px' ,
        backgroundColor: 'white',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        // border-radius:'15px 15px 15px 15px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    divForm: {
        width: '90%',
    },
    image: {
        width: "90%",
        height: "35%",
        margin: "8px"
    },
    paperRoot: {
        maxWidth: 345,
    }

});
interface props {
    fetchDataProduct: () => void
}
const ModalAddProduct:React.FC<props> = ({fetchDataProduct}) => {
    let ditpatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [postProduct, setPostProduct] = useState({
        product_name: '' as string,
        image: '' as string,
        description: '' as string,
        id_category: '' as any,
    });
    let statusPost:boolean = useSelector((state:any) =>  state.main.status);
    let titlePost:string = useSelector((state:any) => state.main.titleProductPost);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const ClickValue = (event:any) => {
        event.preventDefault();
        let actions = action.dataProduct(postProduct.product_name,postProduct.image,postProduct.description,postProduct.id_category);
        ditpatch(actions);
        notify(titlePost)
        fetchDataProduct();
        console.log("statusPost,",statusPost,titlePost);
    }
    const notify = (titlePost:String) => toast(titlePost);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPostProduct({...postProduct, [event.target.name]: newValue});
    }
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));


    function handleChange(e:any) {
        let url:any = URL.createObjectURL(e.target.files[0]);
        console.log("url",url);
        setPostProduct({...postProduct, image: url});
        console.log(url)
    }
    const classes = useStyles();
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
                    <h2 id="parent-modal-title">Add Product</h2>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" name="" label="id" variant="outlined" disabled />

                        <TextField id="filled-basic" name="product_name" label="Product Name" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField
                            id="outlined-full-width"
                            label="Image Upload"
                            style={{ margin: 8 }}
                            name="image"
                            type="file"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                        />
                        {
                            postProduct.image.length > 0 &&

                                <Card className={classes.paperRoot}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={postProduct.image}
                                            title="Contemplative Reptile"
                                        />
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {/*{text}*/}
                                        </Typography>
                                    </CardContent>
                                </Card>
                        }
                        <TextField id="filled-basic" name="id_category" label="id_category" variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event)}/>
                        <TextField id="filled-basic" name="cteated_at"  variant="outlined" type="date"  />
                        <TextField id="filled-basic" name="update_at"  variant="outlined" type="date" />
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

export default ModalAddProduct;
