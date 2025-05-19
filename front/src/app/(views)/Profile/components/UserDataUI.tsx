"use client";
import { useAuthContext } from "@/context/authContext";
import React from "react";

const UserDataUI = () => {
    const { user } = useAuthContext();

    if (!user) {
        return null;
    }
    return (
        <>
            <p><strong>Nombre:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Dirección:</strong> {user?.address}</p>
            <p><strong>Teléfono:</strong> {user?.phone}</p>
            <p><strong>Rol:</strong> {user?.role}</p>
        </>
    )
}

export default UserDataUI;