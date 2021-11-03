import React, {useEffect} from 'react';
import "../navAdmin/navAdmin.scss";
import {Grid, Box, Paper} from "@mui/material";
import {
    Link
} from "react-router-dom";
import * as actions from "../../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import {menuLeft} from "./menuLeft/menuLeft";
import MenuIcon from "@mui/icons-material/Menu";

const NavAdmin = () => {
    let dispatch = useDispatch();
    let isMenuleft: boolean = useSelector((state:any) =>state.main.isMenu);
    useEffect(()=>{
        let tab = document.getElementsByClassName('tabmenu-left') as HTMLCollectionOf<any>;
        tab[0].style.background = "#FFFFFF";
        tab[0].style.width = "100%";
        tab[0].style.height = "3rem";
        tab[0].style.cursor = "pointer";
    },[])
    const clickTab = (index: number) => {
        let action;
        let tab = document.getElementsByClassName('tabmenu-left') as HTMLCollectionOf<any>;
        switchTab(action, index)
        clickTabColor(tab,index)
    }
    const switchTab = (action:any, index: number) => {
        switch (index) {
            case 0:
                action = actions.navIsAdminUser(true);
                dispatch(action);
                break;
            case 1:
                action = actions.navIsAdminProduct(true);
                dispatch(action);
                break;
            case 2:
                action = actions.navIsAdminReview(true);
                dispatch(action);
                break;
            case 3:
                action = actions.navIsAdminOption(true);
                dispatch(action);
                break;
            case 4:
                action = actions.navIsAdminOptionOrder(true);
                dispatch(action);
                break;
            case 5:
                action = actions.navIsAdminOrder(true);
                dispatch(action);
                break;
            case 6:
                action = actions.navIsAdminComment(true);
                dispatch(action);
                break;
            case 7:
                action = actions.navIsAdminNews(true);
                dispatch(action);
                break;
            case 8:
                action = actions.navIsAdminCategory(true);
                dispatch(action);
                break;
        }
    }
    const clickTabColor = (tab: HTMLCollectionOf<any>,index:number) => {
        for (let i = 0; i < tab.length; i++) {
            tab[i].style.background = "";
            tab[i].style.width = "";
            tab[i].style.height = "";
            tab[i].style.cursor = "";
        }
        tab[index].style.background = "#FFFFFF";
        tab[index].style.width = "100%";
        tab[index].style.height = "3rem";
        tab[index].style.cursor = "pointer";
    }
    const clickHideMenu  =  () => {
        let action = actions.isMenuAdmin(true);
        dispatch(action);
    }
    return (
        <div className={"navAdmin " + (isMenuleft && "active")}
              >
            <Grid container item className="navAdmin--itemtitle"
                  sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} >
                <h3>Admin Woocommerce</h3>
                <MenuIcon  style={{ fontSize: '35px',cursor: 'pointer',margin: '15px' }} onClick={()=>clickHideMenu()} />
            </Grid>
            {
                menuLeft.map((res:any, index:number) => {
                    return <Link className="linkNavbar" to={res.link}> <Grid item sx={{
                        display: 'flex',
                        justifyContent: 'inherit',
                        alignContent: 'center',
                        width: '100%',
                        height: '70px',
                        cursor: 'pointer'
                    }} key={index}
                                 container className="tabmenu-left"

                                 onClick={() => clickTab(index)}
                    >
                        <div className="iconNavbar" >{res.icon}</div>
                        <div className="nameNavbar">{res.name}</div>
                    </Grid>    </Link>
                })
            }
        </div>
    );
}

export default NavAdmin;
