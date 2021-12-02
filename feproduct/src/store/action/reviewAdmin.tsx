import * as actions from "../action/actiontypes";

export const postReview = (count_start:number,content: string, product_id: number,user_id: number) => {
    return {
        type: actions.POST_DATA_REVIEW_ADMIN,
        count_start: count_start,
        content:  content,
        product_id: product_id,
        user_id:  user_id,
    }
}
export const deleteReview = (id:number) => {
    return {
        type: actions.DELETE_DATA_REVIEW_ADMIN,
        id: id,
    }
}
export const updateReview = (id:number,count_start:number,content: string, product_id: number,user_id: number,created_at:string,updated_at:string) => {
    return {
        type: actions.PUT_DATA_REVIEW_ADMIN,
        id: id,
        count_start: count_start,
        content:  content,
        product_id: product_id,
        user_id:  user_id,
        created_at: created_at,
        updated_at: updated_at,
    }
}

