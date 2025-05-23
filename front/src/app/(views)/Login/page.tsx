import React from "react";
import LoginFormUI from "./components/LoginFormUI";

export const Login = () => {
    return (
        <div>
            <br />
            <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
            <div>
                <LoginFormUI />
            </div>
        </div>
    )
}

export default Login;