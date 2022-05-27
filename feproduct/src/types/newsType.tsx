export type  images = {
    _id: string,
    public_id: string,
    url:string
}
export type News = {
    _id: string,
    title: string,
    is_show: Boolean,
    content: string,
    category_News: string,
    createdAt: string,
    images: Array<images>
}
export type tscategoryNews = {
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    news: Array<News>
    type: string
}
export type tsActionNews = {
    data: Array<tscategoryNews>,
    type: string
}
export interface tsInitialState {
    listNews:  Array<tscategoryNews>,
}