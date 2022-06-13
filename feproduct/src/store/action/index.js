export {
    isMenuAdmin,
    dataProduct,
    PostProduct,
    putDataProduct,
    discoloration
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
    authUser,
    logoutUser,
    forgotPassword,
    forgotPasswordStatus,
    changePasswordUser,
    logoutStatusUser,
    changePasswordStatus
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

export { getNewsUser, dataNewsUser }
from "../action/newsUser.tsx"
export {
    addCartUser,
    removeAllCartUser,
    removeDetailCartUser,
    increaseMinusCart,
    loadTotalMoney
}
from "../action/cartUser.tsx";
export {
    postOrder
}
from "../action/order.tsx";