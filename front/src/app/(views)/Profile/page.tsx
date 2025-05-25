import React from "react";
import { IUser, eRole } from "../../../interfaces/index"
import UserDataUI from "./components/UserDataUI";
import OrdersDetails from "./components/OrdersDetails";

export const Profile = () => {
    const User: IUser = {
        id: 1,
        name: "Lucía Martínez",
        email: "lucia.martinez@example.com",
        address: "Calle Falsa 123, Buenos Aires, Argentina",
        phone: "+54 9 11 1234 5678",
        role: eRole.USER,
        orders: [
            {
                id: 101,
                status: "approved",
                date: "2025-05-01",
                userId: "1",
                products: [
                    {
                        name: "Mouse Gamer",
                        price: 500,
                        image: "mouse.jpg"
                    },
                    {
                        name: "Teclado Mecánico",
                        price: 1000.75,
                        image: "keyboard.jpg"
                    }
                ]
            },
            {
                id: 102,
                status: "pending",
                date: "2025-05-10",
                userId: "1",
                products: [
                    {
                        name: "Monitor 27''",
                        price: 2000,
                        image: "monitor.jpg"
                    },
                    {
                        name: "Cable HDMI",
                        price: 999.99,
                        image: "cable.jpg"
                    }
                ]
            }
        ]
    };

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