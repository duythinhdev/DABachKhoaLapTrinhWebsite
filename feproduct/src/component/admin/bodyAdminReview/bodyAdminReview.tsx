import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action";
import {Grid} from "@mui/material";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import TableReview from "../TableReview/TableReview";

const  BodyAdminReview = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    console.log(isMenuleft);
    useEffect(()=>{
        let actionUser = actions.navIsAdminUser(false);
        let actionProduct = actions.navIsAdminProduct(false);
        let actionOption = actions.navIsAdminOption(false);
        dispatch(actionUser);
        dispatch(actionProduct);
        dispatch(actionOption);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableReview />
        </Grid>
    );
}

export default BodyAdminReview;
