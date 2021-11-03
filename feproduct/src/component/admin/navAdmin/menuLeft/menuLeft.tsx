import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
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
    },
    {
        icon: <ContentPasteOutlinedIcon />,
        link: "/admin/optionorder",
        name: "Option_Oder"
    },
    {
        icon: <BorderColorSharpIcon />,
        link: "/admin/order",
        name: "order"
    },
    {
        icon: <MessageOutlinedIcon />,
        link: "/admin/comment",
        name: "Comment"
    },
    {
        icon: <LineWeightOutlinedIcon />,
        link: "/admin/news",
        name: "News"
    },
    {
        icon: <CreditCardOutlinedIcon />,
        link: "/admin/categoryproduct",
        name: "Category_Product"
    },


]
