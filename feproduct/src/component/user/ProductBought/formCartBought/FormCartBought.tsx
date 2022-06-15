import React,{BaseSyntheticEvent,useMemo} from 'react';
import useReactHookForm from "../../hook/useReactHookForm";
import { toast, ToastContainer } from "react-toastify";
import { propsFormCartBougth } from "../../../../types/cartTypes";
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
    let { register,errors,handleSubmit } = useReactHookForm("cart")
    return    <form className="itemorder" onSubmit={handleSubmit((data: any,event:any) => clickValue(data,event))}>
       <div className="itemorder__inforCustomer">
           <div>
               <h1>Đặt Hàng</h1>
           </div>
           <div>
               <h3>1.Thông tin khách hàng</h3>
           </div>
           <div>
              <input type="radio" 
                        value="Male" 
                        {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                        name="gender"
                        onChange={(event) => changeValue(event)}
              /> Anh 
              <div className="invalid-feedback">{errors.gender?.message}</div>
              <input type="radio"
                         value="FeMale" 
                         {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                         name="gender"
                         onChange={(event) => changeValue(event)}

              />Chị
                <div className="invalid-feedback">{errors.gender?.message}</div>
           </div>
           <div className="itemorder__input">
              <input placeholder="Họ Và tên" 
                               {...register('fullName')}
                               name="fullName"
                               className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                               onChange={(event) => changeValue(event)}
                        />
              <div className="invalid-feedback">{errors.fullName ?.message}</div>
              <input  placeholder="email" type="email"
                                {...register('email')}
                                name="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(event) => changeValue(event)}
                        />
              <div className="invalid-feedback">{errors.email?.message}</div>
              <input placeholder="Số Điện Thoại"    
                                {...register('phoneNumber')}
                                name="phoneNumber"
                                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                onChange={(event) => changeValue(event)}
                        />
              <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
              <select>
                {
                    city.map((res,index)=>{
                       return <option>{res.name}</option>
                    })
                }
              </select>
              <textarea placeholder="Địa Chỉ"
                                 {...register('address')}
                                 name="address"
                                 className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                 onChange={(event) => changeValue(event)}
              ></textarea>
              <div className="invalid-feedback">{errors.address?.message}</div>
              <textarea placeholder="Ghi Chú"
                                  {...register('Note')}
                                  name="Note"
                                  className={`form-control ${errors.Note ? 'is-invalid' : ''}`}
                                  onChange={(event) => changeValue(event)}
              ></textarea>
              <div className="invalid-feedback">{errors.Note?.message}</div>
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
               <button onClick={handleSubmit((data: any,event:any) => clickValue(data,event))}>Gửi đơn hàng</button>
           </div>
       </div>
       {isLoadToast && <ToastContainer />}
    </form>
})

export default ListProductBought;