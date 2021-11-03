import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import "./bodyAdminComment.scss";
import TableComment from "../TableComment/TableComment";

const BodyAdminComments = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    function showTab()
    {
        let actionProduct = actions.navIsAdminProduct(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionOption);
        dispatch(actionOptionOrder);
        dispatch(actionOrder);
        dispatch(actionReview);
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
            <TableComment />
        </Grid>
    );
}

export default BodyAdminComments;
