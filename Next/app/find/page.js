'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';




const page = () => {
    let [value,setValue]=useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      let api=async(data)=>{
       const result=await axios.post('https://lms29api.buynsta.com/main/eligible/kreditbee',{
        referenceId:data.rid
       })
      
        const res=result.data
        console.log(res)
        setValue(JSON.stringify(res))
        rid.value=null
        }

        useEffect(()=>{

        },[])

  return (
    <>
    
    <div className={style.formContainer}>
    <h1>Contact Us</h1>
    <form id={style.myForm} onSubmit={handleSubmit((data) => api(data))}>
      <label htmlFor="rid">RID:</label>
      <input type="text" id="rid" {...register('rid',{required:true,})}/>
      
      <button type='submit'>Submit</button>
    </form>
    {value?value:null}
  </div>


    </>
  )
}

export default page