import { NextResponse } from "next/server";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { connectMongoDb } from "@/config/dbConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
connectMongoDb();
export async function POST(request) {
  try {
    //  check if user exist in db
    console.log("login comes");
    const { password, email } = await request.json();
    console.log(password, email);
    const userExists = await User.findOne({ email: email });
    if (!userExists) throw new Error("نام کاربری صحیح نیست");
    //check if password is correct
    console.log(userExists.password);
    const passwordsMatched = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!passwordsMatched) throw new Error("رمز عبور صحیح نیست");
    //create a jwt token
    const token = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json(
      { message: " با موفقیت وارد شدید" },
      { status: 200 }
    );
    //attach token to response cookies
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
