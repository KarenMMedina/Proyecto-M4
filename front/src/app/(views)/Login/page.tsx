import React from "react";
import LoginFormUI from "./components/LoginFormUI";
import Image from "next/image";

export const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-redPallete-soft">
            <div className="flex gap-12 items-center bg-cream p-10 rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center w-[300px]">
                    <Image
                        src="/Login.png"
                        alt="Login ilustración"
                        width={300}
                        height={300}
                        className="rounded-2xl object-cover mb-4"
                    />
                    <p className="text-sm text-black font-medium">
                        ¿Quién eres? <br />
                        Aún no te logueaste. <br />
                        <span className="text-redPalette-base">¡Empieza ahora para poder comprar lo que quieras!</span>
                    </p>
                </div>
                <div className="w-[350px]">
                    <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
                    <LoginFormUI />
                </div>
            </div>
        </div>
    )
}

export default Login;