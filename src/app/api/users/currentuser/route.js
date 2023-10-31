import { NextResponse } from "next/server";
import { validateJWTandGetUserId } from "@/helpers/jwtValidation";
import User from "@/models/userModel";
import { connectMongoDb } from "@/config/dbConfig";
connectMongoDb();
export async function GET(request) {
  try {
    const userId = await validateJWTandGetUserId(request);
    const user = await User.findById(userId).select("-password");
   // console.log('test user ',user)
    if (!user) throw new Error("user not found");
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
  }
}
