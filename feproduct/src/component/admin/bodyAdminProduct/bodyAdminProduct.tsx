import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import "./bodyAdminProduct.scss";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import TableProduct from "../tableProduct/TableProduct";

const BodyAdminProduct = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    console.log(isMenuleft);
    useEffect(()=>{
        let actionUser = actions.navIsAdminUser(false);
        dispatch(actionUser);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableProduct />
        </Grid>
    );
}

export default BodyAdminProduct;
