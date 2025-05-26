import React from "react";
import UserDataUI from "./components/UserDataUI";
import OrdersDetails from "./components/OrdersDetails";

export const Profile = () => {
    return (
        <div className="min-h-screen bg-redPallete-soft bg-[url('/Fondo-abajo.png')] bg-no-repeat bg-cover bg-center bg-blend-overlay px-6 py-10">
            <br />
            <h2 className="text-center text-2xl font-bold text-black mb-4">All your information is available in this section.</h2>
            <div>
                <UserDataUI />
            </div>
            <br />
            <h3 className="text-center text-2xl font-bold text-black mb-4">Your orders:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <OrdersDetails />
            </div>
        </div>
    );
}

export default Profile;