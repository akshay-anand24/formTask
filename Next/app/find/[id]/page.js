"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Id = ({ params }) => {
  const [status, setStatus] = useState('');

  const statusHandler = async () => {
    let res = await axios.post(
      " https://lms29api.buynsta.com/main/eligible/kreditbee",
      {
        referenceId: params.id,
      },
      {
        headers: {
          Authorization: " Basic " + process.env.NEXT_PUBLIC_AUTHORIZATION_KEY,
        },
      }
    );
 
    setStatus(res.data);
  };
  
  useEffect(() => {
    statusHandler();
    console.log(status)
  },[]);


  return (
    <div style={{backgroundColor:'#D7E8D8',minHeight:'100vh',margin:0,padding:0,border:'1px solid black'}}>

    <Card className='w-11/12 lg:w-8/12 m-auto p-2 text-center mt-9'  style={{boxShadow:'0 0 7px 2px gray',backgroundColor:'white'}}>
  <CardHeader>
    <CardTitle className='text-green-600 text-center mt-2 mb-2 '>Awesome!
      <aa className="text-2xl text-gray-500 mb-20 mt-5 block">You are doing great so far!!</aa></CardTitle>
    <CardDescription>
       <span className="block">Reference Id: {status.model?status.model.referenceId:null }</span>
    <span className="block">Status Code: {status.model?status.model.statusCode:null }</span>
    <span className="block">Status : {status.model?status.model.status:null}</span></CardDescription>
  </CardHeader>
  <CardContent>
   {status.model&& <p>You are eligible for Credit Limit!!</p>}
  </CardContent>
  <CardFooter className='text-center block'>
    {status.model&&<h1 className='text-4xl text-red-500 p-4 shadow-xl text-center'>Rs. 5,00,000</h1>}
  </CardFooter>
</Card>


    </div>
  );
};

export default Id;
