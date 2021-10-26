import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import TableOption from "../TableOption/TableOption";
import "./bodyAdminOption.scss";

const BodyAdminOption = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    console.log(isMenuleft);
    useEffect(()=>{
        let actionUser = actions.navIsAdminUser(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionProduct = actions.navIsAdminProduct(false);
        dispatch(actionUser);
        dispatch(actionProduct);
        dispatch(actionReview);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableOption />
        </Grid>
    );
}

export default BodyAdminOption;
