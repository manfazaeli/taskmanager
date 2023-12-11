import Task from "@/models/taskModel";
import { connectMongoDb } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { validateJWTandGetUserId } from "@/helpers/jwtValidation";
connectMongoDb();

export async function POST(request) {
  try {
    const userId = await validateJWTandGetUserId(request);
    const reqBody = await request.json();
    reqBody.user = userId;
    await Task.create(reqBody);
    return NextResponse.json(
      { message: "وظیفه با موقیت ایجاد گردید" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(request){
  try {
    const userId=await validateJWTandGetUserId(request);
    const tasks=await Task.find({user:userId}).sort({createdAt:-1});
    return NextResponse.json({data:tasks},{status:200});

  } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
  }
}

