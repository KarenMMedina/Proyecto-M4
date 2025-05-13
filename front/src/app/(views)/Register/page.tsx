import React from "react";

export const Register = () => {
    return (
        <div className="w-[1000px] m-auto border-2 flex justify-center">
            <form className="mx-auto">
                <div className="flex flex-col">
                    <label>Name: </label>
                    <input className="border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Address: </label>
                    <input className="border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Phone: </label>
                    <input className="border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Email: </label>
                    <input className="border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Password: </label>
                    <input className="border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex flex-col">
                    <button className="bg-black text-white rounded-lg px-4 py-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register;