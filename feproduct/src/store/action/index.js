export {
    navIsAdminUser,
    navIsAdminProduct,
    navIsAdminReview,
    navIsAdminOption,
    navIsAdminOptionOrder,
    navIsAdminOrder,
    navIsAdminComment,
    navIsAdminCategory,
    navIsAdminNews,
    isMenuAdmin,
    dataProduct,
    PostProduct,
    putDataProduct
}
from "../action/admin";
export {
    loginAppAdmin,
    statusSignup,
    signup,
    loginAppUser,
    logoutSucceed,
    authSuccess,
    logout,
    checkAuthTimeOut,
    setAuthRedirectPath,
    isTokenauth,
    authSuccessUser,
    logoutUser
}
from "../action/login";

export {
    postOption,
    getOption,
    putOption,
    deleteOption,
}
from "../action/optionAdmin";
export {
    postNews,
    updateNews,
    deleteNews
}
from "../action/newsAdmin";
export {
    postReview,
    deleteReview,
    updateReview
}
from "../action/reviewAdmin";
export {
    postComment,

}
from "../action/commentAdmin";
export {
    postCategory,
    putCategory,
    deleteCategory,
    detailproduct,
    getDetailProduct
}
from "../action/categoryproduct";


export {
    postUser,
    putUser,
    deleteUser
}
from "../action/userAdmin";