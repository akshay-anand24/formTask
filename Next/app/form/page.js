'use client'
import React from 'react'
import Button from '@mui/material/Button'
// import { useFormik } from 'formik';
// import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import style from './style.module.css'
import {TextField,FormControl,InputLabel,Select,MenuItem} from '@mui/material'





const Index = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  let api=async(data)=>{
  let result=await fetch('http://localhost:8000',{
     method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  result=await result.json()
  console.log(result)
  }




  return (
<>
<h1 className={style.h1}>Signup Form</h1>
<form className={style.form} onSubmit={handleSubmit((data) => api(data))}>


<TextField
  id=""
  label="Mobile"
  sx={{width:'100%',mt:5,}}
  {...register('mobile', { pattern: /^[0-9]+$/ ,required:true,minLength:10})}
/>
{errors.mobile && <p> Invalid </p>}
<TextField
  id=""
  label="Email"
  sx={{width:'100%',mt:5,}}
  {...register('email',{pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
  
/>
{errors.email && <p> Invalid </p>}
  
<TextField
  id=""
  label="First Name"
  sx={{width:'100%',mt:5,}}
  {...register('fname',{required:true})}
  
/>
<TextField
  id=""
  label="Last Name"
  sx={{width:'100%',mt:5,}}
  {...register('lname',{required:true})}
  
/>
<FormControl sx={{ mt:5 , minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          label='Gender'
          id="demo-simple-select-autowidth"
          autoWidth
          {...register('gender',{required:true})}
        >
         
          <MenuItem value='M'>Male</MenuItem>
          <MenuItem value='F'>Female</MenuItem>
          <MenuItem value='O'>Other</MenuItem>
        </Select>
      </FormControl>

      <TextField
  id=""
  label="Pan Card"
  sx={{width:'100%',mt:5,}}
  {...register('pancard',{minLength:10,maxLength:10,required:false})}
  
/>
      <TextField
      type='date'
  id=""
  helperText='DoB'
  sx={{width:'100%',mt:5,}}
  name="dob"
  {...register('dob')}

  
  
  
/>

<TextField
  id=""
  label="PinCode"
  sx={{width:'100%',mt:5,}}
  {...register('pincode',{pattern: /^[0-9]+$/,required:true,minLength:6})}
  
/>
{errors.pincode && <p> Invalid </p>}

<FormControl sx={{ mt:5 , minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Profession</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          // onChange={}
          label='profession'
          autoWidth
          {...register('profession',{required:true})}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'salaried'}>Salaried</MenuItem>
          <MenuItem value={'Self Employed'}>Self Employed</MenuItem>
          <MenuItem value={'Student'}>Student</MenuItem>
          <MenuItem value={'Retired'}>Retired</MenuItem>
          <MenuItem value={'Housewife'}>HouseWife</MenuItem>
         
        </Select>
      </FormControl>
<TextField
  id=""
  label="Income"
  sx={{width:'100%',mt:5,}}
  {...register('income',{pattern: /^[0-9]+$/,required:true})}
  
/>
<TextField
  id=""
  label="IMEI"
  sx={{width:'100%',mt:5,}}
  {...register('imei',{required:true})}
  
/>
<TextField
  id=""
  label="Referende Id"
  sx={{width:'100%',mt:5,}}
  {...register('rid',{required:true,minLength:12,maxLength:16})}
  
/>
<FormControl sx={{ mt:5 , minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label='company'
          // value={age}
          // onChange={}
          autoWidth
          {...register('company',{required:true})}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'kreditbee'}>KreditBee</MenuItem>
         
        </Select>
      </FormControl>
      {errors.company&&<p>{errors.company.message}</p>}

      <TextField
  id=""
  label="Campaign"
  sx={{width:'100%',mt:5,}}
  {...register('campaign')}
  
/>
      <TextField
  id=""
  label="Key1"
  sx={{width:'100%',mt:5,}}
  {...register('key1')}
  
/>
      <TextField
  id=""
  label="Key2"
  sx={{width:'100%',mt:5,}}
  {...register('key2')}
  
/>


<Button sx={{mt:5,mb:5}} variant='contained' type='submit'> Submit</Button>

</form>
</>
  )
}

export default Index