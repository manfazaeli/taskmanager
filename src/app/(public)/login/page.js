'use client'
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Login = () => {
    const [loading, setLoadin] = useState(false);
    const router = useRouter()
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""

    })
    const isLoginButtonDisabled = () => {
        return user.email === "" || user.password === "";
    }
    const onLogin = async () => {
        try {
           
            setLoadin(true);
            await axios.post('/api/users/login', user);
            toast.success("با موفقیت وارد شدید");
            router.push("/")

        } catch (error) {
            toast.error(error.response.data.error);

        }
        finally {
            setLoadin(false)
        }
    }
    return (
        <div className="  bg-primary flex flex-col justify-center  items-center h-screen">
            <div className="flex flex-col gap-5 bg-white p-5">
                <h1 className=" text-2xl font-bold">Login </h1>
                <hr />
                
                <div className=" flex flex-col">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} value={user.email} />

                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />

                </div>
                <button disabled={isLoginButtonDisabled()} onClick={onLogin} className={isLoginButtonDisabled() ? " pointer-events-none bg-gray-200" : " bg-gray-500"}>
                    {loading ? "...در حال ورود" : "ورود"}
                </button>
                <Link href={"/register"}> Dont have an account? Register</Link>
            </div>
        </div>
    );
}

export default Login;