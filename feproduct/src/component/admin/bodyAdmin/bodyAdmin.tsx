import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import "./bodyAdmin.scss";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import Itembodyadmin from "../itembodyadmin/itembodyadmin";
import * as actions from "../../../store/action";
import {useDispatch} from "react-redux";

function BodyAdmin() {
    let dispatch = useDispatch();
    useEffect(()=>{
        let actionUser = actions.navIsAdminProduct(false);
        dispatch(actionUser);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={10} xs={10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <Itembodyadmin />
        </Grid>
    );
}

export default BodyAdmin;
