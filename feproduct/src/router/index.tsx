import React, { lazy, Suspense,MemoExoticComponent } from "react";
const TotalInterface: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../page/TotalInterface/TotalInterface"));
const Register: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../component/user/register/Register"));
const layoutUser: React.LazyExoticComponent<MemoExoticComponent<() => JSX.Element>> = React.lazy(() =>
import ("../page/layoutUser/layoutUser"));
const AllTopProduct: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../page/AllTopProduct/AllTopProduct"));
const ProductBrand : React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../component/user/ProductDetail/ProductBrand/ProductBand"));
const HomeAdmin : React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../page/homeAdmin/Home"));
const newAdmin = React.lazy(() =>
import ("../component/adminNew/new/New"));
const ListAdmin : React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../page/ListAdmin/ListAdmin"));
const InforUser : React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../component/user/InforUser/InforUser"));
export {
    TotalInterface,
    Register,
    layoutUser,
    AllTopProduct,
    ProductBrand,
    HomeAdmin,
    ListAdmin,
    newAdmin,
    InforUser
}