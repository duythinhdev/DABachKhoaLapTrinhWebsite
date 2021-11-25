import React, {useEffect} from 'react';
import NavAdmin from "../navAdmin/navAdmin";
import "./containerAdmin.scss";
import {Grid} from "@mui/material";
import BodyAdmin from "../bodyAdminUser/bodyAdmin";
import {useSelector} from "react-redux";
import BodyAdminProduct from "../bodyAdminProduct/bodyAdminProduct";
import BodyAdminReview from "../bodyAdminReview/bodyAdminReview";
import BodyAdminOption from "../bodyAdminOption/bodyAdminOption";
import BodyAdminOptionOrder from '../bodyAdminOptionOrder/bodyAdminOptionOrder';
import BodyAdminNews from '../bodyAdminNews/bodyAdminNews';
import BodyAdminComment from '../bodyAdminComment/bodyAdminComment';
import BodyAdminCategoryProduct from '../bodyAdminCategoryProduct/bodyAdminCategoryProduct';
import BodyAdminOrder from '../bodyAdminOptionOrder/bodyAdminOptionOrder';
import {useHistory, Redirect, Switch, Route, BrowserRouter as Router} from "react-router-dom";

const ContainerAdmin = () => {
    let IsAdminUser = useSelector((state:any) => state.main.isNavAdminUser) as boolean;
    let IsAdminProduct = useSelector((state:any) => state.main.isNavAdminProduct) as boolean;
    let IsAdminReview = useSelector((state:any) => state.main.isNavAdminReview) as boolean;
    let IsAdminOption = useSelector((state:any) => state.main.isNavAdminOption) as boolean;
    let IsAdminOrder = useSelector((state:any) => state.main.isNavAdminOder) as boolean;
    let IsAdminOptionOrder = useSelector((state:any) => state.main.isNavAdminOptionOrder) as boolean;
    let IsAdminNews= useSelector((state:any) => state.main.isNavAdminNews) as boolean;
    let IsAdminComments = useSelector((state:any) => state.main.isNavAdminComments) as boolean;
    let IsAdminCategoryProduct = useSelector((state:any) => state.main.isNavAdminCategoryProduct) as boolean;

    let isLoginAdmin = useSelector((state: any) => state.login.isLoginAdmin);
    return (
        <Grid className="bodyAdmin" lg={12} xs={12} md={12} container >
            <NavAdmin />
            { IsAdminUser && <BodyAdmin />  }
            { IsAdminProduct  &&  <BodyAdminProduct /> }
            { IsAdminReview  &&  <BodyAdminReview /> }
            { IsAdminOption  &&  <BodyAdminOption />}
            { IsAdminOrder && <BodyAdminOrder  />}
            { IsAdminOptionOrder && <BodyAdminOptionOrder  />}
            { IsAdminNews && <BodyAdminNews  />}
            { IsAdminComments && <BodyAdminComment  />}
            { IsAdminCategoryProduct && <BodyAdminCategoryProduct  />}
        </Grid>
    );
}

export default ContainerAdmin;
