import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import React from "react";

export const menuLeft:any = [
    {
        icon: <GroupIcon/>,
        link: "/admin/user",
        name: "User"
    },
    {
        icon: <ShoppingBagIcon/>,
        link: "/admin/product",
        name: "Product"
    },
    {
        icon: <RateReviewIcon/>,
        link: "/admin/review",
        name: "Reviews"
    },
    {
        icon: <ProductionQuantityLimitsIcon />,
        link: "/admin/option",
        name: "Option"
    }
]
