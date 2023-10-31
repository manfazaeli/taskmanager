'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from "next/navigation";

const Register = () => {
    const router=useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""

    })
    const isRegisterButtonDisabled = () => {
        return user.username === "" || user.password === "" || user.email === "";
    }
    const onRegister = async () => {
        try {
            // console.log('domain is:',process.env.DOMAIN)
            setLoading(true);
            const res = await axios.post(`/api/users/register`, user);
            // console.log(res)
            toast.success(res.data.message);
            router.push("/login");
        } catch (error) {
            // console.log('erreor is',error.response.data.error);
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className=" bg-primary flex flex-col justify-center  items-center h-screen">
            <div className="flex flex-col gap-5 bg-white p-5">
                <h1 className=" text-2xl font-bold">Register </h1>
                <hr />
                <div className="flex flex-col">
                    <label htmlFor="username">userName</label>
                    <input type="text" name="username" id="username" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} value={user.username} />

                </div>
                <div className=" flex flex-col">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} value={user.email} />

                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />

                </div>
                <button
                    disabled={isRegisterButtonDisabled()}
                    onClick={onRegister}
                    className={isRegisterButtonDisabled() ? " pointer-events-none bg-gray-200" : " bg-gray-500"}>
                    {loading ? "...در حال ثبت  " : "ثبت "}

                </button>
                <Link href={"/login"}> already have an account? Login</Link>

            </div>
        </div>
    );
}

export default Register;