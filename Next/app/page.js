'use client'

import Link from 'next/link'
import styles from './page.module.css'


// import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form';

import style from './styl.module.css'
// import {TextField,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import { useEffect, useState } from 'react';
import Input from '@/components/ui/input';
import {Button} from '../components/ui/button';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../components/ui/select';





const Index = () => {

    let [rid,setRId]=useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();



  let api=async(data)=>{
  let result=await fetch('/api',{
     method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  result=await result.json()
  console.log(result)
  if(result.length)
  setRId(result[0].rid)
else
  setRId(result.rid)

  reset()
  }


  useEffect(()=>{
    let nw=document.getElementById('nw')
    if(nw)
nw.scrollIntoView({behavior:'smooth'})
  })




  return (
<>
<div className={ ' text-4xl text-center m-10'}>Signup Form</div>
<h3 style={{float:'right'}} ><Link href={'/find'}>Find Status</Link></h3>
<form className={style.form} onSubmit={handleSubmit((data) => {api(data)})}>


<Input
  id="mobile"
  placeholder="Mobile"
  {...register('mobile', { pattern: /^[0-9]+$/ ,required:true,minLength:10})}
/>
{errors.mobile && <p> Invalid </p>}
<Input
  id=""
  placeholder="Email"
  className='mt-7'
  {...register('email',{pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
  
/>
{errors.email && <p> Invalid </p>}
  
<Input
  id=""
  placeholder="First Name"
  className='mt-7'
  {...register('fname',{required:true})}
  
/>
<Input
  id=""
  placeholder="Last Name"
  className='mt-7'

  {...register('lname',{required:true})}
  
/>


<Select
         {...register('gender',{required:true})}
         onValueChange={(e)=>{setValue("gender",e)}}
      >
      <SelectTrigger className="w-[100%] mt-7">
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          <SelectItem value="M">Male</SelectItem>
          <SelectItem value="F">Female</SelectItem>
          <SelectItem value="O">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

      <Input
  id=""
  placeholder="Pan Card"
  className='mt-7'

  {...register('pancard',{minLength:10,maxLength:10,required:true})}
  
/>
      <Input
      type='date'
  id=""
  placeholder='DoB'
  className='mt-7'

  name="dob"
  {...register('dob',{required:true})}

  
  
  
/>

<Input
  id=""
  placeholder="PinCode"
  className='mt-7'

  {...register('pincode',{pattern: /^[0-9]+$/,required:true,minLength:6})}
  
/>
{errors.pincode && <p> Invalid </p>}


<Select
         {...register('profession',{required:true})}
         onValueChange={(e)=>{setValue("profession",e)}}
      >
      <SelectTrigger className="w-[100%] mt-7">
        <SelectValue placeholder="Select a Profession" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="salaried">salaried</SelectItem>
          <SelectItem value="self employed">Self Employed</SelectItem>
          <SelectItem value="student">student</SelectItem>
          <SelectItem value="retired">Retired</SelectItem>
          <SelectItem value="housewife">Housewife</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>


<Input
  id=""
  placeholder="Income"
  className='mt-7'

  {...register('income',{pattern: /^[0-9]+$/,required:true})}
  
/>
<Input
  id=""
  placeholder="IMEI"
  className='mt-7'

  {...register('imei',{required:true})}
/>



<Select
         {...register('company',{required:true})}
         onValueChange={(e)=>{setValue("company",e)}}
      >
      <SelectTrigger className="w-[100%] mt-7">
        <SelectValue placeholder="Select a company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="krazybee">krazybee</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>





{/* <TextField
  id=""
  label="Referende Id"
  sx={{width:'100%',mt:5,}}
  {...register('rid',{required:true,minLength:12,maxLength:16})}
  
/> */}
{/* <FormControl sx={{ mt:5 , minWidth: '100%' }}>
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
      </FormControl> */}
      {errors.company&&<p>{errors.company.message}</p>}

      {/* <TextField
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
  
/> */}


<Button variant='outline' className='my-7 bg-zinc-950 text-white hover:bg-zinc-700 hover:text-white active:bg-red-600'  type='submit'> Submit</Button>

</form>
{rid?<><h1 id='nw' style={{textAlign:'center',color:'green'}}>Your Reference ID is: {rid}</h1><div>Save the Reference ID for future reference</div></>:null}
</>
  )
}

export default Index