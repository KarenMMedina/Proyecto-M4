import React from "react";
import { IUser, eRole } from "../../../interfaces/index"
import UserDataUI from "./components/UserDataUI";

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
        <div>
            <h2>Aquí está tu cuenta</h2>
            <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <UserDataUI />
            </div>
            <br />
            <h3>Órdenes:</h3>
            <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">

                {!User?.orders?.length ? (
                    <div className="p-4 text-center text-gray-500 dark:text-gray-300">
                        No tienes órdenes
                    </div>
                ) : (
                    User.orders.map((order) => (
                        <div key={order.id}>
                            <p><strong>ID de orden:</strong> {order.id}</p>
                            <p><strong>Fecha:</strong> {order.date}</p>
                            <p><strong>Estado:</strong> {order.status}</p>
                            <p><strong>Productos:</strong></p>
                            <ul>
                                {order.products.map((product, index) => (
                                    <li key={index}>
                                        {product.name} - ${product.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Profile;