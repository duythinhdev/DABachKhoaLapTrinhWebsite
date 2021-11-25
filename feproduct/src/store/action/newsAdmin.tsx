import * as actions from "../action/actiontypes";

export const postNews = (new_id:number,title: string,user_id: number) => {
    return {
        type: actions.POST_DATA_NEWS_ADMIN,
        new_id: new_id,
        title:  title,
        user_id:  user_id,
    }
}
export const updateNews = (id:number,new_id:number,title: string,user_id: number) => {
    return {
        type: actions.PUT_DATA_NEWS_ADMIN,
        id:id,
        new_id: new_id,
        title:  title,
        user_id:  user_id,
    }
}
export const deleteNews = (id:number) => {
    return {
        type: actions.DELETE_DATA_NEWS_ADMIN,
        id: id,
    }
}



