import React from 'react';
import "./producDetail.scss";

let datadetail = [
    {
        title: "Laptop Dell Gaming G15 5511 (P105F006AGR): i7 11800H, RTX 3050 4G, Ram 8G, SSD NVMe 512G, Win11 | OfficeHS21, Led Keyboard, 15.6”FHD 120Hz (Dark Shadow Grey)",
        size: "1920",
        price: "35,900,000₫",
        detail: "CPU: Intel Core i7-11800H 2.3GHz up to 4.6GHz 24MB, 8 nhân 16 luồng\n" +
            "RAM: 8GB (8×1) DDR4 3200MHz (2x SO-DIMM socket, up to 32GB SDRAM)\n" +
            "Ổ cứng: 512GB SSD M.2 PCIe\n" +
            "Card đồ họa: NVIDIA GeForce RTX 3050 4GB GDDR6\n" +
            "Màn hình: 15.6″ FHD (1920 x1080) 120Hz, 250 nits, WVA, Anti-Glare, LED Backlit, Narrow Border Display\n" +
            "Hệ điều hành: Windows 11 Home + Office Home and Student 2021\n" +
            "Pin: 3 Cell 56WHr\n" +
            "Cân nặng: 2.81 kg",
        Address: "Giao đến Q. 8, P. 04, Hồ Chí Minh - Đổi địa chỉ",
        Amount: "1"
    }
]
let dataProduct = [
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    },
    {
        name: "Màn Hình 14 inch",
        price: "2000000",
        review: "4 sao",
    }
]


function ProductDetail() {
    return (
        <div className="Container">
            <div className="ItemDetail">
                <div className="ItemDetailImage">
                    <div className="ItemDetailImageOne">
                        {/*<img src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />*/}
                    </div>
                    <div className="ItemDetailImageTwo">
                    </div>
                </div>
                {
                    datadetail.map((res: any, index: number) => {
                        return <div className="ItemDetailImagPrice">
                            <div className="ItemDetailImageTitle">
                                <h3>{res.title}</h3>
                            </div>
                            <hr/>
                            <div className="ItemDetailImageTitlePrice">
                                <h3>{res.price}</h3>
                            </div>
                            <div className="ItemDetailImageProduct">
                                <h3>{res.detail}</h3>
                            </div>
                            <div className="ItemDetailImagebuttonBuy">
                                <button>Mua hàng</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="ItemRecommand">
                <div className="ItemRecommandTitle">
                    <h3>Sản Phẩm tương tự</h3>
                </div>
                <div className="ItemRecommandProductDetail">
                    {
                        dataProduct?.map((res:any,index:number) => {
                            return <div className="ItemRecommandProductAll">
                                <div className="ItemRecommandProductAll--img">
                                </div>
                                <div className="ItemRecommandProductAll--title">
                                    {res.name}
                                </div>
                                <div className="ItemRecommandProductAll--price">
                                    {res.price}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="ItemInAll">
                <div className="ItemInformation">
                    <div className="ItemInformationTitle">
                        Mô Tả Sản Phẩm
                    </div>
                    <div className="ItemInformationContent">
                        <div className="ItemInformationFromDetail">
                            <span>
                                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                v
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                            </span>
                            <span>
                                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                v
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                                   Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó,
                                tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                                phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ItemInforReview">
                <div className="ItemInforReviewTitle">
                    <h3>Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
                </div>
                <div  className="ItemInforReviewContentStar">
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                    <div className="ItemInforReviewContentStarContainer">
                        <div className="ItemInforReviewContentStarName">

                        </div>
                        <div className="ItemInforReviewContentStarContent">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDetail;
