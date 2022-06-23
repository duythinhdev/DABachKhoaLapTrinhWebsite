import React from 'react'
import useReactHookForm from "../hook/useReactHookForm";
import { html,propsInput } from "../../../types/cartTypes";
export default function Input ({formData,changeValue,typeHtml = null,register}: propsInput) {
  switch(typeHtml){
        case "input":
            return  <>
                        {formData?.map((res:html,index:number) => {
                        return <>
                                    <input 
                                    placeholder={res.placeholder} 
                                    type={res.type}
                                    {...register(res.name)}
                                    name={res.name}
                                    className={`form-control ${res.error ? 'is-invalid' : ''}`}
                                    onChange={(event) => changeValue(event)}
                                    />
                                    <div className="invalid-feedback">{res.error?.message}</div>
                                </>
                            })}
                    </>
        case "textarea":
            return  <>
                        {formData?.map((res:html,index:number) => {
                            return <>
                                    <textarea placeholder={res.placeholder}
                                        {...register(res.name)}
                                        name={res.name}
                                        className={`form-control ${res.error ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                        ></textarea>
                                        <div className="invalid-feedback">{res.error?.message}</div>
                                    </>
                                })
                        }
                    </>
         case "checkbox":
            return  <>
                        {formData?.map((res:any,index:number) => {
                            return <>
                                    <input type={res.type}
                                            value={res.value} 
                                            {...register(res.name)}  id={res.name} className={`form-check-input ${res.error ? 'is-invalid' : ''}`}
                                            name={res.name}
                                            onChange={(event) => changeValue(event)}
                                            /> {res.text} 
                                            <div className="invalid-feedback">{res.error?.message}</div>
                                    </>
                                })
                        }
                    </>
        default:
            return <></>
          
  }
}
