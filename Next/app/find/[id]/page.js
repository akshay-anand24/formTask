'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'




const Id = ({params}) => {
    let [status,setStatus]=useState({})
    const statusHandler=async ()=>{
      let res= await axios.post(" https://lms29api.buynsta.com/main/eligible/kreditbee",{
        referenceId:params.id
      })
      let data=res.data
      if(res.data.code!==status.code)
      setStatus(res.data)
    

      console.log(status)
    }

    useEffect(()=>{
    statusHandler()
          if(status.statusCode=="W001")
        setInterval(()=>{window.location.reload()},5000)
    })
    
    
  return (<>
    <div>Status Code:{status.code}</div>
    <div>Status Code:{status.statusCode}</div>
    <div>Status :{status.status}</div>

    </>
  )
}

export default Id