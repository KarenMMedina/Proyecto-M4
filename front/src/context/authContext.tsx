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
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const saveUserData = (data: { user: IUser; token: string }) => {
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
        const raw = localStorage?.getItem("user");
        if (!raw) {
            setIsAuth(false);
            return;
        }
        try {
            interface StoredUserData {
                user: IUser;
                token: string;
            }
            const storage: StoredUserData = JSON.parse(raw);

            if (storage.user && storage.token) {
                setUser(storage.user);
                setIsAuth(true);
                setToken(storage.token);
            } else {
                setIsAuth(false);
            }
        } catch {
            setIsAuth(false);
        }
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