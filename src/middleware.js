import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
     console.log('middleware executed for :',request.nextUrl.pathname);
    const publicRoute =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";
    const token = request.cookies.get("token")?.value;
   
    //if the token is present and then route is public redirect to homepage
    if (token && publicRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    //if the token is not present and the route is private, redirect to the login page
    if (!token && !publicRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    //cleanup code here if needed
  }
}

export const config = {
  matcher: ["/", "/register", "/login","/private/:path"],
};
