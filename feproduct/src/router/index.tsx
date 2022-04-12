import React, { lazy, Suspense } from "react";
const ContainerAdmin: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/admin/body/containerAdmin"));
const LoginAmin: React.LazyExoticComponent<() => JSX.Element>  = React.lazy(() =>
    import ("../component/admin/login/login"));
const BodyAdminProduct: React.LazyExoticComponent<() => JSX.Element>  = React.lazy(() =>
    import ("../component/admin/bodyAdminProduct/bodyAdminProduct"));
const BodyAdminUser: React.LazyExoticComponent<() => JSX.Element>  = React.lazy(() =>
    import ("../component/admin/bodyAdminUser/bodyAdmin"));
const BodyAdminReview: React.LazyExoticComponent<() => JSX.Element>   = React.lazy(() =>
    import ("../component/admin/bodyAdminReview/bodyAdminReview"));
const BodyAdminOption: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/admin/bodyAdminOption/bodyAdminOption"));
const BodyAdminOptionOrder: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/admin/bodyAdminOptionOrder/bodyAdminOptionOrder"));
const BodyAdminOrder: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/admin/bodyAdminOder/bodyAdminOrder"));
const login: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/user/login/login"));
const register: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/user/register/Register"));
const layoutUser: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../page/layoutUser/layoutUser"));
const News: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/user/layoutNews/layoutNews"));
const layoutCart: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/user/layoutCart/layoutCart"));
const layoutBought: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../component/user/layoutBought/layoutBought"));
const AllTopProduct: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
    import ("../page/AllTopProduct/AllTopProduct"));
const ProductBrand : React.LazyExoticComponent<() => JSX.Element> = React.lazy(() =>
import ("../component/user/ProductDetail/ProductBrand/ProductBand"));

export {
    ContainerAdmin,
    LoginAmin,
    BodyAdminProduct,
    BodyAdminUser,
    BodyAdminReview,
    BodyAdminOption,
    BodyAdminOrder,
    login,
    register,
    layoutUser,
    News,
    layoutCart,
    layoutBought,
    AllTopProduct,
    BodyAdminOptionOrder,
    ProductBrand
}