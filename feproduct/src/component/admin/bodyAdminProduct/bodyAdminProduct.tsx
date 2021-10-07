import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import "./bodyAdminProduct.scss";
import {useDispatch} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";

const BodyAdminProduct = () => {
    let dispatch = useDispatch();
    useEffect(()=>{
        let actionUser = actions.navIsAdminUser(false);
        dispatch(actionUser);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={10} xs={10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            4545456456456
        </Grid>
    );
}

export default BodyAdminProduct;
