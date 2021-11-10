import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import "./bodyAdmin.scss";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import * as actions from "../../../store/action";
import {useDispatch, useSelector} from "react-redux";
import TableUser from "../TableUser/TableUser";

function BodyAdmin() {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state: any) => state.main.isMenu);
    function switchTab()
    {
        let actionProduct = actions.navIsAdminProduct(false);
        let actionReview = actions.navIsAdminReview(false);
        let actionOption = actions.navIsAdminOption(false);
        let actionOptionOrder = actions.navIsAdminOptionOrder(false);
        let actionOrder = actions.navIsAdminOrder(false);
        let actionComment = actions.navIsAdminComment(false);
        let actionCategoryProduct = actions.navIsAdminCategory(false);
        let actionNews = actions.navIsAdminNews(false);
        dispatch(actionProduct);
        dispatch(actionReview);
        dispatch(actionOption);
        dispatch(actionOptionOrder);
        dispatch(actionOrder);
        dispatch(actionComment);
        dispatch(actionCategoryProduct);
        dispatch(actionNews);
    }
    useEffect(() => {
        switchTab()
    }, [])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 6 : 10} sm={3}
              sx={{display: 'flex', flexDirection: 'column'}} container>
            <NavBodyAdmin />
            <TableUser />
        </Grid>
    );
}

export default BodyAdmin;
