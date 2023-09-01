import { NextResponse } from "next/server";
import connect from '../../../config'

export async function POST(request) {
    let result=await connect()
    result=await result.findOne(await request.json())
 return NextResponse.json(result)
 }
