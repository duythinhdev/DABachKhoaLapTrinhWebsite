import React, {useEffect} from 'react';
import NavAdmin from "../navAdmin/navAdmin";
import "./containerAdmin.scss";
import {Grid} from "@mui/material";
import BodyAdmin from "../bodyAdmin/bodyAdmin";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import BodyAdminProduct from "../bodyAdminProduct/bodyAdminProduct";

const ContainerAdmin = () => {
    let IsAdminUser = useSelector((state:any) => state.main.isNavAdminUser) as boolean;
    let IsAdminProduct = useSelector((state:any) => state.main.isNavAdminProduct) as boolean;
    return (
        <Grid className="bodyAdmin" lg={12} xs={12}  container sx={{ display: 'flex',flexDirection: 'row' }} >
            <NavAdmin />
            {IsAdminUser  && <BodyAdmin />}
            {IsAdminProduct  &&  <BodyAdminProduct />}
        </Grid>
    );
}

export default ContainerAdmin;
