import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import "./bodyAdminNews.scss";
import TableNews from "../TableNews/TableNews";

const BodyAdminNews = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    function showTab()
    {
        let actionProduct = actions.navIsAdminProduct(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        dispatch(actionProduct);
        dispatch(actionOption);
        dispatch(actionOptionOrder);
        dispatch(actionReview);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionUser);
        dispatch(actionOrder);
    }
    useEffect(() => {
        showTab();
    },[])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10} sx={{ display: 'flex',flexDirection: 'column' }}  container>
            <NavBodyAdmin />
            <TableNews />
        </Grid>
    );
}

export default BodyAdminNews;
