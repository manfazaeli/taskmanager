"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header"
import toast, { Toaster } from "react-hot-toast";
import Spinner  from "@/components/spinner";
//only for test of spinner. in real app we should have global redux to identify spinner
const loading=false;
export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isPublicRoute = pathname === "/login" || pathname === "/register";
  return (

    <html lang="en">
      <body>
        {loading && <Spinner />}
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>

  );
}
