import React,{ Component }  from 'react'
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./container.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const container = () => {
    return (
        <Grid className="containerProduct" >
            <Grid container>
                <AppBar className="topbar-Product"> 
                <Grid className="topbar-Product__navbar-wrapper" >
                    <nav className='navbar-first'>
                        <ul className='ulbar-first'>
                            <li>
                                Kênh Người Bán
                            </li>
                            <li>
                                Trở thành Người bán của Shopee
                            </li>
                            <li>
                                Tải ứng dụng
                            </li>
                            <li>
                                Kết Nối
                            </li>
                        </ul>
                    </nav>
                    <div className='navbar-space'>

                    </div>
                    <nav className='navbar-second'>
                        <ul className='ulbar-second'>
                            <li >
                                <NotificationsNoneIcon />
                                <span>Thông Báo</span>
                            </li>
                            <li>
                                Hỗ Trợ
                            </li>
                            <li>
                                Tiếng Việt
                            </li>
                            <li>
                                Đăng ký 
                            </li>
                            <li>
                                Đăng nhập 
                            </li>
                        </ul>
                    </nav>
                </Grid>
                <Grid className="topbar-Product__container-wrapper" >
                        <Grid className="topbar-Product__container-wrapper__1" >
                        
                        </Grid>
                        <Grid className="topbar-Product__container-wrapper__2" container >
                            <Grid className="logo" >
                                    <img src='../../../../src/asset/4a75c3c34aabbc053b98fddba8dba207.jpg' />
                            </Grid>
                            <Grid className="Search" >
                                     <Grid className="Search-input" >
                                        <Grid className="Search-input__Product" >
                                             <form>
                                                 <Grid className='Container__Search'>
                                                    <TextField  id="SearchField" />
                                                 </Grid>
                                                 <Grid>
                                                    <Button variant="contained" id="buttonSearch"><SearchOutlinedIcon /></Button>
                                                 </Grid>

                                             </form>
                                        </Grid>
                                     </Grid>
                                     <Grid className="menu-product" >
                        
                                    </Grid>
                            </Grid>
                            <Grid className="login" >
                        
                            </Grid>
                        </Grid>
                        <Grid className="topbar-Product__container-wrapper__3" >
                        
                        </Grid>
                </Grid>
                </AppBar>
            </Grid>
            <Grid sx={{ flexGrow: 1 }} className="Product">

            </Grid>
        </Grid>
    )
}

export default  container;