"use client";
import { useAuthContext } from "@/context/authContext";
import usePrivate from "@/hooks/usePrivate";
import React from "react";

const UserDataUI = () => {
    usePrivate();
    const { user } = useAuthContext();

    if (!user) {
        return null;
    }
    return (
        <div className="max-w-md mx-auto bg-cream border rounded-2xl shadow-2xl p-6 space-y-4">
            <p>
                <span className="font-semibold text-redPalette-dark">Nombre:</span>{" "}
                <span className="text-gray-800 dark:text-gray-200">{user.name}</span>
            </p>
            <p>
                <span className="font-semibold text-redPalette-dark">Email:</span>{" "}
                <span className="text-gray-800 dark:text-gray-200">{user.email}</span>
            </p>
            <p>
                <span className="font-semibold text-redPalette-dark">Dirección:</span>{" "}
                <span className="text-gray-800 dark:text-gray-200">{user.address}</span>
            </p>
            <p>
                <span className="font-semibold text-redPalette-dark">Teléfono:</span>{" "}
                <span className="text-gray-800 dark:text-gray-200">{user.phone}</span>
            </p>
            <p>
                <span className="font-semibold text-redPalette-dark">Rol:</span>{" "}
                <span className="text-gray-800 dark:text-gray-200">{user.role}</span>
            </p>
        </div>
    )
}

export default UserDataUI;