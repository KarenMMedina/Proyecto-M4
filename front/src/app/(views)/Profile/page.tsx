import React from "react";
import { IUser, eRole } from "../../../interfaces/index"

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
            <p><strong>Nombre:</strong> {User.name}</p>
            <p><strong>Email:</strong> {User.email}</p>
            <p><strong>Dirección:</strong> {User.address}</p>
            <p><strong>Teléfono:</strong> {User.phone}</p>
            <p><strong>Rol:</strong> {User.role}</p>

            <h3>Órdenes:</h3>
            {User.orders.map((order) => (
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
            ))}
        </div>
    )
}

export default Profile;