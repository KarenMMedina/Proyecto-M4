import React from "react";
import RegisterFormUI from "./components/RegisterFormUI";

export const Register = () => {
    return (
        <div>
            <br />
            <h2 className="text-2xl font-bold text-center text-black mb-4">Register</h2>
            <div>
                <RegisterFormUI />
            </div>
        </div>
    )
}

export default Register;