import React, {useState} from 'react';
import "./navBodyAdmin.scss";
import {Grid, Paper, Avatar, Stack} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as actions from "../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import ModalLogout from "../ModalLogout/ModalLogout";

const NavBodyAdmin = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state: any) => state.main.isMenu);
    const clickHideMenu = () => {
        let action = actions.isMenuAdmin(false);
        dispatch(action);
    }
    const [logout,setLogout] = useState(false  as boolean);
    const clickModalPerson = () => {
        setLogout(!logout);
    }
    return (
        <Grid className="NavBodyAdmin" item lg={12} xs={12} md={12} container>
            <Paper className="item">
                {isMenuleft && <MenuIcon  className="menuIcon"
                                          onClick={() => clickHideMenu()}/>}
                <Avatar alt="Remy Sharp" className="Avatar" src="/static/images/avatar/1.jpg" onClick={()=>clickModalPerson()} />
                {
                    logout &&  <ModalLogout />
                }
            </Paper>
        </Grid>
    );
}

export default NavBodyAdmin;
