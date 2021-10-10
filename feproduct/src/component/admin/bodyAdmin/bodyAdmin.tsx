import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import "./bodyAdmin.scss";
import NavBodyAdmin from "../navBodyAdmin/navBodyAdmin";
import * as actions from "../../../store/action";
import {useDispatch, useSelector} from "react-redux";
import TableUser from "../itembodyadmin/TableUser";

function BodyAdmin() {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state: any) => state.main.isMenu);
    useEffect(() => {
        let actionUser = actions.navIsAdminProduct(false);
        dispatch(actionUser);
    }, [])
    return (
        <Grid item className="bodyAdmin" lg={isMenuleft ? 12 : 10} xs={isMenuleft ? 12 : 10}
              sx={{display: 'flex', flexDirection: 'column'}} container>
            <NavBodyAdmin/>
            <TableUser/>
        </Grid>
    );
}

export default BodyAdmin;
