import React from 'react';
import useReactHookForm from "../../hook/useReactHookForm";
import { toast, ToastContainer } from "react-toastify";
import { propsFormCartBougth,html } from "../../../../types/cartTypes";
import Input from "../../Input/Input";
let city = [
    {
        id: 1,
        name: "Gia Lai"
    },
    {
        id: 2,
        name: "Vũng Tàu"
    },
    {
        id: 3,
        name: "Lâm Đồng"
    },
    {
        id: 4,
        name: "Dăk Nông"
    },
    {
        id: 5,
        name: "TP.HCM"
    },
    {
        id: 6,
        name: "Cà Mau"
    },
    {
        id: 7,
        name: "Đồng Tháp"
    },
    {
        id: 8,
        name: "Đắc Lắc"
    },
        {
        id: 9,
        name: "Kontum"
    },
    {
        id: 10,
        name: "Đà Nẵng"
    },
]
const  ListProductBought:React.FC<propsFormCartBougth> = React.memo(({changeValue,clickValue,isLoadToast}) => {
    let { register,errors,handleSubmit } = useReactHookForm("cart");
    let formCheck = [
        {
            type: "radio",
            value: "Male",
            name: "gender",
            text: "Anh",
            error: errors.gender
        },
        {
            type: "radio",
            value: "FeMale",
            name: "gender",
            text: "chị",
            error: errors.gender
        }
    ]
    let formInput: Array<html> = [
        {
            type: "text",
            name: "fullName",
            placeholder: "Họ Và tên",
            error: errors.fullName
        },
        {
            type: "email",
            name: "email",
            placeholder: "email",
            error: errors.email
        },
        {
            type: "text",
            name: "phoneNumber",
            placeholder: "Số điện thoại",
            error: errors.phoneNumber
        }
    ]
    let formTextarea: Array<html> = [
        {
            type: "text",
            name: "Note",
            placeholder: "Ghi chú",
            error:  errors.Note
        },
        {
            type: "text",
            name: "address",
            placeholder: "Địa chỉ",
            error: errors.address
        }
    ]
    return  <form className="itemorder" onSubmit={handleSubmit((data:any,event:any) => clickValue(data,event))}>
       <div className="itemorder__inforCustomer">
           <div>
               <h1>Đặt Hàng</h1>
           </div>
           <div>
               <h3>1.Thông tin khách hàng</h3>
           </div>
           <div>
                <Input formData={formCheck} changeValue={changeValue} typeHtml={"checkbox"} register={register} />
           </div>
           <div className="itemorder__input">
                <Input formData={formInput} changeValue={changeValue} typeHtml={"input"}  register={register} />
                <select>
                    {
                        city.map((res,index)=>{
                        return <option key={index}>{res.name}</option>
                        })
                    }
                </select>
                <Input formData={formTextarea} changeValue={changeValue} typeHtml={"textarea"} register={register} />
           </div>
       </div>
       <div className="itemorder__inforCustomer">
           <div>
               <h3>2.Hình thức thanh toán</h3>
           </div>
           <div>
              <input type="radio" /> COD 
              <input type="radio" /> Chuyển Khoản
           </div>
       </div>
       <div className="itemorder__inforCustomer">
           <div>
               <h3>3.Xuất hóa đơn công ty</h3>
           </div>
           <div className="itemorder__input">
               <div className="itemorder__exportBill">
                   <span>Công ty /tổ chức</span>
                   <input  />
               </div>
               <div className="itemorder__exportBill">
                   <span>Địa chỉ:</span>
                   <input  />
               </div>
               <div className="itemorder__exportBill">
                   <span>Mã số thuế</span>
                   <input  />
               </div>
           </div>
       </div>
       <div className="itemorder__inforCustomer">
           <div>
               <h3>4.Hình thức vận chuyển</h3>
           </div>
           <div>
              <input type="checkbox" /> giao hàng bình thường 
           </div>
           <div className="itemorder__SendOrder">
               <button onClick={handleSubmit((data:any,event:any) => clickValue(data,event))}>Gửi đơn hàng</button>
           </div>
       </div>
       {isLoadToast && <ToastContainer />}
    </form>
})

export default ListProductBought;