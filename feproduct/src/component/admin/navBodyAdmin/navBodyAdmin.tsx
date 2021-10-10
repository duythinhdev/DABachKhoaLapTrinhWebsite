import React from 'react';
import "./navBodyAdmin.scss";
import {Grid, Paper, Avatar,Stack} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as actions from "../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
const NavBodyAdmin = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    const clickHideMenu  =  () => {
        let action = actions.isMenuAdmin(false);
        dispatch(action);
    }
    return (
        <Grid className="NavBodyAdmin" item lg={12} xs={12} md={12} container >
                <Paper className="item" >
                    {isMenuleft && <MenuIcon  style={{ fontSize: '35px',cursor: 'pointer' }} onClick={()=>clickHideMenu()} /> }
                    <Stack direction="row" spacing={3}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                </Paper>
        </Grid>
    );
}

export default NavBodyAdmin;
