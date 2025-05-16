"use client";
import React from "react";
import NavItem from "../NavItem";
import { useAuthContext } from "@/context/authContext";

const AuthNav = () => {
    const { isAuth } = useAuthContext();

    return (
        <div className="flex gap-4">
            {isAuth ? (
                <>
                    <NavItem href="/Profile" name="Profile" />
                </>
            ) : (
                <>
                    <NavItem href="/Register" name="Register" />
                    <NavItem href="/Login" name="Login" />
                </>
            )}
        </div>
    );
};

export default AuthNav;