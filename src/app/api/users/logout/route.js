import { NextResponse } from "next/server";

export async function POST(){
    try {
        const response=NextResponse.json({message:"از سامانه خارج شدید"},{status:200});
        response.cookies.set("token","");
        return response;
    } catch (error) {
        return  NextResponse.json({message:error.message},{status:200}) 
    }
   
}