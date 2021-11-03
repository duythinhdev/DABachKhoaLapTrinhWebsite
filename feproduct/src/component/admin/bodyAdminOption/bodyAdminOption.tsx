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
        let actionProduct = actions.navIsAdminProduct(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionReview);
        dispatch(actionOptionOrder);
        dispatch(actionOrder);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionNews);
        dispatch(actionUser);
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableOption />
        </Grid>
    );
}

export default BodyAdminOption;
