"use client";
import { IUser } from "@/interfaces";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: IUser | null;
    isAuth: boolean | null;
    token?: string | null;
    saveUserData: (data: { user: IUser; token: string }) => void;
    resetUserData: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isAuth, setIsAuth] = useState<boolean | null>(false);
    const [token, setToken] = useState<string | null>(null);

    const saveUserData = (data: { user: IUser; token: string }) => {
        console.log("data", data);
        setUser(data.user);
        setIsAuth(true);
        setToken(data.token);

        localStorage.setItem("user", JSON.stringify(data));
    };

    const resetUserData = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        localStorage.removeItem("total");

        setUser(null);
        setIsAuth(false);
        setToken(null);
    };

    useEffect(() => {
        const storage = JSON.parse(localStorage?.getItem("user") || "{}");
        console.log("user", storage);

        if (storage === undefined || !Object.keys(storage)?.length) {
            setIsAuth(false);
            return;
        }

        const storageType = storage as any;

        setUser(storageType?.user);
        setIsAuth(true);
        setToken(storageType?.token);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuth,
                token,
                saveUserData,
                resetUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
    }
    return context;
};