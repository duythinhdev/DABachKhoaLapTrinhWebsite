import React,{useEffect} from 'react';
import "./NewsFeed.scss";
import ImageNewsFeed from "../../../asset/NewsFeed/120_8730_top5chuotgaminggiare_mainthumb (1).jpg"
import * as Actions from "../../../store/action/index";
import {useSelector, useDispatch} from 'react-redux';
import { RootStateOrAny} from "react-redux";
import { News,tscategoryNews} from "../../../types/newsType";
const ArrayNewFeed:Array<any> = [
    {
        img: ImageNewsFeed,
        title: "TOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu",
        time: "Time 24:22 25/3/2022",
        content: "Cùng mình đến với những mẫu chuột gaming giá rẻ vô cùng ấn tượng quaTOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu” ngay thôi nào!"
    },
    {
        img: ImageNewsFeed,
        title: "TOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu",
        time: "Time 24:22 25/3/2022",
        content: "Cùng mình đến với những mẫu chuột gaming giá rẻ vô cùng ấn tượng quaTOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu” ngay thôi nào!"
    },
    {
        img: ImageNewsFeed,
        title: "TOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu",
        time: "Time 24:22 25/3/2022",
        content: "Cùng mình đến với những mẫu chuột gaming giá rẻ vô cùng ấn tượng quaTOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu” ngay thôi nào!"
    },
    {
        img: ImageNewsFeed,
        title: "TOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu",
        time: "Time 24:22 25/3/2022",
        content: "Cùng mình đến với những mẫu chuột gaming giá rẻ vô cùng ấn tượng quaTOP 5 Chuột Gaming Giá Rẻ Tốt Nhất 100% Đáng Sở Hữu” ngay thôi nào!"
    },
]

const  NewsFeed = () => {
    let { listNews }  = useSelector((state: RootStateOrAny) =>  state.newsUser);
    let dispatch = useDispatch();
    useEffect(()=> {
        let actions = Actions.getNewsUser(); 
        dispatch(actions)
    },[])
    return (
        <div className="ContainerNewsFeed">
            {listNews && listNews.map((res: tscategoryNews,index: number)=> {
                return  <div className="item-container" key={index}>
                <div className="title-news">
                    <p>{res.name}</p>
                </div>    
                {
                    res.news.map((res: News,index:number)=>{
                        return  <div className="content-news" key={index}>
                        <div className="content-news__img">
                            <img src={res.images[0].url} />
                        </div>
                        <div className="content-news__Posts">
                            <div className="content-news__Posts--title">
                                <p>{res.title}</p>
                                <span>{res.createdAt}</span>
                            </div>     
                            <div className="content-news__Posts--content">
                              <p>{res.content}</p>
                            </div>       
                        </div>      
                    </div>             
                    })
                }     
            </div>
            })}
        </div>
    );
}

export default NewsFeed;