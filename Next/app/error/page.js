'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Conn = () => {
  const router=useRouter()
  const pathname=usePathname()
  const searchparams=useSearchParams()
  // let [data,setData]=useState()
  // const value=router.query
  // if(data!==value)
  // setData(value)

  useEffect(()=>{
    
    console.log(router,pathname,searchparams.get('msg'))
  })

  return (
    <div className="m-auto block text-center">
      <h1 className="text-7xl">Oops!!</h1>
      <h1 >Some Error Occured!! Try Again</h1>
      <br />
      <h3>{searchparams.get('msg')}</h3></div>
  )
}

export default Conn