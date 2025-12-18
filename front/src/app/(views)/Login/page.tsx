import React from "react";
import LoginFormUI from "./components/LoginFormUI";
import Image from "next/image";

export default function Login() {
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
                        Who are you? <br />
                        You are not logged in yet. <br />
                        <span className="text-redPalette-base">Start now so you can buy whatever you want!</span>
                    </p>
                </div>
                <div className="w-[350px]">
                    <h2 className="text-2xl font-bold text-center text-black mb-4">Log in here</h2>
                    <LoginFormUI />
                </div>
            </div>
        </div>
    )
}