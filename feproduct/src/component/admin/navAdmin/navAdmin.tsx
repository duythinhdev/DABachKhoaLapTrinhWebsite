import React from 'react';
import "../navAdmin/navAdmin.scss";
import { Grid } from "@mui/material";
import {
    Link
} from "react-router-dom";
import * as actions from "../../../store/action/index";
import {useDispatch} from "react-redux";
const NavAdmin = () => {
    let dispatch = useDispatch();
    const clickProduct = () => {
        let actionProduct = actions.navIsAdminProduct(true);
        dispatch(actionProduct);
    }
    const clickUser = () => {
        let actionUser = actions.navIsAdminUser(true);
        dispatch(actionUser);
    }

    return (
        <Grid item className="navAdmin" lg={2} xs={2} sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'flex-start'}} container>
            <Grid item className="navAdmin--itemtitle" sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center' }} container>
                   <h3>Admin Woocommerce</h3>
            </Grid>
            <Grid item >
                <Link to="/body/user" onClick={()=>clickUser()} >user</Link>
            </Grid>
            <Grid item >
                <Link to="/body/product"  onClick={()=>clickProduct()}>products</Link>
            </Grid>
            <Grid item>
                products
            </Grid>
        </Grid>
    );
}

export default NavAdmin;
