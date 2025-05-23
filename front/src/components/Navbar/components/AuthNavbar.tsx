"use client";
import React from "react";
import { useAuthContext } from "@/context/authContext";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CartPageUI from "./CartPageUI";

const AuthNav = () => {
    const router = useRouter();
    const { isAuth, user, resetUserData } = useAuthContext()

    const logoutAction = () => {
        resetUserData();

        setTimeout(() => {
            router.push("/");
            toast.success("Sesion cerrada con exito")
        }, 500)
    }

    const linkClass = "py-1 px-4 rounded-md bg-white/10 shadow-md text-black transition duration-200 hover:bg-redPalette-soft hover:text-cream";

    if(isAuth === null){
        return <p>Loading...</p>
    }
    
    return (
        <div className="flex gap-4 items-center">
            {isAuth ? (
                <>
                    <Link href="/Profile" className={linkClass}>
                        <span>{user?.name}</span>
                    </Link>
                    <div className={linkClass}>
                        <CartPageUI />
                    </div>
                    <p onClick={logoutAction} role="button" className={linkClass + " cursor-pointer"}>Logout</p>
                </>
            ) : (
                <>
                    <>
                        <Link href="/Register" className={linkClass}>
                            <span>
                                Register
                            </span>
                        </Link>
                        <Link href="/Login" className={linkClass}>
                            <span>
                                Login
                            </span>
                        </Link>
                    </>
                </>
            )}
        </div>
    );
};

export default AuthNav;