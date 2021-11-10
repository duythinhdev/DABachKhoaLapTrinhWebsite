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

