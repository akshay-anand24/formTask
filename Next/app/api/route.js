// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server";
import connect from '../../config'
const crypto = require('crypto');

const generatedStrings = new Set();
const minLength = 12;
const maxLength = 20;

function generateDistinctString() {
    let randomString;
    do {
      randomString = crypto.randomBytes(Math.ceil(minLength / 2)).toString('hex').slice(0, Math.floor(minLength + Math.random() * (maxLength - minLength + 1)));
    } while (generatedStrings.has(randomString));
    
    generatedStrings.add(randomString);
    return randomString;
  }



export async function GET() {
    let data=await connect()
    data=await data.find({}).toArray()
return NextResponse.json(data)
}





export async function PUT(request) {
   let result=await connect()
   let data=await request.json()
   const rid = generateDistinctString()

   data.rid=rid

   let find=await result.find({$or:[{email:data.email},{rid:data.rid}]}).toArray()

   if(find.length==0){
   result=await result.updateOne({rid:data.rid},{$set:data},{upsert:true})
  result.rid=rid;
  }
   else
   result=find
   
return NextResponse.json(result)
}