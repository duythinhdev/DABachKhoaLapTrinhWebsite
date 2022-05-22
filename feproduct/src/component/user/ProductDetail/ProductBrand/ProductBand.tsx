import React, {useEffect} from 'react';
import Arrow from "../../../../asset/ListProductSlider/arrow.png";
import card1 from "../../../../asset/ListProductSlider/card1.jpg";
import card2 from "../../../../asset/ListProductSlider/card2.jpg";
import card3 from "../../../../asset/ListProductSlider/card3.jpg";
import card4 from "../../../../asset/ListProductSlider/card4.jpg";
import card5 from "../../../../asset/ListProductSlider/card5.jpg";
import card6 from "../../../../asset/ListProductSlider/card6.jpg";
import card7 from "../../../../asset/ListProductSlider/card7.jpg";
import card8 from "../../../../asset/ListProductSlider/card8.jpg";
import card9 from "../../../../asset/ListProductSlider/card9.jpg";
import card10 from "../../../../asset/ListProductSlider/card10.jpg";
import useNxtPre from "../../hook/useNxtPre";

const ListProductSlider  = [
    {
        sale: "50% off",
        img: card1,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card2,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card3,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card4,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card5,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card6,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card7,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card8,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card9,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
    {
        sale: "50% off",
        img: card10,
        card: "add to wishlist",
        productbrand: "brand",
        description: "brand",
        price: "$20",
        actualprice: "$40",
    },
]
const ProductBand = ()  => {
    let { nextAndPre } = useNxtPre('.product-container','.nxt-btn','.pre-btn');
    useEffect(() => {
        nextAndPre();
    },[])
    return (
        <div className="whiteProductList__content">
        <section className="product"> 
        <button className="pre-btn"><img src={Arrow} alt=""  /></button>
        <button className="nxt-btn"><img src={Arrow} alt=""  /></button>
        <div className="product-container">
            {
                ListProductSlider.map((item:any,index: number) => {
                    return    <div className="product-card" key={index}>
                    <div className="product-image">
                        <span className="discount-tag">{item.sale}</span>
                        <img src={item.img} className="product-thumb" alt=""  />
                        <button className="card-btn">{item.card}</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">{item.productbrand}</h2>
                        <p className="product-short-description">{item.description}</p>
                        <span className="price">{item.price}</span><span className="actual-price">{item.actualprice}</span>
                    </div>
                </div>
                })
            }
        </div>
    </section>
        </div>
    );
}

export default ProductBand;