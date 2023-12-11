'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const Header = () => {
    const onLogout = async () => {
        try {
            const response = await axios.post("/api/users/logout");
            toast.success(response.data.message);
            router.push("/login");

        } catch (error) {
        }
    }
    const router = useRouter();
    return (
        <div className=" bg-slate-600 p-3  text-white flex justify-between">

            <h1 className=" font-semibold">This is header </h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={onLogout}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>


        </div>
    );
}

export default Header;