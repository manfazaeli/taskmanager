import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function validateJWTandGetUserId(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) throw new Error("no token found");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData.userId;
    return userId;
  } catch (error) {
    throw new Error(error.message);
  }
}
