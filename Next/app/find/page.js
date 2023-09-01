'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useForm } from 'react-hook-form';




const page = () => {
    let [value,setValue]=useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      let api=async(data)=>{
        let result=await fetch('/api/find',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        console.log(data)
        result=await result.json()
        result=JSON.stringify(result)
        console.log(result)
        setValue(result)
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