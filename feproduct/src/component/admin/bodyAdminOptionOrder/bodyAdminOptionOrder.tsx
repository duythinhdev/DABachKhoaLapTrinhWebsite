import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import "./bodyAdminOptionOrder.scss";
import TableOptionOrder from "../TableOptionOrder/TableOptionOrder";

const BodyAdminOptionOrder = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    function switchTab()
    {
        let actionProduct = actions.navIsAdminProduct(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionReview);
        dispatch(actionUser);
        dispatch(actionOrder);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionNews);
        dispatch(actionOption);
    }
    useEffect(()=>{
        switchTab()
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableOptionOrder />
        </Grid>
    );
}

export default BodyAdminOptionOrder;
