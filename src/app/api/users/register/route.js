import { NextResponse } from 'next/server';
import User from '@/models/userModel'
import mongoose from "mongoose";
import { connectMongoDb } from  "@/config/dbConfig";
import bcrypt from 'bcrypt'
connectMongoDb();
export async function POST(request) {
  try {
    //  check if user already exist
    console.log('comes post')
    let { username, password, email } = await request.json();
   // console.log(username, password, email)
    const userExists = await User.findOne({ email: email });
    if (userExists)
      throw new Error('کاربر قبلاً ثبت شده است')
    // hash password 
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;
    await User.create({ username, password, email });
    return NextResponse.json({ message: 'کاربر جدید ثبت شد' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

}