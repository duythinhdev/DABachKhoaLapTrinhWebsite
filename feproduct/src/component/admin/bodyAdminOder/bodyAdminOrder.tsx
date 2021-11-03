import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import "./bodyAdminOrder.scss";
import TableOrder from "../TableOrder/TableOrder";

const BodyAdminOrder = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    function showTab()
    {
        let actionUser = actions.navIsAdminUser(false);
        let actionProduct = actions.navIsAdminProduct(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionOption);
        dispatch(actionOptionOrder);
        dispatch(actionReview);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionNews);
        dispatch(actionUser);
    }
    useEffect(() => {
        showTab();
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableOrder />
        </Grid>
    );
}

export default BodyAdminOrder;
