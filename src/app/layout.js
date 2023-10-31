"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header"
import toast, { Toaster } from "react-hot-toast";



export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isPublicRoute = pathname === "/login" || pathname === "/register";
  return (

    <html lang="en">
      <body>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>

  );
}
