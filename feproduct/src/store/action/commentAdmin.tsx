import * as action from "./actiontypes";


export const postComment = (new_id: number,content: string,user_id: number) =>  {
    return {
        type: action.POST_DATA_COMMENT_ADMIN,
        new_id: new_id,
        content: content,
        user_id: user_id
    }
}
