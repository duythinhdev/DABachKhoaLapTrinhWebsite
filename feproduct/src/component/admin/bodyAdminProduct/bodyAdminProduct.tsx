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
    function switchTab(){
        let actionReview = actions.navIsAdminReview(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionReview);
        dispatch(actionOption);
        dispatch(actionOptionOrder);
        dispatch(actionOrder);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionNews);
        dispatch(actionUser);
    }
    useEffect(()=>{
        switchTab()
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableProduct />
        </Grid>
    );
}

export default BodyAdminProduct;
