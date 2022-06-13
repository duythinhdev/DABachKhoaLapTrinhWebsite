import React,{useEffect} from 'react';
import "./NewsFeed.scss";
import ImageNewsFeed from "../../../asset/NewsFeed/120_8730_top5chuotgaminggiare_mainthumb (1).jpg"
import * as Actions from "../../../store/action/index";
import {useSelector, useDispatch} from 'react-redux';
import { RootStateOrAny} from "react-redux";
import { News,tscategoryNews} from "../../../types/newsType";
import { Link } from 'react-router-dom';

const  NewsFeed = () => {
    let { listNews }  = useSelector((state: RootStateOrAny) =>  state.newsUser);
    let dispatch = useDispatch();
    useEffect(()=> {
        let actions = Actions.getNewsUser(); 
        dispatch(actions)
    },[])
    let formatter = new Intl.DateTimeFormat("vi-VN", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
    return (
        <div className="ContainerNewsFeed">
            {listNews && listNews?.map((res: tscategoryNews,index: number)=> {
                return  <div className="item-container" key={index}>
                <div className="title-news">
                    <p>{res.name}</p>
                </div>    
                {
                    res.news.map((res: News,index:number)=>{
                        return  <div className="content-news" key={index}>
                        <div className="content-news__img">
                            <img src={res?.images[0]?.url} />
                        </div>
                        <div className="content-news__Posts">
                            <div className="content-news__Posts--title">
                                <Link to={`/system/newsdetail?idnews=${res?._id}`} className="no-underline" ><p>{res?.title}</p></Link>
                                <span>{formatter.format(new Date(res?.createdAt))}</span>
                            </div>     
                            <div className="content-news__Posts--content">
                                <Link to={`/system/newsdetail?idnews=${res?._id}`} className="no-underline" ><p >{res?.content}</p></Link>
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