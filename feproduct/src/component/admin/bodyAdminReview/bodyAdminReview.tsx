import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action";
import {Grid} from "@mui/material";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import TableReview from "../tableReview/tableReview";

const  BodyAdminReview = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    console.log(isMenuleft);
    useEffect(()=>{
        let actionProduct = actions.navIsAdminProduct(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionUser = actions.navIsAdminUser(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionOption);
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
            <TableReview />
        </Grid>
    );
}

export default BodyAdminReview;
