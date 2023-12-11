import Task from "@/models/taskModel";
import { connectMongoDb } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { validateJWTandGetUserId } from "@/helpers/jwtValidation";
connectMongoDb();

export async function GET(request, { params }) {
  //  console.log(parameters)

  try {
    const userId = await validateJWTandGetUserId(request);
    const task = await Task.findOne({ user: userId, _id: params.taskid });
    //console.log(task)
    return NextResponse.json({ data: task }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request, parameters) {

  //   console.log(parameters)
  try {
    const userId = await validateJWTandGetUserId(request);
    const reqBody = await request.json();
    const task = await Task.findOneAndUpdate({ user: userId, _id: parameters.params.taskid }, reqBody);
    //console.log(task)
    return NextResponse.json({ data: task }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  console.log("delete request")
  try {
    console.log("receive tge rewyest ")
    const userid = await validateJWTandGetUserId(request);
    await Task.findOneAndDelete({ user: userid, _id: params.taskid });
    return NextResponse.json({ message: "حذف با موفقیت انجام شد    " }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

