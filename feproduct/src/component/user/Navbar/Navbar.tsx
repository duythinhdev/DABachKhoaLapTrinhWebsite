import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone';
import React, {useEffect, useState, useMemo} from "react";
import styled from "styled-components";
import {mobile, table} from "../response";
import * as actions from "../../../store/action";
import {useHistory, Link} from 'react-router-dom';
import "./Navbar.scss";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import jwt_decode from "jwt-decode";
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';

const category: Array<any> = [
    {
        name: "Danh Mục sản Phẩm"
    },
    {
        name: "Máy tính - Máy chủ"
    },
    {
        name: "Máy in - TB văn phòng"
    },
    {
        name: "Màn hình Máy Tính"
    },
    {
        name: "Gaming Gear"
    },
    {
        name: "Microsoft Surface"
    },
    {
        name: "TB lưu trữ, nghe nhìn"
    },
    {
        name: "Apple"
    },
    {
        name: "Thiết bị mạng"
    },
    {
        name: "Cooling, Tản nhiệt"
    },
    {
        name: "Phụ kiện Laptop, PC, khác"
    },
    {
        name: "Nhà Thông Minh - Smart Home"
    },
    {
        name: "Buồng chơi Game giả lập"
    },
]

const Navbar = () => {
    let tokenLocalStorage = localStorage.getItem('accessToken') as any | null | undefined | string;
    let token = JSON.parse(tokenLocalStorage);
    let [linkNavBar, setLinkNavBar] = useState(false as boolean);
    let dispatch = useDispatch();
    var decoded = "";
    const [inforToken, setInforToken] = useState({}) as Object | undefined | any;
    useEffect(() => {
        if (token) {
            decoded = jwt_decode(token);
            setInforToken(decoded);
        } else {
            decoded = "";
            setInforToken(decoded);
        }
    }, [])
    const clickNav = () => {
        setLinkNavBar(!linkNavBar)
    }
    let {cart} = useSelector((state: RootStateOrAny) => state.dataUser);
    let {currentUser} = useSelector((state: RootStateOrAny) => state.login);
    // console.log("cartOfUser",cartOfUser);
    return (
        <div className="header">
            <div className="Wrapper">
                <div className="Left">
                    <div className="Logo">
                        <Link className="Logo__Link" to="/user">TiKi
                        </Link>
                    </div>
                </div>
                <div className="Center">
                    <form className="SearchContainer">
                        <select>
                            {
                                category.map((res: any, index: number) => {
                                    <option>2</option>
                                    return <option key={index}>{res.name}</option>
                                })
                            }
                        </select>

                        <div className="Search___two">
                            <input className="Input" placeholder="Search"/>
                            <button className="Button"><Search style={{color: "gray", fontSize: 20}}/>
                                <span>Tìm Kiếm</span></button>
                        </div>
                    </form>
                </div>
                <div className="Right">
                    <div className="MenuItem">
                        <div className="MenuItem__Icon"><LocalPhoneOutlinedIcon/></div>
                        <div className="MenuItem__span">
                            <span>0392349083</span>
                            <span>19000323</span>
                        </div>
                    </div>
                    <div className="MenuItem">
                        <div className="MenuItem__Icon"><LaptopChromebookOutlinedIcon/></div>
                        <div className="MenuItem__span">
                            <span>Xây Dựng</span>
                            <span>Cấu Hình PC</span>
                        </div>
                    </div>
                    <div className="MenuItem">
                        <div className="MenuItem__Icon"><Link className="MenuItem__Link"
                                                              to="/system/account"><AccountCircleOutlinedIcon/></Link>
                        </div>
                        {currentUser?.accessToken ? <div className="MenuItem__span">
                                <Link className="MenuItem__Link" to="/informationuser/list"> {currentUser?.email} </Link>
                            </div>
                            :
                            <div className="MenuItem__span">
                                <Link className="MenuItem__Link" to="/system/account"><span>Đăng nhập </span></Link>
                                <Link className="MenuItem__Link" to="/system/register"> <span>Đăng ký</span></Link>
                            </div>
                        }
                    </div>
                    <div className="MenuItem">
                        <Badge badgeContent={cart && cart.length} color="error">
                            <Link to="/system/cart" className="MenuItem__Link"> <ShoppingCartOutlined/></Link>
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="Menu-children">
                <div className="Menu-children__category">
                    <MenuIcon/>
                    <a href="/user">
                        DANH MỤC SẢN PHẨM
                    </a>
                </div>
                <div className="Menu-children__sub">
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <CheckIcon/>
                            <a href=""> Sản Phẩm đã xem </a>
                        </div>
                    </div>
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <PointOfSaleIcon/>
                            <a href=""> Flash sale </a>
                        </div>
                    </div>
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <PhoneForwardedIcon/>
                            <a href=""> Tư vấn bán hàng </a>
                        </div>
                    </div>
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <CardMembershipIcon/>
                            <a href=""> Hàng chính hãng </a>
                        </div>
                    </div>
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <CardGiftcardIcon/>
                            <a href=""> Đổi trả miễn phí </a>
                        </div>
                    </div>
                    <div className="children-sub">
                        <div className="children-sub__1">
                            <CarRepairIcon/>
                            <a href="">Miễn phí vẫn chuyển</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
