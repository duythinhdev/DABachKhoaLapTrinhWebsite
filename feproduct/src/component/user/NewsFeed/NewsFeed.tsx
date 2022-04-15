import React from 'react';
import "./NewsFeed.scss";
import ImageNewsFeed from "../../../asset/NewsFeed/120_8730_top5chuotgaminggiare_mainthumb (1).jpg"

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
    return (
        <div className="ContainerNewsFeed">
            <div className="item-container">
                <div className="title-news">
                    <p>TIN NỔI BẬT TRONG NGÀY</p>
                </div> 
                {
                    ArrayNewFeed.map((res:any,index:number)=>{
                        return  <div className="content-news" key={index}>
                        <div className="content-news__img">
                            <img src={res.img} />
                        </div>
                        <div className="content-news__Posts">
                            <div className="content-news__Posts--title">
                                <p>{res.title}</p>
                                <span>{res.time}</span>
                            </div>     
                            <div className="content-news__Posts--content">
                              <p>{res.content}</p>
                            </div>       
                        </div>      
                    </div>             
                    })
                }  
            </div>
            <div className="item-container">
                <div className="title-news">
                    <p>TIN KHUYẾN MẠI MỚI</p>
                </div>    
                {
                    ArrayNewFeed.map((res:any,index:number)=>{
                        return  <div className="content-news" key={index}>
                        <div className="content-news__img">
                            <img src={res.img} />
                        </div>
                        <div className="content-news__Posts">
                            <div className="content-news__Posts--title">
                                <p>{res.title}</p>
                                <span>{res.time}</span>
                            </div>     
                            <div className="content-news__Posts--content">
                              <p>{res.content}</p>
                            </div>       
                        </div>      
                    </div>             
                    })
                }     
            </div>
        </div>
    );
}

export default NewsFeed;