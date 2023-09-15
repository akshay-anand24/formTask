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
    console.log(res.data)
  };
  
  useEffect(async() => {
    await statusHandler();
  },[]);


  return (
    <div >

    <Card className='w-11/12 lg:w-8/12 m-auto p-2  text-center mt-9'style={{border:'none'}} >
  <CardHeader>
    {status.model&&<CardTitle className='text-green-600 text-center mt-2 mb-2 '>Awesome!
      <div className="text-2xl text-gray-500 mb-20 mt-5 block">You are doing great so far!!</div></CardTitle>}
    <CardDescription>
       <span className="block">Reference Id: {status.model?status.model.referenceId:null }</span>
    <span className="block">Status Code: {status.model?status.model.statusCode:null }</span>
    <span className="block">Status : {status.model?status.model.status:null}</span></CardDescription>
  </CardHeader>
  <CardContent>
   {status.model&& <p>You are eligible for Credit Limit!!</p>}
  </CardContent>
  <CardFooter className='text-center block'>
    {status.model?<h1 className='text-4xl text-red-500 p-4 shadow-xl text-center'>Rs. 5,00,000</h1>:<h1>Sorry!! Reference Id not found</h1>}
  </CardFooter>
</Card>


    </div>
  );
};

export default Id;
