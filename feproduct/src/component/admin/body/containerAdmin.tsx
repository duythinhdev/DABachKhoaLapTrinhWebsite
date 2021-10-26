import React, {useEffect} from 'react';
import NavAdmin from "../navAdmin/navAdmin";
import "./containerAdmin.scss";
import {Grid} from "@mui/material";
import BodyAdmin from "../bodyAdminUser/bodyAdmin";
import {useDispatch, useSelector} from "react-redux";
import BodyAdminProduct from "../bodyAdminProduct/bodyAdminProduct";
import BodyAdminReview from "../bodyAdminReview/bodyAdminReview";
import BodyAdminOption from "../bodyAdminOption/bodyAdminOption";

const ContainerAdmin = () => {
    let IsAdminUser = useSelector((state:any) => state.main.isNavAdminUser) as boolean;
    let IsAdminProduct = useSelector((state:any) => state.main.isNavAdminProduct) as boolean;
    let IsAdminReview = useSelector((state:any) => state.main.isNavAdminReview) as boolean;
    let IsAdminOption = useSelector((state:any) => state.main.isNavAdminOption) as boolean;
    return (
        <Grid className="bodyAdmin" lg={12} xs={12}  container >
            <NavAdmin />
            { IsAdminUser  && <BodyAdmin /> }
            { IsAdminProduct  &&  <BodyAdminProduct /> }
            { IsAdminReview  &&  <BodyAdminReview /> }
            { IsAdminOption  &&  <BodyAdminOption />}
        </Grid>
    );
}

export default ContainerAdmin;
