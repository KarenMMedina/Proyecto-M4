import React from "react";
import RegisterFormUI from "./components/RegisterFormUI";
import Image from "next/image";

export const Register = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-redPallete-soft px-8">
      <div className="flex gap-12 items-center bg-cream p-10 rounded-2xl shadow-lg mt-10">
        <div className="w-[300px] h-[400px] overflow-hidden rounded-2xl">
          <Image
            src="/register.jpg"
            alt="Imagen de registro"
            width={300}
            height={400}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="w-[350px]">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Register here, once registered you will be redirected to log in</h2>
          <RegisterFormUI />
        </div>
      </div>
    </div>
    )
}

export default Register;