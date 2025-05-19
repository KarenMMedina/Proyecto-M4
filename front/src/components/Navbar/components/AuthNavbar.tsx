"use client";
import React from "react";
import { useAuthContext } from "@/context/authContext";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CartPageUI from "./CartPageUI";

const AuthNav = () => {
    const Router = useRouter();
    const { isAuth, user, resetUserData } = useAuthContext()

    const logoutAction = () => {
        resetUserData();

        setTimeout(() => {
            Router.push("/Login");
            toast.success("Sesion cerrada con exito")
        }, 500)
    }

    return (
        <div className="flex gap-4">
            {isAuth ? (
                <>
                    <Link href="/Profile">
                        <span>{user?.name}</span>
                    </Link>
                    <CartPageUI />
                    <p onClick={logoutAction} role="button">Logout</p>
                </>
            ) : (
                <>
                    <>
                        <Link href="/Register">
                            <span>
                                Register
                            </span>
                        </Link>
                        <Link href="/Login">
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